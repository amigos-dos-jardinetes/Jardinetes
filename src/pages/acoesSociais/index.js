import React, { useState, useEffect, useRef } from 'react';
import { View, ScrollView, TouchableOpacity, Text, Image, Linking, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Importa o CSS necessário
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { styles } from '../acoesSociais/styles.js';
import { getFirestore, collection, getDocs } from 'firebase/firestore'; // Importar funções do Firebase

export default function acoesSociais() {

  const navigation = useNavigation();
  const scrollViewRef = useRef(null);
  const [jardinetes, setJardinetes] = useState([]);
  const [loading, setLoading] = useState(true);

  const openLink = (url) => {
    Linking.openURL(url).catch(err => console.error("Erro ao abrir o link:", err));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const db = getFirestore(); // Inicializa o Firestore
        const jardinetesCollection = collection(db, 'jardinetes');
        const jardinetesSnapshot = await getDocs(jardinetesCollection);
        const data = jardinetesSnapshot.docs.map(doc => doc.data());

        // Shuffle e seleciona até 3 jardinetes
        const shuffled = data.sort(() => 0.5 - Math.random());
        const selectedJardinetes = shuffled.slice(0, Math.min(3, shuffled.length));

        setJardinetes(selectedJardinetes);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar dados: ", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const renderCarouselItem = (item) => (
    <div key={item.nome} style={styles.carouselItem}>
      <img src={item.jardinetePhoto} alt={item.nome} style={styles.carouselImage} />
      <p style={styles.carouselText}>{item.nome}</p>
    </div>
  );

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <ScrollView ref={scrollViewRef}  style={styles.container3}>
          <View style={styles.circle}></View>
          <View style={styles.circle2}></View>
    <View style={styles.container}>

        <View style={styles.navbar}>
            <TouchableOpacity onPress={() => navigation.replace('PaginaInicial')}>
                <Text style={styles.navbarButton}>PÁGINA INICIAL</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.replace('acoesSociais')}>
                <Text style={styles.navbarButton}>AÇÕES SOCIAIS</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.replace('JardinetesMap')}>
                <Text style={styles.navbarButton}>FAÇA SUA PARTE</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.replace('quemSomos')}>
                <Text style={styles.navbarButton}>QUEM SOMOS</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.replace('Contato')}>
                <Text style={styles.navbarButton}>CONTATO</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.replace('SignIn')}>
                <Text style={styles.navbarButton}>LOGIN</Text>
            </TouchableOpacity>
       
          
        </View>

        
        <View style={styles.row}>
                <View style={styles.column1}>
                     <Image source={require('../../assets/conhecaJardinetes.png')}  style={styles.conhecaJard} />
                     <View style={styles.ret}></View>

                     <View style={[styles.borderedContainer3, { overflow: 'hidden', }]}>
                       <Carousel
    showThumbs={false}
    showStatus={false}
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
            padding: '10px',
            borderRadius: '20%',
          }}
        >
          <FontAwesomeIcon icon={faChevronLeft} size="2x" />
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
            padding: '10px',
            borderRadius: '20%',
          }}
        >
          <FontAwesomeIcon icon={faChevronRight} size="2x" />
        </button>
      )
    }
    renderIndicator={(onClickHandler, isSelected, index, label) => {
      const indicatorStyle = {
        position: 'relative',
        bottom: '20px',  // Ajusta essa propriedade para mover para cima
        transform: 'translateX(-50%)',
        display: 'inline-block',
        marginRight: '8px',
        cursor: 'pointer',
        borderRadius: '50%',
        width: isSelected ? '12px' : '10px',
        height: isSelected ? '12px' : '10px',
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

                <View style={styles.column2}>
                        <View style={styles.retConheca1}>
                            <View style={styles.retConheca2}>
                                <Image source={require('../../assets/parceirosTitle.png')}  style={styles.parceirosTitle} />
                            </View>
                            <View style={styles.retOrange}>
                                <TouchableOpacity onPress={() => openLink('https://www.instagram.com/maozinhaverdecuritiba/')}>
                                    <Image source={require('../../assets/maozinha.png')} style={styles.maozinha} />
                                </TouchableOpacity>
                                 <View style={styles.retVerde}>
                                    <Text style={styles.parceirosText}>Mãozinha Verde Agência de Sustentabilidade</Text>
                                 </View>
                                 <TouchableOpacity onPress={() => openLink('https://www.instagram.com/serambiental.utfpr/')}>
                                     <Image source={require('../../assets/serAmbiental.png')} style={styles.serAmbiental} />
                                 </TouchableOpacity>
                                 <View style={styles.retVerde}>
                                    <Text style={styles.parceirosText}>Ser Ambiental Educação Ambiental</Text>
                                 </View>
                                 <TouchableOpacity onPress={() => openLink('https://www.instagram.com/biotiba/')}>
                                     <Image source={require('../../assets/biotiba.png')} style={styles.biotiba} />
                                 </TouchableOpacity>
                                 <View style={styles.retVerde}>
                                    <Text style={styles.parceirosText}>Biotiba</Text>
                                 </View>
                            </View>
                        </View>
                </View>
        </View>


        <View style={styles.araucariaContainer}>
             <Image source={require('../../assets/araucarias.png')}  style={styles.araucarias} />
             <Image source={require('../../assets/araucarias.png')}  style={styles.araucarias2} />
        </View>


        <View style={styles.navbar2}>
      <View style={styles.imageContainer22}>
          <Image source={require('../../assets/UtfprBottom.png')}  style={styles.utfprImage3} />
      </View>
      </View>
       
        </View>
        </ScrollView>
        
  );
}
