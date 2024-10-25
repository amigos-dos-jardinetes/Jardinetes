import React, { useState, useEffect, useRef } from 'react';
import { View, ScrollView, TouchableOpacity, Text, Image, useWindowDimensions, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../minhasAnalises/styles.js';
import { getAuth } from 'firebase/auth';
import { getFirestore, doc, getDoc, deleteDoc, updateDoc, arrayRemove} from 'firebase/firestore';
import { Ionicons } from '@expo/vector-icons';
import { userSearchData } from '../../../functions';
import { getStorage } from 'firebase/storage';

export default function minhasAnalises() {
  const navigation = useNavigation();
  const scrollViewRef = useRef(null);
  const [jardinetes, setJardinetes] = useState([]);
  const [imageUrl, setImageUrl] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;
  const auth = getAuth();
  const firestore = getFirestore();
  const storage = getStorage();
  const myStyles = styles();
  const { width, height } = useWindowDimensions(); 
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedJardineteId, setSelectedJardineteId] = useState(null); // Estado para armazenar o ID do jardinete selecionado para exclusão
  const [userName, setUserName] = useState('');
  const [wallpaper, setWallpaper] = useState(null);
  const [email, setEmail] = useState('');
  const [pracasSeguidas, setPracasSeguidas] = useState([]);
  
  useEffect(() => {
    const unsubscribe = userSearchData(auth, firestore, storage, navigation, setUserName, setWallpaper, setImageUrl, setEmail, setPracasSeguidas);

    return () => {
      if (unsubscribe && typeof unsubscribe === 'function') {
        unsubscribe();
      }
    };
  }, []);


  useEffect(() => {
    const unsubscribe = userSearchData(auth, firestore, storage, navigation, setJardinetes, setImageUrl);

    return () => {
      if (unsubscribe && typeof unsubscribe === 'function') {
        unsubscribe();
      }
    };
  }, []);

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

  const jardinetesToShow = Array.isArray(jardinetes)
    ? jardinetes.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)
    : [];

  const totalPages = Math.ceil(jardinetes.length / itemsPerPage);

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

  // Função para abrir o modal e definir o ID do jardinete a ser excluído
  const openDeleteModal = (jardineteId) => {
    setSelectedJardineteId(jardineteId);
    setModalVisible(true);
  };

  // Função para excluir o jardinete selecionado
  const deleteJardinete = async () => {
    try {
      // Exclui o documento do jardinete
      await deleteDoc(doc(firestore, 'jardinetes', selectedJardineteId));
  
      // Remove o ID do jardinete do array de jardinetes no documento do usuário
      const userRef = doc(firestore, 'users', auth.currentUser.uid);
      await updateDoc(userRef, {
        jardinetes: arrayRemove(selectedJardineteId),
      });
  
      // Atualiza o estado local, removendo o jardinete excluído
      setJardinetes((prevJardinetes) => prevJardinetes.filter((j) => j.id !== selectedJardineteId));
  
      setModalVisible(false); // Fecha o modal após a exclusão
    } catch (error) {
      console.error('Erro ao excluir o jardinete:', error);
    }
  };

  return (
    <ScrollView ref={scrollViewRef} style={myStyles.container3}>
      <View style={myStyles.circle}></View>
      <View style={myStyles.circle2}></View>
      <View style={myStyles.giantRet}></View>
      <View style={myStyles.container}>
        <View style={myStyles.navbar}>
          <TouchableOpacity style={myStyles.backButton} onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={width * 0.025} color="white" />
          </TouchableOpacity>

          <View style={myStyles.imageContainer}>
            {imageUrl ? (
              <Image
                style={myStyles.logoImage}
                source={{ uri: imageUrl }}
              />
            ) : (
              <Image
                style={myStyles.logoImage}
                source={require('../../assets/defaultImage.png')}
              />
            )}
          </View>
        </View>

        <View style={myStyles.card}>
          <View style={myStyles.jardinetesContainer}>
            {jardinetesToShow.length > 0 ? (
              jardinetesToShow.map((jardinete, index) => (
                <View key={index} style={myStyles.jardineteWrapper}>
                  <View style={myStyles.jardineteItem}>
                    {/* Botão de exclusão */}
                    <TouchableOpacity
                      style={myStyles.deleteButton}
                      onPress={() => openDeleteModal(jardinete.id)}
                    >
                      <Ionicons name="close" size={width * 0.0166666666666667} color="red" />
                    </TouchableOpacity>

                    <Text style={myStyles.jardineteName}>{jardinete.nome}</Text>
                    <Image style={myStyles.jardinetePhoto} source={{ uri: jardinete.jardinetePhoto }} />
                  </View>

                  <View style={myStyles.jardineteActions}>
                    <TouchableOpacity
                      style={myStyles.viewButton}
                      onPress={() => navigation.navigate('moreInfo', { novoJardineteDocId: jardinete.id })}
                    >
                      <Text style={myStyles.buttonText}>Visualizar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                      style={myStyles.editButton}
                      onPress={() => navigation.navigate('Form', { novoJardineteDocId: jardinete.id })}
                    >
                      <Text style={myStyles.buttonText}>Editar</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              ))
            ) : (
              <Text>Nenhum jardinete disponível</Text>
            )}
          </View>

          {jardinetes.length > itemsPerPage && (
            <View style={myStyles.paginationContainer}>
              <TouchableOpacity onPress={goToPreviousPage} disabled={currentPage === 0}>
                <Ionicons name="arrow-back" size={width * 0.0260416666666667} color={currentPage === 0 ? "#ccc" : "#271C00"} />
              </TouchableOpacity>

              <Text style={myStyles.pageNumberText}>{currentPage + 1}</Text>

              <TouchableOpacity onPress={goToNextPage} disabled={currentPage === totalPages - 1}>
                <Ionicons name="arrow-forward" size={width * 0.0260416666666667} color={currentPage === totalPages - 1 ? "#ccc" : "#271C00"} />
              </TouchableOpacity>
            </View>
          )}
        </View>

        <View style={myStyles.araucariaContainer}>
          <Image source={require('../../assets/araucarias.png')} style={myStyles.araucarias} />
        </View>

        <View style={myStyles.navbar2}>
          <View style={myStyles.imageContainer22}>
            <Image source={require('../../assets/UtfprBottom.png')} style={myStyles.utfprImage3} />
          </View>
        </View>
      </View>

      {/* Modal de confirmação de exclusão */}
      <Modal
  visible={modalVisible}
  transparent={true}
  animationType="fade"
  onRequestClose={() => setModalVisible(false)}
>
  <View style={myStyles.modalContainer}>
    <View style={myStyles.modalContent}>
      <Text style={myStyles.modalText}>Tem certeza que deseja excluir este jardinete?</Text>

      <View style={myStyles.modalButtons}>
        <TouchableOpacity
          style={myStyles.cancelButton}
          onPress={() => setModalVisible(false)}
        >
          <Text style={myStyles.buttonText2}>Cancelar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={myStyles.confirmButton}
          onPress={deleteJardinete}
        >
          <Text style={myStyles.buttonText2}>Excluir</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
</Modal>
    </ScrollView>
  );
}
