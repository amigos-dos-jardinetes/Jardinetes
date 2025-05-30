import React, { useEffect, useState } from 'react';
import { View, ScrollView, Image, TouchableOpacity, Text, ActivityIndicator, useWindowDimensions, Linking} from 'react-native';
import { styles } from '../AnaliseFinal/styles';
import { useNavigation, useRoute } from '@react-navigation/native';
import { getAuth } from 'firebase/auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { userSearchData } from '../../../functions';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function AnaliseFinal() {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  const [initialLoading, setInitialLoading] = useState(true);
  const [userInfo, setUserInfo] = useState(false);
  const [documentData, setDocumentData] = useState(null);
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
  const novoJardineteDocId = route.params.novoJardineteDocId;
  const myStyles = styles();
  const { width, height } = useWindowDimensions(); 
  const [petalaImage, setPetalaImage] = useState(require('../../assets/petala20.png'));
  const [petalaStyle, setPetalaStyle] = useState(myStyles.petala200);
  const [bemEstarPetalaImage, setBemEstarPetalaImage] = useState(require('../../assets/petala20.png'));
  const [bemEstarPetalaStyle, setBemEstarPetalaStyle] = useState(myStyles.petala201);
  const [petalaImage1, setPetalaImage1] = useState(require('../../assets/petala20.png'));
  const [petalaStyle1, setPetalaStyle1] = useState(myStyles.petala203);
  const [petalaImage2, setPetalaImage2] = useState(require('../../assets/petala20.png'));
  const [petalaStyle2, setPetalaStyle2] = useState(myStyles.petala203);
  const [infraAverage, setInfraAverage] = useState(0);
  const [bemEstarAverage, setBemEstarAverage] = useState(0);
  const [segAverage, setSegAverage] = useState(0);
  const [pertAverage, setPertAverage] = useState(0);
  const openLink = (url) => {
    Linking.openURL(url).catch(err => console.error("Erro ao abrir o link:", err));
  };
  useEffect(() => {
    // Função que ajusta os estilos de pétalas ao atualizar a largura
    function updatePetalaStyles() {
      if (infraAverage <= 30) {
        setPetalaImage(require('../../assets/petala20.png'));
        setPetalaStyle(myStyles.petala200);
      } else if (infraAverage > 30 && infraAverage <= 50) {
        setPetalaImage(require('../../assets/petala40.png'));
        setPetalaStyle(myStyles.petala400);
      } else if (infraAverage > 50 && infraAverage <= 70) {
        setPetalaImage(require('../../assets/petala60.png'));
        setPetalaStyle(myStyles.petala600);
      } else if (infraAverage > 70 && infraAverage <= 90) {
        setPetalaImage(require('../../assets/petala80.png'));
        setPetalaStyle(myStyles.petala800);
      } else if (infraAverage > 90) {
        setPetalaImage(require('../../assets/petala100.png'));
        setPetalaStyle(myStyles.petala1000);
      }

      if (bemEstarAverage <= 30) {
        setBemEstarPetalaImage(require('../../assets/petala20.png'));
        setBemEstarPetalaStyle(myStyles.petala201);
      } else if (bemEstarAverage > 30 && bemEstarAverage <= 50) {
        setBemEstarPetalaImage(require('../../assets/petala40.png'));
        setBemEstarPetalaStyle(myStyles.petala401);
      } else if (bemEstarAverage > 50 && bemEstarAverage <= 70) {
        setBemEstarPetalaImage(require('../../assets/petala60.png'));
        setBemEstarPetalaStyle(myStyles.petala601);
      } else if (bemEstarAverage > 70 && bemEstarAverage <= 90) {
        setBemEstarPetalaImage(require('../../assets/petala80.png'));
        setBemEstarPetalaStyle(myStyles.petala801);
      } else if (bemEstarAverage > 90) {
        setBemEstarPetalaImage(require('../../assets/petala100.png'));
        setBemEstarPetalaStyle(myStyles.petala1001);
      }

      if (segAverage <= 30) {
        setPetalaImage1(require('../../assets/petala20.png'));
        setPetalaStyle1(myStyles.petala202);
      } else if (segAverage > 30 && segAverage <= 50) {
        setPetalaImage1(require('../../assets/petala40.png'));
        setPetalaStyle1(myStyles.petala402);
      } else if (segAverage > 50 && segAverage <= 70) {
        setPetalaImage1(require('../../assets/petala60.png'));
        setPetalaStyle1(myStyles.petala602);
      } else if (segAverage > 70 && segAverage <= 90) {
        setPetalaImage1(require('../../assets/petala80.png'));
        setPetalaStyle1(myStyles.petala802);
      } else if (segAverage > 90) {
        setPetalaImage1(require('../../assets/petala100.png'));
        setPetalaStyle1(myStyles.petala1002);
      }

      if (pertAverage <= 30) {
        setPetalaImage2(require('../../assets/petala20.png'));
        setPetalaStyle2(myStyles.petala203);
      } else if (pertAverage > 30 && pertAverage <= 50) {
        setPetalaImage2(require('../../assets/petala40.png'));
        setPetalaStyle2(myStyles.petala403);
      } else if (pertAverage > 50 && pertAverage <= 70) {
        setPetalaImage2(require('../../assets/petala60.png'));
        setPetalaStyle2(myStyles.petala603);
      } else if (pertAverage > 70 && pertAverage <= 90) {
        setPetalaImage2(require('../../assets/petala80.png'));
        setPetalaStyle2(myStyles.petala803);
      } else if (pertAverage > 90) {
        setPetalaImage2(require('../../assets/petala100.png'));
        setPetalaStyle2(myStyles.petala1003);
      }



    }

    // Chama a função sempre que a largura mudar
    updatePetalaStyles();

  }, [width, infraAverage, bemEstarAverage, segAverage, pertAverage, myStyles]);

  useEffect(() => {
    const unsubscribe = userSearchData(auth, firestore, storage, navigation, setUserName, setWallpaper, setImageUrl, setEmail, setPracasSeguidas);

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

          if (
            (data.infraestrutura_01 !== undefined || data.newInfraestrutura_01 !== undefined) &&
            (data.infraestrutura_02 !== undefined || data.newInfraestrutura_02 !== undefined) &&
            (data.infraestrutura_03 !== undefined || data.newInfraestrutura_03 !== undefined) &&
            (data.infraestrutura_04 !== undefined || data.newInfraestrutura_04 !== undefined) &&
            (data.infraestrutura_05 !== undefined || data.newInfraestrutura_05 !== undefined) &&
            (data.bem_estar_01 !== undefined || data.newBem_estar_01 !== undefined) &&
            (data.bem_estar_02 !== undefined || data.newBem_estar_02 !== undefined) &&
            (data.bem_estar_03 !== undefined || data.newBem_estar_03 !== undefined) &&
            (data.bem_estar_04 !== undefined || data.newBem_estar_04 !== undefined) &&
            (data.bem_estar_05 !== undefined || data.newBem_estar_05 !== undefined) &&
            (data.pertencimento_01 !== undefined || data.newPertencimento_01 !== undefined) &&
            (data.pertencimento_02 !== undefined || data.newPertencimento_02 !== undefined) &&
            (data.pertencimento_03 !== undefined || data.newPertencimento_03 !== undefined) &&
            (data.pertencimento_04 !== undefined || data.newPertencimento_04 !== undefined) &&
            (data.pertencimento_05 !== undefined || data.newPertencimento_05 !== undefined) &&
            (data.seguranca_01 !== undefined || data.newSeguranca_01 !== undefined) &&
            (data.seguranca_02 !== undefined || data.newSeguranca_02 !== undefined) &&
            (data.seguranca_03 !== undefined || data.newSeguranca_03 !== undefined) &&
            (data.seguranca_04 !== undefined || data.newSeguranca_04 !== undefined) &&
            (data.seguranca_05 !== undefined || data.newSeguranca_05 !== undefined) &&
            (pessoas !== undefined) || (newPessoas !== undefined) 
           
          
          ) {
            // Calcula a média para infraestrutura ajustada pela quantidade de pessoas
            const infraSum = data.infraestrutura_01 + data.infraestrutura_02 + data.infraestrutura_03 + data.infraestrutura_04 + data.infraestrutura_05
            + data.newInfraestrutura_01 + data.newInfraestrutura_02 + data.newInfraestrutura_03 + data.newInfraestrutura_04 + data.newInfraestrutura_05;
            const infraAverage = (((infraSum / 5) / (pessoas + newPessoas)) * 20);
            console.log("infraAverage:", infraAverage);
            const average = (((infraSum / 5) / (pessoas + newPessoas)) * 20);
            setInfraAverage(average);

            if (infraAverage <= 30) {
              setPetalaImage(require('../../assets/petala20.png'));
              setPetalaStyle(myStyles.petala200);
            } else if (infraAverage > 30 && infraAverage <= 50) {
              setPetalaImage(require('../../assets/petala40.png'));
              setPetalaStyle(myStyles.petala400);
            } else if (infraAverage > 50 && infraAverage <= 70) {
              setPetalaImage(require('../../assets/petala60.png'));
              setPetalaStyle(myStyles.petala600);
            } else if (infraAverage > 70 && infraAverage <= 90) {
              setPetalaImage(require('../../assets/petala80.png'));
              setPetalaStyle(myStyles.petala800);
            } else if (infraAverage > 90) {
              setPetalaImage(require('../../assets/petala100.png'));
              setPetalaStyle(myStyles.petala1000);
            }

            // Calcula a média para bem-estar ajustada pela quantidade de pessoas
            const bemEstarSum = data.bem_estar_01 + data.bem_estar_02 + data.bem_estar_03 + data.bem_estar_04 + data.bem_estar_05
            + data.newBem_estar_01 + data.newBem_estar_02 + data.newBem_estar_03 + data.newBem_estar_04 + data.newBem_estar_05;
            const bemEstarAverage = (((bemEstarSum / 5) / (pessoas + newPessoas)) * 20);
            console.log("bemEstarAverage:", bemEstarAverage);
            const average1 = (((bemEstarSum / 5) / (pessoas + newPessoas)) * 20);
            setBemEstarAverage(average1);


            if (bemEstarAverage <= 30) {
              setBemEstarPetalaImage(require('../../assets/petala20.png'));
              setBemEstarPetalaStyle(myStyles.petala201);
            } else if (bemEstarAverage > 30 && bemEstarAverage <= 50) {
              setBemEstarPetalaImage(require('../../assets/petala40.png'));
              setBemEstarPetalaStyle(myStyles.petala401);
            } else if (bemEstarAverage > 50 && bemEstarAverage <= 70) {
              setBemEstarPetalaImage(require('../../assets/petala60.png'));
              setBemEstarPetalaStyle(myStyles.petala601);
            } else if (bemEstarAverage > 70 && bemEstarAverage <= 90) {
              setBemEstarPetalaImage(require('../../assets/petala80.png'));
              setBemEstarPetalaStyle(myStyles.petala801);
            } else if (bemEstarAverage > 90) {
              setBemEstarPetalaImage(require('../../assets/petala100.png'));
              setBemEstarPetalaStyle(myStyles.petala1001);
            }

            const segSum = data.seguranca_01 + data.seguranca_02 + data.seguranca_03 + data.seguranca_04 + data.seguranca_05
            + data.newSeguranca_01 + data.newSeguranca_02 + data.newSeguranca_03 + data.newSeguranca_04 + data.newSeguranca_05;
            const segAverage = (((segSum / 5) / (pessoas + newPessoas)) * 20);
            console.log("Segurancaaverage:", segAverage);
            const average2 = (((segSum / 5) / (pessoas + newPessoas)) * 20);
            setSegAverage(average2);

            if (segAverage <= 30) {
              setPetalaImage1(require('../../assets/petala20.png'));
              setPetalaStyle1(myStyles.petala202);
            } else if (segAverage > 30 && segAverage <= 50) {
              setPetalaImage1(require('../../assets/petala40.png'));
              setPetalaStyle1(myStyles.petala402);
            } else if (segAverage > 50 && segAverage <= 70) {
              setPetalaImage1(require('../../assets/petala60.png'));
              setPetalaStyle1(myStyles.petala602);
            } else if (segAverage > 70 && segAverage <= 90) {
              setPetalaImage1(require('../../assets/petala80.png'));
              setPetalaStyle1(myStyles.petala802);
            } else if (segAverage > 90) {
              setPetalaImage1(require('../../assets/petala100.png'));
              setPetalaStyle1(myStyles.petala1002);
            }



            const pertSum = data.pertencimento_01 + data.pertencimento_02 + data.pertencimento_03 + data.pertencimento_04 + data.pertencimento_05
            + data.newPertencimento_01 + data.newPertencimento_02 + data.newPertencimento_03 + data.newPertencimento_04 + data.newPertencimento_05;
            const pertAverage = (((pertSum / 5) / (pessoas + newPessoas)) * 20);
            console.log("Pertencimentoaverage:", pertAverage);
            const average3 = (((pertSum / 5) / (pessoas + newPessoas)) * 20);
            setPertAverage(average3);

            if (pertAverage <= 30) {
              setPetalaImage2(require('../../assets/petala20.png'));
              setPetalaStyle2(myStyles.petala203);
            } else if (pertAverage > 30 && pertAverage <= 50) {
              setPetalaImage2(require('../../assets/petala40.png'));
              setPetalaStyle2(myStyles.petala403);
            } else if (pertAverage > 50 && pertAverage <= 70) {
              setPetalaImage2(require('../../assets/petala60.png'));
              setPetalaStyle2(myStyles.petala603);
            } else if (pertAverage > 70 && pertAverage <= 90) {
              setPetalaImage2(require('../../assets/petala80.png'));
              setPetalaStyle2(myStyles.petala803);
            } else if (pertAverage > 90) {
              setPetalaImage2(require('../../assets/petala100.png'));
              setPetalaStyle2(myStyles.petala1003);
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
        setLoading(false); //Finaliza o loading
      }
    }

    //Tempo de carregamento inicial de 2 segundos
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
      <View style={myStyles.loadingContainer}>
        <ActivityIndicator size={width * 0.09} color="#0000ff" />
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
        <TouchableOpacity style={myStyles.backButton}
          onPress={() => navigation.goBack()}>
        
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

        <View style={myStyles.bigRet}></View>
        <View style={myStyles.bigWheel}></View>
        <View style={myStyles.retGreen}>
          <Text style={myStyles.retGreenText}>
            Este é o gráfico onde cada pétala do Manacá representa uma área de impacto no seu jardinete. Clique nos ícones para ver cada área com mais detalhes.
          </Text>
        </View>

        <Image source={require('../../assets/analise.png')} style={myStyles.analise} />

        <View style={myStyles.infraContainer}>
        <TouchableOpacity style={myStyles.button} onPress={() => navigation.navigate('Infraestrutura', { novoJardineteDocId })}>
            <Image source={require('../../assets/infraIcon.jpg')} style={myStyles.infra} />
          </TouchableOpacity>
          <View style={myStyles.infraContainer2}>
            <Image source={require('../../assets/infraText.png')} style={myStyles.infraText} />
            <View style={myStyles.infraRet}>
              <Text style={myStyles.baloonText}>
              A infraestrutura da área verde na cidade é planejada para oferecer espaços de lazer e preservação ambiental. Além do gramado e da vegetação, podem conter bancos, parque infantil, academia ao ar livre e quadras esportivas.</Text>
            </View>
          </View>
          <View style={myStyles.retPorc2}>
          <Text style={myStyles.textPerc}>{infraAverage.toFixed(0)}%</Text>
             </View>
        </View>

        <View style={myStyles.bemContainer}>
          <TouchableOpacity style={myStyles.button} onPress={() => navigation.navigate('BemEstar', { novoJardineteDocId })}>
            <Image source={require('../../assets/bemIcon.jpg')} style={myStyles.bem} />
          </TouchableOpacity>
          <View style={myStyles.bemContainer2}>
            <Image source={require('../../assets/bemText.png')} style={myStyles.bemText} />
            <View style={myStyles.bemRet}>
              <Text style={myStyles.baloonText}>As áreas verdes são essenciais para a saúde física e mental dos moradores, incentivando um estilo de vida ativo e proporcionando locais tranquilos que ajudam a reduzir o estresse e melhorar o humor. Além disso, promovem a interação social e fortalecem o vínculo da comunidade.</Text>
            </View>
          </View>
          <View style={myStyles.retPorc1}> 
          <Text style={myStyles.textPerc}>{bemEstarAverage.toFixed(0)}%</Text>
          </View>
        </View>

        <View style={myStyles.segContainer}>
          <TouchableOpacity style={myStyles.button} onPress={() => navigation.navigate('Seguranca', { novoJardineteDocId })}>
            <Image source={require('../../assets/segIcon.jpg')} style={myStyles.seg} />
          </TouchableOpacity>

       

          <View style={myStyles.segContainer2}>
      
            <Image source={require('../../assets/segText.png')} style={myStyles.segText} />
            <View style={myStyles.segRet}>
              <Text style={myStyles.baloonText}>Espaços bem iluminados são essenciais para a segurança dentro das áreas verdes, proporcionando uma sensação de proteção aos usuários, ajudando a reduzir potenciais esconderijos para atividades ilícitas.</Text>
            </View>
           
          </View>
          <View style={myStyles.retPorc}>
          <Text style={myStyles.textPerc}>{segAverage.toFixed(0)}%</Text>
             </View>
        </View>

        <View style={myStyles.pertContainer}>
          <View style={myStyles.pertContainer2}>
            <Image source={require('../../assets/pertText.png')} style={myStyles.pertText} />
            <View style={myStyles.pertRet}>
              <Text style={myStyles.baloonText} >As áreas verdes desempenham um papel fundamental no fortalecimento do sentimento de pertencimento à comunidade, além de que o cuidado com esses espaços reforça o vínculo emocional com o local.</Text>
            </View>
           
          </View>
          <TouchableOpacity style={myStyles.button} onPress={() => navigation.navigate('Pertencimento', { novoJardineteDocId })}>
            <Image source={require('../../assets/pertIcon.jpg')} style={myStyles.pert} />
          </TouchableOpacity>
          <View style={myStyles.retPorc3}>
          <Text style={myStyles.textPerc}>{pertAverage.toFixed(0)}%</Text>
             </View>
        </View>

        <View style={myStyles.centralContainer}>
          <Image source={require('../../assets/folhas.png')} style={myStyles.folhas} />
          <Image source={petalaImage} style={petalaStyle} />
          <Image source={bemEstarPetalaImage} style={bemEstarPetalaStyle} />
          <Image source={petalaImage1} style={petalaStyle1} />
          <Image source={petalaImage2} style={petalaStyle2} />
          <Image source={require('../../assets/miolo.png')} style={myStyles.miolo} />
        </View>

        <View style={myStyles.retExp}>
          <View style={myStyles.circExp}>
            <View style={myStyles.circ}></View>
            <View style={myStyles.circ}></View>
            <View style={myStyles.circ}></View>
            <View style={myStyles.circ}></View>
          </View>
          <Text style={myStyles.finalText}>As áreas verdes desempenham um papel crucial na relação entre a segurança urbana e os serviços ecossistêmicos, fornecendo benefícios essenciais para o bem-estar humano e a qualidade de vida nas cidades. Esses espaços não só contribuem para aumentar a resiliência urbana, mas também proporcionam um ambiente mais saudável e agradável para os moradores locais. Além disso, oferecem serviços ecossistêmicos valiosos, como regulação climática, purificação do ar e controle de enchentes.</Text>
        </View>

        <View style={myStyles.araucarias2}>
          <Image source={require('../../assets/araucarias.png')} style={myStyles.araucarias} />
        </View>

        <View style={myStyles.gradientButtonContainer}>
  <TouchableOpacity
    style={myStyles.gradientButton}
    onPress={() => {
      const currentUser = getAuth().currentUser;
      if (currentUser) {
        navigation.navigate("Menu");
      } else {
        navigation.navigate("SignIn");
      }
    }}
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
