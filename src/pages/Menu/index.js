import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, ImageBackground, StatusBar, ScrollView, RefreshControl, FlatList } from 'react-native';
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
    const [refreshing, setRefreshing] = useState(false);  // Estado para controlar o RefreshControl
    const [selectedPlace, setSelectedPlace] = useState(null);
    const [selectedMarker, setSelectedMarker] = useState(null);
    
    const markers = [
        { position: [-25.43925924548977, -49.268820908320194], name: 'Local 1', image: 'URL 1' },
        { position: [/* ... */], name: 'Local 2', image: 'URL 2' },
        // Adicione mais marcadores conforme necessário
    ];
    
    {markers.map((marker, index) => (
        <Marker
            key={index}
            position={marker.position}
            icon={customIcon}
            eventHandlers={{
                click: () => setSelectedMarker(marker),
            }}
        >
            {/* ... conteúdo do Popup */}
        </Marker>
    ))}

    
    WebBrowser.maybeCompleteAuthSession();

    const carouselData = [
        { image: 'https://wallpapers.com/images/hd/cherry-blossoms-anime-scenery-8xz0tezp5w5goyle.jpg' },
        { image: 'https://www.shutterstock.com/image-vector/enchanting-anime-landscape-mistcovered-mountain-600nw-2301778699.jpg' },
        { image: 'https://images3.alphacoders.com/133/1338664.png' },
        // Adicione mais objetos conforme necessário
    ];
   

    const renderCarouselItem = (item) => (
        <div key={item.image} style={styles.carouselItem}>
            <img
                src={item.image}
                alt={`Image ${item.image}`}
                style={styles.carouselImage}
            />
        </div>
    );


   

    const [request, response, promptAsync] = Google.useAuthRequest({
        iosClientId: '<IOS_CLIENT_ID>',
        androidClientId: '381072997535-926po31tefpm6knqfml8si4ki83hb9rj.apps.googleusercontent.com',
        webClientId: '381072997535-ab8js7tf8aie1s2lplbkae4uummgpll1.apps.googleusercontent.com',
        expoClientId: '381072997535-dduhtvsr4tt4apo5orl1pjhsccmom6mv.apps.googleusercontent.com',
    },{
        projectNameForProxy: "@jardinetes/Amigos_dos_Jardinetes",
        redirectUri: "https://auth.expo.io/@jardinetes/Amigos_dos_Jardinetes/start"
    });

    const [userInfo, setUserInfo] = useState(false);

    async function handleSignINWithGoogle() {
        try {
            const user = await AsyncStorage.getItem('@user');
            if (!user) {
                if (response?.type === 'success' && response.authentication?.accessToken) {
                    await getUserInfo(response.authentication.accessToken);
                }
            } else {
                setUserInfo(JSON.parse(user));
                navigation.navigate('Menu');
            }
        } catch (error) {
            console.error('Error during Google login:', error);
        }
    }

    const handleLogoutFunc = () => {
        handleLogout(auth, navigation);
    };



    React.useEffect(() => {
        handleSignINWithGoogle();
    }, [response]);

    useEffect(() => {
        const unsubscribe = userSearchData(auth, firestore, storage, navigation, setUserName, setWallpaper, setImageUrl, setEmail, setPracasSeguidas);

        // Ensure that unsubscribe is called when the component is unmounted
        return () => {
            if (unsubscribe && typeof unsubscribe === 'function') {
                unsubscribe();
            }
        };
    }, []);

    const customIcon = new L.Icon({
        iconUrl: markerImage,
        iconSize: [32, 32], // Defina o tamanho do ícone conforme necessário
        iconAnchor: [16, 16], // Defina o ponto de ancoragem do ícone
    });



    
   

    useEffect(() => {
        const fetchPracasSeguidas = async () => {
            try {
                const user = auth.currentUser;

                if (user) {
                    const userDoc = await getDoc(doc(firestore, 'users', user.uid));
                    if (userDoc.exists()) {
                        const userPracasSeguidas = userDoc.data().pracasSeguidas || [];
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

    useEffect(() => {
        const fetchPracasData = async () => {
            try {
                const promises = pracasSeguidas.map(async (pracaId) => {
                    const pracaDoc = await getDoc(doc(firestore, 'pracas', pracaId));
                    if (pracaDoc.exists()) {
                        const pracaData = pracaDoc.data();
                        return { id: pracaId, nome: pracaData.nome, photourl: pracaData.photourl, coordendas: pracaData.coordenadas  };
                        
                        
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

    const carouselData1 = pracasData.map(praca => ({
        id: praca.id,
        nome: praca.nome,
        images: praca.photourl,
        coordenadas: praca.coordenadas,
    }));

    const renderCarouselItem1 = (item) => (
        <div key={item.id} style={styles.carouselItem}>
            <img
                src={item.images}
                alt={`Image ${item.id}`}
                style={styles.carouselImage}
            />
            <p style={styles.carouselText}>{item.nome}</p>
        </div>
    );
    return (
       <View  style={styles.container}>
        
        <View
            style={styles.backcontainer}>
            
            <ImageBackground source={wallpaper ? { uri: wallpaper } : require('../../assets/default-background.jpg')} style={styles.container}>
                <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
                <Text style={styles.title}>Bem-vindo, {userName}</Text>
                <View style={styles.containerLogo}>
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
                <View style={styles.buttons}>
                    <Text>{JSON.stringify(userInfo.given_name, null, 2)}</Text>
                    <TouchableOpacity style={styles.textButton}>
                        <Text style={styles.textInfo}>{email}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.textButton}>
                        <Text style={styles.textInfo}>Segurança e privacidade</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.textButton} onPress={() => navigation.navigate('Config')}>
                        <Text style={styles.textInfo}>Configurações</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.textButton}>
                        <Text style={styles.textInfo}>Suporte</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.logoutButton} onPress={handleLogoutFunc}>
                        <Text style={styles.logoutButtonText}>Sair</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>

            
            
        </View>

        <View style={styles.navbar}>     
        
        <TouchableOpacity onPress={() => navigation.navigate('Welcome')}>
                    <Text style={styles.navbarButton}>Início</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                    <Text style={styles.navbarButton}>Inventário</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                    <Text style={styles.navbarButton}>Minhas Análises</Text>
                </TouchableOpacity>
                
                </View>

                
                <View style={styles.car}> 
               
                <Text style={styles.textgen}>Gerenciar minhas fotos</Text>
                <div style={styles.container1}>
                    
            <Carousel showThumbs={false} showStatus={false} infiniteLoop={true} autoPlay={true}>
                {carouselData.map(renderCarouselItem)}
            </Carousel>
          
           
        </div>
                </View>
               
               
                <View style={styles.container_map}> 

                <MapContainer
        center={[-25.43925924548977, -49.268820908320194]}
        zoom={13}
        style={{ width: '80%', height: '80%', borderRadius: 10}}
        onClick={(e) => {
            setSelectedPlace({ lat: e.latlng.lat, lng: e.latlng.lng });
        }}
    >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

   
    </MapContainer>

                </View>

                <View style={styles.container_map1}>

                <div style={styles.container2}>
                <Carousel showThumbs={false} showStatus={false} infiniteLoop={true} autoPlay={true}>
                {carouselData1.map(renderCarouselItem1)}
            </Carousel>
            </div>
            </View>
                
        </View>
                
        
    );
}
