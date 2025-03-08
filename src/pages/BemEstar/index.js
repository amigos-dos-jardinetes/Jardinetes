import React, { useEffect, useState } from 'react';
import { View, ScrollView, Image, Text, ActivityIndicator, TouchableOpacity, useWindowDimensions, Linking } from 'react-native';
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
  const myStyles = styles();
  const { width, height } = useWindowDimensions(); 
  const novoJardineteDocId = route.params.novoJardineteDocId;

  const [bemEstarPetalaImage, setBemEstarPetalaImage] = useState(require('../../assets/petala20.png'));
  const [bemEstarPetalaStyle, setBemEstarPetalaStyle] = useState(myStyles.petala200);

  const [bemEstarPetalaImage1, setBemEstarPetalaImage1] = useState(require('../../assets/petala20.png'));
  const [bemEstarPetalaStyle1, setBemEstarPetalaStyle1] = useState(myStyles.petala201);

  const [bemEstarPetalaImage2, setBemEstarPetalaImage2] = useState(require('../../assets/petala20.png'));
  const [bemEstarPetalaStyle2, setBemEstarPetalaStyle2] = useState(myStyles.petala202);

  const [bemEstarPetalaImage3, setBemEstarPetalaImage3] = useState(require('../../assets/petala20.png'));
  const [bemEstarPetalaStyle3, setBemEstarPetalaStyle3] = useState(myStyles.petala203);

  const [bemEstarPetalaImage4, setBemEstarPetalaImage4] = useState(require('../../assets/petala20.png'));
  const [bemEstarPetalaStyle4, setBemEstarPetalaStyle4] = useState(myStyles.petala204);

  const [initialLoading, setInitialLoading] = useState(true);
  const [loading, setLoading] = useState(true);
  const [documentData, setDocumentData] = useState(null);
  const [bemEstarAverages, setBemEstarAverages] = useState({});
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
            (data.bem_estar_01 !== undefined || data.newBem_estar_01 !== undefined) &&
            (data.bem_estar_02 !== undefined || data.newBem_estar_02 !== undefined) &&
            (data.bem_estar_03 !== undefined || data.newBem_estar_03 !== undefined) &&
            (data.bem_estar_04 !== undefined || data.newBem_estar_04 !== undefined) &&
            (data.bem_estar_05 !== undefined || data.newBem_estar_05 !== undefined) &&
            (pessoas !== undefined) || (newPessoas !== undefined) 
          ) {

            const bemEstarAverage1 = Math.round(((data.bem_estar_01 + data.newBem_estar_01) / (pessoas + newPessoas)) * 20);
            const bemEstarAverage2 = Math.round(((data.bem_estar_02 + data.newBem_estar_02) / (pessoas + newPessoas)) * 20);
            const bemEstarAverage3 = Math.round(((data.bem_estar_03 + data.newBem_estar_03) / (pessoas + newPessoas)) * 20);
            const bemEstarAverage4 = Math.round(((data.bem_estar_04 + data.newBem_estar_04) / (pessoas + newPessoas)) * 20);
            const bemEstarAverage5 = Math.round(((data.bem_estar_05 + data.newBem_estar_05) / (pessoas + newPessoas)) * 20);

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
              setBemEstarPetalaStyle(myStyles.petala200);
            } else if (bemEstarAverage1 > 30 && bemEstarAverage1 <= 50) {
              setBemEstarPetalaImage(require('../../assets/petala40.png'));
              setBemEstarPetalaStyle(myStyles.petala400);
            } else if (bemEstarAverage1 > 50 && bemEstarAverage1 <= 70) {
              setBemEstarPetalaImage(require('../../assets/petala60.png'));
              setBemEstarPetalaStyle(myStyles.petala600);
            } else if (bemEstarAverage1 > 70 && bemEstarAverage1 <= 90) {
              setBemEstarPetalaImage(require('../../assets/petala80.png'));
              setBemEstarPetalaStyle(myStyles.petala800);
            } else if (bemEstarAverage1 > 90) {
              setBemEstarPetalaImage(require('../../assets/petala100.png'));
              setBemEstarPetalaStyle(myStyles.petala1000);
            }

            if (bemEstarAverage2 <= 30) {
              setBemEstarPetalaImage1(require('../../assets/petala20.png'));
              setBemEstarPetalaStyle1(myStyles.petala201);
            } else if (bemEstarAverage2 > 30 && bemEstarAverage2 <= 50) {
              setBemEstarPetalaImage1(require('../../assets/petala40.png'));
              setBemEstarPetalaStyle1(myStyles.petala401);
            } else if (bemEstarAverage2 > 50 && bemEstarAverage2 <= 70) {
              setBemEstarPetalaImage1(require('../../assets/petala60.png'));
              setBemEstarPetalaStyle1(myStyles.petala601);
            } else if (bemEstarAverage2 > 70 && bemEstarAverage2 <= 90) {
              setBemEstarPetalaImage1(require('../../assets/petala80.png'));
              setBemEstarPetalaStyle1(myStyles.petala801);
            } else if (bemEstarAverage2 > 90) {
              setBemEstarPetalaImage1(require('../../assets/petala100.png'));
              setBemEstarPetalaStyle1(myStyles.petala1001);
            }

            if (bemEstarAverage3 <= 30) {
              setBemEstarPetalaImage2(require('../../assets/petala20.png'));
              setBemEstarPetalaStyle2(myStyles.petala202);
            } else if (bemEstarAverage3 > 30 && bemEstarAverage3 <= 50) {
              setBemEstarPetalaImage2(require('../../assets/petala40.png'));
              setBemEstarPetalaStyle2(myStyles.petala402);
            } else if (bemEstarAverage3 > 50 && bemEstarAverage3 <= 70) {
              setBemEstarPetalaImage2(require('../../assets/petala60.png'));
              setBemEstarPetalaStyle2(myStyles.petala602);
            } else if (bemEstarAverage3 > 70 && bemEstarAverage3 <= 90) {
              setBemEstarPetalaImage2(require('../../assets/petala80.png'));
              setBemEstarPetalaStyle2(myStyles.petala802);
            } else if (bemEstarAverage3 > 90) {
              setBemEstarPetalaImage2(require('../../assets/petala100.png'));
              setBemEstarPetalaStyle2(myStyles.petala1002);
            }

            if (bemEstarAverage4 <= 30) {
              setBemEstarPetalaImage3(require('../../assets/petala20.png'));
              setBemEstarPetalaStyle3(myStyles.petala203);
            } else if (bemEstarAverage4 > 30 && bemEstarAverage4 <= 50) {
              setBemEstarPetalaImage3(require('../../assets/petala40.png'));
              setBemEstarPetalaStyle3(myStyles.petala403);
            } else if (bemEstarAverage4 > 50 && bemEstarAverage4 <= 70) {
              setBemEstarPetalaImage3(require('../../assets/petala60.png'));
              setBemEstarPetalaStyle3(myStyles.petala603);
            } else if (bemEstarAverage4 > 70 && bemEstarAverage4 <= 90) {
              setBemEstarPetalaImage3(require('../../assets/petala80.png'));
              setBemEstarPetalaStyle3(myStyles.petala803);
            } else if (bemEstarAverage4 > 90) {
              setBemEstarPetalaImage3(require('../../assets/petala100.png'));
              setBemEstarPetalaStyle3(myStyles.petala1003);
            }

            if (bemEstarAverage5 <= 30) {
              setBemEstarPetalaImage4(require('../../assets/petala20.png'));
              setBemEstarPetalaStyle4(myStyles.petala204);
            } else if (bemEstarAverage5 > 30 && bemEstarAverage5 <= 50) {
              setBemEstarPetalaImage4(require('../../assets/petala40.png'));
              setBemEstarPetalaStyle4(myStyles.petala404);
            } else if (bemEstarAverage5 > 50 && bemEstarAverage5 <= 70) {
              setBemEstarPetalaImage4(require('../../assets/petala60.png'));
              setBemEstarPetalaStyle4(myStyles.petala604);
            } else if (bemEstarAverage5 > 70 && bemEstarAverage5 <= 90) {
              setBemEstarPetalaImage4(require('../../assets/petala80.png'));
              setBemEstarPetalaStyle4(myStyles.petala804);
            } else if (bemEstarAverage5 > 90) {
              setBemEstarPetalaImage4(require('../../assets/petala100.png'));
              setBemEstarPetalaStyle4(myStyles.petala1004);
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
              source={require('../../assets/defaultImage.png')} // Ajuste o caminho para a imagem padrão
          />
            )}
          </View>
        </View>

        <View style={myStyles.retMore}>
          <Text style={myStyles.retMoreText}>As áreas verdes são essenciais para a saúde física e mental dos moradores, incentivando um estilo de vida ativo e proporcionando locais tranquilos que ajudam a reduzir o estresse e melhorar o humor. Além disso, promovem a interação social e fortalecem o vínculo da comunidade.</Text>
        </View>

        <View style={myStyles.bemTitle}>
          <Image source={require('../../assets/BemTitle.png')} style={myStyles.title}></Image>
        </View>

        <View style={myStyles.retExpli}>
          <Text style={myStyles.expliText}>Gráfico analisando a área de Bem Estar</Text>
        </View>

        <View style={myStyles.containerCirc1}>
          <View style={myStyles.circ}>
            <Text style={myStyles.textPerc}>{bemEstarAverages.bemEstarAverage1}%</Text>
          </View>
        </View>
        <View style={myStyles.containerCircText1}>
          <Text style={myStyles.textCirc1}>A PAV melhora a qualidade da minha vida e das pessoas ao meu redor</Text>
        </View>

        <View style={myStyles.containerCirc2}>
          <View style={myStyles.circ}>
            <Text style={myStyles.textPerc}>{bemEstarAverages.bemEstarAverage2}%</Text>
          </View>
        </View>
        <View style={myStyles.containerCircText2}>
          <Text style={myStyles.textCirc2}>A PAV é um bom lugar para as crianças</Text>
        </View>

        <View style={myStyles.containerCirc3}>
          <View style={myStyles.circ}>
            <Text style={myStyles.textPerc}>{bemEstarAverages.bemEstarAverage3}%</Text>
          </View>
        </View>
        <View style={myStyles.containerCircText3}>
          <Text style={myStyles.textCirc3}>A PAV é um bom lugar para os idosos</Text>
        </View>

        <View style={myStyles.containerCirc4}>
          <View style={myStyles.circ}>
            <Text style={myStyles.textPerc}>{bemEstarAverages.bemEstarAverage4}%</Text>
          </View>
        </View>
        <View style={myStyles.containerCircText4}>
          <Text style={myStyles.textCirc4}>A PAV é um bom lugar para adolescentes ou jovens adultos</Text>
        </View>

        <View style={myStyles.containerCirc5}>
          <View style={myStyles.circ}>
            <Text style={myStyles.textPerc}>{bemEstarAverages.bemEstarAverage5}%</Text>
          </View>
        </View>
        <View style={myStyles.containerCircText5}>
          <Text style={myStyles.textCirc5}>A PAV é bom lugar para pets</Text>
        </View>

        <View style={myStyles.centralContainer}>
          <Image source={require('../../assets/folhas.png')} style={myStyles.folhas} />
          <Image source={bemEstarPetalaImage} style={bemEstarPetalaStyle} />
          <Image source={bemEstarPetalaImage1} style={bemEstarPetalaStyle1} />
          <Image source={bemEstarPetalaImage2} style={bemEstarPetalaStyle2} />
          <Image source={bemEstarPetalaImage3} style={bemEstarPetalaStyle3} />
          <Image source={bemEstarPetalaImage4} style={bemEstarPetalaStyle4} />
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
