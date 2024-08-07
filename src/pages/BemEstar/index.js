import React, { useEffect, useState } from 'react';
import { View, ScrollView, Image, Text, ActivityIndicator, TouchableOpacity, Dimensions } from 'react-native';
import { styles } from '../BemEstar/styles';
import { useNavigation, useRoute } from '@react-navigation/native';
import { getAuth } from 'firebase/auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { userSearchData } from '../../../functions';
import { Ionicons } from '@expo/vector-icons'; 
import { LinearGradient } from 'expo-linear-gradient';

export default function BemEstar() {

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

  const [bemEstarPetalaImage, setBemEstarPetalaImage] = useState(require('../../assets/petala20.png'));
  const [bemEstarPetalaStyle, setBemEstarPetalaStyle] = useState(styles.petala200);

  const [bemEstarPetalaImage1, setBemEstarPetalaImage1] = useState(require('../../assets/petala20.png'));
  const [bemEstarPetalaStyle1, setBemEstarPetalaStyle1] = useState(styles.petala201);

  const [bemEstarPetalaImage2, setBemEstarPetalaImage2] = useState(require('../../assets/petala20.png'));
  const [bemEstarPetalaStyle2, setBemEstarPetalaStyle2] = useState(styles.petala202);

  const [bemEstarPetalaImage3, setBemEstarPetalaImage3] = useState(require('../../assets/petala20.png'));
  const [bemEstarPetalaStyle3, setBemEstarPetalaStyle3] = useState(styles.petala203);

  const [bemEstarPetalaImage4, setBemEstarPetalaImage4] = useState(require('../../assets/petala20.png'));
  const [bemEstarPetalaStyle4, setBemEstarPetalaStyle4] = useState(styles.petala204);

  const [initialLoading, setInitialLoading] = useState(true);
  const [loading, setLoading] = useState(true);
  const [documentData, setDocumentData] = useState(null);
  const [bemEstarAverages, setBemEstarAverages] = useState({});

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

          if (pessoas !== undefined && data.bem_estar_01 !== undefined && data.bem_estar_02 !== undefined && data.bem_estar_03 !== undefined && data.bem_estar_04 !== undefined && data.bem_estar_05 !== undefined) {

            const bemEstarAverage1 = Math.round((data.bem_estar_01 / pessoas) * 20);
            const bemEstarAverage2 = Math.round((data.bem_estar_02 / pessoas) * 20);
            const bemEstarAverage3 = Math.round((data.bem_estar_03 / pessoas) * 20);
            const bemEstarAverage4 = Math.round((data.bem_estar_04 / pessoas) * 20);
            const bemEstarAverage5 = Math.round((data.bem_estar_05 / pessoas) * 20);

            setBemEstarAverages({
              bemEstarAverage1,
              bemEstarAverage2,
              bemEstarAverage3,
              bemEstarAverage4,
              bemEstarAverage5,
            });

            console.log("bemEstarAverage1:", bemEstarAverage1);
            console.log("bemEstarAverage2:", bemEstarAverage2);
            console.log("bemEstarAverage3:", bemEstarAverage3);
            console.log("bemEstarAverage4:", bemEstarAverage4);
            console.log("bemEstarAverage5:", bemEstarAverage5);

            if (bemEstarAverage1 <= 30) {
              setBemEstarPetalaImage(require('../../assets/petala20.png'));
              setBemEstarPetalaStyle(styles.petala200);
            } else if (bemEstarAverage1 > 30 && bemEstarAverage1 <= 50) {
              setBemEstarPetalaImage(require('../../assets/petala40.png'));
              setBemEstarPetalaStyle(styles.petala400);
            } else if (bemEstarAverage1 > 50 && bemEstarAverage1 <= 70) {
              setBemEstarPetalaImage(require('../../assets/petala60.png'));
              setBemEstarPetalaStyle(styles.petala600);
            } else if (bemEstarAverage1 > 70 && bemEstarAverage1 <= 90) {
              setBemEstarPetalaImage(require('../../assets/petala80.png'));
              setBemEstarPetalaStyle(styles.petala800);
            } else if (bemEstarAverage1 > 90) {
              setBemEstarPetalaImage(require('../../assets/petala100.png'));
              setBemEstarPetalaStyle(styles.petala1000);
            }

            if (bemEstarAverage2 <= 30) {
              setBemEstarPetalaImage1(require('../../assets/petala20.png'));
              setBemEstarPetalaStyle1(styles.petala201);
            } else if (bemEstarAverage2 > 30 && bemEstarAverage2 <= 50) {
              setBemEstarPetalaImage1(require('../../assets/petala40.png'));
              setBemEstarPetalaStyle1(styles.petala401);
            } else if (bemEstarAverage2 > 50 && bemEstarAverage2 <= 70) {
              setBemEstarPetalaImage1(require('../../assets/petala60.png'));
              setBemEstarPetalaStyle1(styles.petala601);
            } else if (bemEstarAverage2 > 70 && bemEstarAverage2 <= 90) {
              setBemEstarPetalaImage1(require('../../assets/petala80.png'));
              setBemEstarPetalaStyle1(styles.petala801);
            } else if (bemEstarAverage2 > 90) {
              setBemEstarPetalaImage1(require('../../assets/petala100.png'));
              setBemEstarPetalaStyle1(styles.petala1001);
            }

            if (bemEstarAverage3 <= 30) {
              setBemEstarPetalaImage2(require('../../assets/petala20.png'));
              setBemEstarPetalaStyle2(styles.petala202);
            } else if (bemEstarAverage3 > 30 && bemEstarAverage3 <= 50) {
              setBemEstarPetalaImage2(require('../../assets/petala40.png'));
              setBemEstarPetalaStyle2(styles.petala402);
            } else if (bemEstarAverage3 > 50 && bemEstarAverage3 <= 70) {
              setBemEstarPetalaImage2(require('../../assets/petala60.png'));
              setBemEstarPetalaStyle2(styles.petala602);
            } else if (bemEstarAverage3 > 70 && bemEstarAverage3 <= 90) {
              setBemEstarPetalaImage2(require('../../assets/petala80.png'));
              setBemEstarPetalaStyle2(styles.petala802);
            } else if (bemEstarAverage3 > 90) {
              setBemEstarPetalaImage2(require('../../assets/petala100.png'));
              setBemEstarPetalaStyle2(styles.petala1002);
            }

            if (bemEstarAverage4 <= 30) {
              setBemEstarPetalaImage3(require('../../assets/petala20.png'));
              setBemEstarPetalaStyle3(styles.petala203);
            } else if (bemEstarAverage4 > 30 && bemEstarAverage4 <= 50) {
              setBemEstarPetalaImage3(require('../../assets/petala40.png'));
              setBemEstarPetalaStyle3(styles.petala403);
            } else if (bemEstarAverage4 > 50 && bemEstarAverage4 <= 70) {
              setBemEstarPetalaImage3(require('../../assets/petala60.png'));
              setBemEstarPetalaStyle3(styles.petala603);
            } else if (bemEstarAverage4 > 70 && bemEstarAverage4 <= 90) {
              setBemEstarPetalaImage3(require('../../assets/petala80.png'));
              setBemEstarPetalaStyle3(styles.petala803);
            } else if (bemEstarAverage4 > 90) {
              setBemEstarPetalaImage3(require('../../assets/petala100.png'));
              setBemEstarPetalaStyle3(styles.petala1003);
            }

            if (bemEstarAverage5 <= 30) {
              setBemEstarPetalaImage4(require('../../assets/petala20.png'));
              setBemEstarPetalaStyle4(styles.petala204);
            } else if (bemEstarAverage5 > 30 && bemEstarAverage5 <= 50) {
              setBemEstarPetalaImage4(require('../../assets/petala40.png'));
              setBemEstarPetalaStyle4(styles.petala404);
            } else if (bemEstarAverage5 > 50 && bemEstarAverage5 <= 70) {
              setBemEstarPetalaImage4(require('../../assets/petala60.png'));
              setBemEstarPetalaStyle4(styles.petala604);
            } else if (bemEstarAverage5 > 70 && bemEstarAverage5 <= 90) {
              setBemEstarPetalaImage4(require('../../assets/petala80.png'));
              setBemEstarPetalaStyle4(styles.petala804);
            } else if (bemEstarAverage5 > 90) {
              setBemEstarPetalaImage4(require('../../assets/petala100.png'));
              setBemEstarPetalaStyle4(styles.petala1004);
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
          <Text style={styles.retMoreText}>As áreas verdes são essenciais para a saúde física e mental dos moradores, incentivando um estilo de vida ativo e proporcionando locais tranquilos que ajudam a reduzir o estresse e melhorar o humor. Além disso, promovem a interação social e fortalecem o vínculo da comunidade.</Text>
        </View>

        <View style={styles.bemTitle}>
          <Image source={require('../../assets/BemTitle.png')} style={styles.title}></Image>
        </View>

        <View style={styles.retExpli}>
          <Text style={styles.expliText}>Gráfico analisando a área de Bem Estar</Text>
        </View>

        <View style={styles.containerCirc1}>
          <View style={styles.circ}>
            <Text style={styles.textPerc}>{bemEstarAverages.bemEstarAverage1}%</Text>
          </View>
        </View>
        <View style={styles.containerCircText1}>
          <Text style={styles.textCirc1}>A PAV melhora a qualidade da minha vida e das pessoas ao meu redor</Text>
        </View>

        <View style={styles.containerCirc2}>
          <View style={styles.circ}>
            <Text style={styles.textPerc}>{bemEstarAverages.bemEstarAverage2}%</Text>
          </View>
        </View>
        <View style={styles.containerCircText2}>
          <Text style={styles.textCirc2}>A PAV é um bom lugar para as crianças</Text>
        </View>

        <View style={styles.containerCirc3}>
          <View style={styles.circ}>
            <Text style={styles.textPerc}>{bemEstarAverages.bemEstarAverage3}%</Text>
          </View>
        </View>
        <View style={styles.containerCircText3}>
          <Text style={styles.textCirc3}>A PAV é um bom lugar para os idosos</Text>
        </View>

        <View style={styles.containerCirc4}>
          <View style={styles.circ}>
            <Text style={styles.textPerc}>{bemEstarAverages.bemEstarAverage4}%</Text>
          </View>
        </View>
        <View style={styles.containerCircText4}>
          <Text style={styles.textCirc4}>A PAV é um bom lugar para adolescentes ou jovens adultos</Text>
        </View>

        <View style={styles.containerCirc5}>
          <View style={styles.circ}>
            <Text style={styles.textPerc}>{bemEstarAverages.bemEstarAverage5}%</Text>
          </View>
        </View>
        <View style={styles.containerCircText5}>
          <Text style={styles.textCirc5}>A PAV é bom lugar para pets</Text>
        </View>

        <View style={styles.centralContainer}>
          <Image source={require('../../assets/folhas.png')} style={styles.folhas} />
          <Image source={bemEstarPetalaImage} style={bemEstarPetalaStyle} />
          <Image source={bemEstarPetalaImage1} style={bemEstarPetalaStyle1} />
          <Image source={bemEstarPetalaImage2} style={bemEstarPetalaStyle2} />
          <Image source={bemEstarPetalaImage3} style={bemEstarPetalaStyle3} />
          <Image source={bemEstarPetalaImage4} style={bemEstarPetalaStyle4} />
          <Image source={require('../../assets/miolo.png')} style={styles.miolo} />
        </View>

        <View style={styles.gradientButtonContainer}>
                                <TouchableOpacity 
                                    style={styles.gradientButton} 
                                    onPress={() => navigation.goBack()}
                                >
                                    <LinearGradient
                                        colors={['#4C6523', '#99CB47']}
                                        start={{ x: 0, y: 0 }}
                                        end={{ x: 1, y: 0 }}
                                        style={styles.linearGradient}
                                    >
                                        <Text style={styles.gradientButtonText}>Voltar</Text>
                                    </LinearGradient>
                                </TouchableOpacity>
                            </View>

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
