import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, ImageBackground, StatusBar, ScrollView, RefreshControl, FlatList, useWindowDimensions, Modal, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getAuth } from 'firebase/auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';
import { handleLogout, userSearchData } from '../../../functions';
import { styles } from '../Menu/styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import { checkLoggedInUser } from '../../../functions';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import markerImage from '../../assets/marker.png';
import L from 'leaflet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faCog } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

export default function Menu() {
    const auth = getAuth();
    const firestore = getFirestore();
    const storage = getStorage();
    const navigation = useNavigation();
    const [userName, setUserName] = useState('');
    const [wallpaper, setWallpaper] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);
    const [email, setEmail] = useState('');
    const [pracasSeguidas, setPracasSeguidas] = useState([]);
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [mapKey, setMapKey] = useState(1);
    const [mapRefresh, setMapRefresh] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedMarker, setSelectedMarker] = useState(null);
    const [selectedPlaceCoordinates, setSelectedPlaceCoordinates] = useState(null);
    const [MapLatitude, setMapLatitude] = useState(null);
    const [MapLongitude, setMapLongitude] = useState(null);
    const myStyles = styles();
    const initialLatitude = -25.4296;
const initialLongitude = -49.2719;
const currentLatitude = MapLatitude !== null ? MapLatitude : initialLatitude;
const currentLongitude = MapLongitude !== null ? MapLongitude : initialLongitude;
    const { width, height } = useWindowDimensions(); 
    const openSairModal = () => {
        setModalVisible(true);
      };
    //Marcadores posição do mapa
    const markers = [
        { position: [-25.43925924548977, -49.268820908320194], name: 'Local 1', image: 'URL 1' },
        { position: [/* ... */], name: 'Local 2', image: 'URL 2' },
    ];

    {
        markers.map((marker, index) => (
            <Marker
                key={index}
                position={marker.position}
                icon={customIcon}
                eventHandlers={{
                    click: () => setSelectedMarker(marker),
                }}
            >
                
            </Marker>
        ))
    }
    //Redireciona ao link
    const openLink = (url) => {
        Linking.openURL(url).catch(err => console.error("Erro ao abrir o link:", err));
      };

    WebBrowser.maybeCompleteAuthSession();
    //Antiga função de testes do carrossel
    const carouselData = [
        { image: 'https://wallpapers.com/images/hd/cherry-blossoms-anime-scenery-8xz0tezp5w5goyle.jpg' },
        { image: 'https://www.shutterstock.com/image-vector/enchanting-anime-landscape-mistcovered-mountain-600nw-2301778699.jpg' },
        { image: 'https://www.melhoresdestinos.com.br/wp-content/uploads/2019/02/passagens-aereas-curitiba-capa2019-02.jpg' },
    ];

    const [carouselIndex, setCarouselIndex] = useState(0);
    //Avança no carrossel
    const handleNextClick = () => {
        setCarouselIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
    };
    //Volta no carrossel
    const handlePrevClick = () => {
        setCarouselIndex((prevIndex) => (prevIndex - 1 + carouselData.length) % carouselData.length);
    };
    //Função de renderização do carrossel
    const renderCarouselItem = (item, index) => (
        <div key={index} style={myStyles.carouselItem1}>
            <img
                src={item.image}
                alt={`Image ${item.image}`}
                style={myStyles.carouselImage1}
            />
        </div>
    );
    //Emails autorizados a receber a função de administrador
    const authorizedEmails = [
        "eduardo@gmail.com",
        "simonecrocetti@professores.utfpr.edu.br",

    ];
    
    const isAuthorized = authorizedEmails.includes(email);
    //Configução de autenticação
    const [request, response, promptAsync] = Google.useAuthRequest({
        iosClientId: '<IOS_CLIENT_ID>',
        androidClientId: '381072997535-926po31tefpm6knqfml8si4ki83hb9rj.apps.googleusercontent.com',
        webClientId: '381072997535-ab8js7tf8aie1s2lplbkae4uummgpll1.apps.googleusercontent.com',
        expoClientId: '381072997535-dduhtvsr4tt4apo5orl1pjhsccmom6mv.apps.googleusercontent.com',
    }, {
        projectNameForProxy: "@jardinetes/Amigos_dos_Jardinetes",
        redirectUri: "https://auth.expo.io/@jardinetes/Amigos_dos_Jardinetes/start"
    });

    const [userInfo, setUserInfo] = useState(false);
    //Antiga tentativa das diferenças da página de profile a partir do login com o google
    async function handleSignINWithGoogle() {
        try {
            const user = await AsyncStorage.getItem('@user');
            if (!user) {
                if (response?.type === 'success' && response.authentication?.accessToken) {
                    const userInfo = await getUserInfo(response.authentication.accessToken);
                    await AsyncStorage.setItem('@user', JSON.stringify(userInfo));
                    setUserInfo(userInfo);
                    navigation.navigate('Menu');
                }
            } else {
                setUserInfo(JSON.parse(user));
                navigation.navigate('Menu');
            }
        } catch (error) {
            console.error('Error during Google login:', error);
        }
    }
    const handleLogoutFunc = async () => {
        await AsyncStorage.removeItem('@user');
        handleLogout(auth, navigation);
    };


    React.useEffect(() => {
        handleSignINWithGoogle();
    }, [response]);

    //Busca as informações do usuário
    useEffect(() => {
        const unsubscribe = userSearchData(auth, firestore, storage, navigation, setUserName, setWallpaper, setImageUrl, setEmail, setPracasSeguidas);

        
        return () => {
            if (unsubscribe && typeof unsubscribe === 'function') {
                unsubscribe();
            }
        };
    }, []);

    //Ícone local
    const customIcon = new L.Icon({
        iconUrl: markerImage,
        iconSize: [32, 32],
        iconAnchor: [16, 16],
    });




    //Antiga função de praças seguidas que foi modificada para buscar os jardinetes do usuário
    useEffect(() => {
        const fetchPracasSeguidas = async () => {
            try {
                const user = auth.currentUser;

                if (user) {
                    const userDoc = await getDoc(doc(firestore, 'users', user.uid));
                    if (userDoc.exists()) {
                        const userPracasSeguidas = userDoc.data().jardinetes || [];
                        setPracasSeguidas(userPracasSeguidas);
                    }
                } else {
                    console.error('Usuário não autenticado.');
                }
            } catch (error) {
                console.error('Erro ao obter as praças seguidas:', error);
            }
        };

        fetchPracasSeguidas();
    }, []);

    const [pracasData, setPracasData] = useState([]);
    //Busca os dados dos Jardinetes seguidos pelo usuário
    useEffect(() => {
        const fetchPracasData = async () => {
            try {
                const promises = pracasSeguidas.map(async (pracaId) => {
                    const pracaDoc = await getDoc(doc(firestore, 'jardinetes', pracaId));
                    if (pracaDoc.exists()) {
                        const pracaData = pracaDoc.data();
                        return { id: pracaId, nome: pracaData.nome, jardinetePhoto: pracaData.jardinetePhoto, coordenadas: pracaData.coordenadas };


                    }
                    return null;
                });

                const results = await Promise.all(promises);

                setPracasData(results.filter(Boolean));
            } catch (error) {
                console.error('Erro ao obter dados das praças:', error);
            }
        };

        fetchPracasData();
    }, [pracasSeguidas]);
    //Dados passados para o carrossel renderizar
    const carouselData1 = pracasData.map(praca => ({
        id: praca.id,
        nome: praca.nome,
        images: praca.jardinetePhoto,
        coordenadas: praca.coordenadas,
    }));

    const renderCarouselItem1 = (item) => {
        const latitude = item.coordenadas[0];
        const longitude = item.coordenadas[1];

        return (
            <div
            key={item.id}
            style={myStyles.carouselItem}
            onClick={() => {
                setSelectedPlaceCoordinates(item.coordenadas);
                setMapLatitude(latitude);
                setMapLongitude(longitude);
                setMapKey((prevKey) => prevKey + 1);
            }}
        >
            <img
                src={item.images}
                alt={`Image ${item.id}`}
                style={{
                    width: '100%', 
                    height: width * 0.15625,
                    objectFit: 'cover',
                    overflow: 'hidden'
                  
                }}
            />
            <p style={myStyles.carouselText}>{item.nome}</p>
        </div>
        );
    };


    return (

        <View style={myStyles.container}>

            <View style={myStyles.backcontainer}>

        
                <ImageBackground source={wallpaper ? { uri: wallpaper } : require('../../assets/default_background.png')} style={myStyles.container}>
                    <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
                    <Text style={myStyles.title}>Bem-vindo, {userName}</Text>


                    <TouchableOpacity style={myStyles.textButtonConfig} onPress={() => navigation.navigate('Config')}>
                        <FontAwesomeIcon icon={faCog} color="black" size={(24 / 1920) * width} />
                    </TouchableOpacity>
                 

              


                    <TouchableOpacity style={myStyles.logoutButton} onPress={openSairModal}>
                        <Text style={myStyles.logoutButtonText}>X</Text>
                    </TouchableOpacity>
                    <View style={myStyles.containerLogo}>
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

                    <View style={myStyles.buttons}>
                    <TouchableOpacity style={myStyles.textButton2}>
                                <Text style={myStyles.textInfo2}>Informações de perfil</Text>
                            </TouchableOpacity>
                        <Text>{JSON.stringify(userInfo.given_name, null, 2)}</Text>
                        <TouchableOpacity style={myStyles.textButton}>
                            <Text style={myStyles.textInfo}>{email}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={myStyles.textButton}>
                            <Text style={myStyles.textInfo}>Segurança e privacidade</Text>
                        </TouchableOpacity>


                        <TouchableOpacity style={myStyles.textButton}>
                            <Text style={myStyles.textInfo}>Suporte</Text>
                        </TouchableOpacity>

                        {isAuthorized && (
                    <TouchableOpacity 
                        style={myStyles.authorizedButton} 
                        onPress={() => navigation.navigate('Admin')}
                    >
                        <Text style={myStyles.authorizedButtonText}>Página de Administrador</Text>
                    </TouchableOpacity>
                )}
                
                    </View>
                </ImageBackground>
            </View>

            <View style={myStyles.navbar}>

                <TouchableOpacity onPress={() => navigation.navigate('PaginaInicial')} style={myStyles.navi}>
                    <Text style={myStyles.navbarButton}>Página Inicial</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Accept')} style={myStyles.navi}>
                    <Text style={myStyles.navbarButton}>Criar Jardinete</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('minhasAnalises')} style={myStyles.navi}>
                    <Text style={myStyles.navbarButton}>Minhas Análises</Text>
                </TouchableOpacity>

            </View>


            <View style={[myStyles.car, { alignItems: 'center',  overflow: 'hidden',  }]}>
    <Text style={myStyles.textgen}>Jardinetes que sou amigo(a)</Text>
    <View style={[myStyles.car4, { alignItems: 'center',  overflow: 'hidden',   }]}>
        <View style={[myStyles.borderedContainer2, { alignItems: 'center',  overflow: 'hidden',    }]}>
            <View style={[myStyles.borderedContainer3, { overflow: 'hidden', }]}>
                <Carousel
                    showThumbs={false}
                    showStatus={false}
                    infiniteLoop={true}
                    autoPlay={true}
                    renderArrowPrev={(onClickHandler, hasPrev, label) =>
                        hasPrev && (
                            <button
                            type="button"
                            onClick={onClickHandler}
                            style={{
                              position: 'absolute',
                              top: '40%',
                              left: 0,
                              zIndex: 2,
                              background: 'rgba(0, 0, 0, 0.5)',
                              border: 'none',
                              color: 'white',
                              padding: (10 / 1920) * width,
                              borderRadius: '20%',
                            }}
                          >
                            <FontAwesomeIcon icon={faChevronLeft} size="2x" style={{ fontSize: width * 0.03 }} />
                          </button>
                        )
                    }
                    
                    renderArrowNext={(onClickHandler, hasNext, label) =>
                        hasNext && (
                            <button
                            type="button"
                            onClick={onClickHandler}
                            style={{
                              position: 'absolute',
                              top: '40%',
                              right: 0,
                              zIndex: 2,
                              background: 'rgba(0, 0, 0, 0.5)',
                              border: 'none',
                              color: 'white',
                              padding: (10 / 1920) * width,
                              borderRadius: '20%',
                            }}
                          >
                            <FontAwesomeIcon icon={faChevronRight} size="2x" style={{ fontSize: width * 0.03 }} />
                          </button>
                          
                        )
                        
                        
                    }
                    renderIndicator={(onClickHandler, isSelected, index, label) => {
                        const indicatorStyle = {
                          position: 'relative',
                          bottom: width * 0.004,
                          transform: 'translateX(-50%)',
                          display: 'inline-block',
                          marginRight: (8 / 1920) * width,
                          cursor: 'pointer',
                          borderRadius: '50%',
                          width: isSelected ? width * 0.00625 : width * 0.0052083333333333,
                          height: isSelected ? width * 0.00625 : width * 0.0052083333333333,
                          backgroundColor: isSelected ? '#fff' : '#ccc',
                        };
                  
                        return (
                          <div
                            key={index}
                            style={indicatorStyle}
                            onClick={onClickHandler}
                            role="button"
                            tabIndex={0}
                            aria-label={`${label} ${index + 1}`}
                          />
                        );
                      }}
                >
                    
                    {carouselData1.map(renderCarouselItem1)}
                </Carousel>
            </View>
        </View>
    </View>
