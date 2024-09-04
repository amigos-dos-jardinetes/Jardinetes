import React, { useState, useEffect, useRef } from 'react';
import { View, ScrollView, TouchableOpacity, Text, Image, Linking, ActivityIndicator, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../minhasAnalises/styles.js';
import { getAuth } from 'firebase/auth';
import { getFirestore, doc, updateDoc } from 'firebase/firestore';
import { Ionicons } from '@expo/vector-icons';
import { userSearchData } from '../../../functions';
import { getStorage } from 'firebase/storage';

export default function minhasAnalises() {

  const navigation = useNavigation();
  const scrollViewRef = useRef(null);
  const [jardinetes, setJardinetes] = useState([]);
  const [imageUrl, setImageUrl] = useState(null);   
  const { width, height } = Dimensions.get('window');
  const auth = getAuth();
  const [userName, setUserName] = useState('');
  const [wallpaper, setWallpaper] = useState(null);
  const [email, setEmail] = useState('');
  const [pracasSeguidas, setPracasSeguidas] = useState([]);
  const [password, setPassword] = useState('');
  const firestore = getFirestore();
  const storage = getStorage();

  useEffect(() => {
    const unsubscribe = userSearchData(auth, firestore, storage, navigation, setUserName, setWallpaper, setImageUrl, setEmail, setPracasSeguidas);

    return () => {
      if (unsubscribe && typeof unsubscribe === 'function') {
        unsubscribe();
      }
    };
  }, []);


  return (
    <ScrollView ref={scrollViewRef}  style={styles.container3}>
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
                 <View style={styles.row}>
                        <View style={styles.column}>
                        </View>
                 </View>
          </View>

          <View style={styles.araucariaContainer}>
             <Image source={require('../../assets/araucarias.png')}  style={styles.araucarias} />
        </View>


        <View style={styles.navbar2}>
      <View style={styles.imageContainer22}>
          <Image source={require('../../assets/UtfprBottom.png')}  style={styles.utfprImage3} />
      </View>
      </View>


        </View>
        </ScrollView>
        
  );
}
