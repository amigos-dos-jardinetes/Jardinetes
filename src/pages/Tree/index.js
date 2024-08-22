import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, TouchableOpacity, Image, Dimensions, Linking, ScrollView, Alert, Modal } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from '../Tree/styles';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { getAuth } from 'firebase/auth';
import { getStorage, getDownloadURL, uploadBytes, ref } from 'firebase/storage';
import { getFirestore, addDoc, collection, deleteDoc, getDocs, updateDoc, doc, getDoc, arrayRemove, FieldValue, firestore } from 'firebase/firestore';
import { userSearchData } from '../../../functions';
import * as ImagePicker from 'expo-image-picker';
import Cropper from 'react-easy-crop';
import Slider from '@mui/material/Slider'; 
import { MdZoomIn, MdZoomOut } from 'react-icons/md';
import ImageEditor from "@react-native-community/image-editor";
import * as ImageManipulator from 'expo-image-manipulator';

const { width } = Dimensions.get('window');



const normalize = (text) => {
    return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
};

const SelectedResultCard = ({ id, name, treeUrl, onRemoveResult, onSelectImage, firebaseDocId }) => {
    const [docId, setDocId] = useState(firebaseDocId); // Estado para armazenar o ID do documento Firebase

    const handleSelectImage = () => {
        onSelectImage(id); // Passa o ID para a função onSelectImage
    };

    return (
        <View style={styles.selectedResultCard}>
        <View style={styles.textContainer}>
            <Text style={styles.selectedResultText}>{`${name}`}</Text>
        </View>
        <TouchableOpacity onPress={onRemoveResult} style={styles.closeButton}>
            <Ionicons name="close" size={width * 0.01302083333333333333333333333333} color="#271C00" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleSelectImage(id)} style={styles.sendImageButton}>
            {treeUrl ? (
                <Image
                    source={{ uri: treeUrl }}
                    style={{ 
                        flex: 1, 
                        width: '100%', 
                        height: '100%', 
                        resizeMode: 'cover', 
                        borderRadius: 5, // Define o arredondamento nas laterais da imagem
                    }} 
                />
            ) : (
                <Text style={styles.sendImageButtonText}>Enviar imagem</Text>
            )}
        </TouchableOpacity>
    </View>
    )
};


