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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faCog } from '@fortawesome/free-solid-svg-icons'; // Importe o ícone de engrenagem aqui
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

    const [selectedMarker, setSelectedMarker] = useState(null);
    const [selectedPlaceCoordinates, setSelectedPlaceCoordinates] = useState(null);
    const [MapLatitude, setMapLatitude] = useState(null);
    const [MapLongitude, setMapLongitude] = useState(null);


    const markers = [
        { position: [-25.43925924548977, -49.268820908320194], name: 'Local 1', image: 'URL 1' },
        { position: [/* ... */], name: 'Local 2', image: 'URL 2' },
        // Adicione mais marcadores conforme necessário
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
                {/* ... conteúdo do Popup */}
            </Marker>
        ))
    }


    WebBrowser.maybeCompleteAuthSession();

    const carouselData = [
        { image: 'https://wallpapers.com/images/hd/cherry-blossoms-anime-scenery-8xz0tezp5w5goyle.jpg' },
        { image: 'https://www.shutterstock.com/image-vector/enchanting-anime-landscape-mistcovered-mountain-600nw-2301778699.jpg' },
        { image: 'https://www.melhoresdestinos.com.br/wp-content/uploads/2019/02/passagens-aereas-curitiba-capa2019-02.jpg' },
        // Adicione mais objetos conforme necessário
    ];

    const [carouselIndex, setCarouselIndex] = useState(0);

    const handleNextClick = () => {
        setCarouselIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
    };

    const handlePrevClick = () => {
        setCarouselIndex((prevIndex) => (prevIndex - 1 + carouselData.length) % carouselData.length);
    };

    const renderCarouselItem = (item, index) => (
        <div key={index} style={styles.carouselItem1}>
            <img
                src={item.image}
                alt={`Image ${item.image}`}
                style={styles.carouselImage1}
            />
        </div>
    );



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
                        return { id: pracaId, nome: pracaData.nome, photourl: pracaData.photourl, coordenadas: pracaData.coordenadas };


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

    const renderCarouselItem1 = (item) => {
        const latitude = item.coordenadas[0];
        const longitude = item.coordenadas[1];

        return (
            <div
                key={item.id}
                style={styles.carouselItem}
                onClick={() => {
                    setSelectedPlaceCoordinates(item.coordenadas);
                    setMapLatitude(latitude);
                    setMapLongitude(longitude);
                    // Atualize a chave para forçar a recriação do MapContainer
                    setMapKey((prevKey) => prevKey + 1);
                }}
            >
                <img
                    src={item.images}
                    alt={`Image ${item.id}`}
                    style={styles.carouselImage}
                />
                <p style={styles.carouselText}>{item.nome}</p>
            </div>
        );
    };


    return (

        <View style={styles.container}>

            <View style={styles.backcontainer}>
                <ImageBackground source={wallpaper ? { uri: wallpaper } : require('../../assets/default-background.jpg')} style={styles.container}>
                    <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
                    <Text style={styles.title}>Bem-vindo, {userName}</Text>

                    <TouchableOpacity style={styles.textButtonConfig} onPress={() => navigation.navigate('Config')}>
                        <FontAwesomeIcon icon={faCog} color="black" size={24} />
                    </TouchableOpacity>
                    {/* Substituindo o botão de fechar por um texto "X" */}
                    <TouchableOpacity style={styles.logoutButton} onPress={handleLogoutFunc}>
                        <Text style={styles.logoutButtonText}>X</Text>
                    </TouchableOpacity>
                    <View style={styles.containerLogo}>
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
                        <View style={styles.buttons}>
                            <TouchableOpacity style={styles.textButton2}>
                                <Text style={styles.textInfo2}>Informações de perfil</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.buttons}>
                        <Text>{JSON.stringify(userInfo.given_name, null, 2)}</Text>
                        <TouchableOpacity style={styles.textButton}>
                            <Text style={styles.textInfo}>{email}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.textButton}>
                            <Text style={styles.textInfo}>Segurança e privacidade</Text>
                        </TouchableOpacity>


                        <TouchableOpacity style={styles.textButton}>
                            <Text style={styles.textInfo}>Suporte</Text>
                        </TouchableOpacity>

                    </View>
                </ImageBackground>
            </View>

            <View style={styles.navbar}>

                <TouchableOpacity onPress={() => navigation.navigate('PaginaInicial')} style={styles.navi}>
                    <Text style={styles.navbarButton}>Página Inicial</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Accept')} style={styles.navi}>
                    <Text style={styles.navbarButton}>Criar Jardinete</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('JardinetesMap')} style={styles.navi}>
                    <Text style={styles.navbarButton}>Minhas Análises</Text>
                </TouchableOpacity>

            </View>


            <View style={styles.car}>

                <Text style={styles.textgen}>Gerenciar minhas fotos</Text>
                <View style={styles.car4}>
                    <View style={styles.borderedContainer2}>
                        <View style={styles.borderedContainer3}>

                            <Carousel
                                showArrows={true}
                                showThumbs={false}
                                showStatus={false}
                                infiniteLoop={true}
                                autoPlay={true}
                                showIndicators={true}
                                renderArrowPrev={(onClickHandler, hasPrev, label) =>
                                    hasPrev && (
                                        <button type="button" onClick={onClickHandler} style={{ position: 'absolute', top: '25%', left: 0, zIndex: 2, background: 'rgba(0, 0, 0, 0.5)', border: 'none', color: 'white', padding: '10px', borderRadius: '20%' }}>
                                            <FontAwesomeIcon icon={faChevronLeft} size="2x" />
                                        </button>
                                    )
                                }
                                renderArrowNext={(onClickHandler, hasNext, label) =>
                                    hasNext && (
                                        <button type="button" onClick={onClickHandler} style={{ position: 'absolute', top: '25%', right: 0, zIndex: 2, background: 'rgba(0, 0, 0, 0.5)', border: 'none', color: 'white', padding: '10px', borderRadius: '20%' }}>
                                            <FontAwesomeIcon icon={faChevronRight} size="2x" />
                                        </button>
                                    )
                                }
                                renderIndicator={(onClickHandler, isSelected, index, label) => (
                                    <li
                                        style={{
                                            display: 'inline-block',
                                            margin: '0 0.8%',
                                            padding: '5px',
                                            borderRadius: '50%',
                                            background: isSelected ? 'white' : 'gray',
                                            maxInlineSize: '1%',
                                            maxHeight: '1%',
                                            position: 'relative',
                                            top: '-10vw',
                                            zIndex: 2
                                        }}
                                        onClick={onClickHandler}
                                        key={index}
                                    />
                                )}
                            >
                                {carouselData.map(renderCarouselItem)}
                            </Carousel>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.car2}>
                <Text style={styles.textgen2}>Praças que acompanho</Text>
                <View style={[styles.car3, styles.borderedContainer]}>

                    <View style={styles.container_map}>

                        {MapLatitude !== null && MapLongitude !== null ? (
                            <MapContainer
                                key={mapKey}
                                center={[MapLatitude, MapLongitude]}
                                zoom={selectedPlaceCoordinates ? 16 : 13}
                                style={{ width: '90%', height: '90%', borderRadius: 10 }}
                            >
                                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

                                {pracasData.map((praca) => (
                                    <Marker
                                        key={praca.id}
                                        position={praca.coordenadas}
                                        icon={customIcon}
                                    >
                                        <Popup>
                                            <div>
                                                <p>{praca.nome}</p>
                                                <img src={praca.photourl} alt={`Image ${praca.id}`} style={styles.popupImage} />
                                            </div>
                                        </Popup>
                                    </Marker>
                                ))}
                            </MapContainer>
                        ) : (
                            <Text>Clique na imagem para ir ao local</Text>
                        )}
                    </View>

                    <View style={styles.container_map1}>
                        <div style={styles.container2}>

                            <Carousel showThumbs={false} showStatus={false} infiniteLoop={true} autoPlay={true} renderArrowPrev={(onClickHandler, hasPrev, label) =>
                                hasPrev && (
                                    <button type="button" onClick={onClickHandler} style={{ position: 'absolute', top: '40%', left: 0, zIndex: 2, background: 'rgba(0, 0, 0, 0.5)', border: 'none', color: 'white', padding: '10px', borderRadius: '20%' }}>
                                        <FontAwesomeIcon icon={faChevronLeft} size="2x" />
                                    </button>
                                )
                            }
                                renderArrowNext={(onClickHandler, hasNext, label) =>
                                    hasNext && (
                                        <button type="button" onClick={onClickHandler} style={{ position: 'absolute', top: '40%', right: 0, zIndex: 2, background: 'rgba(0, 0, 0, 0.5)', border: 'none', color: 'white', padding: '10px', borderRadius: '20%' }}>
                                            <FontAwesomeIcon icon={faChevronRight} size="2x" />
                                        </button>
                                    )
                                }>
                                {carouselData1.map(renderCarouselItem1)}
                            </Carousel>


                        </div>
                    </View>
                </View>
            </View>
        </View>


    );
}
