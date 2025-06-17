import React, { useRef, useEffect } from 'react';
import { View, ScrollView, ImageBackground, TouchableOpacity, Text, Linking, Image } from 'react-native';
import { styles } from '../Contato/styles';
import { useNavigation } from '@react-navigation/native';

export default function Contato() {
  const navigation = useNavigation();
  const scrollViewRef = useRef(null);
  const myStyles = styles();
  const openExternalLink = () => {
  const externalLink = 'https://www.instagram.com/amigosdosjardinetes.ct/';

    Linking.openURL(externalLink).catch((err) => console.error('Error opening link:', err));
  };
//Função para abrir o email
  const openEmailComposer = () => {
    const email = 'jardinetes-ct@utfpr.edu.br';
    const subject = 'Novas Informações!!!';

    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}`;

    Linking.openURL(mailtoUrl).catch((err) => console.error('Error opening email:', err));
  };

//Função para redirecionar ao link
  const openLink = (url) => {
    Linking.openURL(url).catch(err => console.error("Erro ao abrir o link:", err));
  };

  return (
    <ScrollView
      horizontal
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
<View style={myStyles.rowNav}>
      <View style={myStyles.column1nav}>
          <View style={myStyles.imageContainer22}>
              <Image source={require('../../assets/UtfprBottom.png')}  style={myStyles.utfprImage3} />
          </View>
        
          <TouchableOpacity style={myStyles.navBt} onPress={() => navigation.navigate('quemSomos')}>
              <Text style={myStyles.textNav}>Quem somos nós</Text>
          </TouchableOpacity>
      </View>


         <TouchableOpacity style={myStyles.navBt}>
                    <Text style={myStyles.textNav}>Termos de uso</Text>
                </TouchableOpacity>
                <View  style={myStyles.navBt}>
                    <Text style={myStyles.textNav}>Plataforma digital patenteada</Text>
                </View >
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
                
                <TouchableOpacity style={myStyles.navBt} onPress={() => openLink('https://www.utfpr.edu.br/acesso-a-informacao/lgpd')}>
                    <Text style={myStyles.textNav}>LGPD</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => openLink('https://www.instagram.com/amigosdosjardinetes.ct/')}>
                <Image source={require('../../assets/instagramNav.png')}  style={myStyles.instaNav} />
                </TouchableOpacity>
            </View>

    </View>
</View>
        </ImageBackground>
      </ScrollView>
    </ScrollView>
  );
}
