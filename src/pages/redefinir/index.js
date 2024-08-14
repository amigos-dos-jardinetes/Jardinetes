import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Image, Alert } from 'react-native';
import { styles } from '../redefinir/styles';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBe8nNAzDIXpriQ2fqE7QFHAMtETRbiN84",
  authDomain: "amigosdosjardinetes.firebaseapp.com",
  projectId: "amigosdosjardinetes",
  storageBucket: "amigosdosjardinetes.appspot.com",
  messagingSenderId: "381072997535",
  appId: "1:381072997535:web:157abb3a076162a90836aa"
};

// Inicializar o Firebase
let app;
if (getApps().length === 0) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApp();
}

const auth = getAuth(app);

export default function Redefinir() {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); // Estado para armazenar a mensagem de erro
  const navigation = useNavigation();

  const handlePasswordReset = async () => {
    setErrorMessage(''); // Limpa qualquer mensagem de erro anterior

    if (!email) {
      setErrorMessage('Por favor, insira um e-mail.');
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      Alert.alert('Sucesso', 'Um e-mail com as instruções foi enviado para ' + email);
      navigation.navigate('SignIn'); // Redireciona para a página de inserção do código
    } catch (error) {
      console.log('Erro Firebase:', error.code); // Log para verificação do erro

      if (error.code === 'auth/invalid-email') {
        setErrorMessage('O formato do e-mail é inválido.');
      } else if (error.code === 'auth/user-not-found') {
        setErrorMessage('Este e-mail não está cadastrado.');
      } else {
        setErrorMessage('Ocorreu um erro. Tente novamente.');
      }
    }
  };

  return (
    <View style={styles.container}>
      <LinearGradient colors={['#FFFEF4', '#166034']} style={styles.card}>
        <View style={styles.row}>
          <View style={styles.column}>
            <View style={styles.circ}>
              <Text style={styles.textCirc}>Recuperar seu acesso é simples!</Text>                
            </View>
            <View style={styles.row}>
              <Image source={require('../../assets/bigTree.png')} style={styles.bigTree} />
              <Image source={require('../../assets/smallTree.png')} style={styles.smallTree} />
            </View>
          </View>

          <View style={styles.barra}></View>

          <View style={styles.column}>
            <View style={styles.textRecContainer}>  
              <Text style={styles.textRec}>Preencha o campo abaixo com seu endereço de e-mail para receber instruções sobre como criar uma nova senha no Amigos dos Jardinetes.</Text>                
            </View>
                    
            <View style={styles.inputContainer}> 
              <TextInput
                style={styles.input}
                placeholder="E-mail"
                placeholderTextColor="#999"
                value={email}
                onChangeText={(text) => {
                  setEmail(text);
                  setErrorMessage(''); // Limpa a mensagem de erro ao alterar o texto
                }}
              />

              {/* Exibe a mensagem de erro abaixo do TextInput */}
              {errorMessage ? (
                <Text style={styles.errorText}>{errorMessage}</Text>
              ) : null}

              <TouchableOpacity onPress={handlePasswordReset}>
                <LinearGradient 
                  colors={['#271C00', '#8D6500']} 
                  start={{ x: 0, y: 0 }} 
                  end={{ x: 1, y: 0 }} 
                  style={styles.button}
                >
                  <Text style={styles.buttonText}>Redefinir senha</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
}
