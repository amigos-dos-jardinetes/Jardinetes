import React, { useRef } from 'react';
import { View, ScrollView, TouchableOpacity, Text, Image, Linking, useWindowDimensions } from 'react-native';
import { styles } from '../PaginaInicial/styles';
import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect, useRef } from 'react';
import { View, ScrollView, TouchableOpacity, Text, Image, Linking, ActivityIndicator, useWindowDimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { styles } from '../acoesSociais/styles.js';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

export default function acoesSociais() {

  const navigation = useNavigation();
  const scrollViewRef = useRef(null);
  const [jardinetes, setJardinetes] = useState([]);
  const [loading, setLoading] = useState(true);

  const myStyles = styles();
  const { width, height } = useWindowDimensions(); 
  
//Função para redirecionar ao link, ela o recebe como parâmetro na parte do front
  const openLink = (url) => {
    Linking.openURL(url).catch(err => console.error("Erro ao abrir o link:", err));
  };
//Busca as informações de todos os Jardinetes registrados
  useEffect(() => {
    const fetchData = async () => {
      try {
        const db = getFirestore(); 
        const jardinetesCollection = collection(db, 'jardinetes');
        const jardinetesSnapshot = await getDocs(jardinetesCollection);
        const data = jardinetesSnapshot.docs.map(doc => doc.data());
  

        setJardinetes(data);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar dados: ", error);
        setLoading(false);
      }
    };
  
    fetchData();
  }, []);
//Função para renderizar o carrossel com os Jardinetes
  const renderCarouselItem = (item) => (
    <div key={item.nome} style={myStyles.carouselItem}>
      <img src={item.jardinetePhoto} alt={item.nome} style={myStyles.carouselImage} />
      <p style={myStyles.carouselText}>{item.nome}</p>
    </div>
  );
//Espera o loading para retornar visto que pode demorar a processar todos os Jardinetes e acabar não retornando nada sem o tempo de espera
  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size={width * 0.09} color="#0000ff" />
      </View>
    );
  }



export default function PaginaInicial() {

  const navigation = useNavigation();
  const scrollViewRef = useRef(null);
  const myStyles = styles();
  const { width, height } = useWindowDimensions(); 

//Redirecionar para o link
  const handlePress = () => {
    Linking.openURL('https://www.instagram.com/amigosdosjardinetes.ct/');
  };

  const openLink = (url) => {
    Linking.openURL(url).catch(err => console.error("Erro ao abrir o link:", err));
  };

//Scrollar para cima ao clicar
  const scrollToTopstyles,  = () => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({
, collection, getDocs, getFirestore        y: 0,
        animatedimport React from 'react';
: true,
      });
    }
  };


  return (
    <ScrollView ref={scrollViewRef}  style={myStyles.container3}>
    <View style={myStyles.container}>
        <View style={myStyles.navbar}>
            <TouchableOpacity onPress={() => navigation.replace('PaginaInicial')}>
                <Text style={myStyles.navbarButton}>PÁGINA INICIAL</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.replace('acoesSociais')}>
                <Text style={myStyles.navbarButton}>AÇÕES SOCIAIS</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.replace('JardinetesMap')}>
                <Text style={myStyles.navbarButton}>FAÇA SUA PARTE</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.replace('quemSomos')}>
                <Text style={myStyles.navbarButton}>QUEM SOMOS</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.replace('Contato')}>
                <Text style={myStyles.navbarButton}>CONTATO</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.replace('SignIn')}>
                <Text style={myStyles.navbarButton}>LOGIN</Text>
            </TouchableOpacity>
        </View>

<View style={myStyles.greenCircle}></View>
<View style={myStyles.borderCircle}></View>
<View style={myStyles.greenCircle2}></View>
<View style={myStyles.borderCircle2}></View>
<View style={myStyles.greenCircle3}></View>
<View style={myStyles.greenCircle4}></View>
<View style={myStyles.greenCircle5}></View>

