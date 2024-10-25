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


export default function moreInfo() {
  const navigation = useNavigation();
  const route = useRoute(); // Obtenha o objeto route para acessar os parâmetros
  const scrollViewRef = useRef(null);
  const [imageUrl, setImageUrl] = useState(null);
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
  const myStyles = styles();

  const openLink = (url) => {
    Linking.openURL(url).catch(err => console.error("Erro ao abrir o link:", err));
  };


  const { width, height } = useWindowDimensions(); 
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
    <ScrollView ref={scrollViewRef} style={myStyles.container3}>
       <View style={myStyles.circle}></View>
      <View style={myStyles.giantRet}></View>
      <View style={myStyles.container}>
        <View style={myStyles.navbar}>
          <TouchableOpacity style={myStyles.backButton} onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={width * 0.025} color="white" />
          </TouchableOpacity>

          <View style={myStyles.imageContainer}>
            {imageUrl ? (
              <Image style={myStyles.logoImage} source={{ uri: imageUrl }} />
            ) : (
              <Image style={myStyles.logoImage} source={require('../../assets/defaultImage.png')} />
            )}
          </View>
        </View>

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
                <View style={myStyles.row4}>

                <View style={myStyles.bt1View}>     
  <TouchableOpacity onPress={() => navigation.goBack()}>
    <LinearGradient
      colors={['#271C00', '#FEE7AC']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={myStyles.bt1}
    >
      <Text style={myStyles.textBt}>Voltar</Text>
    </LinearGradient>
  </TouchableOpacity>
  </View>
  <View style={myStyles.bt2View}>   
  <TouchableOpacity onPress={() => navigation.navigate('Impact', { novoJardineteDocId })} >
    <LinearGradient
      colors={['#4C6523', '#99CB47']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={myStyles.bt3}
    >
      <Text style={myStyles.textBt}>Impacto</Text>
      <Text style={myStyles.textBt}>Avaliação</Text>
      
    </LinearGradient>
  </TouchableOpacity>

  </View>

  <View style={myStyles.bt3View}>   
  <TouchableOpacity onPress={() => navigation.navigate('AnaliseFinal', { novoJardineteDocId })} >
    <LinearGradient
      colors={['#4C6523', '#99CB47']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={myStyles.bt2}
    >
      <Text style={myStyles.textBt}>Impacto</Text>
      <Text style={myStyles.textBt}>Resultados</Text>
    </LinearGradient>
  </TouchableOpacity>
  </View>
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

        <View style={myStyles.imageContainer33}>
          <Image source={require('../../assets/araucarias.png')}  style={myStyles.araucarias} />
      </View>

    
<View style={myStyles.navbar2}>
<View style={myStyles.rowNav}>
      <View style={myStyles.column1nav}>
          <View style={myStyles.imageContainer22}>
              <Image source={require('../../assets/UtfprBottom.png')}  style={myStyles.utfprImage3} />
          </View>
          <TouchableOpacity style={myStyles.navBt}>
              <Text style={myStyles.textNav}>Mapa do Site</Text>
          </TouchableOpacity>
          <TouchableOpacity style={myStyles.navBt} onPress={() => navigation.navigate('quemSomos')}>
              <Text style={myStyles.textNav}>Quem somos nós</Text>
          </TouchableOpacity>
      </View>


      <View style={myStyles.column2nav}>
          
          <TouchableOpacity style={myStyles.navBt}>
              <Text style={myStyles.textNav}>Informações</Text>
          </TouchableOpacity>
          <TouchableOpacity style={myStyles.navBt}>
              <Text style={myStyles.textNav}>Termos de uso</Text>
          </TouchableOpacity>
          <TouchableOpacity style={myStyles.navBt}>
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
          
          <View  style={myStyles.navBt}>
              <Text style={myStyles.textNav}>Plataforma digital</Text>
          </View >
          <TouchableOpacity onPress={() => openLink('https://www.instagram.com/amigosdosjardinetes.ct/')}>
          <Image source={require('../../assets/instagramNav.png')}  style={myStyles.instaNav} />
          </TouchableOpacity>
      </View>

    </View>
</View>

      </View>
    </ScrollView>
  );
}
