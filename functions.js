import AsyncStorage from '@react-native-async-storage/async-storage';
import { signOut, onAuthStateChanged, getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc, getFirestore, setDoc } from 'firebase/firestore';  // Corrected import
import { ref, getDownloadURL, getStorage, uploadBytes } from 'firebase/storage';
import { Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';





const firebaseConfig = {
  apiKey: "AIzaSyBe8nNAzDIXpriQ2fqE7QFHAMtETRbiN84",
  authDomain: "amigosdosjardinetes.firebaseapp.com",
  projectId: "amigosdosjardinetes",
  storageBucket: "amigosdosjardinetes.appspot.com",
  messagingSenderId: "381072997535",
  appId: "1:381072997535:web:157abb3a076162a90836aa"
};




//Funções da página Menu
export async function handleLogout(auth, navigation) {
  try {
    await signOut(auth);
    await AsyncStorage.removeItem('userToken');
    navigation.replace('Welcome');
  } catch (error) {
    console.error('Erro ao fazer logout:', error);
  }
}

export async function userSearchData(auth, firestore, storage, navigation, setUserName, setImageUrl) {
  const unsubscribe = onAuthStateChanged(auth, async (user) => {
    if (user) {
      try {
        const userDoc = doc(firestore, 'users', user.uid);
        const userSnapshot = await getDoc(userDoc);

        if (userSnapshot.exists()) {
          const userData = userSnapshot.data();
          setUserName(userData.username || 'Usuário');

          const profileImagePath = userData.imageUrl || '';

          if (profileImagePath) {
            const storageRef = ref(storage, profileImagePath);

            getDownloadURL(storageRef)
              .then((url) => {
                setImageUrl(url);
              })
              .catch((error) => {
                console.error('Erro ao obter a URL da imagem:', error);
              });
          }
        }
      } catch (error) {
        console.error('Erro ao buscar informações do usuário:', error);
        navigation.replace('Welcome');
      }
    } else {
      setUserName('');
      setImageUrl(null);
    }
  });

  return unsubscribe;
}
//Término das funções da página Menu


//Funções da página Welcome
export const rotateImage = (setAnimate) => {
    setAnimate(true);
    setTimeout(() => {
        setAnimate(false);
    }, 1000);
};

export const checkUserLoggedIn = async () => {
    try {
        const userData = await AsyncStorage.getItem('userData');
        return userData ? JSON.parse(userData) : null;
    } catch (error) {
        console.error('Erro ao verificar usuário logado:', error);
        return null;
    }
};

export const navigateToSignIn = (navigation) => {
    navigation.navigate('SignIn');
};
//Término das funções da página Welcome




//Funções da página SignIn
export const handleLogin = async (auth, email, password, navigation) => {
  try {
    const userLogin = await signInWithEmailAndPassword(auth, email, password);
    await AsyncStorage.setItem('userToken', userLogin.user.uid);
    navigation.replace('Menu');
  } catch (error) {
    AlertLogin();
  }
};

export const AlertLogin = () =>
  Alert.alert('Erro de Login', 'Email ou senha incorretos.', [
    { text: 'OK', onPress: () => console.log('OK Pressed') },
  ]);



  export const checkLoggedInUser = async (auth, navigation) => {
    try {
      const user = await auth.currentUser;
      if (user) {
        console.log('Usuário logado:', user);
        navigation.replace('Menu');
      } else {
        console.log('Nenhum usuário logado');
      }
    } catch (error) {
      console.error('Erro ao verificar usuário logado:', error);
    }
  };
//Término das funções da página SignIn



//Funções da página SignUp
export const checkUserLoggedInSignUp = async (auth) => {
  try {
      const user = auth.currentUser;
      return user ? user : null;
  } catch (error) {
      console.error('Erro ao verificar usuário logado:', error);
      return null;
  }
};

export const handleRegister = async (auth, firestore, storage, email, password, username, selectedImage, navigation) => {
  try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await AsyncStorage.setItem('userToken', userCredential.user.uid);
      const imageUrl = await uploadImageToFirebase(storage, selectedImage);

      await setDoc(doc(firestore, 'users', userCredential.user.uid), {
          username: username,
          email: email,
          imageUrl: imageUrl,
      });

      navigation.reset({
          index: 0,
          routes: [{ name: 'Menu' }],
      });

      navigation.replace('Menu');
  } catch (error) {
      console.error(error);
      AlertRegister();
  }
};

export const pickImageAsync = async () => {
  try {
      let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          quality: 1,
          aspect: [4, 4],
      });

      if (!result.canceled) {
          return result.uri;
      } else {
          AlertImage();
          return null;
      }
  } catch (error) {
      console.error('Erro ao selecionar a imagem:', error);
      return null;
  }
};

export const uploadImageToFirebase = async (storage, uri) => {
  const storageRef = ref(storage, `images/${Math.random().toString(36).substring(7)}`);

  try {
      const response = await fetch(uri);
      const blob = await response.blob();

      // Faz o upload do arquivo blob para o Storage
      const snapshot = await uploadBytes(storageRef, blob);

      // Obtém a URL da imagem carregada
      const url = await getDownloadURL(snapshot.ref);
      return url; // Retorna a URL da imagem carregada
  } catch (error) {
      console.error('Erro ao enviar a imagem para o Storage:', error);
      return null;
  }
};

const AlertRegister = () =>
  Alert.alert('Erro de Registro', 'Por favor, tente novamente.', [
      { text: 'OK', onPress: () => console.log('OK Pressed') },
  ]);

const AlertImage = () =>
  Alert.alert('Erro!', 'Você não selecionou nenhuma imagem, por favor tente novamente.', [
      { text: 'OK', onPress: () => console.log('OK Pressed') },
  ]);

//Término das funções da página SignUp