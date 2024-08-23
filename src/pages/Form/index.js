import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Image, Dimensions, Linking, Modal } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { getFirestore, doc, updateDoc, getDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { styles } from '../Form/styles';
import * as ImagePicker from 'expo-image-picker';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { Ionicons } from '@expo/vector-icons';
import { initializeApp, getApps, getApp } from 'firebase/app';
import { userSearchData } from '../../../functions';
import Cropper from 'react-easy-crop';
import Slider from '@mui/material/Slider'; 
import { MdZoomIn, MdZoomOut } from 'react-icons/md';
import ImageEditor from "@react-native-community/image-editor";
import * as ImageManipulator from 'expo-image-manipulator';

const firebaseConfig = {
  // suas configurações do Firebase
};

const openIPPUCWebsite = () => {
  Linking.openURL('https://www.ippuc.org.br');
};

let firebaseApp;
if (getApps().length === 0) {
  firebaseApp = initializeApp(firebaseConfig);
} else {
  firebaseApp = getApp(); // Use o app já inicializado
}

export default function Form() {
  const navigation = useNavigation();
  const route = useRoute();
  const novoJardineteDocId = route.params.novoJardineteDocId;
  const [imagem, setImagem] = useState(null);
  const [localizacao, setLocalizacao] = useState('');
  const [nome, setNome] = useState('');
  const [area, setArea] = useState('');
  const [bacia, setBacia] = useState('');
  const [percapita, setPercapita] = useState('');
  const [densidade, setDensidade] = useState('');
  const [renda, setRenda] = useState('');
  const [patrimonio, setPatrimonio] = useState('');
  const [userName, setUserName] = useState('');
  const [wallpaper, setWallpaper] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [email, setEmail] = useState('');
  const [pracasSeguidas, setPracasSeguidas] = useState([]);
  const firestore = getFirestore(firebaseApp);
  const storage = getStorage();
  const auth = getAuth(firebaseApp);
  const { width } = Dimensions.get('window');
  
  const [selectedImage, setSelectedImage] = useState(null);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [user, setUser] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [showCropper, setShowCropper] = useState(false);

  useEffect(() => {
    const unsubscribe = userSearchData(auth, firestore, storage, navigation, setUserName, setWallpaper, setImageUrl, setEmail, setPracasSeguidas);

    return () => {
      if (unsubscribe && typeof unsubscribe === 'function') {
        unsubscribe();
      }
    };
  }, []);

  useEffect(() => {
    const loadJardineteData = async () => {
      try {
        const jardineteRef = doc(getFirestore(), 'jardinetes', novoJardineteDocId);
        const jardineteSnapshot = await getDoc(jardineteRef);
        if (jardineteSnapshot.exists()) {
          const jardineteData = jardineteSnapshot.data();
          setLocalizacao(jardineteData.localizacao || '');
          setNome(jardineteData.nome || '');
          setArea(jardineteData.area || '');
          setBacia(jardineteData.bacia || '');
          setPercapita(jardineteData.percapita || '');
          setDensidade(jardineteData.densidade || '');
          setRenda(jardineteData.renda || '');
          setPatrimonio(jardineteData.patrimonio || '');
        } else {
          console.error('O documento do jardinete não foi encontrado.');
        }
      } catch (error) {
        console.error('Erro ao carregar os dados do jardinete:', error);
      }
    };

    if (novoJardineteDocId) {
      loadJardineteData();
    }
  }, [novoJardineteDocId]);

  const handleSubmit = async () => {
    try {
      if (imagem) {
        const jardineteRef = doc(getFirestore(), 'jardinetes', novoJardineteDocId);
        const formData = {
          localizacao,
          nome,
          area,
          bacia,
          percapita,
          densidade,
          renda,
          patrimonio,
          jardinetePhoto: imagem  // Usa a imagem cortada
        };
        await updateDoc(jardineteRef, formData);
        console.log('Dados do jardinete atualizados com sucesso!');
        navigation.navigate('Inventory', { novoJardineteDocId });
      } else {
        console.error('Por favor, selecione uma imagem antes de enviar.');
      }
    } catch (error) {
      console.error('Erro ao atualizar os dados do jardinete:', error);
    }
  };

  const selecionarImagem = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert('Desculpe, precisamos das permissões de acesso à câmera para selecionar uma imagem.');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.uri);
      setShowCropper(true);  // Mostra o modal de corte
    }
  };

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);


  const cropImage = async () => {
    try {
      if (selectedImage && croppedAreaPixels) {
        // Usando o ImageManipulator para cortar a imagem
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

        // Faça o upload da imagem cortada
        const response = await fetch(croppedUri);
        const blob = await response.blob();
        const storageRef = ref(storage, `jardinetes/${novoJardineteDocId}/croppedImage.jpg`);
        await uploadBytes(storageRef, blob);

        const croppedImageUrl = await getDownloadURL(storageRef);
        console.log('Cropped Image URL:', croppedImageUrl);
        setImagem(croppedImageUrl);
        setShowCropper(false);
      } else {
        console.error('Imagem selecionada ou área de corte não definida.');
      }
    } catch (error) {
      console.error('Erro ao cortar e salvar a imagem:', error);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container1}>
      <View style={styles.navbar}>

      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={width * 0.025} color="white" />
        </TouchableOpacity>

        <View style={styles.imageContainer}>
          {imageUrl ? (
            <Image
              style={styles.logoImage}
              source={{ uri: imageUrl }}
            />
          ) : (
            <Image
              style={styles.logoImage}
              source={require('../../assets/defaultImage.png')} // Ajuste o caminho para a imagem padrão
            />
          )}
        </View>
      </View>

      <Image source={require('../../assets/vamoscomecar.png')} style={styles.vamos} />

      <View style={styles.container}>
     

      {imagem ? (
  <TouchableOpacity onPress={selecionarImagem}>
    <Image
      source={{ uri: imagem }}
      style={{ 
        width: (355.5555555555556 / 1920) * width, 
        height: (200 / 1920) * width, 
        marginTop: (10 / 1920) * width, 
        alignSelf: 'center' 
      }}
    />
  </TouchableOpacity>
) : (
  <TouchableOpacity style={styles.button1} onPress={selecionarImagem}>
    <Text style={styles.buttonText}>Selecione uma imagem para o jardinete</Text>
  </TouchableOpacity>
)}

        <Text style={styles.label}>Qual a localização do jardinete?</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => setLocalizacao(text)}
          value={localizacao}
        />

        <Text style={styles.label}>Qual é o nome do jardinete?</Text>
        <TextInput
          style={styles.input2}
          onChangeText={text => setNome(text)}
          value={nome}
        />

        <Text style={styles.label}>
          Nos informe também a sua área (m²) → Essas informações podem ser obtidas no{' '}
          <Text
            style={styles.link}
            onPress={() => Linking.openURL('https://www.curitiba.pr.gov.br/conteudo/parques-e-bosques-de-curitiba/267')}
          >
            Site da Prefeitura
          </Text>.
        </Text>

        <TextInput
          style={styles.input}
          onChangeText={text => setArea(text)}
          value={area}
          keyboardType="numeric"
        />

        <Text style={styles.label}>Em qual bacia de rios está localizado? (*)</Text>
        <TextInput
          style={styles.input2}
          onChangeText={text => setBacia(text)}
          value={bacia}
        />

        <Text style={styles.label}>Qual a proporção de áreas verdes por habitantes do bairro onde está localizado este jardinete? (*)</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => setPercapita(text)}
          value={percapita}
          keyboardType="numeric"
        />

        <Text style={styles.label}>Qual é a densidade demográfica deste bairro? (*)</Text>
        <TextInput
          style={styles.input2}
          onChangeText={text => setDensidade(text)}
          value={densidade}
          keyboardType="numeric"
        />

        <Text style={styles.label}>Qual a renda média dos habitantes próximos a este jardinete? (*)</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => setRenda(text)}
          value={renda}
          keyboardType="numeric"
        />

        <Text style={styles.label}>O jardinete possui algum patrimônio ambiental? (*)</Text>
        <TextInput
          style={styles.input2}
          onChangeText={text => setPatrimonio(text)}
          value={patrimonio}
        />

        <Text style={styles.label}>
          (*) Para Curitiba, essas informações podem ser obtidas no site da{' '}
          <TouchableOpacity onPress={openIPPUCWebsite}>
            <Text style={styles.link}>IPPUC</Text>
          </TouchableOpacity>.
        </Text>

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText2}>Continuar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bola3}></View>
      <View style={styles.bola2}></View>
      <View style={styles.bola}></View>

      <View style={styles.imageContainer33}>
        <Image source={require('../../assets/araucarias.png')} style={styles.araucarias} />
      </View>

      <View style={styles.navbar2}>
        <View style={styles.imageContainer22}>
          <Image source={require('../../assets/UtfprBottom.png')} style={styles.utfprImage} />
        </View>
      </View>

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
        sx={{
          color: '#166034', // Cor principal do slider (trilha mínima e polegar)
          '& .MuiSlider-thumb': {
            backgroundColor: '#166034', // Cor do polegar
          },
          '& .MuiSlider-track': {
            backgroundColor: '68A180', // Cor da trilha ativa (mínima)
          },
          '& .MuiSlider-rail': {
            backgroundColor: '#d3d3d3', // Cor da trilha inativa (máxima)
          },
        }}
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
        aspect={4 / 3}
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
}
