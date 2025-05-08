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

  return (
    <ScrollView ref={scrollViewRef}  style={myStyles.container3}>
          <View style={myStyles.circle}></View>
          <View style={myStyles.circle2}></View>
    <View style={myStyles.container}>

        <View style={myStyles.navbar}>
            <TouchableOpacity onPress={() => navigation.replace('PaginaInicial')}>
                <Text style={myStyles.navbarButton}>Teste</Text>
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

        
        <View style={myStyles.row}>
                <View style={myStyles.column1}>
                     <Image source={require('../../assets/conhecaJardinetes.png')}  style={myStyles.conhecaJard} />
                     <View style={myStyles.ret}></View>

                     <View style={[myStyles.borderedContainer3, { overflow: 'hidden', }]}>
                       <Carousel
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
  </Carousel>
            </View>
                </View>

                <View style={myStyles.column2}>
                        <View style={myStyles.retConheca1}>
                            <View style={myStyles.retConheca2}>
                                <Image source={require('../../assets/parceirosTitle.png')}  style={myStyles.parceirosTitle} />
                            </View>
                            <View style={myStyles.retOrange}>
                                <TouchableOpacity onPress={() => openLink('https://www.instagram.com/maozinhaverdecuritiba/')}>
                                    <Image source={require('../../assets/maozinha.png')} style={myStyles.maozinha} />
                                </TouchableOpacity>
                                 <View style={myStyles.retVerde}>
                                    <Text style={myStyles.parceirosText}>Mãozinha Verde Agência de Sustentabilidade</Text>
                                 </View>
                                 <TouchableOpacity onPress={() => openLink('https://www.instagram.com/serambiental.utfpr/')}>
                                     <Image source={require('../../assets/serAmbiental.png')} style={myStyles.serAmbiental} />
                                 </TouchableOpacity>
                                 <View style={myStyles.retVerde}>
                                    <Text style={myStyles.parceirosText}>Ser Ambiental Educação Ambiental</Text>
                                 </View>
                                 <TouchableOpacity onPress={() => openLink('https://www.instagram.com/biotiba/')}>
                                     <Image source={require('../../assets/biotiba.png')} style={myStyles.biotiba} />
                                 </TouchableOpacity>
                                 <View style={myStyles.retVerde}>
                                    <Text style={myStyles.parceirosText}>Biotiba</Text>
                                 </View>
                            </View>
                        </View>
                </View>
        </View>


        <View style={myStyles.araucariaContainer}>
             <Image source={require('../../assets/araucarias.png')}  style={myStyles.araucarias} />
             <Image source={require('../../assets/araucarias.png')}  style={myStyles.araucarias2} />
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
