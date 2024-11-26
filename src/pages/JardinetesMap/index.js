import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, ScrollView, Image, TextInput, useWindowDimensions, Linking} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getAuth } from 'firebase/auth';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import markerImage from '../../assets/marker.png';
import { styles } from '../JardinetesMap/styles';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';


export default function JardinetesMap() {
    const auth = getAuth();
    const firestore = getFirestore();
    const storage = getStorage();
    const navigation = useNavigation();
    const [jardinetes, setJardinetes] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [filteredJardinetes, setFilteredJardinetes] = useState([]);
    const [selectedJardim, setSelectedJardim] = useState(null);
    const [isVamosLaClickable, setIsVamosLaClickable] = useState(false); 
    const [isVamosLaClickable1, setIsVamosLaClickable1] = useState(false); 
    const [selectedJardimId, setSelectedJardimId] = useState(null); 
    const myStyles = styles();
    const { width, height } = useWindowDimensions(); 


    const handleJardimPress = (jardim) => {
        console.log("Selected Jardim (handleJardimPress):", jardim);
        setSelectedJardim(jardim);
        setIsVamosLaClickable(true); 
    };

    const handleDetailsPress = (jardim) => {
        setSelectedJardim(jardim);
        setSelectedJardimId(jardim.id);
        setIsVamosLaClickable(true);
    };

    const handleCloseButtonClick = () => {
        setSelectedJardim(null);
        setSelectedJardimId(null);
        setIsVamosLaClickable(false);
    };

    const handleVamosLaPress = (jardim) => {
        console.log("Selected Jardim:", jardim);
        if (jardim) {
            const jardimId = jardim.id;
            console.log("Selected Jardim ID (handleVamosLaPress):", jardimId);
            navigation.navigate('ImpactSolo', { novoJardineteDocId: jardimId });
        } else {
            console.error('Nenhum jardim selecionado.');
        }
    };

    const handleVamosLaPress1 = (jardim) => {
        console.log("Selected Jardim:", jardim);
        if (jardim) {
            const jardimId = jardim.id;
            console.log("Selected Jardim ID (handleVamosLaPress):", jardimId);
            navigation.navigate('AnaliseFinal', { novoJardineteDocId: jardimId });
        } else {
            console.error('Nenhum jardim selecionado.');
        }
    };

    const handlePopupButtonClick = (jardim) => {
        setSelectedJardim(jardim);
    };

        
    const openLink = (url) => {
        Linking.openURL(url).catch(err => console.error("Erro ao abrir o link:", err));
      };

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
        if (searchText.trim() === '') {
            setFilteredJardinetes([]);
            setIsVamosLaClickable(false);
            return;
        }

        const sortedResults = sortResults(searchText.toLowerCase(), jardinetes);
        setFilteredJardinetes(sortedResults);
    }, [searchText, jardinetes]);

    const sortResults = (text, results) => {
        return results.filter(jardim =>
            jardim.nome && jardim.nome.toLowerCase().startsWith(text)
        ).sort((a, b) => {
            const aName = a.nome ? a.nome.toLowerCase() : '';
            const bName = b.nome ? b.nome.toLowerCase() : '';
            return aName.localeCompare(bName);
        });
    };
    

    const customIcon = new L.Icon({
        iconUrl: markerImage,
        iconSize: [32, 32],
        iconAnchor: [16, 16],
    });

    return (
        <ScrollView style={myStyles.container3}>
            <View style={myStyles.container}>
                <View style={myStyles.navbar}>
                    <TouchableOpacity onPress={() => navigation.replace('PaginaInicial')}>
                        <Text style={myStyles.navbarButton}>PÁGINA INICIAL</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.replace('acoesSociais')}>
                        <Text style={myStyles.navbarButton}>AÇÕES SOCIAIS</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.replace('JardinetesMap')}>
                        <Text style={myStyles.navbarButton}>FAÇA SUA PARTE</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.replace('quemSomos')}>
                        <Text style={myStyles.navbarButton}>QUEM SOMOS</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.replace('Contato')}>
                        <Text style={myStyles.navbarButton}>CONTATO</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.replace('SignIn')}>
                        <Text style={myStyles.navbarButton}>LOGIN</Text>
                    </TouchableOpacity>
                </View>

                <View style={myStyles.encontre}>
                    <Image source={require('../../assets/encontre.png')} style={myStyles.encontreImage} />
                </View>

                <View style={myStyles.map}>
                    <View style={myStyles.container_map}>
                        <View style={myStyles.mapContainer}>
                            <MapContainer
                                center={[-25.4284, -49.2733]}
                                zoom={14}
                                style={{ width: '100%', height: '100%', borderRadius: 10 }}
                            >
                               <TileLayer
  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
