import React, { useState, useEffect } from 'react';
import { ImageBackground, View, Text, StyleSheet, TextInput, TouchableOpacity, Button } from 'react-native';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../SignIn/styles';
import { checkLoggedInUser } from '../../../functions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import Image from './assets/Fundo.png'


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


export default function SignIn()  {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  WebBrowser.maybeCompleteAuthSession()

  const [request, response, promptAsync] = Google.useAuthRequest({
    iosClientId: '<IOS_CLIENT_ID>',
    androidClientId: '381072997535-926po31tefpm6knqfml8si4ki83hb9rj.apps.googleusercontent.com',
    webClientId: '381072997535-ab8js7tf8aie1s2lplbkae4uummgpll1.apps.googleusercontent.com',
    expoClientId: '381072997535-dduhtvsr4tt4apo5orl1pjhsccmom6mv.apps.googleusercontent.com',
  },{
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
}, [response])

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


  return (
    <View style={styles.container}>
      <ImageBackground source={Image} resizeMode="cover" style={styles.image}>
        <View style={styles.containerMiddle}>
          <View style={styles.button}>
            <TouchableOpacity
                onPress={() => alert('aoba')}>
                <Text style={styles.hudText}>   PÁGINA INICIAL </Text>
            </TouchableOpacity> 
          </View>
          <View style={styles.button}>
            <TouchableOpacity
                onPress={() => alert('aoba')}>
                <Text style={styles.hudText}>   AÇÕES SOCIAIS </Text>
            </TouchableOpacity> 
          </View>
          <View style={styles.button}>
            <TouchableOpacity
                onPress={() => alert('aoba')}>
                <Text style={styles.hudText}>   QUEM SOMOS </Text>
            </TouchableOpacity> 
          </View>
          <View style={styles.button}>
            <TouchableOpacity
                onPress={() => alert('aoba')}>
                <Text style={styles.hudText}>   CONTATO </Text>
            </TouchableOpacity> 
          </View>
        </View>
        <View style={styles.containerInput}>
          <View style={styles.userInput}>
            <TextInput
              
              style={[
                styles.input,
                error && styles.errorInput,
              ]}
              onChangeText={text => setEmail(text)}
          />
          </View>
          <View style={styles.passwordInput}>
            <TextInput
              
              style={[
                styles.input,
                error && styles.errorInput,
              ]}
              onChangeText={text => setPassword(text)}
              secureTextEntry={true}
            />
          </View>
          <View style={styles.containerBotton}>
            <View style={styles.entrarButton}>
              <TouchableOpacity onPress={handleLoginPress}>
                <Text style={styles.entrartext}>ENTRAR</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.googleButton} 
                title='Sign in with Google'
                onPress={() => promptAsync()}>
                <Text> </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.forgotPlace} 
                onPress={() =>alert('infelizmente ainda não implementado. :(')}>
                <Text style={styles.forgotText}> esqueci minha senha </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

