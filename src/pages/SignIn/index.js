import React, { useState, useEffect, useRef } from 'react';
import { ScrollView, ImageBackground, View, Text, TextInput, TouchableOpacity, Image, Dimensions } from 'react-native';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import * as animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../SignIn/styles';
import { checkLoggedInUser } from '../../../functions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';

const { width, height } = Dimensions.get('window');

const firebaseConfig = {
  apiKey: "AIzaSyBe8nNAzDIXpriQ2fqE7QFHAMtETRbiN84",
  authDomain: "amigosdosjardinetes.firebaseapp.com",
  projectId: "amigosdosjardinetes",
  storageBucket: "amigosdosjardinetes.appspot.com",
  messagingSenderId: "381072997535",
  appId: "1:381072997535:web:157abb3a076162a90836aa"
};

const firebase_initialize = initializeApp(firebaseConfig);
const auth = getAuth(firebase_initialize);

export default function SignIn() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [animate, setAnimate] = useState(false);

  WebBrowser.maybeCompleteAuthSession();

  const [request, response, promptAsync] = Google.useAuthRequest({
    iosClientId: '<IOS_CLIENT_ID>',
    androidClientId: '381072997535-926po31tefpm6knqfml8si4ki83hb9rj.apps.googleusercontent.com',
    webClientId: '381072997535-ab8js7tf8aie1s2lplbkae4uummgpll1.apps.googleusercontent.com',
    expoClientId: '381072997535-dduhtvsr4tt4apo5orl1pjhsccmom6mv.apps.googleusercontent.com',
  }, {
    projectNameForProxy: "@jardinetes/Amigos_dos_Jardinetes",
    redirectUri: "https://auth.expo.io/@jardinetes/Amigos_dos_Jardinetes/start"
  });

  const handleLoginPress = async () => {
    try {
      setError(null);
      await signInWithEmailAndPassword(auth, email, password);
      // Login successful
      console.log('Login successful');
      navigation.navigate('Menu');
    } catch (error) {
      // Handle login error and update the error state
      console.error('Login error:', error);
      setError('Credenciais inválidas');
    }
  };

  const [userInfo, setUserInfo] = useState(false);

  useEffect(() => {
    const checkLoggedInUser = async () => {
      try {
        const user = await checkLoggedInUser();
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

    checkLoggedInUser();
  }, [navigation]);

  useEffect(() => {
    checkLoggedInUser(auth, navigation);
  }, [navigation]);

  async function handleSignINWithGoogle() {
    try {
      const user = await AsyncStorage.getItem('@user');
      if (!user) {
        if (response?.type === 'success' && response.authentication?.accessToken) {
          await getUserInfo(response.authentication.accessToken);
          navigation.navigate('Menu');
        }
      } else {
        setUserInfo(JSON.parse(user));
        navigation.navigate('Menu');
      }
    } catch (error) {
      console.error('Error during Google login:', error);
      // Log or handle the error appropriately
    }
  };

  React.useEffect(() => {
    handleSignINWithGoogle();
  }, [response]);

  const getUserInfo = async (token) => {
    if (!token) return;
    try {
      const response = await fetch(
        "https://www.googleapis.com/userinfo/v2/me",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (!response.ok) {
        throw new Error(`Google API request failed with status ${response.status}`);
      }

      const user = await response.json();
      await AsyncStorage.setItem("@user", JSON.stringify(user));
      setUserInfo(user);
    } catch (error) {
      console.error('Error fetching user info from Google:', error);
      // Log or handle the error appropriately
    }
  };
  const scrollViewRef = useRef(null);

  return (
    <ScrollView horizontal>
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        ref={scrollViewRef}
      >
        <ImageBackground source={require('../../assets/login_page.png')} resizeMode="cover" style={styles.image}>
          <View style={styles.navbar}>
            <TouchableOpacity onPress={() => navigation.navigate('PaginaInicial')}>
              <Text style={styles.navbarButton}>PÁGINA INICIAL</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('')}>
              <Text style={styles.navbarButton}>AÇÕES SOCIAIS</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('JardinetesMap')}>
              <Text style={styles.navbarButton}>FAÇA SUA PARTE</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('')}>
              <Text style={styles.navbarButton}>QUEM SOMOS</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.replace('Contato')}>
              <Text style={styles.navbarButton}>CONTATO</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.replace('SignIn')}>
              <Text style={styles.navbarButton}>LOGIN</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.card}>
            <View style={styles.containerwelcome}>
              <Image source={require('../../assets/welcome.png')} style={styles.welcome} />
            </View>

            <View style={styles.containerLogo}>
              <TouchableOpacity onPress={() => setAnimate(!animate)}>
                <animatable.Image
                  animation={animate ? { from: { rotateY: '0deg' }, to: { rotateY: '360deg' } } : null}
                  easing="linear"
                  duration={1000}
                  source={require('../../assets/logo.png')}
                  style={styles.imagelogo}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.textcont}>
              <Text style={styles.inpText}>Email:</Text>
            </View>

            <TextInput
              style={[
                styles.input,
                error && styles.errorInput,
              ]}
              onChangeText={text => setEmail(text)}
            />

            <View style={styles.textcont2}>
              <Text style={styles.inpText2}>Senha:</Text>
            </View>

            <TextInput
              style={[
                styles.input2,
                error && styles.errorInput,
              ]}
              onChangeText={text => setPassword(text)}
              secureTextEntry={true}
            />

            {error && (
              <Text style={styles.errorText}>{error}</Text>
            )}

            <TouchableOpacity style={styles.forgot} onPress={() => navigation.navigate('Redefinir')}>
              <Text style={styles.forgotText}>Esqueci minha senha</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonLogin} onPress={handleLoginPress}>
              <Text style={styles.buttonTextLogin}>ENTRAR</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonGoogle}>
              <Image source={require('../../assets/google.png')} style={styles.imageGoogle} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.signUp} onPress={() => navigation.navigate('SignUp')}>
              <Text style={styles.signUpText}>Cadastre-se</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.treeView1}>
            <Image source={require('../../assets/smallTree.png')} style={styles.smallTree} />
          </View>

          <View style={styles.treeView2}>
            <Image source={require('../../assets/smallTree.png')} style={styles.smallTree} />
          </View>

          <View style={styles.treeView3}>
            <Image source={require('../../assets/bigTree.png')} style={styles.bigTree} />
          </View>

          <View style={styles.treeView4}>
            <Image source={require('../../assets/bigTree.png')} style={styles.bigTree} />
          </View>
        </ImageBackground>
      </ScrollView>
    </ScrollView>
  );
}
