import React, { useEffect, useState} from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore, collection, addDoc, updateDoc, doc, arrayUnion, getDocs } from 'firebase/firestore';
import { styles } from '../Accept/styles';
import markerImage from '../../assets/marker.png';
import { MapContainer, TileLayer, Marker, Popup, Circle, useMapEvents } from 'react-leaflet';
import { userSearchData } from '../../../functions';
import { getStorage } from 'firebase/storage';

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
  iconSize: [32, 32], // Defina o tamanho do ícone conforme necessário
  iconAnchor: [16, 16], // Defina o ponto de ancoragem do ícone
});

function MapWithClick({ onClick }) {
  useMapEvents({
    click(e) {
      onClick(e.latlng);
    },
  });
  return null;
}



export default function Accept() {
  const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);
const storage = getStorage();
  const navigation = useNavigation();
  const [novoJardineteDocId, setNovoJardineteDocId] = useState(null); // Estado para armazenar o ID do documento do jardinete
  const [jardinetes, setJardinetes] = useState([]);
  const [tempMarkerPosition, setTempMarkerPosition] = useState(null);
  const [userName, setUserName] = useState('');
const [wallpaper, setWallpaper] = useState(null);
const [imageUrl, setImageUrl] = useState(null);
const [email, setEmail] = useState('');
const [pracasSeguidas, setPracasSeguidas] = useState([]);


  useEffect(() => {
    const fetchJardinetes = async () => {
      const jardinetesCollection = collection(firestore, 'jardinetes');
      const jardinetesSnapshot = await getDocs(jardinetesCollection);
      const jardinetesData = jardinetesSnapshot.docs.map(doc => {
        return { id: doc.id, ...doc.data() }; // Adicione o ID do documento ao objeto jardim
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
        const novoJardineteDocRef = await addDoc(jardinetesRef, {});

        const userDocRef = doc(firestore, 'users', user.uid);
        await updateDoc(userDocRef, {
          jardinetes: arrayUnion(novoJardineteDocRef.id)
        });

        console.log('Novo jardinete criado com sucesso!');
        setNovoJardineteDocId(novoJardineteDocRef.id); // Defina o ID do novo documento do jardinete no estado
        navigation.navigate('Form', { novoJardineteDocId: novoJardineteDocRef.id }); // Redireciona para a página de Form e passa o ID do novo documento como parâmetro
      } else {
        console.log('Nenhum usuário logado.');
      }
    } catch (error) {
      console.error('Erro ao iniciar o envio do jardinete:', error);
    }
  };

  const voltarParaMenu = () => {
    navigation.navigate('Menu');
  };

  return (
    <View style={styles.container}>

<View style={styles.navbar}>
            <View style={styles.imageContainer}>
              {imageUrl ? (
                <Image
                  style={styles.logoImage}
                  source={{
                    uri: imageUrl,
                  }}
                />
              ) : (
                <Text>Imagem não disponível</Text>
              )}
            </View>
          </View>
    <View style={styles.mapContainer}>
    <MapContainer
        center={[-25.4284, -49.2733]}
        zoom={14}
        style={{ width: '100%', height: '100%', borderRadius: 10 }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {jardinetes.map((jardinete, index) => (
          <React.Fragment key={index}>
            <Marker position={[jardinete.coordenadas[0], jardinete.coordenadas[1]]} icon={customIcon}>
              <Popup>
                <div>
                  <p>{jardinete.nome}</p>
                  <img src={jardinete.jardinetePhoto} alt={`Foto de ${jardinete.nome}`} style={styles.popupImage} />
                  <TouchableOpacity onPress={() => handleDetailsPress(jardinete)} style={styles.popupButton}>
                    <Text style={styles.popupButtonText}>Selecionar Jardinete</Text>
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
              <Popup>Posição temporária</Popup>
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
      </MapContainer>

    </View>
    <View style={styles.title1}>
      <Text style={styles.title}>Você deseja iniciar o envio de um novo jardinete?</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={iniciarEnvioJardinete}>
          <Text style={styles.buttonText}>Iniciar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={voltarParaMenu}>
          <Text style={styles.buttonText}>Voltar</Text>
        </TouchableOpacity>
      </View>
      </View>
    </View>
  );
};
