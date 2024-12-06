import React, { useState, useEffect } from 'react';
import {
  View,
  TouchableOpacity,
  useWindowDimensions,
  Image,
  Text,
  Modal,
} from 'react-native';
import { styles } from '../admin/styles';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { getAuth } from 'firebase/auth';
import {
  getFirestore,
  doc,
  deleteDoc,
  collection,
  getDocs,
  updateDoc,
  query,
  where,
  getDoc,
} from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { userSearchData } from '../../../functions';

export default function Admin() {
  const myStyles = styles();
  const { width } = useWindowDimensions();
  const navigation = useNavigation();
  const auth = getAuth();
  const firestore = getFirestore();

  const [imageUrl, setImageUrl] = useState(null);
  const [userName, setUserName] = useState('');
  const [wallpaper, setWallpaper] = useState(null);
  const [email, setEmail] = useState('');
  const [pracasSeguidas, setPracasSeguidas] = useState([]);
  const [jardinetes, setJardinetes] = useState([]);
  const [selectedJardinete, setSelectedJardinete] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  // Busca de informações do usuário
  useEffect(() => {
    const unsubscribe = userSearchData(
      auth,
      firestore,
      getStorage(),
      navigation,
      setUserName,
      setWallpaper,
      setImageUrl,
      setEmail,
      setPracasSeguidas
    );

    return () => {
      if (unsubscribe && typeof unsubscribe === 'function') {
        unsubscribe();
      }
    };
  }, []);

  // Busca de jardinetes
  useEffect(() => {
    async function fetchJardinetes() {
      try {
        const jardinetesRef = collection(firestore, 'jardinetes');
        const snapshot = await getDocs(jardinetesRef);
  
        const jardinetesData = await Promise.all(
          snapshot.docs.map(async (docSnap) => {
            const jardineteData = { id: docSnap.id, ...docSnap.data() };
  
            try {
              // Buscar todos os usuários na coleção 'users'
              const usersRef = collection(firestore, 'users');
              const userQuery = query(usersRef, where('jardinetes', 'array-contains', jardineteData.id));
              const userSnapshot = await getDocs(userQuery);
  
              if (!userSnapshot.empty) {
                // Pega o primeiro usuário que corresponde (assumindo que há apenas um)
                const userDoc = userSnapshot.docs[0];
                const userData = userDoc.data();
  
                jardineteData.userName = userData.username || 'Usuário sem nome';
              } else {
                console.warn(`Nenhum usuário encontrado para o jardinete ${jardineteData.id}.`);
                jardineteData.userName = 'Usuário desconhecido';
              }
            } catch (error) {
              console.error(`Erro ao buscar usuário para o jardinete ${jardineteData.id}:`, error);
              jardineteData.userName = 'Erro ao buscar usuário';
            }
  
            return jardineteData;
          })
        );
  
        setJardinetes(jardinetesData);
      } catch (error) {
        console.error('Erro ao buscar jardinetes:', error);
      }
    }
  
    fetchJardinetes();
  }, []);
  
  // Função para editar jardinete
  const handleEdit = (id) => {
    navigation.navigate('Form2', { novoJardineteDocId: id });
  };

  // Abrir o modal de exclusão
  const handleOpenDeleteModal = (id) => {
    setSelectedJardinete(id);
    setModalVisible(true);
  };

  // Fechar o modal
  const handleCloseModal = () => {
    setModalVisible(false);
    setSelectedJardinete(null);
  };

  // Excluir jardinete
  const handleDelete = async () => {
    if (!selectedJardinete) return;

    try {
      const jardineteId = selectedJardinete;

      // Excluir o jardinete
      await deleteDoc(doc(firestore, 'jardinetes', jardineteId));

      // Atualizar o array de jardinetes do usuário
      const usersRef = collection(firestore, 'users');
      const userQuery = query(usersRef, where('jardinetes', 'array-contains', jardineteId));
      const userSnapshot = await getDocs(userQuery);

      if (!userSnapshot.empty) {
        userSnapshot.forEach(async (userDoc) => {
          const userData = userDoc.data();
          const updatedJardinetes = userData.jardinetes.filter((id) => id !== jardineteId);

          await updateDoc(doc(firestore, 'users', userDoc.id), {
            jardinetes: updatedJardinetes,
          });
        });
      }

      setJardinetes((prev) => prev.filter((jardinete) => jardinete.id !== jardineteId));
      handleCloseModal();
    } catch (error) {
      console.error('Erro ao excluir jardinete:', error);
    }
  };

  return (
    <View style={myStyles.container}>
      <View style={myStyles.navbar}>
        <TouchableOpacity
          style={myStyles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={width * 0.025} color="white" />
        </TouchableOpacity>

        <View style={myStyles.imageContainer}>
          <Image
            style={myStyles.logoImage}
            source={
              imageUrl
                ? { uri: imageUrl }
                : require('../../assets/defaultImage.png')
            }
          />
        </View>
      </View>

      {jardinetes.map((jardinete, index) => (
        <View
          key={jardinete.id}
          style={[
            myStyles.card,
            { marginTop: index === 0 ? (200 / 1920) * width : (10 / 1920) * width },
          ]}
        >
          <Text style={myStyles.name}>
            {jardinete.nome} por {jardinete.userName}
          </Text>

          <Image
            source={
              jardinete.jardinetePhoto
                ? { uri: jardinete.jardinetePhoto }
                : require('../../assets/defaultImage.png')
            }
            style={myStyles.image}
          />

          <View style={myStyles.buttonsContainer}>
            <TouchableOpacity
              style={myStyles.editButton}
              onPress={() => handleEdit(jardinete.id)}
            >
              <Text style={myStyles.buttonText1}>Editar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={myStyles.deleteButton}
              onPress={() => handleOpenDeleteModal(jardinete.id)}
            >
              <Text style={myStyles.buttonText1}>Excluir</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}

      {/* Modal de exclusão */}
      <Modal
        animationType="slide"
        transparent
        visible={modalVisible}
        onRequestClose={handleCloseModal}
      >
        <View style={myStyles.modalContainer}>
          <View style={myStyles.modalContent}>
            <Text style={myStyles.modalText}>
              Tem certeza de que deseja excluir este jardinete?
            </Text>
            <View style={myStyles.modalButtons}>
              <TouchableOpacity
                style={myStyles.cancelButton}
                onPress={handleCloseModal}
              >
                <Text style={myStyles.buttonText1}>Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={myStyles.confirmButton}
                onPress={handleDelete}
              >
                <Text style={myStyles.buttonText1}>Excluir</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