<View style={myStyles.titleView}>
<Image source={require('../../assets/amigosTitle.png')}  style={myStyles.amigosTitle} />
 showThumbs={false}
    showStatus={false}
    showIndicators={false} 
    infiniteLoop={true}
    autoPlay={true}
    renderArrowPrev={(onClickHandler, hasPrev, label) =>
      hasPrev && (
        <button
          type="button"
          onClick={onClickHandler}
          style={{
            position: 'absolute',
            top: '40%',
            left: 0,
            zIndex: 2,
            background: 'rgba(0, 0, 0, 0.5)',
            border: 'none',
            color: 'white',
            padding: (10 / 1920) * width,
            borderRadius: '20%',
          }}
        >
          <FontAwesomeIcon icon={faChevronLeft} size="2x" style={{ fontSize: width * 0.03 }} />
        </button>
      )
    }
    renderArrowNext={(onClickHandler, hasNext, label) =>
      hasNext && (
        <button
          type="button"
          onClick={onClickHandler}
          style={{
            position: 'absolute',
            top: '40%',
            right: 0,
            zIndex: 2,
            background: 'rgba(0, 0, 0, 0.5)',
            border: 'none',
            color: 'white',
            padding: (10 / 1920) * width,
            borderRadius: '20%',
          }}
        >
          <FontAwesomeIcon icon={faChevronRight} size="2x" style={{ fontSize: width * 0.03 }} />
        </button>
      )
    }
    renderIndicator={(onClickHandler, isSelected, index, label) => {
      const indicatorStyle = {
        position: 'relative',
        bottom: width * 0.0104166666666667,
        transform: 'translateX(-50%)',
        display: 'inline-block',
        marginRight: (8 / 1920) * width,
        cursor: 'pointer',
        borderRadius: '50%',
        width: isSelected ? width * 0.00625 : width * 0.0052083333333333,
        height: isSelected ? width * 0.00625 : width * 0.0052083333333333,
        backgroundColor: isSelected ? '#fff' : '#ccc',
      };

      return (
        <div
          key={index}
          style={indicatorStyle}
          onClick={onClickHandler}
          role="button"
          tabIndex={0}
          aria-label={`${label} ${index + 1}`}
        />
      );
    }}
  >
    {jardinetes.map(renderCarouselItem)}
<View style={myStyles.orangeRet}><Text style={myStyles.orangeText}>O programa Amigos dos Jardinetes é um Projeto de Extensão, ligado a disciplina Introdução à Sustentabilidade, ambos do DAELN - Departamento de Eletrônica - da UTFPR Curitiba. Ambos tem como objetivo realizar atividades relacionadas aos Jardinetes - pequenas áreas verdes, ou jardins, urbanos. </Text></View>
<Image source={require('../../assets/illustration.png')}  style={myStyles.illustration} />
<Image source={require('../../assets/sobreProjeto.png')}  style={myStyles.sobreProjeto} />
<View style={myStyles.row}>
  <View style={myStyles.retBig}>
    <Text style={myStyles.retBigText}>   Os jardinetes são espaços mantidos pela administração municipal.{"\n"}</Text>
    <Text style={myStyles.retBigText}>   No entanto, a conservação dessas áreas poderia ser reforçada com a participação de estudantes voluntários, os quais podem auxiliar na coleta de resíduos, na rega de árvores em crescimento e na valorização dos espaços próximos às suas residências.{"\n"}</Text>
    <Text style={myStyles.retBigText}>   Os jardinetes fazem parte das unidades de proteção integral da cidade, visando preservar a natureza e permitindo apenas o uso indireto de seus recursos naturais.{"\n"}</Text>
    <Text style={myStyles.retBigText}>   Para este projeto, são selecionados espaços de até 700m², conforme a medição disponível no site da prefeitura. Além dos jardinetes, praças, largos, núcleos ambientais e áreas de manutenção públicas também podem ser considerados.</Text>
  </View>
<View style={myStyles.column}>
    <View style={myStyles.row}>
         <Image source={require('../../assets/cidades.png')}  style={myStyles.cidades} />
         <View style={myStyles.retMenor}>
            <Text style={myStyles.retMenorText}>O projeto está sintonizado com os ODS 3 - Saúde e bem-estar, ODS 4 - Educação de qualidade e ODS 11 - Cidades e comunidades sustentáveis.</Text>
         </View>
    </View>
    <View style={myStyles.row}>
         <Image source={require('../../assets/educacao.png')}  style={myStyles.educacao} />
         <View style={myStyles.retMenor2}>
            <Text style={myStyles.retMenorText}>Objetivo do projeto: Reconectar as pessoas aos espaços urbanos por meio do cuidado dos jardinetes e demais áreas verdes das cidades.</Text>
        </View>
    </View>
    <View style={myStyles.row}>
        <View style={myStyles.retMenor3}>
          <Text style={myStyles.retMenorText3}>O projeto contribui para a “ecologia e democracia local”, por meio das ações: (1) participação de pessoas interessadas; (2) educação ambiental; (3) novos modelos de habitação e vizinhança.</Text>
        </View>
        <Image source={require('../../assets/saude.png')}  style={myStyles.saude} />
    </View>
  </View>
