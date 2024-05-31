import React, { useRef, useEffect, useState } from 'react';
import { View, ScrollView, ImageBackground, TouchableOpacity, Text, Linking, Image } from 'react-native';
import { styles } from '../AnaliseFinal/styles';
import { useNavigation, useRoute } from '@react-navigation/native';
import { getAuth } from 'firebase/auth';
import { getFirestore, doc, updateDoc } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { userSearchData } from '../../../functions';

export default function AnaliseFinal() {
  const navigation = useNavigation();
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



  useEffect(() => {
    const unsubscribe = userSearchData(auth, firestore, storage, navigation, setUserName, setWallpaper, setImageUrl, setEmail, setPracasSeguidas);

    return () => {
      if (unsubscribe && typeof unsubscribe === 'function') {
        unsubscribe();
      }
    };
  }, []);

 
  return (
   
    <ScrollView style={styles.scroll}>
          <View style={styles.container}>

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

      
          <Image source={require('../../assets/analise.png')}  style={styles.analise} />

            <View style={styles.infraContainer}>
          <Image source={require('../../assets/infraIcon.png')}  style={styles.infra} />
          </View>

          <View style={styles.bemContainer}>
          <Image source={require('../../assets/bemIcon.png')}  style={styles.bem} />
          </View>

          <View style={styles.segContainer}>
          <Image source={require('../../assets/segIcon.png')}  style={styles.seg} />
          </View>

          <View style={styles.pertContainer}>
          <Image source={require('../../assets/pertIcon.png')}  style={styles.pert} />
          </View>


          <View style={styles.centralContainer}>
        <Image source={require('../../assets/folhas.png')} style={styles.folhas} />
        <Image source={require('../../assets/petala100.png')} style={styles.petala1000} />
        <Image source={require('../../assets/petala100.png')} style={styles.petala1001} />
        <Image source={require('../../assets/petala100.png')} style={styles.petala1002} />
        <Image source={require('../../assets/petala100.png')} style={styles.petala1003} />
        <Image source={require('../../assets/miolo.png')} style={styles.miolo} />
      </View>



          <View style={styles.navbar2}>
      <View style={styles.imageContainer22}>
          <Image source={require('../../assets/UtfprBottom.png')}  style={styles.utfprImage} />
      </View>
      </View>

          </View>

          </ScrollView>
        );       
}
