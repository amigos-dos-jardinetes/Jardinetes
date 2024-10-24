import React, { useEffect, useState } from 'react';
import { View, Image, Text, TouchableOpacity, TextInput, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore, collection, addDoc, updateDoc, doc, arrayUnion, getDocs } from 'firebase/firestore';
import { styles } from '../Accept/styles';
import markerImage from '../../assets/marker.png';
import { MapContainer, TileLayer, Marker, Popup, Circle, useMapEvents, useMap } from 'react-leaflet';
import { userSearchData } from '../../../functions';
import { getStorage } from 'firebase/storage';
import { getDistance } from 'geolib';
import { Ionicons } from '@expo/vector-icons';

const firebaseConfig = {
  apiKey: "AIzaSyBe8nNAzDIXpriQ2fqE7QFHAMtETRbiN84",
  authDomain: "amigosdosjardinetes.firebaseapp.com",
  projectId: "amigosdosjardinetes",
  storageBucket: "amigosdosjardinetes.appspot.com",
  messagingSenderId: "381072997535",
  appId: "1:381072997535:web:157abb3a076162a90836aa"
};

const customIcon = new L.Icon({
  iconUrl: markerImage,
  iconSize: [32, 32],
  iconAnchor: [16, 16],
});

const redIcon = new L.Icon({
  iconUrl: require('../../assets/redMarker.png'), // Substitua pelo caminho do seu ícone vermelho
  iconSize: [32, 32],
  iconAnchor: [16, 32],
});

function MapWithClick({ onClick }) {
  useMapEvents({
    click(e) {
      onClick(e.latlng);
    },
  });
  return null;
}

function MapComponent({ center }) {
  const map = useMap();

  useEffect(() => {
    map.setView(center, 14); // 14 é o nível de zoom; ajuste conforme necessário
  }, [center]);

  return null;
}

