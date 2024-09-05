import React, { useState, useEffect, useRef } from 'react';
import { View, ScrollView, TouchableOpacity, Text, Image, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../minhasAnalises/styles.js';
import { getAuth } from 'firebase/auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { Ionicons } from '@expo/vector-icons';
import { userSearchData } from '../../../functions';
import { getStorage } from 'firebase/storage';

export default function minhasAnalises() {
  const navigation = useNavigation();
  const scrollViewRef = useRef(null);
  const [jardinetes, setJardinetes] = useState([]);
  const [imageUrl, setImageUrl] = useState(null);
  const [currentPage, setCurrentPage] = useState(0); // Estado para a paginação
  const itemsPerPage = 3;
  const auth = getAuth();
  const firestore = getFirestore();
  const storage = getStorage();
  const [userName, setUserName] = useState('');
  const [wallpaper, setWallpaper] = useState(null);
  const [email, setEmail] = useState('');
  const [pracasSeguidas, setPracasSeguidas] = useState([]);
  const { width, height } = Dimensions.get('window');
  const [novoJardineteDocId, setNovoJardineteDocId] = useState(null);
  
  useEffect(() => {
    const unsubscribe = userSearchData(auth, firestore, storage, navigation, setJardinetes, setImageUrl);

    return () => {
      if (unsubscribe && typeof unsubscribe === 'function') {
        unsubscribe();
      }
    };
  }, []);

  useEffect(() => {
    const unsubscribe = userSearchData(auth, firestore, storage, navigation, setUserName, setWallpaper, setImageUrl, setEmail, setPracasSeguidas);

    return () => {
      if (unsubscribe && typeof unsubscribe === 'function') {
        unsubscribe();
      }
    };
  }, []);


  // Função para buscar os detalhes dos jardinetes na coleção 'jardinetes'
  const fetchJardineteDetails = async () => {
    const userRef = doc(firestore, 'users', auth.currentUser.uid);
    const userSnap = await getDoc(userRef);
  
    if (userSnap.exists()) {
      const userJardinetes = userSnap.data().jardinetes || [];
  
      const jardinetesData = await Promise.all(userJardinetes.map(async (jardineteId) => {
        const jardineteRef = doc(firestore, 'jardinetes', jardineteId);
        const jardineteSnap = await getDoc(jardineteRef);
        
        if (jardineteSnap.exists()) {
          return { id: jardineteSnap.id, ...jardineteSnap.data() }; // Inclui o ID
        } else {
          return null;
        }
      }));
  
      setJardinetes(jardinetesData.filter(j => j));
    }
  };
  
  useEffect(() => {
    fetchJardineteDetails();
  }, []);

  // Função para calcular os jardinetes a serem mostrados na página atual
  const jardinetesToShow = Array.isArray(jardinetes)
    ? jardinetes.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)
    : [];

  const totalPages = Math.ceil(jardinetes.length / itemsPerPage);

  // Funções para navegação de páginas
  const goToNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <ScrollView ref={scrollViewRef} style={styles.container3}>
      <View style={styles.circle}></View>
      <View style={styles.circle2}></View>
      <View style={styles.giantRet}></View>
      <View style={styles.container}>
        <View style={styles.navbar}>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={width * 0.025} color="white" />
          </TouchableOpacity>

          <View style={styles.imageContainer}>
              {imageUrl ? (
                <Image
                  style={styles.logoImage}
                  source={{
                    uri: imageUrl,
                  }}
                />
              ) : (
                <Image
                style={styles.logoImage}
                source={require('../../assets/defaultImage.png')} // Ajuste o caminho para a imagem padrão
            />
              )}
            </View>
          </View>

        <View style={styles.card}>
          <View style={styles.jardinetesContainer}>
            {jardinetesToShow.length > 0 ? (
              jardinetesToShow.map((jardinete, index) => (
                <View key={index} style={styles.jardineteWrapper}>
                  {/* Quadrado do jardinete */}
                  <View style={styles.jardineteItem}>
                    <Text style={styles.jardineteName}>{jardinete.nome}</Text> {/* Nome acima da imagem */}
                    <Image style={styles.jardinetePhoto} source={{ uri: jardinete.jardinetePhoto }} />
                  </View>

                  {/* Novo quadrado com botões de visualizar e editar fora do quadrado do jardinete */}
                  <View style={styles.jardineteActions}>
                    <TouchableOpacity
                      style={styles.viewButton}
                      onPress={() => navigation.navigate('', { novoJardineteDocId: jardinete.id })}
                    >
                      <Text style={styles.buttonText}>Visualizar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
  style={styles.editButton}
  onPress={() => {
    console.log("Jardinete ID:", jardinete.id); // Log do ID do jardinete
    navigation.navigate('Form', { novoJardineteDocId: jardinete.id });
  }}
>
  <Text style={styles.buttonText}>Editar</Text>
</TouchableOpacity>
                  </View>
                </View>
              ))
            ) : (
              <Text>Nenhum jardinete disponível</Text>
            )}
          </View>

          {jardinetes.length > itemsPerPage && (
            <View style={styles.paginationContainer}>
              <TouchableOpacity onPress={goToPreviousPage} disabled={currentPage === 0}>
                <Ionicons name="arrow-back" size={width * 0.0260416666666667} color={currentPage === 0 ? "#ccc" : "#271C00"} />
              </TouchableOpacity>

              <Text style={styles.pageNumberText}>{currentPage + 1}</Text> {/* Número da página atual */}

              <TouchableOpacity onPress={goToNextPage} disabled={currentPage === totalPages - 1}>
                <Ionicons name="arrow-forward" size={width * 0.0260416666666667} color={currentPage === totalPages - 1 ? "#ccc" : "#271C00"} />
              </TouchableOpacity>
            </View>
          )}
        </View>

        <View style={styles.araucariaContainer}>
          <Image source={require('../../assets/araucarias.png')} style={styles.araucarias} />
        </View>

        <View style={styles.navbar2}>
          <View style={styles.imageContainer22}>
            <Image source={require('../../assets/UtfprBottom.png')} style={styles.utfprImage3} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
