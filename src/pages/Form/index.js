import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Image, Dimensions, Linking } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { getFirestore, doc, updateDoc, getDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { styles } from '../Form/styles';
import * as ImagePicker from 'expo-image-picker';
import { getStorage, ref, uploadString, getDownloadURL } from 'firebase/storage';
import { Ionicons } from '@expo/vector-icons';
import { initializeApp } from 'firebase/app';
import { userSearchData } from '../../../functions';

const firebaseConfig = {
  apiKey: "AIzaSyBe8nNAzDIXpriQ2fqE7QFHAMtETRbiN84",
  authDomain: "amigosdosjardinetes.firebaseapp.com",
  projectId: "amigosdosjardinetes",
  storageBucket: "amigosdosjardinetes.appspot.com",
  messagingSenderId: "381072997535",
  appId: "1:381072997535:web:157abb3a076162a90836aa"
};

const openIPPUCWebsite = () => {
  Linking.openURL('https://www.ippuc.org.br');
};

const firebaseApp = initializeApp(firebaseConfig);

export default function Form() {
  const navigation = useNavigation();
  const route = useRoute();
  const novoJardineteDocId = route.params.novoJardineteDocId;
  const [imagem, setImagem] = useState(null);
  const [localizacao, setLocalizacao] = useState('');
  const [nome, setNome] = useState('');
  const [area, setArea] = useState('');
  const [bacia, setBacia] = useState('');
  const [percapita, setPercapita] = useState('');
  const [densidade, setDensidade] = useState('');
  const [renda, setRenda] = useState('');
  const [patrimonio, setPatrimonio] = useState('');
  const [userName, setUserName] = useState('');
  const [wallpaper, setWallpaper] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [email, setEmail] = useState('');
  const [pracasSeguidas, setPracasSeguidas] = useState([]);
  const firestore = getFirestore(firebaseApp);
  const storage = getStorage();
  const auth = getAuth(firebaseApp);
  const { width, height } = Dimensions.get('window');

  useEffect(() => {
    const unsubscribe = userSearchData(auth, firestore, storage, navigation, setUserName, setWallpaper, setImageUrl, setEmail, setPracasSeguidas);

    return () => {
      if (unsubscribe && typeof unsubscribe === 'function') {
        unsubscribe();
      }
    };
  }, []);

  useEffect(() => {
    const loadJardineteData = async () => {
      try {
        const jardineteRef = doc(getFirestore(), 'jardinetes', novoJardineteDocId);
        const jardineteSnapshot = await getDoc(jardineteRef);
        if (jardineteSnapshot.exists()) {
          const jardineteData = jardineteSnapshot.data();
          setLocalizacao(jardineteData.localizacao || '');
          setNome(jardineteData.nome || '');
          setArea(jardineteData.area || '');
          setBacia(jardineteData.bacia || '');
          setPercapita(jardineteData.percapita || '');
          setDensidade(jardineteData.densidade || '');
          setRenda(jardineteData.renda || '');
          setPatrimonio(jardineteData.patrimonio || '');
        } else {
          console.error('O documento do jardinete não foi encontrado.');
        }
      } catch (error) {
        console.error('Erro ao carregar os dados do jardinete:', error);
      }
    };

    if (novoJardineteDocId) {
      loadJardineteData();
    }
  }, [novoJardineteDocId]);

  const handleSubmit = async () => {
    try {
      if (imagem) {
        const storageRef = ref(getStorage(), `jardinetes/${novoJardineteDocId}/imagem.jpg`);
        await uploadString(storageRef, imagem, 'data_url');
        const imageUrl = await getDownloadURL(storageRef);
  
        const jardineteRef = doc(getFirestore(), 'jardinetes', novoJardineteDocId);
        const formData = {
          localizacao,
          nome,
          area,
          bacia,
          percapita,
          densidade,
          renda,
          patrimonio,
          jardinetePhoto: imageUrl
        };
        await updateDoc(jardineteRef, formData);
        console.log('Dados do jardinete atualizados com sucesso!');
        navigation.navigate('Inventory', { novoJardineteDocId });
      } else {
        console.error('Por favor, selecione uma imagem antes de enviar.');
      }
    } catch (error) {
      console.error('Erro ao atualizar os dados do jardinete:', error);
    }
  };

  const selecionarImagem = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert('Desculpe, precisamos das permissões de acesso à câmera para selecionar uma imagem.');
      return;
    }

  
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImagem(result.uri);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container1}>
      <View style={styles.navbar}>
        <View style={styles.imageContainer}>
          {imageUrl ? (
            <Image
              style={styles.logoImage}
              source={{ uri: imageUrl }}
            />
          ) : (
            <Image
                            style={styles.logoImage}
                            source={require('../../assets/defaultImage.png')} // Ajuste o caminho para a imagem padrão
                        />
          )}
        </View>
      </View>

      <Image source={require('../../assets/vamoscomecar.png')} style={styles.vamos} />

      <View style={styles.container}>
        <Text style={styles.label}>Selecione uma imagem para o jardinete:</Text>
        {imagem && <Image source={{ uri: imagem }} style={{ width: (200 / 1920) * width, height: (200 / 1920) * width, marginTop: (10 / 1920) * width }} />}
        <TouchableOpacity style={styles.button1} onPress={selecionarImagem}>
          <Text style={styles.buttonText}>Selecionar Imagem</Text>
        </TouchableOpacity>

        <Text style={styles.label}>Qual a localização do jardinete?</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => setLocalizacao(text)}
          value={localizacao}
        />

        <Text style={styles.label}>Qual é o nome do jardinete?</Text>
        <TextInput
          style={styles.input2}
          onChangeText={text => setNome(text)}
          value={nome}
        />

        <Text style={styles.label}>Nos informe também a sua área (m²)</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => setArea(text)}
          value={area}
          keyboardType="numeric"
        />

        <Text style={styles.label}>Em qual bacia de rios está localizado? (*)</Text>
        <TextInput
          style={styles.input2}
          onChangeText={text => setBacia(text)}
          value={bacia}
        />

        <Text style={styles.label}>Qual a proporção de áreas verdes por habitantes do bairro onde está localizado este jardinete? (*)</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => setPercapita(text)}
          value={percapita}
          keyboardType="numeric"
        />

        <Text style={styles.label}>Qual é a densidade demográfica deste bairro? (*)</Text>
        <TextInput
          style={styles.input2}
          onChangeText={text => setDensidade(text)}
          value={densidade}
          keyboardType="numeric"
        />

        <Text style={styles.label}>Qual a renda média dos habitantes próximos a este jardinete? (*)</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => setRenda(text)}
          value={renda}
          keyboardType="numeric"
        />

        <Text style={styles.label}>O jardinete possui algum patrimônio ambiental? (*)</Text>
        <TextInput
          style={styles.input2}
          onChangeText={text => setPatrimonio(text)}
          value={patrimonio}
        />

<Text style={styles.label}>
                (*) Para Curitiba, essas informações podem ser obtidas no site da 
                <Text></Text> {/* Espaço adicionado aqui */}
                <TouchableOpacity onPress={openIPPUCWebsite}>
                    <Text style={styles.link}>IPPUC</Text>
                </TouchableOpacity>
            </Text>
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText2}>Continuar</Text>
            </TouchableOpacity>

    
      </View>

  

        <View style={styles.bola3}></View>
        <View style={styles.bola2}></View>
        <View style={styles.bola}></View>

        <View style={styles.imageContainer33}>
          <Image source={require('../../assets/araucarias.png')}  style={styles.araucarias} />
      </View>

      <View style={styles.navbar2}>
        
      
      <View style={styles.imageContainer22}>
          <Image source={require('../../assets/UtfprBottom.png')}  style={styles.utfprImage} />
      </View>
      </View>
    </ScrollView>
  );
};
