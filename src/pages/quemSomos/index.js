import React, { useRef } from 'react';
import { View, ScrollView, TouchableOpacity, Text, Image, Linking, } from 'react-native';
import { styles } from '../quemSomos/styles.js';
import { useNavigation } from '@react-navigation/native';


export default function quemSomos() {

  const navigation = useNavigation();
  const scrollViewRef = useRef(null);



  return (
    <ScrollView ref={scrollViewRef}  style={styles.container3}>
        
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


        <Image source={require('../../assets/conhecaTitle.png')}  style={styles.title} />

        

        <View style={styles.cards}>
            <View style={styles.card1}>
                <View style={styles.imageContainer}>
                    <Image source={require('../../assets/profePhoto.png')}  style={styles.photoContainer} />
                </View>
            <Text style={styles.titleText}>Professora</Text>
            <Text style={styles.text}>  Professora, engenheira, mãe e entusiasta das pequenas áreas verdes.</Text>
            </View>
            <View style={styles.card2}>
                <View style={styles.imageContainer}>
                    <Image source={require('../../assets/programmerPhoto.png')}  style={styles.photoContainer} />
                </View>
            <Text style={styles.titleText}>Programador</Text>
            <Text style={styles.text}>  Técnico em informática, programador Full Stack, cursando Engenharia Mecatrônica.</Text>
            </View>
            <View style={styles.card3}>
                <View style={styles.imageContainer}>
                    <Image source={require('../../assets/designerPhoto.png')}  style={styles.photoContainer} />
                </View>
                <Text style={styles.titleText}>Designer</Text>
            </View>
        </View>


        <View style={styles.circContainer}>
            <View style={styles.circVerde1}></View>
            <View style={styles.circVerde2}></View>
            <View style={styles.circVerde3}></View>
            <View style={styles.circVerde4}></View>
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
      <View style={styles.retBackground}></View>
        </View>

        
        </ScrollView>
        
  );
}
