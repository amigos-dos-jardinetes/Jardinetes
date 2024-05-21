import React, { useRef } from 'react';
import { View, ScrollView, ImageBackground, TouchableOpacity, Text, Linking, Image } from 'react-native';
import { styles } from '../Contato/styles';
import { useNavigation } from '@react-navigation/native';

export default function Contato() {
  const navigation = useNavigation();
  const scrollViewRef = useRef(null);

  const openExternalLink = () => {
    const externalLink = 'https://www.instagram.com/amigosdosjardinetes.ct/'; // Substitua com o link desejado

    Linking.openURL(externalLink).catch((err) => console.error('Error opening link:', err));
  };

  const openEmailComposer = () => {
    const email = 'amigos.dos.jardinetes@gmail.com';
    const subject = 'Novas Informações!!!';

    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}`;

    Linking.openURL(mailtoUrl).catch((err) => console.error('Error opening email:', err));
  };

  return (
    <ScrollView
      horizontal  // Enable horizontal scrolling
    >
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        ref={scrollViewRef}
      >
        <ImageBackground
          source={require('../../assets/contato.jpg')}
          style={styles.backgroundImage}
        >

          <View style={styles.navbar}>
            <TouchableOpacity onPress={() => navigation.replace('PaginaInicial')}>
              <Text style={styles.navbarButton}>PÁGINA INICIAL</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.replace('')}>
              <Text style={styles.navbarButton}>AÇÕES SOCIAIS</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.replace('JardinetesMap')}>
              <Text style={styles.navbarButton}>FAÇA SUA PARTE</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.replace('')}>
              <Text style={styles.navbarButton}>QUEM SOMOS</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.replace('Contato')}>
              <Text style={styles.navbarButton}>CONTATO</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.replace('SignIn')}>
              <Text style={styles.navbarButton}>LOGIN</Text>
            </TouchableOpacity>
          </View>


          <View style={styles.card}>

            <TouchableOpacity onPress={openEmailComposer}>
              <Image source={require('../../assets/email1.png')} style={styles.buttonEmail} />
              <Text style={styles.buttonText}>Email</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={openExternalLink}>
              <Image source={require('../../assets/instagram1.png')} style={styles.buttonInstagram} />
              <Text style={styles.buttonText2}>Instagram</Text>
            </TouchableOpacity>

          </View>
          <View style={styles.imageContainer33}>
          <Image source={require('../../assets/araucarias.png')}  style={styles.araucarias} />
        
      </View>

          <View style={styles.imageContainer44}>
          <Image source={require('../../assets/araucarias.png')}  style={styles.araucarias2} />
        
      </View>
        <View style={styles.navbar2}>
      <View style={styles.imageContainer22}>
          <Image source={require('../../assets/UtfprBottom.png')}  style={styles.utfprImage} />
      </View>
      </View>
        </ImageBackground>
      </ScrollView>
    </ScrollView>
  );
}
