  import React, { useState, useCallback, useEffect, useRef } from 'react'; 
  import { View, ScrollView, TouchableOpacity, Text, Image, useWindowDimensions, Modal, Picker, Linking } from 'react-native';
  import { getFirestore, doc, updateDoc } from 'firebase/firestore';
  import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
  import { initializeApp } from 'firebase/app';
  import { getAuth, onAuthStateChanged } from 'firebase/auth';
  import { userSearchData } from '../../../functions';
  import { styles } from '../Config/styles.js'; 
  import { Ionicons } from '@expo/vector-icons';
  import { useNavigation } from '@react-navigation/native';
  import Cropper from 'react-easy-crop';
  import Slider from '@mui/material/Slider'; 
  import * as ImageManipulator from 'expo-image-manipulator';
  import { MdZoomIn, MdZoomOut } from 'react-icons/md';
  import * as ImagePicker from 'expo-image-picker';

  const firebaseConfig = {
    apiKey: "AIzaSyBe8nNAzDIXpriQ2fqE7QFHAMtETRbiN84",
    authDomain: "amigosdosjardinetes.firebaseapp.com",
    projectId: "amigosdosjardinetes",
    storageBucket: "amigosdosjardinetes.appspot.com",
    messagingSenderId: "381072997535",
    appId: "1:381072997535:web:157abb3a076162a90836aa"
  };

  const firebaseApp = initializeApp(firebaseConfig);
  const auth = getAuth(firebaseApp);
  
  export default function Config() {
    const firestore = getFirestore();
    const storage = getStorage(firebaseApp);
    const [userName, setUserName] = useState('');
    const [wallpaper, setWallpaper] = useState(null);
    const [email, setEmail] = useState('');
    const [pracasSeguidas, setPracasSeguidas] = useState([]);
    const [imageUrl, setImageUrl] = useState(null);  // Para armazenar a URL da imagem de perfil do usuário
    const scrollViewRef = useRef(null);
    const myStyles = styles();
    const { width, height } = useWindowDimensions(); 
    const navigation = useNavigation();
    const [selectedImage, setSelectedImage] = useState(null);
    const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
    const [user, setUser] = useState(null);
    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1);
    const [showCropper, setShowCropper] = useState(false);
    const [showWallpaperCropper, setShowWallpaperCropper] = useState(false);
    const [profileCrop, setProfileCrop] = useState({ x: 0, y: 0 });
const [profileZoom, setProfileZoom] = useState(1);
const [profileCroppedAreaPixels, setProfileCroppedAreaPixels] = useState(null);

