import React, { useRef } from 'react';
import { View, ScrollView, TouchableOpacity, Text, Image, Linking, } from 'react-native';
import { styles } from '../quemSomos/styles.js';
import { useNavigation } from '@react-navigation/native';


export default function quemSomos() {

  const navigation = useNavigation();




  return (
   
    <View style={styles.container}>
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


        <Image source={require('../../assets/conhecaTitle.png')}  style={styles.title} />



        <View style={styles.cards}>
            <View style={styles.card1}>
                <View style={styles.imageContainer}>
                    <Image source={require('../../assets/profePhoto.png')}  style={styles.photoContainer} />
                </View>
            </View>
            <View style={styles.card2}>
                <View style={styles.imageContainer}>
                    <Image source={require('../../assets/programmerPhoto.png')}  style={styles.photoContainer} />
                </View>
            </View>
            <View style={styles.card3}>
                <View style={styles.imageContainer}>
                    <Image source={require('../../assets/designerPhoto.png')}  style={styles.photoContainer} />
                </View>
            </View>
        </View>

        </View>
     
  );
}
