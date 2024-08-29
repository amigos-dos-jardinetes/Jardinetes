import React, { useRef } from 'react';
import { View, ScrollView, TouchableOpacity, Text, Image, Linking, } from 'react-native';
import { styles } from '../acoesSociais/styles.js';
import { useNavigation } from '@react-navigation/native';


export default function acoesSociais() {

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




       
        </View>
        </ScrollView>
        
  );
}