/>

                                {jardinetes.map((jardinetes, index) => (
                                    <Marker position={[jardinetes.coordenadas[0], jardinetes.coordenadas[1]]} icon={customIcon} key={index}>
                                        <Popup>
                                            <div>
                                                <p>{jardinetes.nome}</p>
                                                <img src={jardinetes.jardinetePhoto} alt={`Foto de ${jardinetes.nome}`} style={myStyles.popupImage} />
                                                <View style={myStyles.popupButtonContainer}>
                                                    <TouchableOpacity onPress={() => handleDetailsPress(jardinetes)} style={myStyles.popupButton}>
                                                        <Text style={myStyles.popupButtonText}>Selecionar Jardinete</Text>
                                                    </TouchableOpacity>
                                                    <TouchableOpacity onPress={() => handleVamosLaPress1(jardinetes)} style={myStyles.popupButton}>
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

                    <View style={myStyles.container2}>
                        <View style={myStyles.card}>
                            <View style={myStyles.searchContainer}>
                                <Ionicons name="search" size={width * 0.01041666666666666666666666666667} color="#ffffff" style={myStyles.searchIcon} />
                                {searchText.trim() !== '' && (
                                    <TouchableOpacity style={myStyles.clearButton} onPress={() => setSearchText('')}>
                                        <Ionicons name="close" size={width * 0.01041666666666666666666666666667} color="#ffffff" />
                                    </TouchableOpacity>
                                )}
                                {searchText.trim() !== '' && (
                                    <View style={myStyles.resultsContainer}>
                                        <View style={myStyles.resultsInnerContainer}>
                                            {filteredJardinetes.map((jardim, index) => (
                                                <TouchableOpacity key={index} style={[myStyles.resultItem, index % 2 === 0 ? myStyles.evenResult : myStyles.oddResult]} onPress={() => handleJardimPress(jardim)}>
                                                    <Text style={myStyles.resultText}>{jardim.nome}</Text>
                                                </TouchableOpacity>
                                            ))}
                                        </View>
                                    </View>
                                )}
                                <TextInput
                                    style={[myStyles.searchBar, { paddingLeft: width * 0.0260416666666667, fontSize: width * 0.0072916666666667 }]}
                                    placeholder="Busque um jardinete"
                                    onChangeText={text => setSearchText(text)}
                                    value={searchText}
                                />
                                {searchText.length > 0 && (
                                    <TouchableOpacity onPress={() => setSearchText('')} style={myStyles.clearButton}>
                                        <Text style={myStyles.clearButtonText}>X</Text>
                                    </TouchableOpacity>
                                )}
                            </View>

                            <View style={myStyles.gradientButtonContainer}>
                                <TouchableOpacity 
                                    style={[myStyles.gradientButton, !isVamosLaClickable && myStyles.disabledButton]} 
                                    onPress={() => isVamosLaClickable && handleVamosLaPress(selectedJardim)}
                                >
                                    <LinearGradient
                                        colors={['#166034', '#2BBD67']}
                                        start={{ x: 0, y: 0 }}
                                        end={{ x: 1, y: 0 }}
                                        style={myStyles.linearGradient}
                                    >
                                        <Text style={myStyles.gradientButtonText}>Vamos lá!</Text>
                                    </LinearGradient>
                                </TouchableOpacity>
                            </View>
                        </View>

                        {selectedJardim && (
                            <View style={myStyles.detailsContainer}>
                                <Text style={myStyles.jardimName}>{selectedJardim.nome}</Text>
                                <TouchableOpacity onPress={handleCloseButtonClick} style={myStyles.closeButton}>
                                    <Text style={myStyles.closeButtonText}>X</Text>
                                </TouchableOpacity>
                            </View>
                        )}
                    </View>
                </View>
            </View>

        

            <View style={myStyles.imageContainer33}>
                <Image source={require('../../assets/araucarias.png')} style={myStyles.araucarias} />
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

        </ScrollView>
    );
}