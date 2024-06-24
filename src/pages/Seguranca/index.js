import React, { useEffect, useState } from 'react';
import { View, ScrollView, Image, Text, ActivityIndicator, TouchableOpacity, Dimensions } from 'react-native';
import { styles } from '../Seguranca/styles';
import { useNavigation, useRoute } from '@react-navigation/native';
import { getAuth } from 'firebase/auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { userSearchData } from '../../../functions';
import { Ionicons } from '@expo/vector-icons'; 
import { LinearGradient } from 'expo-linear-gradient';

export default function Seguranca() {

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
  const { width, height } = Dimensions.get('window');
  const novoJardineteDocId = route.params.novoJardineteDocId;

  const [segurancaPetalaImage, setsegurancaPetalaImage] = useState(require('../../assets/petala20.png'));
  const [segurancaPetalaStyle, setsegurancaPetalaStyle] = useState(styles.petala200);

  const [segurancaPetalaImage1, setsegurancaPetalaImage1] = useState(require('../../assets/petala20.png'));
  const [segurancaPetalaStyle1, setsegurancaPetalaStyle1] = useState(styles.petala201);

  const [segurancaPetalaImage2, setsegurancaPetalaImage2] = useState(require('../../assets/petala20.png'));
  const [segurancaPetalaStyle2, setsegurancaPetalaStyle2] = useState(styles.petala202);

  const [segurancaPetalaImage3, setsegurancaPetalaImage3] = useState(require('../../assets/petala20.png'));
  const [segurancaPetalaStyle3, setsegurancaPetalaStyle3] = useState(styles.petala203);

  const [segurancaPetalaImage4, setsegurancaPetalaImage4] = useState(require('../../assets/petala20.png'));
  const [segurancaPetalaStyle4, setsegurancaPetalaStyle4] = useState(styles.petala204);

  const [initialLoading, setInitialLoading] = useState(true);
  const [loading, setLoading] = useState(true);
  const [documentData, setDocumentData] = useState(null);
  const [segurancaAverages, setsegurancaAverages] = useState({});

  useEffect(() => {
    const unsubscribe = userSearchData(auth, firestore, storage, navigation, setUserName, setWallpaper, setImageUrl, setEmail, setPracasSeguidas);

    async function fetchData() {
      try {
        const docRef = doc(firestore, 'jardinetes', novoJardineteDocId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          console.log("Document data:", data); // Log completo dos dados do documento
          setDocumentData(data); // Armazenar dados do documento no estado

          const pessoas = data.pessoas;

          if (pessoas !== undefined && data.seguranca_01 !== undefined && data.seguranca_02 !== undefined && data.seguranca_03 !== undefined && data.seguranca_04 !== undefined && data.seguranca_05 !== undefined) {

            const segurancaAverage1 = Math.round((data.seguranca_01 / pessoas) * 20);
            const segurancaAverage2 = Math.round((data.seguranca_02 / pessoas) * 20);
            const segurancaAverage3 = Math.round((data.seguranca_03 / pessoas) * 20);
            const segurancaAverage4 = Math.round((data.seguranca_04 / pessoas) * 20);
            const segurancaAverage5 = Math.round((data.seguranca_05 / pessoas) * 20);

            setsegurancaAverages({
                segurancaAverage1,
                segurancaAverage2,
                segurancaAverage3,
                segurancaAverage4,
                segurancaAverage5,
            });

            console.log("segurancaAverage1:", segurancaAverage1);
            console.log("segurancaAverage2:", segurancaAverage2);
            console.log("segurancaAverage3:", segurancaAverage3);
            console.log("segurancaAverage4:", segurancaAverage4);
            console.log("segurancaAverage5:", segurancaAverage5);

            if (segurancaAverage1 <= 30) {
              setsegurancaPetalaImage(require('../../assets/petala20.png'));
              setsegurancaPetalaStyle(styles.petala200);
            } else if (segurancaAverage1 > 30 && segurancaAverage1 <= 50) {
              setsegurancaPetalaImage(require('../../assets/petala40.png'));
              setsegurancaPetalaStyle(styles.petala400);
            } else if (segurancaAverage1 > 50 && segurancaAverage1 <= 70) {
              setsegurancaPetalaImage(require('../../assets/petala60.png'));
              setsegurancaPetalaStyle(styles.petala600);
            } else if (segurancaAverage1 > 70 && segurancaAverage1 <= 90) {
              setsegurancaPetalaImage(require('../../assets/petala80.png'));
              setsegurancaPetalaStyle(styles.petala800);
            } else if (segurancaAverage1 > 90) {
              setsegurancaPetalaImage(require('../../assets/petala100.png'));
              setsegurancaPetalaStyle(styles.petala1000);
            }

            if (segurancaAverage2 <= 30) {
              setsegurancaPetalaImage1(require('../../assets/petala20.png'));
              setsegurancaPetalaStyle1(styles.petala201);
            } else if (segurancaAverage2 > 30 && segurancaAverage2 <= 50) {
              setsegurancaPetalaImage1(require('../../assets/petala40.png'));
              setsegurancaPetalaStyle1(styles.petala401);
            } else if (segurancaAverage2 > 50 && segurancaAverage2 <= 70) {
              setsegurancaPetalaImage1(require('../../assets/petala60.png'));
              setsegurancaPetalaStyle1(styles.petala601);
            } else if (segurancaAverage2 > 70 && segurancaAverage2 <= 90) {
              setsegurancaPetalaImage1(require('../../assets/petala80.png'));
              setsegurancaPetalaStyle1(styles.petala801);
            } else if (segurancaAverage2 > 90) {
              setsegurancaPetalaImage1(require('../../assets/petala100.png'));
              setsegurancaPetalaStyle1(styles.petala1001);
            }

            if (segurancaAverage3 <= 30) {
              setsegurancaPetalaImage2(require('../../assets/petala20.png'));
              setsegurancaPetalaStyle2(styles.petala202);
            } else if (segurancaAverage3 > 30 && segurancaAverage3 <= 50) {
              setsegurancaPetalaImage2(require('../../assets/petala40.png'));
              setsegurancaPetalaStyle2(styles.petala402);
            } else if (segurancaAverage3 > 50 && segurancaAverage3 <= 70) {
              setsegurancaPetalaImage2(require('../../assets/petala60.png'));
              setsegurancaPetalaStyle2(styles.petala602);
            } else if (segurancaAverage3 > 70 && segurancaAverage3 <= 90) {
              setsegurancaPetalaImage2(require('../../assets/petala80.png'));
              setsegurancaPetalaStyle2(styles.petala802);
            } else if (segurancaAverage3 > 90) {
              setsegurancaPetalaImage2(require('../../assets/petala100.png'));
              setsegurancaPetalaStyle2(styles.petala1002);
            }

            if (segurancaAverage4 <= 30) {
              setsegurancaPetalaImage3(require('../../assets/petala20.png'));
              setsegurancaPetalaStyle3(styles.petala203);
            } else if (segurancaAverage4 > 30 && segurancaAverage4 <= 50) {
              setsegurancaPetalaImage3(require('../../assets/petala40.png'));
              setsegurancaPetalaStyle3(styles.petala403);
            } else if (segurancaAverage4 > 50 && segurancaAverage4 <= 70) {
              setsegurancaPetalaImage3(require('../../assets/petala60.png'));
              setsegurancaPetalaStyle3(styles.petala603);
            } else if (segurancaAverage4 > 70 && segurancaAverage4 <= 90) {
              setsegurancaPetalaImage3(require('../../assets/petala80.png'));
              setsegurancaPetalaStyle3(styles.petala803);
            } else if (segurancaAverage4 > 90) {
              setsegurancaPetalaImage3(require('../../assets/petala100.png'));
              setsegurancaPetalaStyle3(styles.petala1003);
            }

            if (segurancaAverage5 <= 30) {
              setsegurancaPetalaImage4(require('../../assets/petala20.png'));
              setsegurancaPetalaStyle4(styles.petala204);
            } else if (segurancaAverage5 > 30 && segurancaAverage5 <= 50) {
              setsegurancaPetalaImage4(require('../../assets/petala40.png'));
              setsegurancaPetalaStyle4(styles.petala404);
            } else if (segurancaAverage5 > 50 && segurancaAverage5 <= 70) {
              setsegurancaPetalaImage4(require('../../assets/petala60.png'));
              setsegurancaPetalaStyle4(styles.petala604);
            } else if (segurancaAverage5 > 70 && segurancaAverage5 <= 90) {
              setsegurancaPetalaImage4(require('../../assets/petala80.png'));
              setsegurancaPetalaStyle4(styles.petala804);
            } else if (segurancaAverage5 > 90) {
              setsegurancaPetalaImage4(require('../../assets/petala100.png'));
              setsegurancaPetalaStyle4(styles.petala1004);
            }

          } else {
            console.log("Missing data points for calculations.");
          }
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching document: ", error);
      } finally {
        setLoading(false); // Finalize loading state
      }
    }

    // Simulate initial loading time
    setTimeout(() => {
      setInitialLoading(false);
      fetchData();
    }, 2000);

    return () => {
      if (unsubscribe && typeof unsubscribe === 'function') {
        unsubscribe();
      }
    };
  }, [novoJardineteDocId]);

  if (initialLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (loading) {
    return <Text>Loading...</Text>; // Show loading state while data is being fetched
  }

  if (!documentData) {
    return <Text>Erro ao carregar os dados.</Text>; // Handle case where data is not available
  }

  return (
    <ScrollView style={styles.scroll}>
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

        <View style={styles.retMore}>
        </View>

        <View style={styles.bemTitle}>
          <Image source={require('../../assets/seguTitle.png')} style={styles.title}></Image>
        </View>

        <View style={styles.retExpli}>
          <Text style={styles.expliText}>Gráfico analisando a área de Segurança</Text>
        </View>

        <View style={styles.containerCirc1}>
          <View style={styles.circ}>
            <Text style={styles.textPerc}>{segurancaAverages.segurancaAverage1}%</Text>
          </View>
        </View>
        <View style={styles.containerCircText1}>
          <Text style={styles.textCirc1}>Me sinto segura(o) enquanto frequento a PAV</Text>
        </View>

        <View style={styles.containerCirc2}>
          <View style={styles.circ}>
            <Text style={styles.textPerc}>{segurancaAverages.segurancaAverage2}%</Text>
          </View>
        </View>
        <View style={styles.containerCircText2}>
          <Text style={styles.textCirc2}>A PAV tem iluminação suficiente</Text>
        </View>

        <View style={styles.containerCirc3}>
          <View style={styles.circ}>
            <Text style={styles.textPerc}>{segurancaAverages.segurancaAverage3}%</Text>
          </View>
        </View>
        <View style={styles.containerCircText3}>
          <Text style={styles.textCirc3}>A PAV possui animais abandonados</Text>
        </View>

        <View style={styles.containerCirc4}>
          <View style={styles.circ}>
            <Text style={styles.textPerc}>{segurancaAverages.segurancaAverage4}%</Text>
          </View>
        </View>
        <View style={styles.containerCircText4}>
          <Text style={styles.textCirc4}>Acontecem atividades ilegais na PAV</Text>
        </View>

        <View style={styles.containerCirc5}>
          <View style={styles.circ}>
            <Text style={styles.textPerc}>{segurancaAverages.segurancaAverage5}%</Text>
          </View>
        </View>
        <View style={styles.containerCircText5}>
          <Text style={styles.textCirc5}>É um local seguro contra acidentes</Text>
        </View>

        <View style={styles.centralContainer}>
          <Image source={require('../../assets/folhas.png')} style={styles.folhas} />
          <Image source={segurancaPetalaImage} style={segurancaPetalaStyle} />
          <Image source={segurancaPetalaImage1} style={segurancaPetalaStyle1} />
          <Image source={segurancaPetalaImage2} style={segurancaPetalaStyle2} />
          <Image source={segurancaPetalaImage3} style={segurancaPetalaStyle3} />
          <Image source={segurancaPetalaImage4} style={segurancaPetalaStyle4} />
          <Image source={require('../../assets/miolo.png')} style={styles.miolo} />
        </View>

        <TouchableOpacity style={styles.backButtonGradient} onPress={() => navigation.goBack()}>
  <LinearGradient
    colors={['#4C6523', '#99CB47']}
    style={styles.gradient}
  >
    <Ionicons/>
    <Text style={styles.backButtonText}>Voltar</Text>
  </LinearGradient>
</TouchableOpacity>

        <View style={styles.araucarias2}>
          <Image source={require('../../assets/araucarias.png')} style={styles.araucarias} />
        </View>

        <View style={styles.navbar2}>
          <View style={styles.imageContainer22}>
            <Image source={require('../../assets/UtfprBottom.png')} style={styles.utfprImage} />
          </View>
        </View>

      </View>
    </ScrollView>
  );
}
