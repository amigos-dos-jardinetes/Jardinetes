import React, { useRef } from 'react';
import { View, ScrollView, TouchableOpacity, Text, Image, Linking, useWindowDimensions } from 'react-native';
import { styles } from '../quemSomos/styles.js';
import { useNavigation } from '@react-navigation/native';


export default function quemSomos() {

  const navigation = useNavigation();
  const scrollViewRef = useRef(null);
  const myStyles = styles();
  const { width, height } = useWindowDimensions(); 


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
                    <Image source={require('../../assets/designerPhoto.png')}  style={myStyles.photoContainer} />
                </View>
                <Text style={myStyles.titleText}>Designer</Text>
                <Text style={myStyles.titleText2}>JORDANA DE OLIVEIRA FURLAN</Text>
                <Text style={myStyles.text}>  Me chamo Jordana, sou estudante de Design Gráfico na UTFPR e atualmente participo do projeto de extensão como UI-UX designer, uma área na qual me apaixonei profundamente. Também sou muralista e ilustradora, acredito que essas experiências externas contribuiram muito com meu apredizado dentro da equipe.</Text>
            </View>
        </View>


        <View style={myStyles.circContainer}>
            <View style={myStyles.circVerde1}></View>
            <View style={myStyles.circVerde2}></View>
            <View style={myStyles.circVerde3}></View>
            <View style={myStyles.circVerde4}></View>
        </View>

        <View style={myStyles.araucariaContainer}>
             <Image source={require('../../assets/araucarias.png')}  style={myStyles.araucarias} />
             <Image source={require('../../assets/araucarias.png')}  style={myStyles.araucarias2} />
        </View>


        <View style={myStyles.navbar2}>
      <View style={myStyles.imageContainer22}>
          <Image source={require('../../assets/UtfprBottom.png')}  style={myStyles.utfprImage3} />
      </View>
      </View>
      <View style={myStyles.retBackground}></View>
        </View>

        
        </ScrollView>
        
  );
}
