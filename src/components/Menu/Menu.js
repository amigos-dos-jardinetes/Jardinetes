import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';

export default function Menu() {
    const navigation = useNavigation();
    return (
                <View style={styles.navbar}>
                    <TouchableOpacity onPress={() => navigation.replace('PaginaInicial')}>
                        <Text style={styles.navbarButton}>PÁGINA INICIAL</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.replace('acoesSociais')}>
                        <Text style={styles.navbarButton}>JARDINETES</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.replace('JardinetesMap')}>
                        <Text style={styles.navbarButton}>FAÇA SUA PARTE</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.replace('quemSomos')}>
                        <Text style={styles.navbarButton}>QUEM SOMOS</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.replace('SignIn')}>
                        <Text style={styles.navbarButton}>LOGIN</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.replace('Contato')}>
                        <Text style={styles.navbarButton}></Text>
                    </TouchableOpacity>
                </View>
    );
}