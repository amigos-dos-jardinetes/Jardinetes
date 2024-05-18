import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore, collection, addDoc, updateDoc, doc, arrayUnion } from 'firebase/firestore';
import { styles } from '../Accept/styles';
import Form from '../Form/index'; 

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
const firestore = getFirestore(firebaseApp);

export default function Accept() {
  const navigation = useNavigation();
  const [novoJardineteDocId, setNovoJardineteDocId] = useState(null); // Estado para armazenar o ID do documento do jardinete

  const iniciarEnvioJardinete = async () => {
    try {
      const user = auth.currentUser;
      if (user) {
        const jardinetesRef = collection(firestore, 'jardinetes');
        const novoJardineteDocRef = await addDoc(jardinetesRef, {});

        const userDocRef = doc(firestore, 'users', user.uid);
        await updateDoc(userDocRef, {
          jardinetes: arrayUnion(novoJardineteDocRef.id)
        });

        console.log('Novo jardinete criado com sucesso!');
        setNovoJardineteDocId(novoJardineteDocRef.id); // Defina o ID do novo documento do jardinete no estado
        navigation.navigate('Form', { novoJardineteDocId: novoJardineteDocRef.id }); // Redireciona para a página de Form e passa o ID do novo documento como parâmetro
      } else {
        console.log('Nenhum usuário logado.');
      }
    } catch (error) {
      console.error('Erro ao iniciar o envio do jardinete:', error);
    }
  };

  const voltarParaMenu = () => {
    navigation.navigate('Menu');
  };

  return (
    <View style={styles.container}>
    <Text style={styles.title}>Você deseja iniciar o envio de um novo jardinete?</Text>
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.button} onPress={iniciarEnvioJardinete}>
        <Text style={styles.buttonText}>Iniciar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={voltarParaMenu}>
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  </View>
  );
};
