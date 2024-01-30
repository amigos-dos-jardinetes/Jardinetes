import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../SignIn/styles';
import { handleLogin, checkLoggedInUser } from '../../../functions';

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

  const handleLoginPress = () => {
    handleLogin(auth, email, password, navigation);
  };

  useEffect(() => {
    checkLoggedInUser(auth, navigation);
  }, []); 

  return (
    <View style={styles.container}>
      <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
        <Text style={styles.message}>Bem-vindo</Text>
      </Animatable.View>

      <Animatable.View animation="fadeInUp" style={styles.containerForm}>
        <Text style={styles.title}>Email</Text>
        <TextInput
          placeholder="Digite um email"
          style={styles.input}
          onChangeText={text => setEmail(text)}
        />

        <Text style={styles.title}>Senha</Text>
        <TextInput
          placeholder="Sua senha"
          style={styles.input}
          onChangeText={text => setPassword(text)}
          secureTextEntry={true}
        />

        <TouchableOpacity style={styles.button} onPress={handleLoginPress}>
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonRegister} onPress={() => navigation.navigate('SignUp')}>
          <Text>Cadastre-se</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}