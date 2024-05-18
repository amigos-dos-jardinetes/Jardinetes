import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged, currentUser } from 'firebase/auth';
import { getFirestore, updateDoc, doc, getDoc } from 'firebase/firestore';

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
const db = getFirestore(firebaseApp);

const ButtonWithOptions = () => {
  const [user, setUser] = useState(null);
  const [showOptions1, setShowOptions1] = useState(false);
  const [selectedOption1, setSelectedOption1] = useState(null);

  const [showOptions2, setShowOptions2] = useState(false);
  const [selectedOption2, setSelectedOption2] = useState(null);

  const [showOptions3, setShowOptions3] = useState(false);
  const [selectedOption3, setSelectedOption3] = useState(null);

  const [showOptions4, setShowOptions4] = useState(false);
  const [selectedOption4, setSelectedOption4] = useState(null);

  const options1 = ["Opção 1", "Opção 2", "Opção 3", "Opção 4"];
  const options2 = ["Opção A", "Opção B", "Opção C", "Opção D"];
  const options3 = ["Opção X", "Opção Y", "Opção Z"];
  const options4 = ["Opção Alpha", "Opção Beta", "Opção Gamma"];

  useEffect(() => {
    const fetchUserData = async () => {
      if (user) {
        const userDocRef = doc(db, 'users', user.uid);
        const userDoc = await getDoc(userDocRef);

        if (userDoc.exists()) {
          const userInventory = userDoc.data().inventory || [];
          setSelectedOption1(userInventory[0] || options1[0]);
          setSelectedOption2(userInventory[1] || options2[0]);
          setSelectedOption3(userInventory[2] || options3[0]);
          setSelectedOption4(userInventory[3] || options4[0]);
        }
      }
    };

    fetchUserData();
  }, [user]);
  
  const handleOptionPress = async (option, index) => {
    if (user) {
      try {
        const userDocRef = doc(db, 'users', user.uid);
        
       
        
        // Obtém o documento do usuário para verificar se já existe o campo "inventory"
        const userDoc = await getDoc(userDocRef);
  
        // Se "inventory" já existir, usa o valor existente, caso contrário, usa um array vazio
        const currentInventory = userDoc.exists() ? userDoc.data().inventory || [] : [];
  
        // Garante que o array tem pelo menos o número de elementos necessários
        while (currentInventory.length <= index) {
          currentInventory.push(null);
        }
  
        // Atualiza o array com a nova opção
        currentInventory[index] = option;
  
        // Atualiza o documento no Firestore
        await updateDoc(userDocRef, {
          inventory: currentInventory,
        });
  

        switch (index) {
          case 0:
            setSelectedOption1(option);
            setShowOptions1(false);
            break;
          case 1:
            setSelectedOption2(option);
            setShowOptions2(false);
            break;
          case 2:
            setSelectedOption3(option);
            setShowOptions3(false);
            break;
          case 3:
            setSelectedOption4(option);
            setShowOptions4(false);
            break;
          default:
            break;
        }
      } catch (error) {
        console.error('Erro ao salvar no Firebase:', error);
      }
    } else {
      console.warn('Nenhum usuário autenticado.');
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  

  return (
    <View style={styles.container}>
    {/* Botão 1 */}
    <TouchableOpacity onPress={() => setShowOptions1(!showOptions1)} style={styles.button}>
      <Text style={styles.buttonText}>{selectedOption1 || "Selecionar Opção 1"}</Text>
    </TouchableOpacity>

    {showOptions1 && (
      <View style={styles.optionsContainer}>
        {options1.map((option, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleOptionPress(option, 0)}
            style={styles.optionButton}
          >
            <Text style={styles.optionText}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>
    )}

    {/* Botão 2 */}
    <TouchableOpacity onPress={() => setShowOptions2(!showOptions2)} style={styles.button}>
      <Text style={styles.buttonText}>{selectedOption2 || "Selecionar Opção 2"}</Text>
    </TouchableOpacity>

    {showOptions2 && (
      <View style={styles.optionsContainer}>
        {options2.map((option, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleOptionPress(option, 1)}
            style={styles.optionButton}
          >
            <Text style={styles.optionText}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>
    )}

    {/* Botão 3 */}
    <TouchableOpacity onPress={() => setShowOptions3(!showOptions3)} style={styles.button}>
      <Text style={styles.buttonText}>{selectedOption3 || "Selecionar Opção 3"}</Text>
    </TouchableOpacity>

    {showOptions3 && (
      <View style={styles.optionsContainer}>
        {options3.map((option, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleOptionPress(option, 2)}
            style={styles.optionButton}
          >
            <Text style={styles.optionText}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>
    )}

    {/* Botão 4 */}
    <TouchableOpacity onPress={() => setShowOptions4(!showOptions4)} style={styles.button}>
      <Text style={styles.buttonText}>{selectedOption4 || "Selecionar Opção 4"}</Text>
    </TouchableOpacity>

    {showOptions4 && (
      <View style={styles.optionsContainer}>
        {options4.map((option, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleOptionPress(option, 3)}
            style={styles.optionButton}
          >
            <Text style={styles.optionText}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>
    )}
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  optionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  optionButton: {
    backgroundColor: 'lightblue',
    padding: 10,
    borderRadius: 5,
    margin: 5,
  },
  optionText: {
    fontSize: 16,
  },
});

export default ButtonWithOptions;
