import React, { useEffect, useState } from 'react';
import { View, ScrollView, Image, Text, ActivityIndicator, TouchableOpacity, useWindowDimensions, Linking } from 'react-native';
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
  const myStyles = styles();
  const { width, height } = useWindowDimensions(); 
  const novoJardineteDocId = route.params.novoJardineteDocId;

  const [pertencimentoPetalaImage, setpertencimentoPetalaImage] = useState(require('../../assets/petala20.png'));
  const [pertencimentoPetalaStyle, setpertencimentoPetalaStyle] = useState(myStyles.petala200);

  const [pertencimentoPetalaImage1, setpertencimentoPetalaImage1] = useState(require('../../assets/petala20.png'));
  const [pertencimentoPetalaStyle1, setpertencimentoPetalaStyle1] = useState(myStyles.petala201);

  const [pertencimentoPetalaImage2, setpertencimentoPetalaImage2] = useState(require('../../assets/petala20.png'));
  const [pertencimentoPetalaStyle2, setpertencimentoPetalaStyle2] = useState(myStyles.petala202);

  const [pertencimentoPetalaImage3, setpertencimentoPetalaImage3] = useState(require('../../assets/petala20.png'));
  const [pertencimentoPetalaStyle3, setpertencimentoPetalaStyle3] = useState(myStyles.petala203);

  const [pertencimentoPetalaImage4, setpertencimentoPetalaImage4] = useState(require('../../assets/petala20.png'));
  const [pertencimentoPetalaStyle4, setpertencimentoPetalaStyle4] = useState(myStyles.petala204);

  const [initialLoading, setInitialLoading] = useState(true);
  const [loading, setLoading] = useState(true);
  const [documentData, setDocumentData] = useState(null);
  const [pertencimentoAverages, setpertencimentoAverages] = useState({});
  const openLink = (url) => {
    Linking.openURL(url).catch(err => console.error("Erro ao abrir o link:", err));
  };

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
          const newPessoas = data.newPessoas;

          if (
            (data.pertencimento_01 !== undefined || data.newPertencimento_01 !== undefined) &&
            (data.pertencimento_02 !== undefined || data.newPertencimento_02 !== undefined) &&
            (data.pertencimento_03 !== undefined || data.newPertencimento_03 !== undefined) &&
            (data.pertencimento_04 !== undefined || data.newPertencimento_04 !== undefined) &&
            (data.pertencimento_05 !== undefined || data.newPertencimento_05 !== undefined) &&
            (pessoas !== undefined) || (newPessoas !== undefined) 
          ) {

            const pertencimentoAverage1 = Math.round(((data.pertencimento_01 + data.newPertencimento_01) / (pessoas + newPessoas)) * 20);
            const pertencimentoAverage2 = Math.round(((data.pertencimento_02 + data.newPertencimento_02) / (pessoas + newPessoas)) * 20);
            const pertencimentoAverage3 = Math.round(((data.pertencimento_03 + data.newPertencimento_03) / (pessoas + newPessoas)) * 20);
            const pertencimentoAverage4 = Math.round(((data.pertencimento_04 + data.newPertencimento_04) / (pessoas + newPessoas)) * 20);
            const pertencimentoAverage5 = Math.round(((data.pertencimento_05 + data.newPertencimento_05) / (pessoas + newPessoas)) * 20);

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
              setpertencimentoPetalaStyle(myStyles.petala200);
            } else if (pertencimentoAverage1 > 30 && pertencimentoAverage1 <= 50) {
              setpertencimentoPetalaImage(require('../../assets/petala40.png'));
              setpertencimentoPetalaStyle(myStyles.petala400);
            } else if (pertencimentoAverage1 > 50 && pertencimentoAverage1 <= 70) {
              setpertencimentoPetalaImage(require('../../assets/petala60.png'));
              setpertencimentoPetalaStyle(myStyles.petala600);
            } else if (pertencimentoAverage1 > 70 && pertencimentoAverage1 <= 90) {
              setpertencimentoPetalaImage(require('../../assets/petala80.png'));
              setpertencimentoPetalaStyle(myStyles.petala800);
            } else if (pertencimentoAverage1 > 90) {
              setpertencimentoPetalaImage(require('../../assets/petala100.png'));
              setpertencimentoPetalaStyle(myStyles.petala1000);
            }

            if (pertencimentoAverage2 <= 30) {
              setpertencimentoPetalaImage1(require('../../assets/petala20.png'));
              setpertencimentoPetalaStyle1(myStyles.petala201);
            } else if (pertencimentoAverage2 > 30 && pertencimentoAverage2 <= 50) {
              setpertencimentoPetalaImage1(require('../../assets/petala40.png'));
              setpertencimentoPetalaStyle1(myStyles.petala401);
            } else if (pertencimentoAverage2 > 50 && pertencimentoAverage2 <= 70) {
              setpertencimentoPetalaImage1(require('../../assets/petala60.png'));
              setpertencimentoPetalaStyle1(myStyles.petala601);
            } else if (pertencimentoAverage2 > 70 && pertencimentoAverage2 <= 90) {
              setpertencimentoPetalaImage1(require('../../assets/petala80.png'));
              setpertencimentoPetalaStyle1(myStyles.petala801);
            } else if (pertencimentoAverage2 > 90) {
              setpertencimentoPetalaImage1(require('../../assets/petala100.png'));
              setpertencimentoPetalaStyle1(myStyles.petala1001);
            }

            if (pertencimentoAverage3 <= 30) {
              setpertencimentoPetalaImage2(require('../../assets/petala20.png'));
              setpertencimentoPetalaStyle2(myStyles.petala202);
            } else if (pertencimentoAverage3 > 30 && pertencimentoAverage3 <= 50) {
              setpertencimentoPetalaImage2(require('../../assets/petala40.png'));
              setpertencimentoPetalaStyle2(myStyles.petala402);
            } else if (pertencimentoAverage3 > 50 && pertencimentoAverage3 <= 70) {
              setpertencimentoPetalaImage2(require('../../assets/petala60.png'));
              setpertencimentoPetalaStyle2(myStyles.petala602);
            } else if (pertencimentoAverage3 > 70 && pertencimentoAverage3 <= 90) {
              setpertencimentoPetalaImage2(require('../../assets/petala80.png'));
              setpertencimentoPetalaStyle2(myStyles.petala802);
            } else if (pertencimentoAverage3 > 90) {
              setpertencimentoPetalaImage2(require('../../assets/petala100.png'));
              setpertencimentoPetalaStyle2(myStyles.petala1002);
            }

            if (pertencimentoAverage4 <= 30) {
              setpertencimentoPetalaImage3(require('../../assets/petala20.png'));
              setpertencimentoPetalaStyle3(myStyles.petala203);
            } else if (pertencimentoAverage4 > 30 && pertencimentoAverage4 <= 50) {
              setpertencimentoPetalaImage3(require('../../assets/petala40.png'));
              setpertencimentoPetalaStyle3(myStyles.petala403);
            } else if (pertencimentoAverage4 > 50 && pertencimentoAverage4 <= 70) {
              setpertencimentoPetalaImage3(require('../../assets/petala60.png'));
              setpertencimentoPetalaStyle3(myStyles.petala603);
            } else if (pertencimentoAverage4 > 70 && pertencimentoAverage4 <= 90) {
              setpertencimentoPetalaImage3(require('../../assets/petala80.png'));
              setpertencimentoPetalaStyle3(myStyles.petala803);
            } else if (pertencimentoAverage4 > 90) {
              setpertencimentoPetalaImage3(require('../../assets/petala100.png'));
              setpertencimentoPetalaStyle3(myStyles.petala1003);
            }

            if (pertencimentoAverage5 <= 30) {
              setpertencimentoPetalaImage4(require('../../assets/petala20.png'));
              setpertencimentoPetalaStyle4(myStyles.petala204);
            } else if (pertencimentoAverage5 > 30 && pertencimentoAverage5 <= 50) {
              setpertencimentoPetalaImage4(require('../../assets/petala40.png'));
              setpertencimentoPetalaStyle4(myStyles.petala404);
            } else if (pertencimentoAverage5 > 50 && pertencimentoAverage5 <= 70) {
              setpertencimentoPetalaImage4(require('../../assets/petala60.png'));
              setpertencimentoPetalaStyle4(myStyles.petala604);
            } else if (pertencimentoAverage5 > 70 && pertencimentoAverage5 <= 90) {
              setpertencimentoPetalaImage4(require('../../assets/petala80.png'));
              setpertencimentoPetalaStyle4(myStyles.petala804);
            } else if (pertencimentoAverage5 > 90) {
              setpertencimentoPetalaImage4(require('../../assets/petala100.png'));
              setpertencimentoPetalaStyle4(myStyles.petala1004);
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
      });
  
      return () => {
        if (unsubscribe && typeof unsubscribe === 'function') {
          unsubscribe();
        }
      };
    }, [ novoJardineteDocId, width, myStyles]);

  if (initialLoading) {
    return (
      <View style={myStyles.loadingContainer}>
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
    <ScrollView style={myStyles.scroll}>
      <View style={myStyles.container}>
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

        <View style={myStyles.retMore}>
          <Text style={myStyles.retMoreText}>As áreas verdes desempenham um papel fundamental no fortalecimento do sentimento de pertencimento à comunidade, além de que o cuidado com esses espaços reforça o vínculo emocional com o local.</Text>
        </View>

        <View style={myStyles.bemTitle}>
          <Image source={require('../../assets/pertTitle.png')} style={myStyles.title}></Image>
        </View>

        <View style={myStyles.retExpli}>
          <Text style={myStyles.expliText}>Gráfico analisando a área de Pertencimento</Text>
        </View>

        <View style={myStyles.containerCirc1}>
          <View style={myStyles.circ}>
            <Text style={myStyles.textPerc}>{pertencimentoAverages.pertencimentoAverage1}%</Text>
          </View>
        </View>
        <View style={myStyles.containerCircText1}>
          <Text style={myStyles.textCirc1}>Vou com frequência à PAV</Text>
        </View>

        <View style={myStyles.containerCirc2}>
          <View style={myStyles.circ}>
            <Text style={myStyles.textPerc}>{pertencimentoAverages.pertencimentoAverage2}%</Text>
          </View>
        </View>
        <View style={myStyles.containerCircText2}>
          <Text style={myStyles.textCirc2}>Os moradores próximos à PAV ajudam a manter o local limpo</Text>
        </View>

        <View style={myStyles.containerCirc3}>
          <View style={myStyles.circ}>
            <Text style={myStyles.textPerc}>{pertencimentoAverages.pertencimentoAverage3}%</Text>
          </View>
        </View>
        <View style={myStyles.containerCircText3}>
          <Text style={myStyles.textCirc3}>Se vejo lixo jogado no chão da PAV, eu recolho</Text>
        </View>

        <View style={myStyles.containerCirc4}>
          <View style={myStyles.circ}>
            <Text style={myStyles.textPerc}>{pertencimentoAverages.pertencimentoAverage4}%</Text>
          </View>
        </View>
        <View style={myStyles.containerCircText4}>
          <Text style={myStyles.textCirc4}>Eu gostaria que a PAV perto da minha casa fosse mais frequentado</Text>
        </View>

        <View style={myStyles.containerCirc5}>
          <View style={myStyles.circ}>
            <Text style={myStyles.textPerc}>{pertencimentoAverages.pertencimentoAverage5}%</Text>
          </View>
        </View>
        <View style={myStyles.containerCircText5}>
          <Text style={myStyles.textCirc5}>Quando tem muitas pessoas na PAV, eu fico animado(a) para ir</Text>
        </View>

        <View style={myStyles.centralContainer}>
          <Image source={require('../../assets/folhas.png')} style={myStyles.folhas} />
          <Image source={pertencimentoPetalaImage} style={pertencimentoPetalaStyle} />
          <Image source={pertencimentoPetalaImage1} style={pertencimentoPetalaStyle1} />
          <Image source={pertencimentoPetalaImage2} style={pertencimentoPetalaStyle2} />
          <Image source={pertencimentoPetalaImage3} style={pertencimentoPetalaStyle3} />
          <Image source={pertencimentoPetalaImage4} style={pertencimentoPetalaStyle4} />
          <Image source={require('../../assets/miolo.png')} style={myStyles.miolo} />
        </View>

        <View style={myStyles.gradientButtonContainer}>
                                <TouchableOpacity 
                                    style={myStyles.gradientButton} 
                                    onPress={() => navigation.goBack()}
                                >
                                    <LinearGradient
                                        colors={['#4C6523', '#99CB47']}
                                        start={{ x: 0, y: 0 }}
                                        end={{ x: 1, y: 0 }}
                                        style={myStyles.linearGradient}
                                    >
                                        <Text style={myStyles.gradientButtonText}>Voltar</Text>
                                    </LinearGradient>
                                </TouchableOpacity>
                            </View>

        <View style={myStyles.araucarias2}>
          <Image source={require('../../assets/araucarias.png')} style={myStyles.araucarias} />
        </View>

        <View style={myStyles.navbar2}>
<View style={myStyles.rowNav}>
      <View style={myStyles.column1nav}>
          <View style={myStyles.imageContainer22}>
              <Image source={require('../../assets/UtfprBottom.png')}  style={myStyles.utfprImage3} />
          </View>
          <TouchableOpacity style={myStyles.navBt}>
              <Text style={myStyles.textNav}>Mapa do Site</Text>
          </TouchableOpacity>
          <TouchableOpacity style={myStyles.navBt} onPress={() => navigation.navigate('quemSomos')}>
              <Text style={myStyles.textNav}>Quem somos nós</Text>
          </TouchableOpacity>
      </View>


      <View style={myStyles.column2nav}>
          
          <TouchableOpacity style={myStyles.navBt}>
              <Text style={myStyles.textNav}>Informações</Text>
          </TouchableOpacity>
          <TouchableOpacity style={myStyles.navBt}>
              <Text style={myStyles.textNav}>Termos de uso</Text>
          </TouchableOpacity>
          <TouchableOpacity style={myStyles.navBt}>
              <Text style={myStyles.textNav}>LGPD</Text>
          </TouchableOpacity>
      </View>


      <View style={myStyles.column3nav}>
          
          <TouchableOpacity style={myStyles.navBt} onPress={() => navigation.navigate('Contato')}>
              <Text style={myStyles.textNav}>Contato</Text>
          </TouchableOpacity>
          <TouchableOpacity style={myStyles.navBt}>
              <Text style={myStyles.textNav}>Fale conosco</Text>
          </TouchableOpacity>
       
      </View>

      <View style={myStyles.column4nav}>
          
          <View  style={myStyles.navBt}>
              <Text style={myStyles.textNav}>Plataforma digital</Text>
          </View >
          <TouchableOpacity onPress={() => openLink('https://www.instagram.com/amigosdosjardinetes.ct/')}>
          <Image source={require('../../assets/instagramNav.png')}  style={myStyles.instaNav} />
          </TouchableOpacity>
      </View>

    </View>
</View>

      </View>
    </ScrollView>
  );
}
