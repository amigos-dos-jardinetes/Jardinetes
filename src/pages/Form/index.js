import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { getFirestore, doc, updateDoc, getDoc } from 'firebase/firestore';
import { styles } from '../Form/styles';
import * as ImagePicker from 'expo-image-picker';
import { getStorage, ref, uploadString, getDownloadURL } from 'firebase/storage';

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
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Vamos começar?</Text>

    

      <Text style={styles.label}>Selecione uma imagem para o jardinete:</Text>
      {imagem && <Image source={{ uri: imagem }} style={{ width: 200, height: 200, marginTop: 10 }} />}
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
        style={styles.input}
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

      <Text style={styles.label}>O local possui bacias de rios?</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => setBacia(text)}
        value={bacia}
      />

      <Text style={styles.label}>Qual a proporção de áreas verdes por habitantes?</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => setPercapita(text)}
        value={percapita}
        keyboardType="numeric"
      />

      <Text style={styles.label}>Qual é sua densidade demográfica?</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => setDensidade(text)}
        value={densidade}
        keyboardType="numeric"
      />

      <Text style={styles.label}>Qual a renda média dos habitantes próximos?</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => setRenda(text)}
        value={renda}
        keyboardType="numeric"
      />

      <Text style={styles.label}>O jardinete possui algum patrimônio ambiental?</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => setPatrimonio(text)}
        value={patrimonio}
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};
