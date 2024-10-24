import React, { useState } from 'react';
import { View, ScrollView, TextInput, TouchableOpacity, Text, Image, Alert, useWindowDimensions } from 'react-native';
import { styles } from '../redefinir/styles';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { Ionicons } from '@expo/vector-icons';




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
  const myStyles = styles();
  const { width, height } = useWindowDimensions(); 
  
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
    <ScrollView style={myStyles.scroll}>
    <View style={myStyles.container}>
        <TouchableOpacity style={myStyles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={width * 0.035} color="white" />
        </TouchableOpacity>
  <View style={myStyles.circBorda}></View>
      <LinearGradient colors={['#FFFEF4', '#166034']} style={myStyles.card}>
        <View style={myStyles.row}>
          <View style={myStyles.column}>
            <View style={myStyles.circ}>
              <Text style={myStyles.textCirc}>Recuperar seu acesso é simples!</Text>                
            </View>
            <View style={myStyles.row}>
              <Image source={require('../../assets/bigTree.png')} style={myStyles.bigTree} />
              <Image source={require('../../assets/smallTree.png')} style={myStyles.smallTree} />
            </View>
          </View>

          <View style={myStyles.barra}></View>

          <View style={myStyles.column}>
            <View style={myStyles.textRecContainer}>  
              <Text style={myStyles.textRec}>Preencha o campo abaixo com seu endereço de e-mail para receber instruções sobre como criar uma nova senha no Amigos dos Jardinetes.</Text>                
            </View>
                    
            <View style={myStyles.inputContainer}> 
              <TextInput
                style={[myStyles.input, { fontSize: width * 0.0135416666666667 }]}
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
                <Text style={myStyles.errorText}>{errorMessage}</Text>
              ) : null}

              <TouchableOpacity onPress={handlePasswordReset}>
                <LinearGradient 
                  colors={['#271C00', '#8D6500']} 
                  start={{ x: 0, y: 0 }} 
                  end={{ x: 1, y: 0 }} 
                  style={myStyles.button}
                >
                  <Text style={myStyles.buttonText}>Redefinir senha</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </LinearGradient>
      <View style={myStyles.circBorda1}></View>
      <View style={myStyles.circCanto}></View>
     
    </View>
    </ScrollView>
  );
}
