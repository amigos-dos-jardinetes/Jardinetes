import React, { useState, useEffect, useRef } from 'react';
import { ScrollView, ImageBackground, View, Text, TextInput, TouchableOpacity, Image, useWindowDimensions } from 'react-native';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import * as animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../SignIn/styles';
import { checkLoggedInUser } from '../../../functions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';



//Configuração do Firebase
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
  const myStyles = styles();
  const { width, height } = useWindowDimensions(); 
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

//Função para Login e navegação até a página de Profile
  const handleLoginPress = async () => {
    try {
      setError(null);
      await signInWithEmailAndPassword(auth, email, password);

      console.log('Login successful');
      navigation.navigate('Menu');
    } catch (error) {

      console.error('Login error:', error);
      setError('Credenciais inválidas');
    }
  };

  const [userInfo, setUserInfo] = useState(false);
//Verifica se o usuário já está logado para redirecionar ao Menu
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
//Função de Login com o Google que não funcionou
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

    }
  };
  const scrollViewRef = useRef(null);

  return (
    <ScrollView horizontal>
      <ScrollView
        contentContainerStyle={myStyles.scrollViewContent}
        ref={scrollViewRef}
      >
        <ImageBackground source={require('../../assets/login_page.png')} resizeMode="cover" style={myStyles.image}>
          <View style={myStyles.navbar}>
            <TouchableOpacity onPress={() => navigation.navigate('PaginaInicial')}>
              <Text style={myStyles.navbarButton}>PÁGINA INICIAL</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('acoesSociais')}>
              <Text style={myStyles.navbarButton}>AÇÕES SOCIAIS</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('JardinetesMap')}>
              <Text style={myStyles.navbarButton}>FAÇA SUA PARTE</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('quemSomos')}>
              <Text style={myStyles.navbarButton}>QUEM SOMOS</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.replace('Contato')}>
              <Text style={myStyles.navbarButton}>CONTATO</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.replace('SignIn')}>
              <Text style={myStyles.navbarButton}>LOGIN</Text>
            </TouchableOpacity>
          </View>

          <View style={myStyles.card}>
            <View style={myStyles.containerwelcome}>
              <Image source={require('../../assets/welcome.png')} style={myStyles.welcome} />
            </View>

            <View style={myStyles.containerLogo}>
              <TouchableOpacity onPress={() => setAnimate(!animate)}>
                <animatable.Image
                  animation={animate ? { from: { rotateY: '0deg' }, to: { rotateY: '360deg' } } : null}
                  easing="linear"
                  duration={1000}
                  source={require('../../assets/logo.png')}
                  style={myStyles.imagelogo}
                />
              </TouchableOpacity>
            </View>
            <View style={myStyles.textcont}>
              <Text style={myStyles.inpText}>E-mail:</Text>
            </View>

            <TextInput
              style={[
                myStyles.input,
                error && myStyles.errorInput,
              ]}
              onChangeText={text => setEmail(text)}
            />

            <View style={myStyles.textcont2}>
              <Text style={myStyles.inpText2}>Senha:</Text>
            </View>

            <TextInput
              style={[
                myStyles.input2,
                error && myStyles.errorInput,
              ]}
              onChangeText={text => setPassword(text)}
              secureTextEntry={true}
            />

            {error && (
              <Text style={myStyles.errorText}>{error}</Text>
            )}

            <TouchableOpacity style={myStyles.forgot} onPress={() => navigation.navigate('Redefinir')}>
              <Text style={myStyles.forgotText}>Esqueci minha senha</Text>
            </TouchableOpacity>

            <TouchableOpacity style={myStyles.buttonLogin} onPress={handleLoginPress}>
              <Text style={myStyles.buttonTextLogin}>ENTRAR</Text>
            </TouchableOpacity>


            <TouchableOpacity style={myStyles.signUp} onPress={() => navigation.navigate('SignUp')}>
              <Text style={myStyles.signUpText}>Cadastre-se</Text>
            </TouchableOpacity>
          </View>

          <View style={myStyles.treeView1}>
            <Image source={require('../../assets/smallTree.png')} style={myStyles.smallTree} />
          </View>

          <View style={myStyles.treeView2}>
            <Image source={require('../../assets/smallTree.png')} style={myStyles.smallTree} />
          </View>

          <View style={myStyles.treeView3}>
            <Image source={require('../../assets/bigTree.png')} style={myStyles.bigTree} />
          </View>

          <View style={myStyles.treeView4}>
            <Image source={require('../../assets/bigTree.png')} style={myStyles.bigTree} />
          </View>
        </ImageBackground>
      </ScrollView>
    </ScrollView>
  );
}
