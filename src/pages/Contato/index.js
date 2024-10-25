import React, { useRef, useEffect } from 'react';
import { View, ScrollView, ImageBackground, TouchableOpacity, Text, Linking, Image } from 'react-native';
import { styles } from '../Contato/styles';
import { useNavigation } from '@react-navigation/native';

export default function Contato() {
  const navigation = useNavigation();
  const scrollViewRef = useRef(null);
  const myStyles = styles();
  const openExternalLink = () => {
    const externalLink = 'https://www.instagram.com/amigosdosjardinetes.ct/'; // Substitua com o link desejado

    Linking.openURL(externalLink).catch((err) => console.error('Error opening link:', err));
  };

  const openEmailComposer = () => {
    const email = 'jardinetes-ct@utfpr.edu.br';
    const subject = 'Novas Informações!!!';

    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}`;

    Linking.openURL(mailtoUrl).catch((err) => console.error('Error opening email:', err));
  };


  

  return (
    <ScrollView
      horizontal  // Enable horizontal scrolling
    >
      <ScrollView
        contentContainerStyle={myStyles.scrollViewContent}
        ref={scrollViewRef}
      >
        <ImageBackground
          source={require('../../assets/contato.jpg')}
          style={myStyles.backgroundImage}
        >

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


          <View style={myStyles.card}>

            <TouchableOpacity onPress={openEmailComposer}>
              <Image source={require('../../assets/Email1.png')} style={myStyles.buttonEmail} />
              <Text style={myStyles.buttonText}>Email</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={openExternalLink}>
              <Image source={require('../../assets/Instagram1.png')} style={myStyles.buttonInstagram} />
              <Text style={myStyles.buttonText2}>Instagram</Text>
            </TouchableOpacity>

          </View>
          <View style={myStyles.imageContainer33}>
          <Image source={require('../../assets/araucarias.png')}  style={myStyles.araucarias} />
        
      </View>

          <View style={myStyles.imageContainer44}>
          <Image source={require('../../assets/araucarias.png')}  style={myStyles.araucarias2} />
        
      </View>
        <View style={myStyles.navbar2}>
      <View style={myStyles.imageContainer22}>
          <Image source={require('../../assets/UtfprBottom.png')}  style={myStyles.utfprImage} />
      </View>
      </View>
        </ImageBackground>
      </ScrollView>
    </ScrollView>
  );
}