const [wallpaperCrop, setWallpaperCrop] = useState({ x: 0, y: 0 });
const [wallpaperZoom, setWallpaperZoom] = useState(1);
const [wallpaperCroppedAreaPixels, setWallpaperCroppedAreaPixels] = useState(null);
const openLink = (url) => {
  Linking.openURL(url).catch(err => console.error("Erro ao abrir o link:", err));
};

    // Fetch user data and imageUrl when the component mounts
    useEffect(() => {
      const unsubscribe = userSearchData(auth, firestore, storage, navigation, setUserName, setWallpaper, setImageUrl, setEmail, setPracasSeguidas);
  
      return () => {
        if (unsubscribe && typeof unsubscribe === 'function') {
          unsubscribe();
        }
      };
    }, []);
  
    // Monitora a autenticação e configura o usuário
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user);  // Salva o usuário logado no estado
          setUserName(user.displayName || '');  // Opcional: pega o nome do usuário
        }
      });
  
      return () => {
        unsubscribe();
      };
    }, []);
  
    const selecionarImagem = async (isWallpaper = false) => {
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
        if (isWallpaper) {
          setShowWallpaperCropper(true); // Abre o modal de corte para wallpaper
        } else {
          setShowCropper(true); // Abre o modal de corte para a foto de perfil
        }
      }
    };
  
    const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
      setCroppedAreaPixels(croppedAreaPixels);
    }, []);
  
    const cropImage = async () => {
      try {
        if (selectedImage && croppedAreaPixels && user) { // Verifica se o usuário está logado
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
  
          // Faz o upload da imagem cortada
          const response = await fetch(croppedUri);
          const blob = await response.blob();
  
          // Salva a imagem no Firebase Storage usando o ID do usuário
          const storageRef = ref(storage, `users/${user.uid}/profilePicture.jpg`);
          await uploadBytes(storageRef, blob);
  
          // Obtém a URL da imagem cortada
          const croppedImageUrl = await getDownloadURL(storageRef);
          console.log('Cropped Image URL:', croppedImageUrl);
  
          // Atualiza o campo imageUrl no documento do usuário no Firestore
          const userDocRef = doc(firestore, 'users', user.uid);
          await updateDoc(userDocRef, { imageUrl: croppedImageUrl });
  
          // Atualiza o estado local e esconde o cropper
          setImageUrl(croppedImageUrl);  // Atualiza a imagem exibida na interface
          setShowCropper(false);
        } else {
          console.error('Imagem selecionada ou área de corte não definida.');
        }
      } catch (error) {
        console.error('Erro ao cortar e salvar a imagem:', error);
      }
    };


    const cropWallpaper = async () => {
      try {
        if (selectedImage && croppedAreaPixels && user) {
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
    
          // Faz o upload da imagem cortada do wallpaper
          const response = await fetch(croppedUri);
          const blob = await response.blob();
    
          const storageRef = ref(storage, `users/${user.uid}/wallpaper.jpg`);
          await uploadBytes(storageRef, blob);
    
          const croppedWallpaperUrl = await getDownloadURL(storageRef);
          console.log('Cropped Wallpaper URL:', croppedWallpaperUrl);
    
          // Atualiza o campo wallpaper no documento do usuário no Firestore
          const userDocRef = doc(firestore, 'users', user.uid);
          await updateDoc(userDocRef, { wallpaper: croppedWallpaperUrl });
    
          // Atualiza o estado local e esconde o cropper
          setWallpaper(croppedWallpaperUrl);
          setShowWallpaperCropper(false);
        }
      } catch (error) {
        console.error('Erro ao cortar e salvar o wallpaper:', error);
      }
    };
  
    return (
      <ScrollView ref={scrollViewRef} style={myStyles.container3}>
        <View style={myStyles.container}>
          <View style={myStyles.navbar}>
            <TouchableOpacity style={myStyles.backButton} onPress={() => navigation.goBack()}>
              <Ionicons name="arrow-back" size={width * 0.025} color="white" />
            </TouchableOpacity>
  
            <View style={myStyles.imageContainer}>
              {imageUrl ? (
                <Image
                  style={myStyles.logoImage}
                  source={{ uri: imageUrl }}  // Exibe a imagem de perfil do usuário
                />
              ) : (
                <Image
                  style={myStyles.logoImage}
                  source={require('../../assets/defaultImage.png')}
                />
              )}
            </View>
          </View>
  
          <View style={myStyles.perfil}>   
            <View style={myStyles.balao}>
              <Text style={myStyles.title}>Troque sua foto de perfil</Text>
            </View>
  
            <View style={myStyles.card1}>
              {imageUrl ? (
                <TouchableOpacity onPress={() => selecionarImagem(false)}>

                  <Image
                    source={{ uri: imageUrl }}  // Exibe a imagem de perfil
                    style={{ 
                      width: (250 / 1920) * width, 
                      height: (250 / 1920) * width, 
                      alignSelf: 'center',
                      borderRadius: '50%',
                    }}
                  />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity onPress={() => selecionarImagem(false)}>
                  <Text style={myStyles.buttonText}>Clique aqui</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
  

          <View style={myStyles.wallpaper}>   
            <View style={myStyles.balao2}>
              <Text style={myStyles.title}>Mude seu wallpaper</Text>
            </View>
            <View style={myStyles.card2}>
            {wallpaper ? (
               <TouchableOpacity onPress={() => selecionarImagem(true)}>
               <Image
                 source={{ uri: wallpaper }}  
                 style={{ 
                   width: (400 / 1920) * width, 
                   height: (711.1111111111111 / 1920) * width, 
                   alignSelf: 'center',
                 }}
               />
             </TouchableOpacity>
              ) : (
                <TouchableOpacity onPress={() => selecionarImagem(true)}>
                  <Text style={myStyles.buttonText}>Clique aqui</Text>
                </TouchableOpacity>
              )}
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
  
        <Modal visible={showCropper} animationType="slide">
  <View style={myStyles.cropperContainer}>
    <View style={myStyles.controlsContainer}>
    <Slider
  value={profileZoom}  // Use o estado profileZoom
  min={1}
  max={3}
  step={0.1}
  onChange={(e, newValue) => setProfileZoom(newValue)}  // Atualize o profileZoom corretamente
  aria-labelledby="zoom-slider"
  style={{
    color: '#166034',
    width: 300,
  }}
  sx={{
    '& .MuiSlider-thumb': {
      backgroundColor: '#166034',
    },
    '& .MuiSlider-track': {
      backgroundColor: '#68A180',
    },
    '& .MuiSlider-rail': {
      backgroundColor: '#d3d3d3',
    },
  }}
/>
      <View style={myStyles.zoomButtons}>
        <TouchableOpacity onPress={() => setProfileZoom(profileZoom + 0.1)}>
          <MdZoomIn size={24} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setProfileZoom(profileZoom - 0.1)}>
          <MdZoomOut size={24} />
        </TouchableOpacity>
      </View>
    </View>

    {/* Image cropper para a imagem de perfil */}
    <View style={myStyles.cropperWrapper}>
      <Cropper
        image={selectedImage}
        crop={profileCrop} // Controle do crop para a imagem de perfil
        zoom={profileZoom}
        aspect={1} // Aspect ratio 16:16 para a imagem de perfil
        onCropChange={setProfileCrop}
        onCropComplete={onCropComplete}
        onZoomChange={setProfileZoom}
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

<Modal visible={showWallpaperCropper} animationType="slide">
  <View style={myStyles.cropperContainer}>
    <View style={myStyles.controlsContainer}>
    <Slider
  value={wallpaperZoom}  // Use o estado wallpaperZoom
  min={1}
  max={3}
  step={0.1}
  onChange={(e, newValue) => setWallpaperZoom(newValue)}  // Atualize o wallpaperZoom corretamente
  aria-labelledby="zoom-slider"
  style={{
    color: '#166034',
    width: 300,
  }}
  sx={{
    '& .MuiSlider-thumb': {
      backgroundColor: '#166034',
    },
    '& .MuiSlider-track': {
      backgroundColor: '#68A180',
    },
    '& .MuiSlider-rail': {
      backgroundColor: '#d3d3d3',
    },
  }}
/>
      <View style={myStyles.zoomButtons}>
        <TouchableOpacity onPress={() => setWallpaperZoom(wallpaperZoom + 0.1)}>
          <MdZoomIn size={24} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setWallpaperZoom(wallpaperZoom - 0.1)}>
          <MdZoomOut size={24} />
        </TouchableOpacity>
      </View>
    </View>

    {/* Image cropper para o wallpaper */}
    <View style={myStyles.cropperWrapper}>
      <Cropper
        image={selectedImage}
        crop={wallpaperCrop} // Controle do crop para o wallpaper
        zoom={wallpaperZoom}
        aspect={9 / 16} // Aspect ratio 9:16 para o wallpaper
        onCropChange={setWallpaperCrop}
        onCropComplete={onCropComplete}
        onZoomChange={setWallpaperZoom}
      />
    </View>

    <View style={myStyles.row}>
      <TouchableOpacity style={myStyles.cropButton} onPress={cropWallpaper}>
        <Text style={myStyles.cropButtonText}>Escolher Wallpaper</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={myStyles.cropButton1}
        onPress={() => setShowWallpaperCropper(false)}
      >
        <Text style={myStyles.cropButtonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  </View>
</Modal>

        
      </ScrollView>
    );
  }