export default function Accept() {
  const firebaseApp = initializeApp(firebaseConfig);
  const auth = getAuth(firebaseApp);
  const firestore = getFirestore(firebaseApp);
  const storage = getStorage();
  const navigation = useNavigation();
  const [novoJardineteDocId, setNovoJardineteDocId] = useState(null);
  const [jardinetes, setJardinetes] = useState([]);
  const [tempMarkerPosition, setTempMarkerPosition] = useState(null);
  const [userName, setUserName] = useState('');
  const [wallpaper, setWallpaper] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [email, setEmail] = useState('');
  const [pracasSeguidas, setPracasSeguidas] = useState([]);
  const [verificationMessage, setVerificationMessage] = useState('');
  const [isVerificationSuccessful, setIsVerificationSuccessful] = useState(false);
  const [searchText, setSearchText] = useState('');
  const { width, height } = Dimensions.get('window');
  const [mapCenter, setMapCenter] = useState([-25.4284, -49.2733]); // Ponto inicial
  const [showRedMarker, setShowRedMarker] = useState(false);


  useEffect(() => {
    const fetchJardinetes = async () => {
      const jardinetesCollection = collection(firestore, 'jardinetes');
      const jardinetesSnapshot = await getDocs(jardinetesCollection);
      const jardinetesData = jardinetesSnapshot.docs.map(doc => {
        return { id: doc.id, ...doc.data() };
      });
      setJardinetes(jardinetesData);
    };

    fetchJardinetes();
  }, []);

  useEffect(() => {
    const unsubscribe = userSearchData(auth, firestore, storage, navigation, setUserName, setWallpaper, setImageUrl, setEmail, setPracasSeguidas);

    return () => {
      if (unsubscribe && typeof unsubscribe === 'function') {
        unsubscribe();
      }
    };
  }, []);

  const iniciarEnvioJardinete = async () => {
    try {
      const user = auth.currentUser;
      if (user) {
        const jardinetesRef = collection(firestore, 'jardinetes');
        const novoJardineteDocRef = await addDoc(jardinetesRef, {
          coordenadas: [tempMarkerPosition.lat, tempMarkerPosition.lng]
        });

        const userDocRef = doc(firestore, 'users', user.uid);
        await updateDoc(userDocRef, {
          jardinetes: arrayUnion(novoJardineteDocRef.id)
        });

        console.log('Novo jardinete criado com sucesso!');
        setNovoJardineteDocId(novoJardineteDocRef.id);
        navigation.navigate('Form', { novoJardineteDocId: novoJardineteDocRef.id });
      } else {
        console.log('Nenhum usuário logado.');
      }
    } catch (error) {
      console.error('Erro ao iniciar o envio do jardinete:', error);
    }
  };

  const verificarProximidade = () => {
    if (!tempMarkerPosition) {
      setVerificationMessage('Nenhum local selecionado. Por favor, escolha um local no mapa.');
      setIsVerificationSuccessful(false);
      return;
    }

    const isTooClose = jardinetes.some(jardinete => {
      const distance = getDistance(
        { latitude: tempMarkerPosition.lat, longitude: tempMarkerPosition.lng },
        { latitude: jardinete.coordenadas[0], longitude: jardinete.coordenadas[1] }
      );
      return distance < 56.56;
    });

    if (isTooClose) {
      setVerificationMessage('Aqui já existe um Amigo do Jardinete próximo ao local selecionado. Que tal escolher outro?');
      setIsVerificationSuccessful(false);
    } else {
      setVerificationMessage('');
      setIsVerificationSuccessful(true);
    }
  };

  const voltarParaMenu = () => {
    navigation.navigate('Menu');
  };


  const handleSearch = async () => {
    const address = searchText; // `searchText` é o estado onde você armazenou o valor do TextInput
  
    if (!address) {
      console.log('Nenhum endereço inserido.');
      return;
    }
  
    try {
      const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`);
      const data = await response.json();
  
      if (data.length > 0) {
        const { lat, lon } = data[0];
        setMapCenter([parseFloat(lat), parseFloat(lon)]); // Centraliza o mapa nas coordenadas encontradas
        setShowRedMarker(true); // Mostra o marcador vermelho
      } else {
        console.log('Endereço não encontrado.');
        setShowRedMarker(false); // Não mostra o marcador vermelho se o endereço não for encontrado
      }
    } catch (error) {
      console.error('Erro ao buscar o endereço:', error);
      setShowRedMarker(false); // Não mostra o marcador vermelho em caso de erro
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={width * 0.025} color="white" />
        </TouchableOpacity>
        <View style={styles.imageContainer}>
          {imageUrl ? (
            <Image
              style={styles.logoImage}
              source={{
                uri: imageUrl,
              }}
            />
          ) : (
            <Image
            style={styles.logoImage}
            source={require('../../assets/defaultImage.png')} // Ajuste o caminho para a imagem padrão
        />
          )}
        </View>
      </View>

      <View style={styles.instructions}>
          <Text style={styles.title2}>Por favor, selecione o local desejado para verfificar se é possível ser amigo(a) do jardinete!</Text>
      </View>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Digite o endereço"
          value={searchText}
          onChangeText={setSearchText}
        />
 <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
  <Text style={styles.searchButtonText}>Buscar</Text>
</TouchableOpacity>
      </View>


      <View style={styles.mapContainer}>
      <MapContainer
  center={mapCenter}
  zoom={14}
  style={{ width: '100%', height: '100%', borderRadius: 10 }}
>
  <MapComponent center={mapCenter} />
  <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

  {jardinetes.map((jardinete, index) => (
    <React.Fragment key={index}>
      <Marker position={[jardinete.coordenadas[0], jardinete.coordenadas[1]]} icon={customIcon}>
        <Popup>
          <div>
            <p>{jardinete.nome}</p>
            <img src={jardinete.jardinetePhoto} alt={`Foto de ${jardinete.nome}`} style={styles.popupImage} />
            <TouchableOpacity onPress={() => handleDetailsPress(jardinete)} style={styles.popupButton}>
            </TouchableOpacity>
          </div>
        </Popup>
      </Marker>
      <Circle
        center={[jardinete.coordenadas[0], jardinete.coordenadas[1]]}
        radius={28.28}
        color="blue"
        fillColor="blue"
        fillOpacity={0.2}
      />
    </React.Fragment>
  ))}

  <MapWithClick onClick={setTempMarkerPosition} />

  {tempMarkerPosition && (
    <>
      <Marker position={tempMarkerPosition} icon={customIcon}>
      </Marker>
      <Circle
        center={tempMarkerPosition}
        radius={28.28}
        color="red"
        fillColor="red"
        fillOpacity={0.2}
      />
    </>
  )}

  {/* Adicionando o marcador vermelho condicionalmente */}
  {showRedMarker && <Marker position={mapCenter} icon={redIcon} />}
</MapContainer>
      </View>
      <View style={styles.title1}>
        <TouchableOpacity style={styles.button} onPress={verificarProximidade}>
          <Text style={styles.buttonText}>Verificar</Text>
        </TouchableOpacity>
        {verificationMessage ? (
          <Text style={styles.title}>{verificationMessage}</Text>
        ) : (
          isVerificationSuccessful && (
            <>
              <Text style={styles.title}>Continuar com o envio de um novo jardinete?</Text>
              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={iniciarEnvioJardinete}>
                  <Text style={styles.buttonText}>Continuar</Text>
                </TouchableOpacity>
                
              </View>
            </>
          )
        )}
      </View>

      <View style={styles.imageContainer33}>
          <Image source={require('../../assets/araucarias.png')}  style={styles.araucarias} />
      </View>

      <View style={styles.navbar2}>
      <View style={styles.imageContainer22}>
          <Image source={require('../../assets/UtfprBottom.png')}  style={styles.utfprImage} />
      </View>
      </View>
    </View>
  );
}
