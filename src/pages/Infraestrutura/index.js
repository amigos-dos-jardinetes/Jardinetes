import React, { useEffect, useState } from 'react';
import { View, ScrollView, Image, Text, ActivityIndicator, TouchableOpacity, Dimensions } from 'react-native';
import { styles } from '../Infraestrutura/styles';
import { useNavigation, useRoute } from '@react-navigation/native';
import { getAuth } from 'firebase/auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { userSearchData } from '../../../functions';
import { Ionicons } from '@expo/vector-icons'; 
import { LinearGradient } from 'expo-linear-gradient';

export default function Infraestrutura() {

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

  const [infraestruturaPetalaImage, setinfraestruturaPetalaImage] = useState(require('../../assets/petala20.png'));
  const [infraestruturaPetalaStyle, setinfraestruturaPetalaStyle] = useState(styles.petala200);

  const [infraestruturaPetalaImage1, setinfraestruturaPetalaImage1] = useState(require('../../assets/petala20.png'));
  const [infraestruturaPetalaStyle1, setinfraestruturaPetalaStyle1] = useState(styles.petala201);

  const [infraestruturaPetalaImage2, setinfraestruturaPetalaImage2] = useState(require('../../assets/petala20.png'));
  const [infraestruturaPetalaStyle2, setinfraestruturaPetalaStyle2] = useState(styles.petala202);

  const [infraestruturaPetalaImage3, setinfraestruturaPetalaImage3] = useState(require('../../assets/petala20.png'));
  const [infraestruturaPetalaStyle3, setinfraestruturaPetalaStyle3] = useState(styles.petala203);

  const [infraestruturaPetalaImage4, setinfraestruturaPetalaImage4] = useState(require('../../assets/petala20.png'));
  const [infraestruturaPetalaStyle4, setinfraestruturaPetalaStyle4] = useState(styles.petala204);

  const [initialLoading, setInitialLoading] = useState(true);
  const [loading, setLoading] = useState(true);
  const [documentData, setDocumentData] = useState(null);
  const [infraestruturaAverages, setinfraestruturaAverages] = useState({});

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

          if (pessoas !== undefined && data.infraestrutura_01 !== undefined && data.infraestrutura_02 !== undefined && data.infraestrutura_03 !== undefined && data.infraestrutura_04 !== undefined && data.infraestrutura_05 !== undefined) {

            const infraestruturaAverage1 = Math.round((data.infraestrutura_01 / pessoas) * 20);
            const infraestruturaAverage2 = Math.round((data.infraestrutura_02 / pessoas) * 20);
            const infraestruturaAverage3 = Math.round((data.infraestrutura_03 / pessoas) * 20);
            const infraestruturaAverage4 = Math.round((data.infraestrutura_04 / pessoas) * 20);
            const infraestruturaAverage5 = Math.round((data.infraestrutura_05 / pessoas) * 20);

            setinfraestruturaAverages({
                infraestruturaAverage1,
                infraestruturaAverage2,
                infraestruturaAverage3,
                infraestruturaAverage4,
                infraestruturaAverage5,
            });

            console.log("infraestruturaAverage1:", infraestruturaAverage1);
            console.log("infraestruturaAverage2:", infraestruturaAverage2);
            console.log("infraestruturaAverage3:", infraestruturaAverage3);
            console.log("infraestruturaAverage4:", infraestruturaAverage4);
            console.log("infraestruturaAverage5:", infraestruturaAverage5);

            if (infraestruturaAverage1 <= 30) {
              setinfraestruturaPetalaImage(require('../../assets/petala20.png'));
              setinfraestruturaPetalaStyle(styles.petala200);
            } else if (infraestruturaAverage1 > 30 && infraestruturaAverage1 <= 50) {
              setinfraestruturaPetalaImage(require('../../assets/petala40.png'));
              setinfraestruturaPetalaStyle(styles.petala400);
            } else if (infraestruturaAverage1 > 50 && infraestruturaAverage1 <= 70) {
              setinfraestruturaPetalaImage(require('../../assets/petala60.png'));
              setinfraestruturaPetalaStyle(styles.petala600);
            } else if (infraestruturaAverage1 > 70 && infraestruturaAverage1 <= 90) {
              setinfraestruturaPetalaImage(require('../../assets/petala80.png'));
              setinfraestruturaPetalaStyle(styles.petala800);
            } else if (infraestruturaAverage1 > 90) {
              setinfraestruturaPetalaImage(require('../../assets/petala100.png'));
              setinfraestruturaPetalaStyle(styles.petala1000);
            }

            if (infraestruturaAverage2 <= 30) {
              setinfraestruturaPetalaImage1(require('../../assets/petala20.png'));
              setinfraestruturaPetalaStyle1(styles.petala201);
            } else if (infraestruturaAverage2 > 30 && infraestruturaAverage2 <= 50) {
              setinfraestruturaPetalaImage1(require('../../assets/petala40.png'));
              setinfraestruturaPetalaStyle1(styles.petala401);
            } else if (infraestruturaAverage2 > 50 && infraestruturaAverage2 <= 70) {
              setinfraestruturaPetalaImage1(require('../../assets/petala60.png'));
              setinfraestruturaPetalaStyle1(styles.petala601);
            } else if (infraestruturaAverage2 > 70 && infraestruturaAverage2 <= 90) {
              setinfraestruturaPetalaImage1(require('../../assets/petala80.png'));
              setinfraestruturaPetalaStyle1(styles.petala801);
            } else if (infraestruturaAverage2 > 90) {
              setinfraestruturaPetalaImage1(require('../../assets/petala100.png'));
              setinfraestruturaPetalaStyle1(styles.petala1001);
            }

            if (infraestruturaAverage3 <= 30) {
              setinfraestruturaPetalaImage2(require('../../assets/petala20.png'));
              setinfraestruturaPetalaStyle2(styles.petala202);
            } else if (infraestruturaAverage3 > 30 && infraestruturaAverage3 <= 50) {
              setinfraestruturaPetalaImage2(require('../../assets/petala40.png'));
              setinfraestruturaPetalaStyle2(styles.petala402);
            } else if (infraestruturaAverage3 > 50 && infraestruturaAverage3 <= 70) {
              setinfraestruturaPetalaImage2(require('../../assets/petala60.png'));
              setinfraestruturaPetalaStyle2(styles.petala602);
            } else if (infraestruturaAverage3 > 70 && infraestruturaAverage3 <= 90) {
              setinfraestruturaPetalaImage2(require('../../assets/petala80.png'));
              setinfraestruturaPetalaStyle2(styles.petala802);
            } else if (infraestruturaAverage3 > 90) {
              setinfraestruturaPetalaImage2(require('../../assets/petala100.png'));
              setinfraestruturaPetalaStyle2(styles.petala1002);
            }

            if (infraestruturaAverage4 <= 30) {
              setinfraestruturaPetalaImage3(require('../../assets/petala20.png'));
              setinfraestruturaPetalaStyle3(styles.petala203);
            } else if (infraestruturaAverage4 > 30 && infraestruturaAverage4 <= 50) {
              setinfraestruturaPetalaImage3(require('../../assets/petala40.png'));
              setinfraestruturaPetalaStyle3(styles.petala403);
            } else if (infraestruturaAverage4 > 50 && infraestruturaAverage4 <= 70) {
              setinfraestruturaPetalaImage3(require('../../assets/petala60.png'));
              setinfraestruturaPetalaStyle3(styles.petala603);
            } else if (infraestruturaAverage4 > 70 && infraestruturaAverage4 <= 90) {
              setinfraestruturaPetalaImage3(require('../../assets/petala80.png'));
              setinfraestruturaPetalaStyle3(styles.petala803);
            } else if (infraestruturaAverage4 > 90) {
              setinfraestruturaPetalaImage3(require('../../assets/petala100.png'));
              setinfraestruturaPetalaStyle3(styles.petala1003);
            }

            if (infraestruturaAverage5 <= 30) {
              setinfraestruturaPetalaImage4(require('../../assets/petala20.png'));
              setinfraestruturaPetalaStyle4(styles.petala204);
            } else if (infraestruturaAverage5 > 30 && infraestruturaAverage5 <= 50) {
              setinfraestruturaPetalaImage4(require('../../assets/petala40.png'));
              setinfraestruturaPetalaStyle4(styles.petala404);
            } else if (infraestruturaAverage5 > 50 && infraestruturaAverage5 <= 70) {
              setinfraestruturaPetalaImage4(require('../../assets/petala60.png'));
              setinfraestruturaPetalaStyle4(styles.petala604);
            } else if (infraestruturaAverage5 > 70 && infraestruturaAverage5 <= 90) {
              setinfraestruturaPetalaImage4(require('../../assets/petala80.png'));
              setinfraestruturaPetalaStyle4(styles.petala804);
            } else if (infraestruturaAverage5 > 90) {
              setinfraestruturaPetalaImage4(require('../../assets/petala100.png'));
              setinfraestruturaPetalaStyle4(styles.petala1004);
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
          <Text style={styles.retMoreText}>A infraestrutura da área verde na cidade é planejada para oferecer espaços de lazer e preservação ambiental. Além do gramado e da vegetação, podem conter bancos, parque infantil, academia ao ar livre e quadras esportivas.</Text>
        </View>

        <View style={styles.bemTitle}>
          <Image source={require('../../assets/InfraTitle.png')} style={styles.title}></Image>
        </View>

        <View style={styles.retExpli}>
          <Text style={styles.expliText}>Gráfico analisando a área de Infraestrutura</Text>
        </View>

        <View style={styles.containerCirc1}>
          <View style={styles.circ}>
            <Text style={styles.textPerc}>{infraestruturaAverages.infraestruturaAverage1}%</Text>
          </View>
        </View>
        <View style={styles.containerCircText1}>
          <Text style={styles.textCirc1}>A prefeitura faz a manutenção corretamente da PAV</Text>
        </View>

        <View style={styles.containerCirc2}>
          <View style={styles.circ}>
            <Text style={styles.textPerc}>{infraestruturaAverages.infraestruturaAverage2}%</Text>
          </View>
        </View>
        <View style={styles.containerCircText2}>
          <Text style={styles.textCirc2}>A quantidade de árvores é suficiente</Text>
        </View>

        <View style={styles.containerCirc3}>
          <View style={styles.circ}>
          <Text style={styles.textPerc}>
  {infraestruturaAverages.infraestruturaAverage3 === 0 ? 'NA' : `${infraestruturaAverages.infraestruturaAverage3}%`}
</Text>
          </View>
        </View>
        <View style={styles.containerCircText3}>
          <Text style={styles.textCirc3}>Os bancos são suficientes e estão em bom estado</Text>
        </View>

        <View style={styles.containerCirc4}>
          <View style={styles.circ}>
            <Text style={styles.textPerc}>
            {infraestruturaAverages.infraestruturaAverage4 === 0 ? 'NA' : `${infraestruturaAverages.infraestruturaAverage4}%`}
              </Text>
          </View>
        </View>
        <View style={styles.containerCircText4}>
          <Text style={styles.textCirc4}>A academia ao ar livre ou o parque infantil estão em bom estado</Text>
        </View>

        <View style={styles.containerCirc5}>
          <View style={styles.circ}>
            <Text style={styles.textPerc}>
            {infraestruturaAverages.infraestruturaAverage5 === 0 ? 'NA' : `${infraestruturaAverages.infraestruturaAverage5}%`}
              </Text>
          </View>
        </View>
        <View style={styles.containerCircText5}>
          <Text style={styles.textCirc5}>Os campos ou as quadras esportivas estão em bom estado</Text>
        </View>

        <View style={styles.centralContainer}>
          <Image source={require('../../assets/folhas.png')} style={styles.folhas} />
          <Image source={infraestruturaPetalaImage} style={infraestruturaPetalaStyle} />
          <Image source={infraestruturaPetalaImage1} style={infraestruturaPetalaStyle1} />
          <Image source={infraestruturaPetalaImage2} style={infraestruturaPetalaStyle2} />
          <Image source={infraestruturaPetalaImage3} style={infraestruturaPetalaStyle3} />
          <Image source={infraestruturaPetalaImage4} style={infraestruturaPetalaStyle4} />
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
