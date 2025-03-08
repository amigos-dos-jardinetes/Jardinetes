import React, { useEffect, useState } from 'react';
import { View, Image, Text, TouchableOpacity, TextInput, StyleSheet, useWindowDimensions, Linking } from 'react-native';
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

//Configuração do firebase
const firebaseConfig = {
  apiKey: "AIzaSyBe8nNAzDIXpriQ2fqE7QFHAMtETRbiN84",
  authDomain: "amigosdosjardinetes.firebaseapp.com",
  projectId: "amigosdosjardinetes",
  storageBucket: "amigosdosjardinetes.appspot.com",
  messagingSenderId: "381072997535",
  appId: "1:381072997535:web:157abb3a076162a90836aa"
};

//Icon local mapa
const customIcon = new L.Icon({
  iconUrl: markerImage,
  iconSize: [32, 32],
  iconAnchor: [16, 16],
});
//Icon vermelho de busca
const redIcon = new L.Icon({
  iconUrl: require('../../assets/redMarker.png'), // Substitua pelo caminho do seu ícone vermelho
  iconSize: [32, 32],
  iconAnchor: [16, 32],
});
//Função para pegar o ponto clicado e posteriormente colocar o marcador
function MapWithClick({ onClick }) {
  useMapEvents({
    click(e) {
      onClick(e.latlng);
    },
  });
  return null;
}
//Centraliza o mapa
function MapComponent({ center }) {
  const map = useMap();

  useEffect(() => {
    map.setView(center, 14);
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
  const myStyles = styles();
  const { width, height } = useWindowDimensions(); 
  const [mapCenter, setMapCenter] = useState([-25.4284, -49.2733]); // Ponto inicial
  const [showRedMarker, setShowRedMarker] = useState(false);
  const [markers, setMarkers] = useState([]);
  const [markerPosition, setMarkerPosition] = useState(null); 
  
//Função para redirecionar ao link
  const openLink = (url) => {
    Linking.openURL(url).catch(err => console.error("Erro ao abrir o link:", err));
  };
//Busca de informações dos Jardinetes
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
//Busca de informações do Usuário
  useEffect(() => {
    const unsubscribe = userSearchData(auth, firestore, storage, navigation, setUserName, setWallpaper, setImageUrl, setEmail, setPracasSeguidas);

    return () => {
      if (unsubscribe && typeof unsubscribe === 'function') {
        unsubscribe();
      }
    };
  }, []);

//Inicia a criação do Jardinete e envia ao banco de dados
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
//Verifica se nenhum local foi selecionado para a criação de um Jardinete
  const verificarProximidade = () => {
    if (!tempMarkerPosition) {
      setVerificationMessage('Nenhum local selecionado. Por favor, escolha um local no mapa.');
      setIsVerificationSuccessful(false);
      return;
    }
//Verifica se o local selecionado está dentro da área de outro Jardinete já criado
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
//Redireciona a página de Profile
  const voltarParaMenu = () => {
    navigation.navigate('Menu');
  };
//Região de Curitiba
  const curitibaBounds = {
    minLat: -25.65,
    maxLat: -25.35,
    minLon: -49.45,
    maxLon: -49.15,
  };
  
  // Função para buscar em Curitiba e região
  const searchInCuritiba = async (query) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
          query
        )}&viewbox=${curitibaBounds.minLon},${curitibaBounds.maxLat},${curitibaBounds.maxLon},${curitibaBounds.minLat}&bounded=1`
      );
  
      const data = await response.json();
  
      if (data.length > 0) {
        // Seleciona o primeiro resultado em Curitiba
        const curitibaResult = data[0];
  
        setMapCenter([parseFloat(curitibaResult.lat), parseFloat(curitibaResult.lon)]);
        setMarkers((prevMarkers) => [
          ...prevMarkers,
          {
            lat: parseFloat(curitibaResult.lat),
            lon: parseFloat(curitibaResult.lon),
            displayName: curitibaResult.display_name,
            color: "red",
          },
        ]);
  
        return true;
      } else {
        console.log("Nenhum resultado encontrado em Curitiba.");
        return false;
      }
    } catch (error) {
      console.error("Erro ao buscar em Curitiba:", error);
      return false;
    }
  };
  
  // Função para buscar fora de Curitiba
  const searchOutsideCuritiba = async (query) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}`
      );
  
      const data = await response.json();
  
      if (data.length > 0) {
        const outsideResults = [];
        const seenCoordinates = new Set();
  
        for (const result of data) {
          const coords = `${result.lat},${result.lon}`;
          const isOutsideCuritiba =
            parseFloat(result.lat) < curitibaBounds.minLat ||
            parseFloat(result.lat) > curitibaBounds.maxLat ||
            parseFloat(result.lon) < curitibaBounds.minLon ||
            parseFloat(result.lon) > curitibaBounds.maxLon;
  
          if (isOutsideCuritiba && !seenCoordinates.has(coords)) {
            outsideResults.push(result);
            seenCoordinates.add(coords);
  
            if (outsideResults.length === 4) break; // Limita a 4 resultados fora de Curitiba
          }
        }
  
        setMarkers((prevMarkers) => [
          ...prevMarkers,
          ...outsideResults.map((result) => ({
            lat: parseFloat(result.lat),
            lon: parseFloat(result.lon),
            displayName: result.display_name,
            color: "black",
          })),
        ]);
  
        return true;
      } else {
        console.log("Nenhum resultado encontrado fora de Curitiba.");
        return false;
      }
    } catch (error) {
      console.error("Erro ao buscar fora de Curitiba:", error);
      return false;
    }
  };
  
  const handleSearch = async () => {
    if (!searchText) {
      console.log("Nenhum endereço inserido.");
      return;
    }
  
    setMarkers([]);
  
    const foundInCuritiba = await searchInCuritiba(searchText);
  
    // Se encontrou em Curitiba, continua a busca fora de Curitiba para adicionar os outros 4
    if (foundInCuritiba) {
      setShowRedMarker(true);
      console.log("Resultados encontrados em Curitiba. Buscando fora de Curitiba...");
      await searchOutsideCuritiba(searchText); // Adiciona os marcadores fora de Curitiba
    } else {
      // Se não encontrou em Curitiba, busca fora de Curitiba e ajusta o centro
      console.log("Nenhum resultado em Curitiba. Centralizando no resultado mais próximo fora de Curitiba.");
      const outsideSearch = await searchOutsideCuritiba(searchText);
  
      if (outsideSearch) {
        setShowRedMarker(true);
      }
    }
  };
  

  return (
    <View style={myStyles.container}>
      <View style={myStyles.navbar}>
        <TouchableOpacity style={myStyles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={width * 0.025} color="white" />
        </TouchableOpacity>
        <View style={myStyles.imageContainer}>
          {imageUrl ? (
            <Image
              style={myStyles.logoImage}
              source={{
                uri: imageUrl,
              }}
            />
          ) : (
            <Image
            style={myStyles.logoImage}
            source={require('../../assets/defaultImage.png')}
        />
          )}
        </View>
      </View>

      <View style={myStyles.instructions}>
          <Text style={myStyles.title2}>Por favor, selecione o local desejado para verfificar se é possível ser amigo(a) do jardinete!</Text>
      </View>

      <View style={myStyles.searchContainer}>
        <TextInput
          style={myStyles.searchInput}
          placeholder="Digite o endereço"
          value={searchText}
          onChangeText={setSearchText}
        />
 <TouchableOpacity style={myStyles.searchButton} onPress={handleSearch}>
  <Text style={myStyles.searchButtonText}>Buscar</Text>
</TouchableOpacity>
      </View>


      <View style={myStyles.mapContainer}>
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
            <img src={jardinete.jardinetePhoto} alt={`Foto de ${jardinete.nome}`} style={myStyles.popupImage} />
            <TouchableOpacity onPress={() => handleDetailsPress(jardinete)} style={myStyles.popupButton}>
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
 {showRedMarker && markers.length > 0 && markers.map((marker, index) => (
  <Marker key={index} position={[marker.lat, marker.lon]} icon={redIcon}>
    <Popup>
      {marker.displayName} <br />
      Latitude: {marker.lat}, Longitude: {marker.lon}
    </Popup>
  </Marker>
))}

      </MapContainer>
      </View>
      <View style={myStyles.title1}>
        <TouchableOpacity style={myStyles.button} onPress={verificarProximidade}>
          <Text style={myStyles.buttonText}>Verificar</Text>
        </TouchableOpacity>
        {verificationMessage ? (
          <Text style={myStyles.title}>{verificationMessage}</Text>
        ) : (
          isVerificationSuccessful && (
            <>
              <Text style={myStyles.title}>Continuar com o envio de um novo jardinete?</Text>
              <View style={myStyles.buttonContainer}>
                <TouchableOpacity style={myStyles.button} onPress={iniciarEnvioJardinete}>
                  <Text style={myStyles.buttonText}>Continuar</Text>
                </TouchableOpacity>
                
              </View>
            </>
          )
        )}
      </View>

      <View style={myStyles.imageContainer33}>
          <Image source={require('../../assets/araucarias.png')}  style={myStyles.araucarias} />
      </View>

    
<View style={myStyles.navbar2}>
<View style={myStyles.rowNav}>
      <View style={myStyles.column1nav}>
          <View style={myStyles.imageContainer22}>
              <Image source={require('../../assets/UtfprBottom.png')}  style={myStyles.utfprImage3} />
          </View>
       
          <TouchableOpacity style={myStyles.navBt} onPress={() => navigation.navigate('quemSomos')}>
              <Text style={myStyles.textNav}>Quem somos nós</Text>
          </TouchableOpacity>
      </View>


      <View style={myStyles.column2nav}>
          
         
          <TouchableOpacity style={myStyles.navBt}>
              <Text style={myStyles.textNav}>Termos de uso</Text>
          </TouchableOpacity>
          <TouchableOpacity style={myStyles.navBt} onPress={() => openLink('https://www.utfpr.edu.br/acesso-a-informacao/lgpd')}>
              <Text style={myStyles.textNav}>LGPD</Text>
          </TouchableOpacity>
      </View>


      <View style={myStyles.column3nav}>
          
          <TouchableOpacity style={myStyles.navBt} onPress={() => navigation.navigate('Contato')}>
              <Text style={myStyles.textNav}>Contato</Text>
          </TouchableOpacity>
          <TouchableOpacity style={myStyles.navBt}>
              <Text style={myStyles.textNav}>Fale conosco</Text>
          </TouchableOpacity>
       
      </View>

      <View style={myStyles.column4nav}>
          
          <View style={myStyles.navBt}>
              <Text style={myStyles.textNav}>Plataforma digital</Text>
          </View >
          <TouchableOpacity onPress={() => openLink('https://www.instagram.com/amigosdosjardinetes.ct/')}>
          <Image source={require('../../assets/instagramNav.png')}  style={myStyles.instaNav} />
          </TouchableOpacity>
      </View>

    </View>
</View>
    </View>
  );
}
