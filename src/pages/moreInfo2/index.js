import React, { useState, useEffect, useRef } from 'react';
import { View, ScrollView, TouchableOpacity, Text, Image, useWindowDimensions, Linking } from 'react-native';
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
import { LinearGradient } from 'expo-linear-gradient';


export default function moreInfo2() {
  const navigation = useNavigation();
  const route = useRoute(); // Obtenha o objeto route para acessar os parâmetros
  const scrollViewRef = useRef(null);
  const [imageUrl, setImageUrl] = useState(null);
  const myStyles = styles();
  const { width, height } = useWindowDimensions(); 
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
  const novoJardineteDocId = route.params.novoJardineteDocId;
  // Carrega a fonte Lemon
  const [fontsLoaded] = useFonts({
    Lemon: require('../../assets/fonts/Lemon-Regular.ttf'),
  });

  const openLink = (url) => {
    Linking.openURL(url).catch(err => console.error("Erro ao abrir o link:", err));
  };

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
    <ScrollView ref={scrollViewRef} style={myStyles.container3}>
       <View style={myStyles.circle}></View>
      <View style={myStyles.giantRet}></View>
      <View style={myStyles.container}>
        <View style={myStyles.navbar}></View>

        <View style={myStyles.column}>
          <Text style={[myStyles.name, { fontFamily: 'Lemon' }]}>
            {jardineteNome ? jardineteNome : 'Carregando...'}
          </Text>

          <View style={myStyles.retImage}>
            {jardinetePhoto ? (
              <Image
                style={myStyles.jardineteImage}
                source={{ uri: jardinetePhoto }}
              />
            ) : (
              <Text>Imagem não disponível</Text> 
            )}
          </View>

          <View style={myStyles.row1}>
            <View style={myStyles.column1}>
              <Text style={myStyles.title}>Dados do Jardinete</Text>
              <View style={myStyles.ret1}>
  <Text style={myStyles.textData}>
    O nome do jardinete é{' '}
    <Text style={{ color: '#1E6131', fontWeight: 'bold' }}>{jardineteNome}</Text> e fica no bairro{' '}
    <Text style={{ color: '#1E6131', fontWeight: 'bold' }}>{localizacao}</Text>.
    Sua área é de{' '}
    <Text style={{ color: '#1E6131', fontWeight: 'bold' }}>{area}</Text> m². Faz parte da bacia do rio{' '}
    <Text style={{ color: '#1E6131', fontWeight: 'bold' }}>{bacia}</Text>.
    No bairro onde está localizado o jardinete, a proporção de áreas verdes por habitantes é de{' '}
    <Text style={{ color: '#1E6131', fontWeight: 'bold' }}>{percapita}</Text> m²/habitantes; a densidade demográfica é de{' '}
    <Text style={{ color: '#1E6131', fontWeight: 'bold' }}>{densidade}</Text> habitantes/km² e a renda média é de R${' '}
    <Text style={{ color: '#1E6131', fontWeight: 'bold' }}>{renda}</Text> mensais.
    O jardinete{' '}
    <Text style={{ color: '#1E6131', fontWeight: 'bold' }}>{patrimonio}</Text> algum patrimônio ambiental.
  </Text>
</View>
            </View>
            <View style={myStyles.column2}>
              <Text style={myStyles.title}>Região do Jardinete</Text>
              <View style={myStyles.ret2}>
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

          <View style={myStyles.row2}>
            <View style={myStyles.column1}>
              <Text style={myStyles.title}>Itens do Jardinete</Text>
              <View style={myStyles.ret3}>
                <View style={myStyles.row3}>
                  <Image style={[myStyles.inventoryImage, getImageStyle(areia)]} source={require('../../assets/areia.png')} />
                  <Image style={[myStyles.inventoryImage, getImageStyle(feira)]} source={require('../../assets/feira.jpg')} />
                  <Image style={[myStyles.inventoryImage, getImageStyle(lixo)]} source={require('../../assets/lixo.png')} />
                  <Image style={[myStyles.inventoryImage, getImageStyle(caminhada)]} source={require('../../assets/caminhada.png')} />
                  <Image style={[myStyles.inventoryImage, getImageStyle(monumento)]} source={require('../../assets/monumento.png')} />
                </View>
                <View style={myStyles.row3}>
                  <Image style={[myStyles.inventoryImage, getImageStyle(arvore)]} source={require('../../assets/arvore.png')} />
                  <Image style={[myStyles.inventoryImage, getImageStyle(bicicleta)]} source={require('../../assets/bicicleta.png')} />
                  <Image style={[myStyles.inventoryImage, getImageStyle(acessibilidade)]} source={require('../../assets/acessibilidade.png')} />
                  <Image style={[myStyles.inventoryImage, getImageStyle(parque)]} source={require('../../assets/parque.png')} />
                  <Image style={[myStyles.inventoryImage, getImageStyle(flores)]} source={require('../../assets/flores.png')} />
                </View>
                <View style={myStyles.row3}>
                  <Image style={[myStyles.inventoryImage, getImageStyle(animais)]} source={require('../../assets/patinhas.png')} />
                  <Image style={[myStyles.inventoryImage, getImageStyle(banco)]} source={require('../../assets/bancos.png')} />
                  <Image style={[myStyles.inventoryImage, getImageStyle(estica)]} source={require('../../assets/estica.png')} />
                  <Image style={[myStyles.inventoryImage, getImageStyle(pavimentada)]} source={require('../../assets/pavimentada.jpg')} />
                </View>
               

              </View>
            </View>
            <View style={myStyles.column2}>
              <Text style={myStyles.title}>Mapa do Satélite</Text>
              <View style={myStyles.ret2}>
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

      


      </View>
    </ScrollView>
  );
}
