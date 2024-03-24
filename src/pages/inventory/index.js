import React, { useRef, useState, useEffect } from 'react';
import { View, ScrollView, ImageBackground, TouchableOpacity, Text, Linking, Image } from 'react-native';
import { styles } from '../inventory/styles';
import { useNavigation } from '@react-navigation/native';
import { getAuth } from 'firebase/auth';
import { getFirestore} from 'firebase/firestore';
import { getStorage} from 'firebase/storage';
import {userSearchData } from '../../../functions';

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

const navigation = useNavigation();
const scrollViewRef = useRef(null);

useEffect(() => {
  const unsubscribe = userSearchData(auth, firestore, storage, navigation, setUserName, setWallpaper, setImageUrl, setEmail, setPracasSeguidas);

  // Ensure that unsubscribe is called when the component is unmounted
  return () => {
      if (unsubscribe && typeof unsubscribe === 'function') {
          unsubscribe();
      }
  };
}, []);




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

  const handlePress1 = () => {
    setIsClicked1(!isClicked1);
  };

  const handlePress2 = () => {
    setIsClicked2(!isClicked2);
  };

  const handlePress3 = () => {
    setIsClicked3(!isClicked3);
  };

  const handlePress4 = () => {
    setIsClicked4(!isClicked4);
  };

  const handlePress5 = () => {
    setIsClicked5(!isClicked5);
  };

  const handlePress6 = () => {
    setIsClicked6(!isClicked6);
  };

  const handlePress7 = () => {
    setIsClicked7(!isClicked7);
  };

  const handlePress8 = () => {
    setIsClicked8(!isClicked8);
  };

  const handlePress9 = () => {
    setIsClicked9(!isClicked9);
  };

  const handlePress10 = () => {
    setIsClicked10(!isClicked10);
  };

  const handlePress11 = () => {
    setIsClicked11(!isClicked11);
  };

  const handlePress12 = () => {
    setIsClicked12(!isClicked12);
  };

  const handlePress13 = () => {
    setIsClicked13(!isClicked13);
  };

  const handlePress14 = () => {
    setIsClicked14(!isClicked14);
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



  return (
    <ScrollView
      horizontal  // Enable horizontal scrolling
    >
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        ref={scrollViewRef}
      >
        <ImageBackground
          source={require('../../assets/inventory.jpg')}
          style={styles.backgroundImage}
        >

<View style={styles.navbar}>
<View style={styles.imageContainer}>
{imageUrl ? (
                        <Image
                            style={styles.logoImage}
                            source={{
                                uri: imageUrl,
                            }}
                        />
                    ) : (
                        <Text>Imagem não disponível</Text>
                    )}
    </View>
    </View>

          <View style={styles.card}>
            <View style={styles.containerButton1}>

            <TouchableOpacity
                style={styles.button}
                onPress={handlePress1}
                onMouseEnter={handleMouseEnter1}
                onMouseLeave={handleMouseLeave1}
              >
                <Image
                  source={isClicked1 ? require('../../assets/flores1.png') : isMouseOver1 ? require('../../assets/flores1.png') : require('../../assets/flores.png')}
                  style={styles.image}
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.button}
                onPress={handlePress2}
                onMouseEnter={handleMouseEnter2}
                onMouseLeave={handleMouseLeave2}
              >
                <Image
                  source={isClicked2 ? require('../../assets/animais.png') : isMouseOver2 ? require('../../assets/animais.png') : require('../../assets/patinhas.png')}
                  style={styles.image}
                />
              </TouchableOpacity>


              <TouchableOpacity
                style={styles.button}
                onPress={handlePress3}
                onMouseEnter={handleMouseEnter3}
                onMouseLeave={handleMouseLeave3}
              >
                <Image
                  source={isClicked3 ? require('../../assets/banco1.png') : isMouseOver3 ? require('../../assets/banco1.png') : require('../../assets/bancos.png')}
                  style={styles.image}
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.button}
                onPress={handlePress4}
                onMouseEnter={handleMouseEnter4}
                onMouseLeave={handleMouseLeave4}
              >
                <Image
                  source={isClicked4 ? require('../../assets/pavimentada1.png') : isMouseOver4 ? require('../../assets/pavimentada1.png') : require('../../assets/pavimentada.png')}
                  style={styles.image}
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.button}
                onPress={handlePress5}
                onMouseEnter={handleMouseEnter5}
                onMouseLeave={handleMouseLeave5}
              >
                <Image
                  source={isClicked5 ? require('../../assets/monumento1.png') : isMouseOver5 ? require('../../assets/monumento1.png') : require('../../assets/monumento.png')}
                  style={styles.image}
                />
              </TouchableOpacity>

            </View>

            <View style={styles.containerButton2}>

            <TouchableOpacity
                style={styles.button}
                onPress={handlePress6}
                onMouseEnter={handleMouseEnter6}
                onMouseLeave={handleMouseLeave6}
              >
                <Image
                  source={isClicked6 ? require('../../assets/feira1.png') : isMouseOver6 ? require('../../assets/feira1.png') : require('../../assets/feira.png')}
                  style={styles.image}
                />
              </TouchableOpacity>

                <TouchableOpacity
                style={styles.button}
                onPress={handlePress7}
                onMouseEnter={handleMouseEnter7}
                onMouseLeave={handleMouseLeave7}
              >
                <Image
                  source={isClicked7 ? require('../../assets/arvore1.png') : isMouseOver7 ? require('../../assets/arvore1.png') : require('../../assets/arvore.png')}
                  style={styles.image}
                />
              </TouchableOpacity>

                <TouchableOpacity
                style={styles.button}
                onPress={handlePress8}
                onMouseEnter={handleMouseEnter8}
                onMouseLeave={handleMouseLeave8}
              >
                <Image
                  source={isClicked8 ? require('../../assets/estica1.png') : isMouseOver8 ? require('../../assets/estica1.png') : require('../../assets/estica.png')}
                  style={styles.image}
                />
              </TouchableOpacity>

                 <TouchableOpacity
                style={styles.button}
                onPress={handlePress9}
                onMouseEnter={handleMouseEnter9}
                onMouseLeave={handleMouseLeave9}
              >
                <Image
                  source={isClicked9 ? require('../../assets/areia1.png') : isMouseOver9 ? require('../../assets/areia1.png') : require('../../assets/areia.png')}
                  style={styles.image}
                />
              </TouchableOpacity>
           
            
            </View>

            <View style={styles.containerButton3}>

            <TouchableOpacity
                style={styles.button}
                onPress={handlePress10}
                onMouseEnter={handleMouseEnter10}
                onMouseLeave={handleMouseLeave10}
              >
                <Image
                  source={isClicked10 ? require('../../assets/acessibilidade1.png') : isMouseOver10 ? require('../../assets/acessibilidade1.png') : require('../../assets/acessibilidade.png')}
                  style={styles.image}
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.button}
                onPress={handlePress11}
                onMouseEnter={handleMouseEnter11}
                onMouseLeave={handleMouseLeave11}
              >
                <Image
                  source={isClicked11 ? require('../../assets/bicicleta1.png') : isMouseOver11 ? require('../../assets/bicicleta1.png') : require('../../assets/bicicleta.png')}
                  style={styles.image}
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.button}
                onPress={handlePress12}
                onMouseEnter={handleMouseEnter12}
                onMouseLeave={handleMouseLeave12}
              >
                <Image
                  source={isClicked12 ? require('../../assets/parque1.png') : isMouseOver12 ? require('../../assets/parque1.png') : require('../../assets/parque.png')}
                  style={styles.image}
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.button}
                onPress={handlePress13}
                onMouseEnter={handleMouseEnter13}
                onMouseLeave={handleMouseLeave13}
              >
                <Image
                  source={isClicked13 ? require('../../assets/lixo1.png') : isMouseOver13 ? require('../../assets/lixo1.png') : require('../../assets/lixo.png')}
                  style={styles.image}
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.button}
                onPress={handlePress14}
                onMouseEnter={handleMouseEnter14}
                onMouseLeave={handleMouseLeave14}
              >
                <Image
                  source={isClicked14 ? require('../../assets/caminhada1.png') : isMouseOver14 ? require('../../assets/caminhada1.png') : require('../../assets/caminhada.png')}
                  style={styles.image}
                />
              </TouchableOpacity>

            
            </View>


          </View>
 
          
          <TouchableOpacity  style={styles.buttonView}>
        <Text style={styles.buttonText}>Indique a variedade de árvores no jardinete</Text>
      </TouchableOpacity>
      

        </ImageBackground>
      </ScrollView>
    </ScrollView>
  );
}