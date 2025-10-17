import React, { useRef } from 'react';
import { View, ScrollView, TouchableOpacity, Text, Image, Linking, useWindowDimensions } from 'react-native';
import { styles } from '../quemSomos/styles.js';
import { useNavigation } from '@react-navigation/native';


export default function quemSomos() {

  const navigation = useNavigation();
  const scrollViewRef = useRef(null);
  const myStyles = styles();
  const { width, height } = useWindowDimensions(); 
  
//Função para redirecionar ao link
  const openLink = (url) => {
    Linking.openURL(url).catch(err => console.error("Erro ao abrir o link:", err));
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


        <Image source={require('../../assets/conhecaTitle.png')}  style={myStyles.title} />

        

        <View style={myStyles.cards}>
            <View style={myStyles.card1}>
                <View style={myStyles.imageContainer}>
                    <Image source={require('../../assets/profePhoto.png')}  style={myStyles.photoContainer} />
                </View>
            <Text style={myStyles.titleText}>Professora</Text>
            <Text style={myStyles.titleText2}>SIMONE CROCETTI</Text>
            <Text style={myStyles.text}>  Professora, engenheira, mãe e entusiasta das pequenas áreas verdes.</Text>
            </View>
            <View style={myStyles.card2}>
                <View style={myStyles.imageContainer}>
                    <Image source={require('../../assets/programmerPhoto.png')}  style={myStyles.photoContainer} />
                </View>
            <Text style={myStyles.titleText}>Programador</Text>
            <Text style={myStyles.titleText2}>VICTOR PERCIO</Text>
            <Text style={myStyles.text}>  Técnico em informática, programador Full Stack, cursando Engenharia Mecatrônica.</Text>
            </View>
            <View style={myStyles.card3}>
                <View style={myStyles.imageContainer}>
                    <Image source={require('../../assets/programmer2Photo.png')}  style={myStyles.photoContainer} />
                </View>
                <Text style={myStyles.titleText}>Designer e Programador</Text>
                <Text style={myStyles.titleText2}>LEONARDO WITT</Text>
                <Text style={myStyles.text}>  Programador Full Stack e designer, cursando Engenharia de Computação e pai de plantas</Text>
            </View>
        </View>


        <View style={myStyles.circContainer}>
            <View style={myStyles.circVerde1}></View>
            <View style={myStyles.circVerde2}></View>
            <View style={myStyles.circVerde3}></View>
            <View style={myStyles.circVerde4}></View>
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



      <View style={myStyles.retBackground}></View>
        </View>

        
        </ScrollView>
        
  );
}
