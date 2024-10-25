import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Image, useWindowDimensions, Linking, Modal, Picker} from 'react-native';
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

const openPrefeituraWebsite = () => {
  Linking.openURL('https://www.curitiba.pr.gov.br/conteudo/parques-e-bosques-de-curitiba/267');
};

const openLink = (url) => {
  Linking.openURL(url).catch(err => console.error("Erro ao abrir o link:", err));
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
  const [patrimonio, setPatrimonio] = useState('possui'); 
  const [userName, setUserName] = useState('');
  const [wallpaper, setWallpaper] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [email, setEmail] = useState('');
  const [pracasSeguidas, setPracasSeguidas] = useState([]);
  const firestore = getFirestore(firebaseApp);
  const storage = getStorage();
  const auth = getAuth(firebaseApp);
  const { width, height } = useWindowDimensions(); 
  const [showImageError, setShowImageError] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [user, setUser] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [showCropper, setShowCropper] = useState(false);
  const myStyles = styles();
  
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
  
          // Verifica se o documento possui uma imagem e a define
          if (jardineteData.jardinetePhoto) {
            setImagem(jardineteData.jardinetePhoto);
          }
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
    if (!imagem) {
      setShowImageError(true); // Exibe o erro caso a imagem não seja selecionada
      return;
    }
    try {
      const jardineteRef = doc(getFirestore(), 'jardinetes', novoJardineteDocId);
      const formData = {
        localizacao,
        nome,
        area,
        bacia,
        percapita,
        densidade,
        renda,
        patrimonio: patrimonio || 'possui',
        jardinetePhoto: imagem
      };
      await updateDoc(jardineteRef, formData);
      console.log('Dados do jardinete atualizados com sucesso!');
      navigation.navigate('Inventory', { novoJardineteDocId });
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
    <ScrollView contentContainerStyle={myStyles.container1} >
      <View style={myStyles.navbar}>

      <TouchableOpacity style={myStyles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={width * 0.025} color="white" />
        </TouchableOpacity>

        <View style={myStyles.imageContainer}>
          {imageUrl ? (
            <Image
              style={myStyles.logoImage}
              source={{ uri: imageUrl }}
            />
          ) : (
            <Image
              style={myStyles.logoImage}
              source={require('../../assets/defaultImage.png')} // Ajuste o caminho para a imagem padrão
            />
          )}
        </View>
      </View>

      <Image source={require('../../assets/vamoscomecar.png')} style={myStyles.vamos} />

      <View style={myStyles.container}>
     

      {imagem ? (
  <TouchableOpacity onPress={selecionarImagem}>
    <Image
      source={{ uri: imagem }}  // Exibe a imagem já existente
      style={{ 
        width: (355.5555555555556 / 1920) * width, 
        height: (200 / 1920) * width, 
        marginTop: (10 / 1920) * width, 
        alignSelf: 'center' 
      }}
    />
  </TouchableOpacity>
) : (
  <TouchableOpacity style={myStyles.button1} onPress={selecionarImagem}>
    <Text style={myStyles.buttonText}>Selecione uma imagem para o jardinete</Text>
  </TouchableOpacity>
)}


<View style={myStyles.textRow}>
  <Text style={myStyles.label}>O nome do jardinete é</Text>
  <TextInput
    style={[myStyles.inputInline, myStyles.textInputCorrido]}
    onChangeText={text => setNome(text)}
    value={nome}
  />
  
  <Text style={myStyles.label}> e fica no bairro </Text>
  <TextInput
    style={[myStyles.inputInline, myStyles.textInputCorrido]}
    onChangeText={text => setLocalizacao(text)}
    value={localizacao}
  />
  <Text style={myStyles.label}>. (**)</Text>
</View>

<View style={myStyles.textRow}>
  <Text style={myStyles.label}>Sua área é de </Text>
  <TextInput
    style={[myStyles.inputInline, myStyles.textInputCorrido]}
    onChangeText={text => setArea(text)}
    value={area}
    keyboardType="numeric"
  />
  <Text style={myStyles.label}> m². (*)</Text>
</View>

<View style={myStyles.textRow}>
  <Text style={myStyles.label}>Faz parte da bacia do rio </Text>
  <TextInput
    style={[myStyles.inputInline, myStyles.textInputCorrido]}
    onChangeText={text => setBacia(text)}
    value={bacia}
  />
   <Text style={myStyles.label}>. (*)</Text>
</View>

<View style={myStyles.textRow}>
  <Text style={myStyles.label}>A proporção de áreas verdes por habitante é de </Text>
  <TextInput
    style={[myStyles.inputInline, myStyles.textInputCorrido]}
    onChangeText={text => setPercapita(text)}
    value={percapita}
    keyboardType="numeric"
  />
  <Text style={myStyles.label}> m²/habitante. (**)</Text>
</View>

<View style={myStyles.textRow}>
  <Text style={myStyles.label}>A densidade demográfica é de </Text>
  <TextInput
    style={[myStyles.inputInline, myStyles.textInputCorrido]}
    onChangeText={text => setDensidade(text)}
    value={densidade}
    keyboardType="numeric"
  />
  <Text style={myStyles.label}> habitantes/km². (**)</Text>
</View>

<View style={myStyles.textRow}>
  <Text style={myStyles.label}>A renda média é de R$ </Text>
  <TextInput
    style={[myStyles.inputInline, myStyles.textInputCorrido]}
    onChangeText={text => setRenda(text)}
    value={renda}
    keyboardType="numeric"
  />
   <Text style={myStyles.label}>mensais. (*)</Text>
</View>

<View style={myStyles.textRow}>
  <Text style={myStyles.label}>O jardinete </Text>
  <Picker
    selectedValue={patrimonio}
    style={myStyles.picker}
    onValueChange={(itemValue) => setPatrimonio(itemValue)}
  >
    <Picker.Item label="possui" value="possui" />
    <Picker.Item label="não possui" value="não possui" />
  </Picker>
  <Text style={myStyles.label}> algum patrimônio ambiental.</Text>
</View>
      
<Text style={myStyles.label1}>
          (*) Essas informações podem ser obtidas no{' '}
          <TouchableOpacity onPress={openPrefeituraWebsite}>
            <Text style={myStyles.link}>Site da Prefeitura</Text>
          </TouchableOpacity>.
        </Text>

        <Text style={myStyles.label1}>
          (**) Para Curitiba, essas informações podem ser obtidas no site da{' '}
          <TouchableOpacity onPress={openIPPUCWebsite}>
            <Text style={myStyles.link}>IPPUC</Text>
          </TouchableOpacity>.
        </Text>
        {showImageError && (
          <Text style={myStyles.errorText}>Por favor, selecione uma imagem antes de enviar.</Text>
        )}
        <TouchableOpacity style={myStyles.button} onPress={handleSubmit}>
          <Text style={myStyles.buttonText2}>Continuar</Text>
        </TouchableOpacity>
      </View>

      <View style={myStyles.bola3}></View>
      <View style={myStyles.bola2}></View>
      <View style={myStyles.bola}></View>

      <View style={myStyles.imageContainer33}>
        <Image source={require('../../assets/araucarias.png')} style={myStyles.araucarias} />
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

      <Modal visible={showCropper} animationType="slide">
  <View style={myStyles.cropperContainer}>
    
    {/* Slider e botões de zoom */}
    <View style={myStyles.controlsContainer}>
      <Slider
        value={zoom}
        min={1}
        max={3}
        step={0.1}
        onChange={(e, newValue) => setZoom(newValue)}
        aria-labelledby="zoom-slider"
        style={myStyles.slider}
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
      <View style={myStyles.zoomButtons}>
        <TouchableOpacity onPress={() => setZoom(zoom + 0.1)}>
          <MdZoomIn size={24} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setZoom(zoom - 0.1)}>
          <MdZoomOut size={24} />
        </TouchableOpacity>
      </View>
    </View>

    {/* Área de corte da imagem */}
    <View style={myStyles.cropperWrapper}>
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

    <View style={myStyles.row}>
    <TouchableOpacity style={myStyles.cropButton} onPress={cropImage}>
      <Text style={myStyles.cropButtonText}>Escolher Imagem</Text>
    </TouchableOpacity>
    <TouchableOpacity
        style={myStyles.cropButton1}
        onPress={() => setShowCropper(false)}
      >
        <Text style={myStyles.cropButtonText}>Voltar</Text>
      </TouchableOpacity>
      </View>
  </View>
</Modal>


    </ScrollView>
  );
}