</View>



<Image source={require('../../assets/nossosValores.png')}  style={myStyles.nossosValores} />
<View style={myStyles.row}>   
<View style={myStyles.column1}>
    <Image source={require('../../assets/sustentaInicIcon.png')}  style={myStyles.sustentaInicIcon} />
    <Text style={myStyles.valoresText}>Sustentabilidade</Text>
    <Image source={require('../../assets/coletividadeInicIcon.png')}  style={myStyles.coletividadeInicIcon} />
    <Text style={myStyles.valoresText1}>Coletividade</Text>
</View>
<View style={myStyles.column2}>
    <Image source={require('../../assets/desenvolvimentoInicIcon.png')}  style={myStyles.desenvolvimentoInicIcon} />
    <Text style={myStyles.valoresText2}>Desenvolvimento</Text>
</View>
<View style={myStyles.column3}>
    <Image source={require('../../assets/bemInicIcon.png')}  style={myStyles.bemInicIcon} />
    <Text style={myStyles.valoresText3}>Bem-estar</Text>
    <Image source={require('../../assets/educaInicIcon.png')}  style={myStyles.educaInicIcon} />
    <Text style={myStyles.valoresText4}>Educação</Text>
</View>
</View>





<Image source={require('../../assets/conheca.png')}  style={myStyles.conheca} />

<View style={myStyles.row}>

<Image source={require('../../assets/gaiaInicial.png')}  style={myStyles.gaiaInicial} />
<View style={myStyles.column}>
<View style={myStyles.row}>
<View style={myStyles.ponta}></View>
<View style={myStyles.ponta2}></View>
</View>
<View style={myStyles.quadro}>
  <Text style={myStyles.gaiaTitle}>Gaia</Text>
  <Text style={myStyles.gaiaText}>  Olá! Meu nome é Gaia, eu estudo Engenharia Ambiental e Sanitária, na UTFPR.{"\n"}</Text>
  <Text style={myStyles.gaiaText}>  Adoro passar meu tempo ao ar livre, observando a beleza da vida e aprendendo sobre práticas sustentáveis.{"\n"}</Text>
  <Text style={myStyles.gaiaText}>  Estou sempre pronta para enfrentar desafios e fazer a diferença no mundo!</Text>
</View>
</View>

</View>





<Image source={require('../../assets/curiosidadesTitle.png')}  style={myStyles.curiosidadestitle} />
<View style={myStyles.curioText}>
<Text style={myStyles.curiosidades}>1. Sou defensora das áreas verdes e estou sempre dedicada em preservar e proteger a biodiversidade.</Text>
<Text style={myStyles.curiosidades}>2. Sou especialista em reciclagem e reutilização de materiais, promovo práticas de consumo sustentável e de redução de resíduos.</Text>
<Text style={myStyles.curiosidades}>3. Estou sempre pronta para oferecer orientação e inspiração para aqueles que desejam fazer a diferença no mundo.</Text>
<Text style={myStyles.curiosidades}>4. Tenho compromisso com a preservação ambiental e me empenho para garantir um futuro sustentável para as próximas gerações.</Text>
<Text style={myStyles.curiosidades}>5. Adoro ser fonte de inspirações para ações positivas, pois cada pequena ação pode fazer uma grande diferença na proteção do planeta.</Text>
</View>

<View style={myStyles.row}>
    <Image source={require('../../assets/bigTree.png')}  style={myStyles.bigTree} />
    <Image source={require('../../assets/smallTree.png')}  style={myStyles.smallTree} />
    <TouchableOpacity onPress={scrollToTop}>
              <Image source={require('../../assets/final.png')} style={myStyles.final} />
    </TouchableOpacity>

    <View style={myStyles.column}>
    <TouchableOpacity style={myStyles.ret1} onPress={handlePress}>
              <Text style={myStyles.noticias}>Mais notícias</Text>
            </TouchableOpacity>
      <View style={myStyles.ret2}></View>
    </View>

</View>


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
