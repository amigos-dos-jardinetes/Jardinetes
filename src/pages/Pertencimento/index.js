import React, { useEffect, useState } from 'react';
import { View, ScrollView, Image, Text, ActivityIndicator, TouchableOpacity, Dimensions } from 'react-native';
import { styles } from '../Pertencimento/styles';
import { useNavigation, useRoute } from '@react-navigation/native';
import { getAuth } from 'firebase/auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { userSearchData } from '../../../functions';
import { Ionicons } from '@expo/vector-icons'; 
import { LinearGradient } from 'expo-linear-gradient';

export default function Pertencimento() {

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

  const [pertencimentoPetalaImage, setpertencimentoPetalaImage] = useState(require('../../assets/petala20.png'));
  const [pertencimentoPetalaStyle, setpertencimentoPetalaStyle] = useState(styles.petala200);

  const [pertencimentoPetalaImage1, setpertencimentoPetalaImage1] = useState(require('../../assets/petala20.png'));
  const [pertencimentoPetalaStyle1, setpertencimentoPetalaStyle1] = useState(styles.petala201);

  const [pertencimentoPetalaImage2, setpertencimentoPetalaImage2] = useState(require('../../assets/petala20.png'));
  const [pertencimentoPetalaStyle2, setpertencimentoPetalaStyle2] = useState(styles.petala202);

  const [pertencimentoPetalaImage3, setpertencimentoPetalaImage3] = useState(require('../../assets/petala20.png'));
  const [pertencimentoPetalaStyle3, setpertencimentoPetalaStyle3] = useState(styles.petala203);

  const [pertencimentoPetalaImage4, setpertencimentoPetalaImage4] = useState(require('../../assets/petala20.png'));
  const [pertencimentoPetalaStyle4, setpertencimentoPetalaStyle4] = useState(styles.petala204);

  const [initialLoading, setInitialLoading] = useState(true);
  const [loading, setLoading] = useState(true);
  const [documentData, setDocumentData] = useState(null);
  const [pertencimentoAverages, setpertencimentoAverages] = useState({});

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

          if (pessoas !== undefined && data.pertencimento_01 !== undefined && data.pertencimento_02 !== undefined && data.pertencimento_03 !== undefined && data.pertencimento_04 !== undefined && data.pertencimento_05 !== undefined) {

            const pertencimentoAverage1 = Math.round((data.pertencimento_01 / pessoas) * 20);
            const pertencimentoAverage2 = Math.round((data.pertencimento_02 / pessoas) * 20);
            const pertencimentoAverage3 = Math.round((data.pertencimento_03 / pessoas) * 20);
            const pertencimentoAverage4 = Math.round((data.pertencimento_04 / pessoas) * 20);
            const pertencimentoAverage5 = Math.round((data.pertencimento_05 / pessoas) * 20);

            setpertencimentoAverages({
                pertencimentoAverage1,
                pertencimentoAverage2,
                pertencimentoAverage3,
                pertencimentoAverage4,
                pertencimentoAverage5,
            });

            console.log("pertencimentoAverage1:", pertencimentoAverage1);
            console.log("pertencimentoAverage2:", pertencimentoAverage2);
            console.log("pertencimentoAverage3:", pertencimentoAverage3);
            console.log("pertencimentoAverage4:", pertencimentoAverage4);
            console.log("pertencimentoAverage5:", pertencimentoAverage5);

            if (pertencimentoAverage1 <= 30) {
              setpertencimentoPetalaImage(require('../../assets/petala20.png'));
              setpertencimentoPetalaStyle(styles.petala200);
            } else if (pertencimentoAverage1 > 30 && pertencimentoAverage1 <= 50) {
              setpertencimentoPetalaImage(require('../../assets/petala40.png'));
              setpertencimentoPetalaStyle(styles.petala400);
            } else if (pertencimentoAverage1 > 50 && pertencimentoAverage1 <= 70) {
              setpertencimentoPetalaImage(require('../../assets/petala60.png'));
              setpertencimentoPetalaStyle(styles.petala600);
            } else if (pertencimentoAverage1 > 70 && pertencimentoAverage1 <= 90) {
              setpertencimentoPetalaImage(require('../../assets/petala80.png'));
              setpertencimentoPetalaStyle(styles.petala800);
            } else if (pertencimentoAverage1 > 90) {
              setpertencimentoPetalaImage(require('../../assets/petala100.png'));
              setpertencimentoPetalaStyle(styles.petala1000);
            }

            if (pertencimentoAverage2 <= 30) {
              setpertencimentoPetalaImage1(require('../../assets/petala20.png'));
              setpertencimentoPetalaStyle1(styles.petala201);
            } else if (pertencimentoAverage2 > 30 && pertencimentoAverage2 <= 50) {
              setpertencimentoPetalaImage1(require('../../assets/petala40.png'));
              setpertencimentoPetalaStyle1(styles.petala401);
            } else if (pertencimentoAverage2 > 50 && pertencimentoAverage2 <= 70) {
              setpertencimentoPetalaImage1(require('../../assets/petala60.png'));
              setpertencimentoPetalaStyle1(styles.petala601);
            } else if (pertencimentoAverage2 > 70 && pertencimentoAverage2 <= 90) {
              setpertencimentoPetalaImage1(require('../../assets/petala80.png'));
              setpertencimentoPetalaStyle1(styles.petala801);
            } else if (pertencimentoAverage2 > 90) {
              setpertencimentoPetalaImage1(require('../../assets/petala100.png'));
              setpertencimentoPetalaStyle1(styles.petala1001);
            }

            if (pertencimentoAverage3 <= 30) {
              setpertencimentoPetalaImage2(require('../../assets/petala20.png'));
              setpertencimentoPetalaStyle2(styles.petala202);
            } else if (pertencimentoAverage3 > 30 && pertencimentoAverage3 <= 50) {
              setpertencimentoPetalaImage2(require('../../assets/petala40.png'));
              setpertencimentoPetalaStyle2(styles.petala402);
            } else if (pertencimentoAverage3 > 50 && pertencimentoAverage3 <= 70) {
              setpertencimentoPetalaImage2(require('../../assets/petala60.png'));
              setpertencimentoPetalaStyle2(styles.petala602);
            } else if (pertencimentoAverage3 > 70 && pertencimentoAverage3 <= 90) {
              setpertencimentoPetalaImage2(require('../../assets/petala80.png'));
              setpertencimentoPetalaStyle2(styles.petala802);
            } else if (pertencimentoAverage3 > 90) {
              setpertencimentoPetalaImage2(require('../../assets/petala100.png'));
              setpertencimentoPetalaStyle2(styles.petala1002);
            }

            if (pertencimentoAverage4 <= 30) {
              setpertencimentoPetalaImage3(require('../../assets/petala20.png'));
              setpertencimentoPetalaStyle3(styles.petala203);
            } else if (pertencimentoAverage4 > 30 && pertencimentoAverage4 <= 50) {
              setpertencimentoPetalaImage3(require('../../assets/petala40.png'));
              setpertencimentoPetalaStyle3(styles.petala403);
            } else if (pertencimentoAverage4 > 50 && pertencimentoAverage4 <= 70) {
              setpertencimentoPetalaImage3(require('../../assets/petala60.png'));
              setpertencimentoPetalaStyle3(styles.petala603);
            } else if (pertencimentoAverage4 > 70 && pertencimentoAverage4 <= 90) {
              setpertencimentoPetalaImage3(require('../../assets/petala80.png'));
              setpertencimentoPetalaStyle3(styles.petala803);
            } else if (pertencimentoAverage4 > 90) {
              setpertencimentoPetalaImage3(require('../../assets/petala100.png'));
              setpertencimentoPetalaStyle3(styles.petala1003);
            }

            if (pertencimentoAverage5 <= 30) {
              setpertencimentoPetalaImage4(require('../../assets/petala20.png'));
              setpertencimentoPetalaStyle4(styles.petala204);
            } else if (pertencimentoAverage5 > 30 && pertencimentoAverage5 <= 50) {
              setpertencimentoPetalaImage4(require('../../assets/petala40.png'));
              setpertencimentoPetalaStyle4(styles.petala404);
            } else if (pertencimentoAverage5 > 50 && pertencimentoAverage5 <= 70) {
              setpertencimentoPetalaImage4(require('../../assets/petala60.png'));
              setpertencimentoPetalaStyle4(styles.petala604);
            } else if (pertencimentoAverage5 > 70 && pertencimentoAverage5 <= 90) {
              setpertencimentoPetalaImage4(require('../../assets/petala80.png'));
              setpertencimentoPetalaStyle4(styles.petala804);
            } else if (pertencimentoAverage5 > 90) {
              setpertencimentoPetalaImage4(require('../../assets/petala100.png'));
              setpertencimentoPetalaStyle4(styles.petala1004);
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
          <Image source={require('../../assets/pertTitle.png')} style={styles.title}></Image>
        </View>

        <View style={styles.retExpli}>
          <Text style={styles.expliText}>Gráfico analisando a área de Pertencimento</Text>
        </View>

        <View style={styles.containerCirc1}>
          <View style={styles.circ}>
            <Text style={styles.textPerc}>{pertencimentoAverages.pertencimentoAverage1}%</Text>
          </View>
        </View>
        <View style={styles.containerCircText1}>
          <Text style={styles.textCirc1}>Vou com frequência ao PAV</Text>
        </View>

        <View style={styles.containerCirc2}>
          <View style={styles.circ}>
            <Text style={styles.textPerc}>{pertencimentoAverages.pertencimentoAverage2}%</Text>
          </View>
        </View>
        <View style={styles.containerCircText2}>
          <Text style={styles.textCirc2}>Os moradores próximos à PAV ajudam a manter o local limpo</Text>
        </View>

        <View style={styles.containerCirc3}>
          <View style={styles.circ}>
            <Text style={styles.textPerc}>{pertencimentoAverages.pertencimentoAverage3}%</Text>
          </View>
        </View>
        <View style={styles.containerCircText3}>
          <Text style={styles.textCirc3}>Se vejo lixo jogado no chão da PAV, eu recolho</Text>
        </View>

        <View style={styles.containerCirc4}>
          <View style={styles.circ}>
            <Text style={styles.textPerc}>{pertencimentoAverages.pertencimentoAverage4}%</Text>
          </View>
        </View>
        <View style={styles.containerCircText4}>
          <Text style={styles.textCirc4}>Eu gostaria que o PAV perto da minha casa fosse mais frequentado</Text>
        </View>

        <View style={styles.containerCirc5}>
          <View style={styles.circ}>
            <Text style={styles.textPerc}>{pertencimentoAverages.pertencimentoAverage5}%</Text>
          </View>
        </View>
        <View style={styles.containerCircText5}>
          <Text style={styles.textCirc5}>Quando tem muitas pessoas no PAV, eu fico animado(a) para ir</Text>
        </View>

        <View style={styles.centralContainer}>
          <Image source={require('../../assets/folhas.png')} style={styles.folhas} />
          <Image source={pertencimentoPetalaImage} style={pertencimentoPetalaStyle} />
          <Image source={pertencimentoPetalaImage1} style={pertencimentoPetalaStyle1} />
          <Image source={pertencimentoPetalaImage2} style={pertencimentoPetalaStyle2} />
          <Image source={pertencimentoPetalaImage3} style={pertencimentoPetalaStyle3} />
          <Image source={pertencimentoPetalaImage4} style={pertencimentoPetalaStyle4} />
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