</View>

            <View style={myStyles.car2}>
                <Text style={myStyles.textgen2}>Mapa</Text>
                <View style={[myStyles.car3, myStyles.borderedContainer]}>

                <View style={[myStyles.container_map, { position: 'relative' }]}>

                <MapContainer
    key={mapKey}
    center={[currentLatitude, currentLongitude]}
    zoom={selectedPlaceCoordinates ? 16 : 13}
    style={{ width: '100%', height: '100%', borderRadius: (10 / 1920) * width }}
>
<TileLayer
  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
/>

    {pracasData.map((praca) => (
        <Marker
            key={praca.id}
            position={praca.coordenadas}
            icon={customIcon}
        >
            <Popup>
                <div>
                    <p>{praca.nome}</p>
                    <img src={praca.jardinetePhoto} alt={`Image ${praca.id}`} style={myStyles.popupImage} />
                    <View style={myStyles.popupButtonContainer}>
                        <TouchableOpacity 
                            onPress={() => navigation.navigate('Impact2', { novoJardineteDocId: praca.id })} 
                            style={myStyles.popupButton}
                        >
                            <Text style={myStyles.popupButtonText}>Selecionar Jardinete</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            onPress={() => navigation.navigate('AnaliseFinal', { novoJardineteDocId: praca.id })} 
                            style={myStyles.popupButton}
                        >
                            <Text style={myStyles.popupButtonText}>Gráfico do Jardinete</Text>
                        </TouchableOpacity>
                    </View>
                </div>
            </Popup>
        </Marker>
    ))}
</MapContainer>
                    </View>

                   
                </View>
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
          
          <View  style={myStyles.navBt}>
              <Text style={myStyles.textNav}>Plataforma digital</Text>
          </View >
          <TouchableOpacity onPress={() => openLink('https://www.instagram.com/amigosdosjardinetes.ct/')}>
          <Image source={require('../../assets/instagramNav.png')}  style={myStyles.instaNav} />
          </TouchableOpacity>
      </View>

    </View>
</View>



            <Modal
  visible={modalVisible}
  transparent={true}
  animationType="fade"
  onRequestClose={() => setModalVisible(false)}
>
  <View style={myStyles.modalContainer}>
    <View style={myStyles.modalContent}>
      <Text style={myStyles.modalText}>Tem certeza que deseja sair da conta?</Text>

      <View style={myStyles.modalButtons}>
        <TouchableOpacity
          style={myStyles.cancelButton}
          onPress={() => setModalVisible(false)}
        >
          <Text style={myStyles.buttonText2}>Continuar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={myStyles.confirmButton}
          onPress={handleLogoutFunc}
        >
          <Text style={myStyles.buttonText2}>Sair</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
</Modal>
        </View>


    );
}
