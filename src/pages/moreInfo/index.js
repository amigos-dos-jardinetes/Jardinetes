import React, { useState, useEffect, useRef } from 'react';
import { View, ScrollView, TouchableOpacity, Text, Image, Dimensions } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { styles } from '../moreInfo/styles.js';
import { Ionicons } from '@expo/vector-icons';
import { getAuth } from 'firebase/auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { userSearchData } from '../../../functions';
import { getStorage } from 'firebase/storage';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'; // Importa os componentes do Leaflet
import L from 'leaflet';
import markerImage from '../../assets/marker.png';
import markerImage2 from '../../assets/redMarker.png';

export default function moreInfo() {
  const navigation = useNavigation();
  const route = useRoute(); // Obtenha o objeto route para acessar os parâmetros
  const scrollViewRef = useRef(null);
  const [imageUrl, setImageUrl] = useState(null);
  const { width } = Dimensions.get('window');
  const auth = getAuth();
  const firestore = getFirestore();
  const storage = getStorage();
  const [jardineteNome, setJardineteNome] = useState(''); // Estado para armazenar o nome do jardinete
  const [jardinetePhoto, setJardinetePhoto] = useState(''); // Estado para armazenar a imagem do jardinete
  const [userName, setUserName] = useState('');
  const [wallpaper, setWallpaper] = useState(null);
  const [email, setEmail] = useState('');
  const [pracasSeguidas, setPracasSeguidas] = useState([]);
  const [mapKey, setMapKey] = useState(0); // Chave para forçar o reload do mapa
  const [MapLatitude, setMapLatitude] = useState(''); 
  const [MapLongitude, setMapLongitude] = useState(''); 
  const [areia, setAreia] = useState('');
  const [feira, setFeira] = useState('');
  const [lixo, setLixo] = useState('');
  const [caminhada, setCaminhada] = useState('');
  const [monumento, setMonumento] = useState('');
  const [arvore, setArvore] = useState('');
  const [bicicleta, setBicicleta] = useState('');
  const [acessibilidade, setAcessibilidade] = useState('');
  const [parque, setParque] = useState('');
  const [flores, setFlores] = useState('');
  const [animais, setAnimais] = useState('');
  const [banco, setBanco] = useState('');
  const [estica, setEstica] = useState('');
  const [pavimentada, setPavimentada] = useState('');
  const [localizacao, setLocalizacao] = useState(''); 
  const [area, setArea] = useState(''); 
  const [bacia, setBacia] = useState(''); 
  const [percapita, setPercapita] = useState('');
  const [densidade, setDensidade] = useState('');
  const [renda, setRenda] = useState('');
  const [patrimonio, setPatrimonio] = useState('');

  // Carrega a fonte Lemon
  const [fontsLoaded] = useFonts({
    Lemon: require('../../assets/fonts/Lemon-Regular.ttf'),
  });

  useEffect(() => {
    const unsubscribe = userSearchData(auth, firestore, storage, navigation, setUserName, setWallpaper, setImageUrl, setEmail, setPracasSeguidas);
  
    const fetchJardineteData = async () => {
      const { novoJardineteDocId } = route.params; // Obtenha o ID do jardinete da navegação
      if (novoJardineteDocId) {
        try {
          const docRef = doc(firestore, 'jardinetes', novoJardineteDocId); // Acessa o documento no Firestore
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            const jardineteData = docSnap.data();
            setJardineteNome(jardineteData.nome); // Define o nome do Jardinente
            setJardinetePhoto(jardineteData.jardinetePhoto); // Define a URL da imagem do Jardinente
            setLocalizacao(jardineteData.localizacao || ''); // Localização
            setArea(jardineteData.area || ''); // Área em metros quadrados
            setBacia(jardineteData.bacia || ''); // Bacia hidrográfica
            setPercapita(jardineteData.percapita || ''); // Área verde per capita
            setDensidade(jardineteData.densidade || ''); // Densidade demográfica
            setRenda(jardineteData.renda || ''); // Renda média
            setPatrimonio(jardineteData.patrimonio || ''); // Patrimônio ambiental
    
            // Verifica se existe o array de coordenadas
            if (jardineteData.coordenadas && jardineteData.coordenadas.length === 2) {
              setMapLatitude(jardineteData.coordenadas[0]); // Latitude a partir do array de coordenadas
              setMapLongitude(jardineteData.coordenadas[1]); // Longitude a partir do array de coordenadas
              setAreia(jardineteData.areia || '');
              setFeira(jardineteData.feira || '');
              setLixo(jardineteData.lixo || '');
              setCaminhada(jardineteData.caminhada || '');
              setMonumento(jardineteData.monumento || '');
              setArvore(jardineteData.arvore || '');
              setBicicleta(jardineteData.bicicleta || '');
              setAcessibilidade(jardineteData.acessibilidade || '');
              setParque(jardineteData.parque || '');
              setFlores(jardineteData.flores || '');
              setAnimais(jardineteData.animais || '');
              setBanco(jardineteData.banco || '');
              setEstica(jardineteData.estica || '');
              setPavimentada(jardineteData.pavimentada || '');
            } else {
              console.log('Coordenadas não disponíveis, usando valores padrão.');
            }
          } else {
            console.log('Documento não encontrado!');
          }
        } catch (error) {
          console.error('Erro ao buscar o documento:', error);
        }
      }
    };
  
    fetchJardineteData(); // Chama a função de busca ao montar o componente
  
    return () => {
      if (unsubscribe && typeof unsubscribe === 'function') {
        unsubscribe();
      }
    };
  }, [route.params]); // Adiciona route.params como dependência para reexecutar se mudar
  
 

  const customIcon = new L.Icon({
    iconUrl: markerImage,
    iconSize: [32, 32],
    iconAnchor: [16, 16], 
});


