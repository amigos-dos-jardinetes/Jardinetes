// No início do componente
import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, ScrollView, Image, TextInput, Dimensions} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getAuth } from 'firebase/auth';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import markerImage from '../../assets/marker.png';
import { styles } from '../JardinetesMap/styles';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get('window');

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
    const [selectedJardimId, setSelectedJardimId] = useState(null); // Estado para armazenar o ID do jardim selecionado

    const handleJardimPress = (jardim) => {
        console.log("Selected Jardim (handleJardimPress):", jardim); // Adicionar este console.log para verificar o objeto jardim
        setSelectedJardim(jardim);
        setIsVamosLaClickable(true); 
    };

    const handleDetailsPress = (jardim) => {
        setSelectedJardim(jardim);
        setSelectedJardimId(jardim.id); // Verifique se jardim.id não é undefined
        setIsVamosLaClickable(true);
    };

    const handleCloseButtonClick = () => {
        setSelectedJardim(null);
        setSelectedJardimId(null); // Limpar o ID do jardim selecionado ao fechar o popup
        setIsVamosLaClickable(false);
    };

    const handleVamosLaPress = (jardim) => {
        console.log("Selected Jardim:", jardim); // Adicionar este console.log para verificar se o objeto jardim está chegando corretamente
        if (jardim) {
            const jardimId = jardim.id; // Extrair o ID do objeto jardim
            console.log("Selected Jardim ID (handleVamosLaPress):", jardimId);
            navigation.navigate('ImpactSolo', { novoJardineteDocId: jardimId });
        } else {
            console.error('Nenhum jardim selecionado.');
        }
    };
    
    
    const handlePopupButtonClick = (jardim) => {
        setSelectedJardim(jardim);
    };
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
      if (searchText.trim() === '') {
          setFilteredJardinetes([]);
          setIsVamosLaClickable(false); // Tornar o botão "Vamos lá!" não clicável se não houver resultados
          return;
      }

      const sortedResults = sortResults(searchText.toLowerCase(), jardinetes);
      setFilteredJardinetes(sortedResults);
  }, [searchText, jardinetes]);

  const sortResults = (text, results) => {
    return results.filter(jardim =>
        jardim.nome.toLowerCase().startsWith(text)
    ).sort((a, b) => {
        const aName = a.nome.toLowerCase();
        const bName = b.nome.toLowerCase();
        return aName.localeCompare(bName);
    });
};


    const customIcon = new L.Icon({
        iconUrl: markerImage,
        iconSize: [32, 32], // Defina o tamanho do ícone conforme necessário
        iconAnchor: [16, 16], // Defina o ponto de ancoragem do ícone
    });

    return (
        <ScrollView style={styles.container3}>
        <View style={styles.container}>
          
          <View style={styles.navbar}>
            <TouchableOpacity onPress={() => navigation.replace('PaginaInicial')}>
              <Text style={styles.navbarButton}>PÁGINA INICIAL</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.replace('')}>
              <Text style={styles.navbarButton}>AÇÕES SOCIAIS</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.replace('JardinetesMap')}>
              <Text style={styles.navbarButton}>FAÇA SUA PARTE</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.replace('')}>
              <Text style={styles.navbarButton}>QUEM SOMOS</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.replace('Contato')}>
              <Text style={styles.navbarButton}>CONTATO</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.replace('SignIn')}>
              <Text style={styles.navbarButton}>LOGIN</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.encontre}>  
          <Image source={require('../../assets/encontre.png')} style={styles.encontreImage} />
          </View>
            <View style={styles.map}>  
           
            
                <View style={styles.container_map}>
                <View style={styles.mapContainer}>
                    <MapContainer
                        center={[-25.4284, -49.2733]}
                        zoom={14}
                        style={{ width: '100%', height: '100%', borderRadius: 10,}}
                    >
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

                        {jardinetes.map((jardinetes, index) => (
                      <Marker position={[jardinetes.coordenadas[0], jardinetes.coordenadas[1]]} icon={customIcon}>
                     <Popup>
    <div>
        <p>{jardinetes.nome}</p>
        <img src={jardinetes.jardinetePhoto} alt={`Foto de ${jardinetes.nome}`} style={styles.popupImage}/>
        <TouchableOpacity onPress={() => handleDetailsPress(jardinetes)} style={styles.popupButton}>
    <Text style={styles.popupButtonText}>Selecionar Jardinete</Text>
</TouchableOpacity>
    </div>
</Popup>
                    </Marker>
                        ))}
                    </MapContainer>
                    </View>
                </View>

                <View style={styles.container2}>
                    <View style={styles.card}>
                      <View style={styles.searchContainer}>
    <Ionicons name="search" size={width * 0.01041666666666666666666666666667} color="#ffffff" style={styles.searchIcon} />
    {searchText.trim() !== '' && (
        <TouchableOpacity style={styles.clearButton} onPress={() => setSearchText('')}>
            <Ionicons name="close" size={width * 0.01041666666666666666666666666667} color="#ffffff" />
        </TouchableOpacity>
    )}
    {searchText.trim() !== '' && (
        <View style={styles.resultsContainer}>
            <View style={styles.resultsInnerContainer}>
                {filteredJardinetes.map((jardim, index) => (
                    <TouchableOpacity key={index} style={[styles.resultItem, index % 2 === 0 ? styles.evenResult : styles.oddResult]} onPress={() => handleJardimPress(jardim)}>
                        <Text style={styles.resultText}>{jardim.nome}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    )}
    <TextInput
        style={[styles.searchBar, { paddingLeft: 40 }]}
        placeholder="Busque um jardinete"
        onChangeText={text => setSearchText(text)}
        value={searchText}
    />
     {searchText.length > 0 && (
                        <TouchableOpacity  onPress={() => setSearchText('')} style={styles.clearButton}>
                            <Text style={styles.clearButtonText}>X</Text>
                        </TouchableOpacity>
                    )}
</View>

                        <View style={styles.gradientButtonContainer}>
                        <TouchableOpacity 
    style={[styles.gradientButton, !isVamosLaClickable && styles.disabledButton]} 
    onPress={() => isVamosLaClickable && handleVamosLaPress(selectedJardim)}
>
    <LinearGradient
        colors={['#166034', '#2BBD67']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.linearGradient}
    >
        <Text style={styles.gradientButtonText}>Vamos lá!</Text>
    </LinearGradient>
</TouchableOpacity>
                        </View>

                    </View>

                    {/* Retângulo de detalhes */}
                    {selectedJardim && (
                      <View style={styles.detailsContainer}>
                      <Text style={styles.jardimName}>{selectedJardim.nome}</Text>
                      <TouchableOpacity onPress={handleCloseButtonClick} style={styles.closeButton}>
                          <Text style={styles.closeButtonText}>X</Text>
                      </TouchableOpacity>
                    </View>
                    )}
                    
                </View>
            </View>

         
       

        </View>

        <View style={styles.container_gaia}>
        <Image source={require('../../assets/gaia.png')} style={styles.image} />
        <Image source={require('../../assets/linha.png')} style={styles.linha} />
        <Image source={require('../../assets/balao.png')} style={styles.balao} />
        </View>


        <View style={styles.imageContainer33}>
          <Image source={require('../../assets/araucarias.png')}  style={styles.araucarias} />
      </View>

        <View style={styles.navbar2}>
      <View style={styles.imageContainer22}>
          <Image source={require('../../assets/UtfprBottom.png')}  style={styles.utfprImage} />
      </View>
      </View>

        </ScrollView>
    );
}
