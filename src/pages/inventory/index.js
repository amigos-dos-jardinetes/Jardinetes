import React, { useRef, useState, useEffect } from 'react';
import { View, ScrollView, ImageBackground, TouchableOpacity, Text, Linking, Image, useWindowDimensions, Modal } from 'react-native';
import { styles } from '../inventory/styles';
import { useNavigation, useRoute } from '@react-navigation/native';
import { getAuth } from 'firebase/auth';
import { getFirestore, doc, updateDoc } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { userSearchData } from '../../../functions';
import { Ionicons } from '@expo/vector-icons';
import MoreInfo2 from '../moreInfo2';

export default function Inventory() {
  const [userInfo, setUserInfo] = useState(false);
  const auth = getAuth();
  const firestore = getFirestore();
  const storage = getStorage();
  const [userName, setUserName] = useState('');
  const [wallpaper, setWallpaper] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [email, setEmail] = useState('');
  const [pracasSeguidas, setPracasSeguidas] = useState([]);
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const route = useRoute();
  const novoJardineteDocId = route.params.novoJardineteDocId;
  const navigation = useNavigation();
  const scrollViewRef = useRef(null);
  const myStyles = styles();
  const { width, height } = useWindowDimensions(); 
  const [modalVisible, setModalVisible] = useState(false);


  useEffect(() => {
    const unsubscribe = userSearchData(auth, firestore, storage, navigation, setUserName, setWallpaper, setImageUrl, setEmail, setPracasSeguidas);

    return () => {
      if (unsubscribe && typeof unsubscribe === 'function') {
        unsubscribe();
      }
    };
  }, []);

  const sendDataToFirebase3 = async (banco) => {
    try {
      const docRef = doc(firestore, 'jardinetes', novoJardineteDocId);
      await updateDoc(docRef, { banco: banco });
      console.log('Dado enviado com sucesso para o Firestore!');
    } catch (error) {
      console.error('Erro ao enviar dado para o Firestore:', error);
    }
  };

  useEffect(() => {
    const sendInitialDataToFirebase = async () => {
      try {
        const docRef = doc(firestore, 'jardinetes', novoJardineteDocId);
        await updateDoc(docRef, {
          banco: 'não',
          pavimentada: 'não',
          animais: 'não',
          monumento: 'não',
          flores: 'não',
          estica: 'não',
          arvore: 'não',
          areia: 'não',
          feira: 'não',
          lixo: 'não',
          caminhada: 'não',
          parque: 'não',
          bicicleta: 'não',
          acessibilidade: 'não'
        });
        console.log('Dados enviados com sucesso para o Firestore!');
      } catch (error) {
        console.error('Erro ao enviar dados para o Firestore:', error);
      }
    };

    sendInitialDataToFirebase();
    return () => {
    };
  }, []);



  const sendDataToFirebase4 = async (pavimentada) => {
    try {
      const docRef = doc(firestore, 'jardinetes', novoJardineteDocId);
      await updateDoc(docRef, { pavimentada: pavimentada });
      console.log('Dado enviado com sucesso para o Firestore!');
    } catch (error) {
      console.error('Erro ao enviar dado para o Firestore:', error);
    }
  };

  const sendDataToFirebase2 = async (animais) => {
    try {
      const docRef = doc(firestore, 'jardinetes', novoJardineteDocId);
      await updateDoc(docRef, { animais: animais });
      console.log('Dado enviado com sucesso para o Firestore!');
    } catch (error) {
      console.error('Erro ao enviar dado para o Firestore:', error);
    }
  };

  const sendDataToFirebase5 = async (monumento) => {
    try {
      const docRef = doc(firestore, 'jardinetes', novoJardineteDocId);
      await updateDoc(docRef, { monumento: monumento });
      console.log('Dado enviado com sucesso para o Firestore!');
    } catch (error) {
      console.error('Erro ao enviar dado para o Firestore:', error);
    }
  };

  const sendDataToFirebase1 = async (flores) => {
    try {
      const docRef = doc(firestore, 'jardinetes', novoJardineteDocId);
      await updateDoc(docRef, { flores: flores });
      console.log('Dado enviado com sucesso para o Firestore!');
    } catch (error) {
      console.error('Erro ao enviar dado para o Firestore:', error);
    }
  };

  const sendDataToFirebase8 = async (estica) => {
    try {
      const docRef = doc(firestore, 'jardinetes', novoJardineteDocId);
      await updateDoc(docRef, { estica: estica });
      console.log('Dado enviado com sucesso para o Firestore!');
    } catch (error) {
      console.error('Erro ao enviar dado para o Firestore:', error);
    }
  };

  const sendDataToFirebase7 = async (arvore) => {
    try {
      const docRef = doc(firestore, 'jardinetes', novoJardineteDocId);
      await updateDoc(docRef, { arvore: arvore });
      console.log('Dado enviado com sucesso para o Firestore!');
    } catch (error) {
      console.error('Erro ao enviar dado para o Firestore:', error);
    }
  };

  const sendDataToFirebase9 = async (areia) => {
    try {
      const docRef = doc(firestore, 'jardinetes', novoJardineteDocId);
      await updateDoc(docRef, { areia: areia });
      console.log('Dado enviado com sucesso para o Firestore!');
    } catch (error) {
      console.error('Erro ao enviar dado para o Firestore:', error);
    }
  };

  const sendDataToFirebase6 = async (feira) => {
    try {
      const docRef = doc(firestore, 'jardinetes', novoJardineteDocId);
      await updateDoc(docRef, { feira: feira });
      console.log('Dado enviado com sucesso para o Firestore!');
    } catch (error) {
      console.error('Erro ao enviar dado para o Firestore:', error);
    }
  };

  const sendDataToFirebase13 = async (lixo) => {
    try {
      const docRef = doc(firestore, 'jardinetes', novoJardineteDocId);
      await updateDoc(docRef, { lixo: lixo });
      console.log('Dado enviado com sucesso para o Firestore!');
    } catch (error) {
      console.error('Erro ao enviar dado para o Firestore:', error);
    }
  };

  const sendDataToFirebase14 = async (caminhada) => {
    try {
      const docRef = doc(firestore, 'jardinetes', novoJardineteDocId);
      await updateDoc(docRef, { caminhada: caminhada });
      console.log('Dado enviado com sucesso para o Firestore!');
    } catch (error) {
      console.error('Erro ao enviar dado para o Firestore:', error);
    }
  };

  const sendDataToFirebase12 = async (parque) => {
    try {
      const docRef = doc(firestore, 'jardinetes', novoJardineteDocId);
      await updateDoc(docRef, { parque: parque });
      console.log('Dado enviado com sucesso para o Firestore!');
    } catch (error) {
      console.error('Erro ao enviar dado para o Firestore:', error);
    }
  };

  const sendDataToFirebase11 = async (bicicleta) => {
    try {
      const docRef = doc(firestore, 'jardinetes', novoJardineteDocId);
      await updateDoc(docRef, { bicicleta: bicicleta });
      console.log('Dado enviado com sucesso para o Firestore!');
    } catch (error) {
      console.error('Erro ao enviar dado para o Firestore:', error);
    }
  };

  const sendDataToFirebase10 = async (acessibilidade) => {
    try {
      const docRef = doc(firestore, 'jardinetes', novoJardineteDocId);
      await updateDoc(docRef, { acessibilidade: acessibilidade });
      console.log('Dado enviado com sucesso para o Firestore!');
    } catch (error) {
      console.error('Erro ao enviar dado para o Firestore:', error);
    }
  };


  const [isMouseOver1, setIsMouseOver1] = useState(false);
  const [isMouseOver2, setIsMouseOver2] = useState(false);
  const [isMouseOver3, setIsMouseOver3] = useState(false);
  const [isMouseOver4, setIsMouseOver4] = useState(false);
  const [isMouseOver5, setIsMouseOver5] = useState(false);
  const [isMouseOver6, setIsMouseOver6] = useState(false);
  const [isMouseOver7, setIsMouseOver7] = useState(false);
  const [isMouseOver8, setIsMouseOver8] = useState(false);
  const [isMouseOver9, setIsMouseOver9] = useState(false);
  const [isMouseOver10, setIsMouseOver10] = useState(false);
  const [isMouseOver11, setIsMouseOver11] = useState(false);
  const [isMouseOver12, setIsMouseOver12] = useState(false);
  const [isMouseOver13, setIsMouseOver13] = useState(false);
  const [isMouseOver14, setIsMouseOver14] = useState(false);

  const [isClicked1, setIsClicked1] = useState(false);
  const [isClicked2, setIsClicked2] = useState(false);
  const [isClicked3, setIsClicked3] = useState(false);
  const [isClicked4, setIsClicked4] = useState(false);
  const [isClicked5, setIsClicked5] = useState(false);
  const [isClicked6, setIsClicked6] = useState(false);
  const [isClicked7, setIsClicked7] = useState(false);
  const [isClicked8, setIsClicked8] = useState(false);
  const [isClicked9, setIsClicked9] = useState(false);
  const [isClicked10, setIsClicked10] = useState(false);
  const [isClicked11, setIsClicked11] = useState(false);
  const [isClicked12, setIsClicked12] = useState(false);
  const [isClicked13, setIsClicked13] = useState(false);
  const [isClicked14, setIsClicked14] = useState(false);


  const handlePress3 = () => {
    const newBanco = isClicked3 ? 'não' : 'sim';
    setIsClicked3(!isClicked3);
    sendDataToFirebase3(newBanco);
  };

  const handlePress4 = () => {
    const newPavimentada = isClicked4 ? 'não' : 'sim';
    setIsClicked4(!isClicked4);
    sendDataToFirebase4(newPavimentada);
  };

  const handlePress2 = () => {
    const newAnimais = isClicked2 ? 'não' : 'sim';
    setIsClicked2(!isClicked2);
    sendDataToFirebase2(newAnimais);
  };

  const handlePress5 = () => {
    const newMonumento = isClicked5 ? 'não' : 'sim';
    setIsClicked5(!isClicked5);
    sendDataToFirebase5(newMonumento);
  };

  const handlePress1 = () => {
    const newFlores = isClicked1 ? 'não' : 'sim';
    setIsClicked1(!isClicked1);
    sendDataToFirebase1(newFlores);
  };

  const handlePress8 = () => {
    const newEstica = isClicked8 ? 'não' : 'sim';
    setIsClicked8(!isClicked8);
    sendDataToFirebase8(newEstica);
  };

  const handlePress7 = () => {
    const newArvore = isClicked7 ? 'não' : 'sim';
    setIsClicked7(!isClicked7);
    sendDataToFirebase7(newArvore);
  };

  const handlePress9 = () => {
    const newAreia = isClicked9 ? 'não' : 'sim';
    setIsClicked9(!isClicked9);
    sendDataToFirebase9(newAreia);
  };

  const handlePress6 = () => {
    const newFeira = isClicked6 ? 'não' : 'sim';
    setIsClicked6(!isClicked6);
    sendDataToFirebase6(newFeira);
  };

  const handlePress13 = () => {
    const newLixo = isClicked13 ? 'não' : 'sim';
    setIsClicked13(!isClicked13);
    sendDataToFirebase13(newLixo);
  };

  const handlePress14 = () => {
    const newCaminhada = isClicked14 ? 'não' : 'sim';
    setIsClicked14(!isClicked14);
    sendDataToFirebase14(newCaminhada);
  };

  const handlePress12 = () => {
    const newParque = isClicked12 ? 'não' : 'sim';
    setIsClicked12(!isClicked12);
    sendDataToFirebase12(newParque);
  };

  const handlePress11 = () => {
    const newBicicleta = isClicked11 ? 'não' : 'sim';
    setIsClicked11(!isClicked11);
    sendDataToFirebase11(newBicicleta);
  };

  const handlePress10 = () => {
    const newAcessibilidade = isClicked10 ? 'não' : 'sim';
    setIsClicked10(!isClicked10);
    sendDataToFirebase10(newAcessibilidade);
  };
  const handleMouseEnter1 = () => {
    setIsMouseOver1(true);
  };

  const handleMouseLeave1 = () => {
    setIsMouseOver1(false);
  };

  const handleMouseEnter2 = () => {
    setIsMouseOver2(true);
  };

  const handleMouseLeave2 = () => {
    setIsMouseOver2(false);
  };

  const handleMouseEnter3 = () => {
    setIsMouseOver3(true);
  };

  const handleMouseLeave3 = () => {
    setIsMouseOver3(false);
  };

  const handleMouseEnter4 = () => {
    setIsMouseOver4(true);
  };

  const handleMouseLeave4 = () => {
    setIsMouseOver4(false);
  };


  const handleMouseEnter5 = () => {
    setIsMouseOver5(true);
  };

  const handleMouseLeave5 = () => {
    setIsMouseOver5(false);
  };

  const handleMouseEnter6 = () => {
    setIsMouseOver6(true);
  };

  const handleMouseLeave6 = () => {
    setIsMouseOver6(false);
  };

  const handleMouseEnter7 = () => {
    setIsMouseOver7(true);
  };

  const handleMouseLeave7 = () => {
    setIsMouseOver7(false);
  };

  const handleMouseEnter8 = () => {
    setIsMouseOver8(true);
  };

  const handleMouseLeave8 = () => {
    setIsMouseOver8(false);
  };

  const handleMouseEnter9 = () => {
    setIsMouseOver9(true);
  };

  const handleMouseLeave9 = () => {
    setIsMouseOver9(false);
  };

  const handleMouseEnter10 = () => {
    setIsMouseOver10(true);
  };

  const handleMouseLeave10 = () => {
    setIsMouseOver10(false);
  };

  const handleMouseEnter11 = () => {
    setIsMouseOver11(true);
  };

  const handleMouseLeave11 = () => {
    setIsMouseOver11(false);
  };

  const handleMouseEnter12 = () => {
    setIsMouseOver12(true);
  };

  const handleMouseLeave12 = () => {
    setIsMouseOver12(false);
  };

  const handleMouseEnter13 = () => {
    setIsMouseOver13(true);
  };

  const handleMouseLeave13 = () => {
    setIsMouseOver13(false);
  };

  const handleMouseEnter14 = () => {
    setIsMouseOver14(true);
  };

  const handleMouseLeave14 = () => {
    setIsMouseOver14(false);
  };

  const handlePress = () => {
    navigation.navigate('Tree', { novoJardineteDocId });
  };

  const buttonStyle = isClicked3 ? myStyles.button : (isMouseOver3 ? myStyles.button2 : myStyles.button1);
  const buttonStyle1 = isClicked4 ? myStyles.button : (isMouseOver4 ? myStyles.button2 : myStyles.button1);
  const buttonStyle2 = isClicked2 ? myStyles.button : (isMouseOver2 ? myStyles.button2 : myStyles.button1);
  const buttonStyle3 = isClicked5 ? myStyles.button : (isMouseOver5 ? myStyles.button2 : myStyles.button1);
  const buttonStyle4 = isClicked1 ? myStyles.button : (isMouseOver1 ? myStyles.button2 : myStyles.button1);
  const buttonStyle5 = isClicked8 ? myStyles.button : (isMouseOver8 ? myStyles.button2 : myStyles.button1);
  const buttonStyle6 = isClicked7 ? myStyles.button : (isMouseOver7 ? myStyles.button2 : myStyles.button1);
  const buttonStyle7 = isClicked9 ? myStyles.button : (isMouseOver9 ? myStyles.button2 : myStyles.button1);
  const buttonStyle8 = isClicked6 ? myStyles.button : (isMouseOver6 ? myStyles.button2 : myStyles.button1);
  const buttonStyle9 = isClicked13 ? myStyles.button : (isMouseOver13 ? myStyles.button2 : myStyles.button1);
  const buttonStyle10 = isClicked14 ? myStyles.button : (isMouseOver14 ? myStyles.button2 : myStyles.button1);
  const buttonStyle11 = isClicked12 ? myStyles.button : (isMouseOver12 ? myStyles.button2 : myStyles.button1);
  const buttonStyle12 = isClicked11 ? myStyles.button : (isMouseOver11 ? myStyles.button2 : myStyles.button1);
  const buttonStyle13 = isClicked10 ? myStyles.button : (isMouseOver10 ? myStyles.button2 : myStyles.button1);

  return (
    <ScrollView
      horizontal
    >
      <ScrollView
        contentContainerStyle={myStyles.scrollViewContent}
        ref={scrollViewRef}
      >
        <ImageBackground
          source={require('../../assets/inventory.jpg')}
          style={myStyles.backgroundImage}
        >

          <View style={myStyles.buttonView3}>
            <Text style={myStyles.buttonText}>Selecione os itens presentes no jardinete</Text>

          </View>

          <View style={myStyles.center}>
  <TouchableOpacity style={myStyles.buttonView33} onPress={() => setModalVisible(true)}>
    <Text style={myStyles.buttonText33}>Verifique as informações já enviadas</Text>
  </TouchableOpacity>
</View>

          <View style={myStyles.navbar}>

          <TouchableOpacity style={myStyles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={width * 0.025} color="white" />
        </TouchableOpacity>


            <View style={myStyles.imageContainer}>
              {imageUrl ? (
                <Image
                  style={myStyles.logoImage}
                  source={{
                    uri: imageUrl,
                  }}
                />
              ) : (
                <Image
                style={myStyles.logoImage}
                source={require('../../assets/defaultImage.png')} // Ajuste o caminho para a imagem padrão
            />
              )}
            </View>
          </View>

          <View style={myStyles.card}>
            <View style={myStyles.containerButton1}>


              <TouchableOpacity
               style={buttonStyle}
                onPress={handlePress3}
                onMouseEnter={handleMouseEnter3}
                onMouseLeave={handleMouseLeave3}
              >
                <Image
                  source={isClicked3 ? require('../../assets/banco1.png') : isMouseOver3 ? require('../../assets/banco1.png') : require('../../assets/bancos.png')}
                  style={myStyles.image}
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={buttonStyle1}
                onPress={handlePress4}
                onMouseEnter={handleMouseEnter4}
                onMouseLeave={handleMouseLeave4}
              >
                <Image
                  source={isClicked4 ? require('../../assets/pavimentada1.png') : isMouseOver4 ? require('../../assets/pavimentada1.png') : require('../../assets/pavimentada.png')}
                  style={myStyles.image}
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={buttonStyle2}
                onPress={handlePress2}
                onMouseEnter={handleMouseEnter2}
                onMouseLeave={handleMouseLeave2}
              >
                <Image
                  source={isClicked2 ? require('../../assets/animais.png') : isMouseOver2 ? require('../../assets/animais.png') : require('../../assets/patinhas.png')}
                  style={myStyles.image}
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={buttonStyle3}
                onPress={handlePress5}
                onMouseEnter={handleMouseEnter5}
                onMouseLeave={handleMouseLeave5}
              >
                <Image
                  source={isClicked5 ? require('../../assets/monumento1.png') : isMouseOver5 ? require('../../assets/monumento1.png') : require('../../assets/monumento.png')}
                  style={myStyles.image}
                />
              </TouchableOpacity>

            </View>

            <View style={myStyles.containerButton2}>


              <TouchableOpacity
               style={buttonStyle4}
                onPress={handlePress1}
                onMouseEnter={handleMouseEnter1}
                onMouseLeave={handleMouseLeave1}
              >
                <Image
                  source={isClicked1 ? require('../../assets/flores1.png') : isMouseOver1 ? require('../../assets/flores1.png') : require('../../assets/flores.png')}
                  style={myStyles.image}
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={buttonStyle5}
                onPress={handlePress8}
                onMouseEnter={handleMouseEnter8}
                onMouseLeave={handleMouseLeave8}
              >
                <Image
                  source={isClicked8 ? require('../../assets/estica1.png') : isMouseOver8 ? require('../../assets/estica1.png') : require('../../assets/estica.png')}
                  style={myStyles.image}
                />
              </TouchableOpacity>


              <TouchableOpacity
               style={buttonStyle6}
                onPress={handlePress7}
                onMouseEnter={handleMouseEnter7}
                onMouseLeave={handleMouseLeave7}
              >
                <Image
                  source={isClicked7 ? require('../../assets/arvore1.png') : isMouseOver7 ? require('../../assets/arvore1.png') : require('../../assets/arvore.png')}
                  style={myStyles.image}
                />
              </TouchableOpacity>


              <TouchableOpacity
                style={buttonStyle7}
                onPress={handlePress9}
                onMouseEnter={handleMouseEnter9}
                onMouseLeave={handleMouseLeave9}
              >
                <Image
                  source={isClicked9 ? require('../../assets/areia1.png') : isMouseOver9 ? require('../../assets/areia1.png') : require('../../assets/areia.png')}
                  style={myStyles.image}
                />
              </TouchableOpacity>


            </View>

            <View style={myStyles.containerButton3}>


              <TouchableOpacity
                style={buttonStyle8}
                onPress={handlePress6}
                onMouseEnter={handleMouseEnter6}
                onMouseLeave={handleMouseLeave6}
              >
                <Image
                  source={isClicked6 ? require('../../assets/feira1.png') : isMouseOver6 ? require('../../assets/feira1.png') : require('../../assets/feira.png')}
                  style={myStyles.image}
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={buttonStyle9}
                onPress={handlePress13}
                onMouseEnter={handleMouseEnter13}
                onMouseLeave={handleMouseLeave13}
              >
                <Image
                  source={isClicked13 ? require('../../assets/lixo1.png') : isMouseOver13 ? require('../../assets/lixo1.png') : require('../../assets/lixo.png')}
                  style={myStyles.image}
                />
              </TouchableOpacity>


              <TouchableOpacity
                style={buttonStyle10}
                onPress={handlePress14}
                onMouseEnter={handleMouseEnter14}
                onMouseLeave={handleMouseLeave14}
              >
                <Image
                  source={isClicked14 ? require('../../assets/caminhada1.png') : isMouseOver14 ? require('../../assets/caminhada1.png') : require('../../assets/caminhada.png')}
                  style={myStyles.image}
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={buttonStyle11}
                onPress={handlePress12}
                onMouseEnter={handleMouseEnter12}
                onMouseLeave={handleMouseLeave12}
              >
                <Image
                  source={isClicked12 ? require('../../assets/parque1.png') : isMouseOver12 ? require('../../assets/parque1.png') : require('../../assets/parque.png')}
                  style={myStyles.image}
                />
              </TouchableOpacity>
            </View>

            <View style={myStyles.containerButton4}>

              <TouchableOpacity
                style={buttonStyle12}
                onPress={handlePress11}
                onMouseEnter={handleMouseEnter11}
                onMouseLeave={handleMouseLeave11}
              >
                <Image
                  source={isClicked11 ? require('../../assets/bicicleta1.png') : isMouseOver11 ? require('../../assets/bicicleta1.png') : require('../../assets/bicicleta.png')}
                  style={myStyles.image}
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={buttonStyle13}
                onPress={handlePress10}
                onMouseEnter={handleMouseEnter10}
                onMouseLeave={handleMouseLeave10}
              >
                <Image
                  source={isClicked10 ? require('../../assets/acessibilidade1.png') : isMouseOver10 ? require('../../assets/acessibilidade1.png') : require('../../assets/acessibilidade.png')}
                  style={myStyles.image}
                />
              </TouchableOpacity>
            </View>


          </View>


          <View style={myStyles.container}>
            <TouchableOpacity style={myStyles.buttonView}  onPress={handlePress}>
              <Text style={myStyles.buttonText}>Indique as árvores no jardinete</Text>
            </TouchableOpacity>
            <View style={myStyles.buttonView2}></View>
          </View>


          <Modal
  animationType="slide"
  transparent={false}
  visible={modalVisible}
  onRequestClose={() => {
    setModalVisible(!modalVisible);
  }}
>
  <View style={myStyles.modalContainer}>
    <TouchableOpacity style={myStyles.closeButton} onPress={() => setModalVisible(false)}>
      <Ionicons name="close" size={(30 / 1920) * width} color="black" />
    </TouchableOpacity>

    <ScrollView contentContainerStyle={myStyles.scrollViewModalContent}>
      <MoreInfo2 />
    </ScrollView>
  </View>
</Modal>

        </ImageBackground>
      </ScrollView>
    </ScrollView>
  );
}