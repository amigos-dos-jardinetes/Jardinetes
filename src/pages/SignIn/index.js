import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../SignIn/styles';
import { checkLoggedInUser } from '../../../functions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';

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

  async function handleSignINWithGoogle() {
    try {
        const user = await AsyncStorage.getItem('@user');
        if (!user) {
            if (response?.type === 'success' && response.authentication?.accessToken) {
                await getUserInfo(response.authentication.accessToken);
                
            }
        } else {
            setUserInfo(JSON.parse(user));
            navigation.navigate('Menu');
        }
    } catch (error) {
        console.error('Error during Google login:', error);
        // Log or handle the error appropriately
    }
}
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
  const [request, response, promptAsync] = Google.useAuthRequest({
      androidClientId: '381072997535-926po31tefpm6knqfml8si4ki83hb9rj.apps.googleusercontent.com',
      webClientId: '381072997535-ab8js7tf8aie1s2lplbkae4uummgpll1.apps.googleusercontent.com',
  });
  useEffect(() => {
      const checkLoggedInUser = async () => {
          try {
              const user = await checkUserLoggedIn();
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

  useEffect(() => {
    checkLoggedInUser(auth, navigation);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text>{JSON.stringify(userInfo, null, 2)}</Text>
      <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
        <Text style={styles.message}>Bem-vindo</Text>
      </Animatable.View>

      <Animatable.View animation="fadeInUp" style={styles.containerForm}>
        <Text style={styles.title}>Email</Text>
        <TextInput
          placeholder="Digite um email"
          style={[
            styles.input,
            error && styles.errorInput,
          ]}
          onChangeText={text => setEmail(text)}
        />

        <Text style={styles.title}>Senha</Text>
        <TextInput
          placeholder="Sua senha"
          style={[
            styles.input,
            error && styles.errorInput,
          ]}
          onChangeText={text => setPassword(text)}
          secureTextEntry={true}
        />

        <TouchableOpacity style={styles.button} onPress={handleLoginPress}>
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>

        {error && (
          <Text style={styles.errorText}>
            {error}
          </Text>
        )}

<TouchableOpacity 
         style={styles.button}
        onPress={async () => {
              const result = await promptAsync();
              if (result.type === 'success') {
                  // Handle success, possibly call getUserInfo with result.authentication.accessToken
              } else if (result.type === 'cancel') {
                  // Handle cancellation
              } else {
                  // Handle other cases
              }
          }}>
            <Text style={styles.buttonText}>Acessar com o Google</Text>
        </TouchableOpacity>        

        <TouchableOpacity
          style={styles.buttonRegister}
          onPress={() => navigation.navigate('SignUp')}>
          <Text>Cadastre-se</Text>
        </TouchableOpacity>


       
      </Animatable.View>
    </View>
  );
}