const customIcon2 = new L.Icon({
    iconUrl: markerImage2,
    iconSize: [32, 32],
    iconAnchor: [16, 16], 
});


function MapCenter({ center }) {
    const map = useMap();
  
    useEffect(() => {
      if (center) {
        map.setView(center, map.getZoom()); // Centraliza o mapa nas coordenadas
      }
    }, [center, map]);
  
    return null;
  }

  const getImageStyle = (value) => {
    return {
      borderWidth: width * 0.00625,
      borderColor: value === 'sim' ? '#1E6131' : 'gray',
      opacity: value === 'sim' ? 1 : 0.5,
    };
  };

  return (
    <ScrollView ref={scrollViewRef} style={styles.container3}>
       <View style={styles.circle}></View>
      <View style={styles.giantRet}></View>
      <View style={styles.container}>
        <View style={styles.navbar}>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={width * 0.025} color="white" />
          </TouchableOpacity>

          <View style={styles.imageContainer}>
            {imageUrl ? (
              <Image style={styles.logoImage} source={{ uri: imageUrl }} />
            ) : (
              <Image style={styles.logoImage} source={require('../../assets/defaultImage.png')} />
            )}
          </View>
        </View>

        <View style={styles.column}>
          <Text style={[styles.name, { fontFamily: 'Lemon' }]}>
            {jardineteNome ? jardineteNome : 'Carregando...'}
          </Text>

          <View style={styles.retImage}>
            {jardinetePhoto ? (
              <Image
                style={styles.jardineteImage}
                source={{ uri: jardinetePhoto }}
              />
            ) : (
              <Text>Imagem não disponível</Text> 
            )}
          </View>

          <View style={styles.row1}>
            <View style={styles.column1}>
              <Text style={styles.title}>Dados do Jardinete</Text>
              <View style={styles.ret1}>
  <Text style={styles.textData}>
    O nome do jardinete é{' '}
    <Text style={{ color: '#1E6131', fontWeight: 'bold' }}>{jardineteNome}</Text> e fica no bairro{' '}
    <Text style={{ color: '#1E6131', fontWeight: 'bold' }}>{localizacao}</Text>.
    Sua área é de{' '}
    <Text style={{ color: '#1E6131', fontWeight: 'bold' }}>{area}</Text> m². Faz parte da bacia do rio{' '}
    <Text style={{ color: '#1E6131', fontWeight: 'bold' }}>{bacia}</Text>.
    No bairro onde está localizado o jardinete, a proporção de áreas verdes por habitantes é de{' '}
    <Text style={{ color: '#1E6131', fontWeight: 'bold' }}>{percapita}</Text> m²/habitantes; a densidade demográfica é de{' '}
    <Text style={{ color: '#1E6131', fontWeight: 'bold' }}>{densidade}</Text> habitantes/km² e a renda média é de R${' '}
    <Text style={{ color: '#1E6131', fontWeight: 'bold' }}>{renda}</Text>.
    O jardinete{' '}
    <Text style={{ color: '#1E6131', fontWeight: 'bold' }}>{patrimonio}</Text> algum patrimônio ambiental.
  </Text>
</View>
            </View>
            <View style={styles.column2}>
              <Text style={styles.title}>Região do Jardinete</Text>
              <View style={styles.ret2}>
              <MapContainer
  key={mapKey}
  center={[MapLatitude, MapLongitude]}
  zoom={16}
  style={{ width: '100%', height: '100%' }}
>
  <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
  <Marker position={[MapLatitude, MapLongitude]} icon={customIcon}>
    <Popup>
      <Text>{jardineteNome}</Text>
    </Popup>
  </Marker>
  
  {/* Componente que centraliza o mapa nas novas coordenadas */}
  <MapCenter center={[MapLatitude, MapLongitude]} />
</MapContainer>
              </View>
            </View>
          </View>

          <View style={styles.row2}>
            <View style={styles.column1}>
              <Text style={styles.title}>Itens do Jardinete</Text>
              <View style={styles.ret3}>
                <View style={styles.row3}>
                  <Image style={[styles.inventoryImage, getImageStyle(areia)]} source={require('../../assets/areia.png')} />
                  <Image style={[styles.inventoryImage, getImageStyle(feira)]} source={require('../../assets/feira.jpg')} />
                  <Image style={[styles.inventoryImage, getImageStyle(lixo)]} source={require('../../assets/lixo.png')} />
                  <Image style={[styles.inventoryImage, getImageStyle(caminhada)]} source={require('../../assets/caminhada.png')} />
                  <Image style={[styles.inventoryImage, getImageStyle(monumento)]} source={require('../../assets/monumento.png')} />
                </View>
                <View style={styles.row3}>
                  <Image style={[styles.inventoryImage, getImageStyle(arvore)]} source={require('../../assets/arvore.png')} />
                  <Image style={[styles.inventoryImage, getImageStyle(bicicleta)]} source={require('../../assets/bicicleta.png')} />
                  <Image style={[styles.inventoryImage, getImageStyle(acessibilidade)]} source={require('../../assets/acessibilidade.png')} />
                  <Image style={[styles.inventoryImage, getImageStyle(parque)]} source={require('../../assets/parque.png')} />
                  <Image style={[styles.inventoryImage, getImageStyle(flores)]} source={require('../../assets/flores.png')} />
                </View>
                <View style={styles.row3}>
                  <Image style={[styles.inventoryImage, getImageStyle(animais)]} source={require('../../assets/patinhas.png')} />
                  <Image style={[styles.inventoryImage, getImageStyle(banco)]} source={require('../../assets/bancos.png')} />
                  <Image style={[styles.inventoryImage, getImageStyle(estica)]} source={require('../../assets/estica.png')} />
                  <Image style={[styles.inventoryImage, getImageStyle(pavimentada)]} source={require('../../assets/pavimentada.jpg')} />
                </View>

              </View>
            </View>
            <View style={styles.column2}>
              <Text style={styles.title}>Mapa do Satélite</Text>
              <View style={styles.ret2}>
              <MapContainer
  key={mapKey}
  center={[MapLatitude, MapLongitude]}
  zoom={32}
  style={{ width: '100%', height: '100%'}}
>
<TileLayer
  url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
  zoomOffset={0} 
  tileSize={256}
/>
  <Marker position={[MapLatitude, MapLongitude]} icon={customIcon2}>
    <Popup>
      <Text>{jardineteNome}</Text>
    </Popup>
  </Marker>
  
  <MapCenter center={[MapLatitude, MapLongitude]} />
</MapContainer>
              </View>
            </View>
          </View>
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
    </ScrollView>
  );
}
