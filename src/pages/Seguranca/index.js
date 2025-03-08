import React, { useEffect, useState } from 'react';
import { View, ScrollView, Image, Text, ActivityIndicator, TouchableOpacity, useWindowDimensions, Linking } from 'react-native';
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
  const myStyles = styles();
  const { width, height } = useWindowDimensions(); 
  const novoJardineteDocId = route.params.novoJardineteDocId;

  const [segurancaPetalaImage, setsegurancaPetalaImage] = useState(require('../../assets/petala20.png'));
  const [segurancaPetalaStyle, setsegurancaPetalaStyle] = useState(myStyles.petala200);

  const [segurancaPetalaImage1, setsegurancaPetalaImage1] = useState(require('../../assets/petala20.png'));
  const [segurancaPetalaStyle1, setsegurancaPetalaStyle1] = useState(myStyles.petala201);

  const [segurancaPetalaImage2, setsegurancaPetalaImage2] = useState(require('../../assets/petala20.png'));
  const [segurancaPetalaStyle2, setsegurancaPetalaStyle2] = useState(myStyles.petala202);

  const [segurancaPetalaImage3, setsegurancaPetalaImage3] = useState(require('../../assets/petala20.png'));
  const [segurancaPetalaStyle3, setsegurancaPetalaStyle3] = useState(myStyles.petala203);

  const [segurancaPetalaImage4, setsegurancaPetalaImage4] = useState(require('../../assets/petala20.png'));
  const [segurancaPetalaStyle4, setsegurancaPetalaStyle4] = useState(myStyles.petala204);

  const [initialLoading, setInitialLoading] = useState(true);
  const [loading, setLoading] = useState(true);
  const [documentData, setDocumentData] = useState(null);
  const [segurancaAverages, setsegurancaAverages] = useState({});
  //Redireciona ao link
  const openLink = (url) => {
    Linking.openURL(url).catch(err => console.error("Erro ao abrir o link:", err));
  };
  //Busca os dados do usuário
  useEffect(() => {
    const unsubscribe = userSearchData(auth, firestore, storage, navigation, setUserName, setWallpaper, setImageUrl, setEmail, setPracasSeguidas);
    //Busca os dados do Jardinete
    async function fetchData() {
      try {
        const docRef = doc(firestore, 'jardinetes', novoJardineteDocId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          console.log("Document data:", data);
          setDocumentData(data);

          const pessoas = data.pessoas;
          const newPessoas = data.newPessoas;
          //As funções e comparações abaixo são para quantificar os itens de bem estar enviados a partir da página de impacto e executar a renderização condicional dos estilos dos gráficos
          if (
            (data.seguranca_01 !== undefined || data.newSeguranca_01 !== undefined) &&
            (data.seguranca_02 !== undefined || data.newSeguranca_02 !== undefined) &&
            (data.seguranca_03 !== undefined || data.newSeguranca_03 !== undefined) &&
            (data.seguranca_04 !== undefined || data.newSeguranca_04 !== undefined) &&
            (data.seguranca_05 !== undefined || data.newSeguranca_05 !== undefined) &&
            (pessoas !== undefined) || (newPessoas !== undefined) 

          ) {

            const segurancaAverage1 = Math.round(((data.seguranca_01 + data.newSeguranca_01) / (pessoas + newPessoas)) * 20);
            const segurancaAverage2 = Math.round(((data.seguranca_02 + data.newSeguranca_02) / (pessoas + newPessoas)) * 20);
            const segurancaAverage3 = Math.round(((data.seguranca_03 + data.newSeguranca_03) / (pessoas + newPessoas)) * 20);
            const segurancaAverage4 = Math.round(((data.seguranca_04 + data.newSeguranca_04) / (pessoas + newPessoas)) * 20);
            const segurancaAverage5 = Math.round(((data.seguranca_05 + data.newSeguranca_05) / (pessoas + newPessoas)) * 20);

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
              setsegurancaPetalaStyle(myStyles.petala200);
            } else if (segurancaAverage1 > 30 && segurancaAverage1 <= 50) {
              setsegurancaPetalaImage(require('../../assets/petala40.png'));
              setsegurancaPetalaStyle(myStyles.petala400);
            } else if (segurancaAverage1 > 50 && segurancaAverage1 <= 70) {
              setsegurancaPetalaImage(require('../../assets/petala60.png'));
              setsegurancaPetalaStyle(myStyles.petala600);
            } else if (segurancaAverage1 > 70 && segurancaAverage1 <= 90) {
              setsegurancaPetalaImage(require('../../assets/petala80.png'));
              setsegurancaPetalaStyle(myStyles.petala800);
            } else if (segurancaAverage1 > 90) {
              setsegurancaPetalaImage(require('../../assets/petala100.png'));
              setsegurancaPetalaStyle(myStyles.petala1000);
            }

            if (segurancaAverage2 <= 30) {
              setsegurancaPetalaImage1(require('../../assets/petala20.png'));
              setsegurancaPetalaStyle1(myStyles.petala201);
            } else if (segurancaAverage2 > 30 && segurancaAverage2 <= 50) {
              setsegurancaPetalaImage1(require('../../assets/petala40.png'));
              setsegurancaPetalaStyle1(myStyles.petala401);
            } else if (segurancaAverage2 > 50 && segurancaAverage2 <= 70) {
              setsegurancaPetalaImage1(require('../../assets/petala60.png'));
              setsegurancaPetalaStyle1(myStyles.petala601);
            } else if (segurancaAverage2 > 70 && segurancaAverage2 <= 90) {
              setsegurancaPetalaImage1(require('../../assets/petala80.png'));
              setsegurancaPetalaStyle1(myStyles.petala801);
            } else if (segurancaAverage2 > 90) {
              setsegurancaPetalaImage1(require('../../assets/petala100.png'));
              setsegurancaPetalaStyle1(myStyles.petala1001);
            }

            if (segurancaAverage3 <= 30) {
              setsegurancaPetalaImage2(require('../../assets/petala20.png'));
              setsegurancaPetalaStyle2(myStyles.petala202);
            } else if (segurancaAverage3 > 30 && segurancaAverage3 <= 50) {
              setsegurancaPetalaImage2(require('../../assets/petala40.png'));
              setsegurancaPetalaStyle2(myStyles.petala402);
            } else if (segurancaAverage3 > 50 && segurancaAverage3 <= 70) {
              setsegurancaPetalaImage2(require('../../assets/petala60.png'));
              setsegurancaPetalaStyle2(myStyles.petala602);
            } else if (segurancaAverage3 > 70 && segurancaAverage3 <= 90) {
              setsegurancaPetalaImage2(require('../../assets/petala80.png'));
              setsegurancaPetalaStyle2(myStyles.petala802);
            } else if (segurancaAverage3 > 90) {
              setsegurancaPetalaImage2(require('../../assets/petala100.png'));
              setsegurancaPetalaStyle2(myStyles.petala1002);
            }

            if (segurancaAverage4 <= 30) {
              setsegurancaPetalaImage3(require('../../assets/petala20.png'));
              setsegurancaPetalaStyle3(myStyles.petala203);
            } else if (segurancaAverage4 > 30 && segurancaAverage4 <= 50) {
              setsegurancaPetalaImage3(require('../../assets/petala40.png'));
              setsegurancaPetalaStyle3(myStyles.petala403);
            } else if (segurancaAverage4 > 50 && segurancaAverage4 <= 70) {
              setsegurancaPetalaImage3(require('../../assets/petala60.png'));
              setsegurancaPetalaStyle3(myStyles.petala603);
            } else if (segurancaAverage4 > 70 && segurancaAverage4 <= 90) {
              setsegurancaPetalaImage3(require('../../assets/petala80.png'));
              setsegurancaPetalaStyle3(myStyles.petala803);
            } else if (segurancaAverage4 > 90) {
              setsegurancaPetalaImage3(require('../../assets/petala100.png'));
              setsegurancaPetalaStyle3(myStyles.petala1003);
            }

            if (segurancaAverage5 <= 30) {
              setsegurancaPetalaImage4(require('../../assets/petala20.png'));
              setsegurancaPetalaStyle4(myStyles.petala204);
            } else if (segurancaAverage5 > 30 && segurancaAverage5 <= 50) {
              setsegurancaPetalaImage4(require('../../assets/petala40.png'));
              setsegurancaPetalaStyle4(myStyles.petala404);
            } else if (segurancaAverage5 > 50 && segurancaAverage5 <= 70) {
              setsegurancaPetalaImage4(require('../../assets/petala60.png'));
              setsegurancaPetalaStyle4(myStyles.petala604);
            } else if (segurancaAverage5 > 70 && segurancaAverage5 <= 90) {
              setsegurancaPetalaImage4(require('../../assets/petala80.png'));
              setsegurancaPetalaStyle4(myStyles.petala804);
            } else if (segurancaAverage5 > 90) {
              setsegurancaPetalaImage4(require('../../assets/petala100.png'));
              setsegurancaPetalaStyle4(myStyles.petala1004);
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
        setLoading(false);
      }
    }

    //Funções relacionadas ao loading inicial (Posteriormente foram retiradas, acredito que dê pra apagar)
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
    return <Text>Loading...</Text>;
  }

  if (!documentData) {
    return <Text>Erro ao carregar os dados.</Text>;
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
              source={require('../../assets/defaultImage.png')}
          />
            )}
          </View>
        </View>

        <View style={myStyles.retMore}>
          <Text style={myStyles.retMoreText}>Espaços bem iluminados são essenciais para a segurança dentro das áreas verdes, proporcionando uma sensação de proteção aos usuários, ajudando a reduzir potenciais esconderijos para atividades ilícitas.</Text>
        </View>

        <View style={myStyles.bemTitle}>
          <Image source={require('../../assets/seguTitle.png')} style={myStyles.title}></Image>
        </View>

        <View style={myStyles.retExpli}>
          <Text style={myStyles.expliText}>Gráfico analisando a área de Segurança</Text>
        </View>

        <View style={myStyles.containerCirc1}>
          <View style={myStyles.circ}>
            <Text style={myStyles.textPerc}>{segurancaAverages.segurancaAverage1}%</Text>
          </View>
        </View>
        <View style={myStyles.containerCircText1}>
          <Text style={myStyles.textCirc1}>Me sinto segura(o) enquanto frequento a PAV</Text>
        </View>

        <View style={myStyles.containerCirc2}>
          <View style={myStyles.circ}>
            <Text style={myStyles.textPerc}>{segurancaAverages.segurancaAverage2}%</Text>
          </View>
        </View>
        <View style={myStyles.containerCircText2}>
          <Text style={myStyles.textCirc2}>A PAV tem iluminação suficiente</Text>
        </View>

        <View style={myStyles.containerCirc3}>
          <View style={myStyles.circ}>
            <Text style={myStyles.textPerc}>{segurancaAverages.segurancaAverage3}%</Text>
          </View>
        </View>
        <View style={myStyles.containerCircText3}>
          <Text style={myStyles.textCirc3}>A PAV possui animais abandonados</Text>
        </View>

        <View style={myStyles.containerCirc4}>
          <View style={myStyles.circ}>
            <Text style={myStyles.textPerc}>{segurancaAverages.segurancaAverage4}%</Text>
          </View>
        </View>
        <View style={myStyles.containerCircText4}>
          <Text style={myStyles.textCirc4}>Acontecem atividades ilegais na PAV</Text>
        </View>

        <View style={myStyles.containerCirc5}>
          <View style={myStyles.circ}>
            <Text style={myStyles.textPerc}>{segurancaAverages.segurancaAverage5}%</Text>
          </View>
        </View>
        <View style={myStyles.containerCircText5}>
          <Text style={myStyles.textCirc5}>É um local seguro contra acidentes</Text>
        </View>

        <View style={myStyles.centralContainer}>
          <Image source={require('../../assets/folhas.png')} style={myStyles.folhas} />
          <Image source={segurancaPetalaImage} style={segurancaPetalaStyle} />
          <Image source={segurancaPetalaImage1} style={segurancaPetalaStyle1} />
          <Image source={segurancaPetalaImage2} style={segurancaPetalaStyle2} />
          <Image source={segurancaPetalaImage3} style={segurancaPetalaStyle3} />
          <Image source={segurancaPetalaImage4} style={segurancaPetalaStyle4} />
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
      
          <TouchableOpacity style={myStyles.navBt} onPress={() => navigation.navigate('quemSomos')}>
              <Text style={myStyles.textNav}>Quem somos nós</Text>
          </TouchableOpacity>
      </View>


      <View style={myStyles.column2nav}>
          
  
          <TouchableOpacity style={myStyles.navBt}>
              <Text style={myStyles.textNav}>Termos de uso</Text>
          </TouchableOpacity>
          <TouchableOpacity style={myStyles.navBt} onPress={() => openLink('https://www.utfpr.edu.br/acesso-a-informacao/lgpd')}>
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