export default function Tree() {
    const [imagem, setImagem] = useState(null);
    const [searchText, setSearchText] = useState('');
    const [filteredTrees, setFilteredTrees] = useState([]);
    const [allTrees, setAllTrees] = useState([]);
    const [noResults, setNoResults] = useState(false);
    const [showResults, setShowResults] = useState(false);
    const [selectedResults, setSelectedResults] = useState([]);
    const [selectedResultsIdCounter, setSelectedResultsIdCounter] = useState(0);
    const [selectedTree, setSelectedTree] = useState(null);
    const [userInfo, setUserInfo] = useState(false);
    const auth = getAuth();
    const firestore = getFirestore();
    const storage = getStorage();
    const [userName, setUserName] = useState('');
    const [wallpaper, setWallpaper] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);
    const [email, setEmail] = useState('');
    const [pracasSeguidas, setPracasSeguidas] = useState([]);
    const [treeUrl, setTreeUrl] = useState(null);
    const [selectedTreeId, setSelectedTreeId] = useState(null); // Adicione este estado para armazenar o ID da árvore selecionada
    const [notSendingTrees, setNotSendingTrees] = useState(false);
    const [showContinueButton, setShowContinueButton] = useState(false);
    const [selectedTreeImageUrl, setSelectedTreeImageUrl] = useState(null);
    const navigation = useNavigation();
    const route = useRoute();
    const novoJardineteDocId = route.params.novoJardineteDocId;
    const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
    const [user, setUser] = useState(null);
    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1);
    const [showCropper, setShowCropper] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedResultId, setSelectedResultId] = useState(null); // Armazena o ID do resultado selecionado


    const toggleNotSendingTrees = async () => {
        clearSearch();
        try {
            for (const result of selectedResults) {
                await deleteDoc(doc(collection(firestore, 'tree'), result.docId));
                console.log("Documento removido com sucesso:", result.docId);

                // Remova a árvore do array do jardineiro
                await removeTreeFromJardinete(result.docId);
            }

            // Limpar os resultados selecionados
            setSelectedResults([]);

            setNotSendingTrees(prevState => !prevState);
            setShowContinueButton(prevState => !prevState);
        } catch (error) {
            console.error("Erro ao remover documentos:", error);
            Alert.alert('Erro ao remover documentos');
        }
    };
    useEffect(() => {
        loadTrees();
    }, []);

    const loadTrees = async () => {
        try {
            const response = await fetch(require('../../data/tree.txt'));
            const data = await response.text();
            const treesArray = data.split('\n').map(tree => {
                const [name, scientificName] = tree.split('_');
                const trimmedName = name ? name.trim() : ''; // Verifica se name não é undefined antes de chamar trim()
                const trimmedScientificName = scientificName ? scientificName.trim() : ''; // Verifica se scientificName não é undefined antes de chamar trim()
                return { name: trimmedName, scientificName: trimmedScientificName };
            });
            setAllTrees(treesArray);
        } catch (error) {
            console.error('Erro ao carregar árvores:', error);
        }
    };

    useEffect(() => {
        const unsubscribe = userSearchData(auth, firestore, storage, navigation, setUserName, setWallpaper, setImageUrl, setEmail, setPracasSeguidas);

        return () => {
            if (unsubscribe && typeof unsubscribe === 'function') {
                unsubscribe();
            }
        };
    }, []);

    const filterTrees = (text) => {
        const filtered = allTrees.filter(tree =>
            normalize(tree.name.toLowerCase()).startsWith(normalize(text.toLowerCase())) ||
            normalize(tree.scientificName.toLowerCase()).startsWith(normalize(text.toLowerCase()))
        );

        setNoResults(filtered.length === 0);
        setFilteredTrees(filtered);
        setShowResults(true);
        if (text === '') {
            setShowResults(false);
        }
    };

    const clearSearch = () => {
        setSearchText('');
        filterTrees('');
    };

    const openLink = (link) => {
        Linking.openURL(link);
    };

    const handleResultPress = async (name) => {
        try {
            // Adicionar a árvore ao Firestore
            const docRef = await addDoc(collection(firestore, 'tree'), {
                nome: name,
                treeUrl: ''
            });
            console.log("Document written with ID: ", docRef.id);

            // Adicionar a árvore ao array do jardinete correspondente
            await updateJardineteTreeArray(docRef.id);

            const id = selectedResultsIdCounter + 1;
            setSelectedResultsIdCounter(id);

            setSelectedResults(prev => [...prev, { id, name, docId: docRef.id }]);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    };

    const updateJardineteTreeArray = async (treeDocId) => {
        try {
            const jardineteDocRef = doc(collection(firestore, 'jardinetes'), novoJardineteDocId);

            const jardineteDocSnapshot = await getDoc(jardineteDocRef);
            if (!jardineteDocSnapshot.exists()) {
                console.error("Documento do jardinete não encontrado");
                return;
            }

            const jardineteData = jardineteDocSnapshot.data();
            const treesArray = jardineteData.trees || []; // Se o array de árvores não existir, cria um novo array vazio

            // Adiciona o ID da nova árvore ao array
            treesArray.push(treeDocId);

            // Atualiza o array de árvores no documento do jardinete
            await updateDoc(jardineteDocRef, {
                trees: treesArray
            });

            console.log("Árvore adicionada ao array do jardinete");
        } catch (error) {
            console.error("Erro ao atualizar o array de árvores do jardinete:", error);
        }
    };


    const handleRemoveResult = async (id) => {
        // Encontrar o documento na lista de resultados selecionados pelo ID
        const selectedResult = selectedResults.find(result => result.id === id);
        if (!selectedResult) {
            console.error("Resultado selecionado não encontrado para o ID:", id);
            return;
        }

        try {
            // Remover o documento do Firebase utilizando o ID do documento
            await deleteDoc(doc(collection(firestore, 'tree'), selectedResult.docId));
            console.log("Documento removido com sucesso!");

            // Aguardar a exclusão do documento da árvore antes de remover do jardim
            await removeTreeFromJardinete(selectedResult.docId);
        } catch (error) {
            console.error("Erro ao remover documento:", error);
            Alert.alert('Erro ao remover documento');
        }

        // Remover o card da lista de resultados selecionados
        setSelectedResults(prev => prev.filter(result => result.id !== id));
    };

    const removeTreeFromJardinete = async (treeDocId) => {
        try {
            const jardineteDocRef = doc(firestore, 'jardinetes', novoJardineteDocId);

            // Obtenha os dados do documento do jardineiro
            const jardineteDocSnapshot = await getDoc(jardineteDocRef);
            if (!jardineteDocSnapshot.exists()) {
                console.error("Documento do jardinete não encontrado");
                return;
            }

            // Obtenha os dados do documento do jardineiro
            const jardineteData = jardineteDocSnapshot.data();

            // Verifique se o campo 'trees' existe no documento do jardineiro
            if (!jardineteData.trees || !Array.isArray(jardineteData.trees)) {
                console.error("O campo 'trees' não existe ou não é um array");
                return;
            }

            // Remova o ID da árvore do array 'trees'
            const updatedTreesArray = jardineteData.trees.filter(id => id !== treeDocId);

            // Atualize o array de árvores no documento do jardineiro
            await updateDoc(jardineteDocRef, {
                trees: updatedTreesArray
            });

            console.log("Árvore removida do array do jardinete");
        } catch (error) {
            console.error("Erro ao remover a árvore do array do jardinete:", error);
        }
    };


  const pickImage = async (id) => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
        Alert.alert('Permissão negada para acessar a galeria');
        return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: 'Images',
        allowsEditing: true,
        quality: 1,
    });

    if (!result.canceled && result.assets.length > 0) {
        const imageUri = result.assets[0].uri;
        setSelectedImage(imageUri);
        setSelectedResultId(id); // Armazena o ID do resultado selecionado
        setShowCropper(true);
    }
};


    const handleSelectImage = async (imageUri, id) => {
        try {
            const storageRef = ref(storage, `trees/${Date.now()}`);
            const response = await fetch(imageUri);
            const blob = await response.blob();
            await uploadBytes(storageRef, blob);
            const treeUrl = await getDownloadURL(storageRef);

            setSelectedTreeImageUrl(treeUrl);


            const selectedResult = selectedResults.find(result => result.id === id);
            if (!selectedResult) {
                console.error("Não foi possível encontrar o resultado selecionado com o ID:", id);
                return;
            }

            // Obtém o ID do documento na coleção "tree" correspondente ao resultado selecionado
            const docId = selectedResult.docId;

            // Atualiza o campo treeUrl no documento específico na coleção "tree"
            await updateDoc(doc(collection(firestore, 'tree'), docId), {
                treeUrl: treeUrl,
            });

            setSelectedResults(prev => prev.map(result => {
                if (result.id === id) {
                    return {
                        ...result,
                        treeUrl: treeUrl
                    };
                } else {
                    return result;
                }
            }));
        } catch (error) {
            console.error('Erro ao fazer upload da imagem:', error);
            Alert.alert('Erro ao fazer upload da imagem');
        }
    };


    const renderResultItem = ({ item, index }) => (
        <TouchableOpacity onPress={() => handleResultPress(item.name)}>
            <View style={[styles.resultItem, { backgroundColor: index % 2 === 0 ? '#166034' : '#4C6523' }]}>
                <Text style={[styles.resultItemText, {}]}>
                    Nome: {item.name} {"\n"}
                    Nome científico: {item.scientificName}
                </Text>
            </View>
        </TouchableOpacity>
    );

    const renderSelectedResults = () => {
        const rows = [];
        let currentRow = [];

        // Dividir os resultados em linhas de 3 cartões
        selectedResults.forEach((result, index) => {
            currentRow.push(
                <SelectedResultCard
                    key={result.id}
                    id={result.id}
                    name={result.name}
                    treeUrl={result.treeUrl} // Passa a propriedade treeUrl
                    onRemoveResult={() => handleRemoveResult(result.id)}
                    onSelectImage={pickImage}
                    style={[
                        styles.selectedResultCard,
                        { marginRight: 10 } // Define a margem à direita para os cartões
                    ]}
                />
            );

            // Se a linha estiver cheia (3 cartões) ou for a última linha, adicione à lista de linhas e reinicie a linha atual
            if (currentRow.length === 3 || index === selectedResults.length - 1) {
                rows.push(currentRow);
                currentRow = [];
            }
        });

        return (
            <View style={styles.selectedResultsContainer}>
                {rows.map((row, index) => (
                    <View key={index} style={styles.selectedResultsRow}>
                        {index === 0 && <View style={{ flex: 1 }} />} {/* Espaço à esquerda */}
                        {row}
                        {index === rows.length - 1 && <View style={{ flex: 1 }} />} {/* Espaço à direita */}
                    </View>
                ))}
            </View>
        );
    };
    const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
        setCroppedAreaPixels(croppedAreaPixels);
    }, []);


 const cropImage = async () => {
    try {
        if (selectedImage && croppedAreaPixels && selectedResultId) {
            const manipResult = await ImageManipulator.manipulateAsync(
                selectedImage,
                [
                    {
                        crop: {
                            originX: croppedAreaPixels.x,
                            originY: croppedAreaPixels.y,
                            width: croppedAreaPixels.width,
                            height: croppedAreaPixels.height,
                        },
                    },
                ],
                { compress: 1, format: ImageManipulator.SaveFormat.JPEG }
            );

            const { uri: croppedUri } = manipResult;
            const response = await fetch(croppedUri);
            const blob = await response.blob();
            const storageRef = ref(storage, `tree/croppedImage.jpg`);
            await uploadBytes(storageRef, blob);
            const croppedImageUrl = await getDownloadURL(storageRef);

            console.log('Cropped Image URL:', croppedImageUrl);

            // Atualiza a imagem no Firebase
            const selectedResult = selectedResults.find(result => result.id === selectedResultId);
            if (!selectedResult) {
                console.error("Não foi possível encontrar o resultado selecionado com o ID:", selectedResultId);
                return;
            }
            const docId = selectedResult.docId;

            await updateDoc(doc(collection(firestore, 'tree'), docId), {
                treeUrl: croppedImageUrl,
            });

            setSelectedResults(prevResults => {
                return prevResults.map(result => {
                    if (result.id === selectedResultId) {
                        return {
                            ...result,
                            treeUrl: croppedImageUrl,
                        };
                    }
                    return result;
                });
            });

            setShowCropper(false);
        } else {
            console.error('Imagem selecionada, área de corte ou ID do resultado não definida.');
        }
    } catch (error) {
        console.error('Erro ao cortar e salvar a imagem:', error);
    }
};


    return (
        <ScrollView contentContainerStyle={styles.container} style={{ backgroundColor: '#FFFEF4' }}>
            <View style={styles.navbar}>

            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={width * 0.025} color="white" />
        </TouchableOpacity>

        
                <View style={styles.imageContainer1}>
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
                </View>
            </View>
            <View style={styles.ret1}>
                <Text style={styles.buttonText}>Recomendamos baixar o APP Inaturalist para uma identificação mais precisa do nome das árvores presentes no jardinete</Text>
            </View>
            <View style={styles.ret2}></View>
            <View style={styles.imageContainer}>
                <TouchableOpacity onPress={() => openLink('https://apps.apple.com/us/app/inaturalist/id421397028')}>
                    <Image source={require('../../assets/apple.png')} style={styles.imageIcon} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => openLink('https://play.google.com/store/apps/details?id=org.inaturalist.android')}>
                    <Image source={require('../../assets/googleplay.png')} style={styles.imageIcon} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => openLink('https://www.inaturalist.org')}>
                    <Image source={require('../../assets/inaturalist.png')} style={styles.imageIcon2} />
                </TouchableOpacity>
            </View>
            <View style={styles.checkboxContainer}>
                <TouchableOpacity onPress={toggleNotSendingTrees}>
                    {notSendingTrees ? (
                        <Ionicons name="checkbox" size={width * 0.0125} color="#271C00" />
                    ) : (
                        <Ionicons name="square-outline" size={width * 0.0125} color="#B68F40" />
                    )}
                </TouchableOpacity>
                <Text style={styles.checkboxLabel}>Não enviar árvores agora</Text>
            </View>
            <LinearGradient
                colors={['#271C00', '#B68F40']}
                style={styles.searchBarGradient}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}>
                <View style={styles.searchBarContainer}>
                    <Ionicons name="search" size={width * 0.01041666666666666666666666666667} color="#ffffff" style={styles.searchIcon} />
                    <TextInput
                        style={[styles.searchBar, { paddingLeft: width * 0.025 }, notSendingTrees ? styles.disabledTextInput : null]} // Adicione o estilo styles.disabledTextInput se a checkbox estiver marcada
                        placeholder="Pesquisar Árvores..."
                        placeholderTextColor="#ffffff"
                        value={searchText}
                        onChangeText={text => {
                            setSearchText(text);
                            filterTrees(text);
                        }}
                        editable={!notSendingTrees} // Desabilitar o TextInput se a checkbox estiver marcada
                    />
                    {searchText.length > 0 && (
                        <TouchableOpacity onPress={clearSearch} style={styles.clearButton}>
                            <Text style={styles.clearButtonText}>X</Text>
                        </TouchableOpacity>
                    )}
                </View>
            </LinearGradient>
            {showResults && (
                <View style={[styles.resultsContainer, (filteredTrees.length > 0 || searchText === '') ? styles.resultsContainerWithPadding : {}]}>
                    <FlatList
                        data={filteredTrees}
                        renderItem={renderResultItem}
                        keyExtractor={(item, index) => index.toString()}
                    />
                    {searchText !== '' && filteredTrees.length === 0 && (
                        <Text style={styles.noResultsText}>Nenhum resultado encontrado</Text>
                    )}
                </View>
            )}

            {(showContinueButton || selectedResults.length > 0) && (
                <TouchableOpacity 
                style={{
                    position: 'absolute',
                    top: (width * 0.467) + ((Math.floor((selectedResults.length - 1) / 3) + 1) * (width * 0.176)),
                    right: width * 0.01041666666666666666666666666667,
                    paddingHorizontal: width * 0.01041666666666666666666666666667,
                    paddingVertical: width * 0.0078125,
                    marginBottom: width * 0.0078125,
                    overflow: 'hidden',
                }}
                onPress={() => navigation.navigate('Impact', { novoJardineteDocId })}>
                <LinearGradient
                    colors={['#4C6523', '#99CB47']}
                    style={{ borderRadius: width * 0.01302083333333333333333333333333, width: width * 0.09114583333333333333333333333333, height: width * 0.02083333333333333333333333333333, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={styles.continueButtonText}>Continuar</Text>
                </LinearGradient>
            </TouchableOpacity>
            )}
            {selectedResults.length > 0 && renderSelectedResults()}


            <Modal visible={showCropper} animationType="slide">
  <View style={styles.cropperContainer}>
    
    {/* Slider e botões de zoom */}
    <View style={styles.controlsContainer}>
      <Slider
        value={zoom}
        min={1}
        max={3}
        step={0.1}
        onChange={(e, newValue) => setZoom(newValue)}
        aria-labelledby="zoom-slider"
        style={styles.slider}
      />
      <View style={styles.zoomButtons}>
        <TouchableOpacity onPress={() => setZoom(zoom + 0.1)}>
          <MdZoomIn size={24} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setZoom(zoom - 0.1)}>
          <MdZoomOut size={24} />
        </TouchableOpacity>
      </View>
    </View>

    {/* Área de corte da imagem */}
    <View style={styles.cropperWrapper}>
    <Cropper
    image={selectedImage}
    crop={crop}
    zoom={zoom}
    aspect={16 / 9}
    onCropChange={setCrop}
    onCropComplete={onCropComplete}
    onZoomChange={setZoom}
/>
    </View>

    {/* Botão para cortar a imagem */}
    <TouchableOpacity style={styles.cropButton} onPress={cropImage}>
      <Text style={styles.cropButtonText}>Escolher Imagem</Text>
    </TouchableOpacity>
  </View>
</Modal>

        </ScrollView>
    );
};
