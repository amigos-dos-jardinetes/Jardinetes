import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'
import { styles } from '../Welcome/styles';
import { rotateImage, checkUserLoggedIn, navigateToSignIn } from '../../../functions';

export default function Welcome() {
    const navigation = useNavigation();
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        const checkLoggedInUser = async () => {
            try {
                const user = await checkUserLoggedIn();
                if (user) {
                    console.log('Usuário logado:', user);
                    navigation.replace('Menu');
                } else {
                    console.log('Nenhum usuário logado');
                }
            } catch (error) {
                console.error('Erro ao verificar usuário logado:', error);
            }
        };

        checkLoggedInUser();
    }, [navigation]);

    return (
        <View style={styles.container}>
            <View style={styles.containerLogo}>
                <TouchableOpacity onPress={() => rotateImage(setAnimate)}>
                    <animatable.Image
                        animation={animate ? { from: { rotateY: '0deg' }, to: { rotateY: '360deg' } } : null}
                        easing="linear"
                        duration={1000}
                        source={require('../../assets/logo.png')}
                    />
                </TouchableOpacity>
            </View>

            <animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
                <Text style={styles.title}>Amigos dos Jardinetes</Text>
                <Text style={styles.text}>Faça o login para começar</Text>

                <TouchableOpacity style={styles.button} onPress={() => navigateToSignIn(navigation)}>
                    <Text style={styles.buttonText}>Acessar</Text>
                </TouchableOpacity>
            </animatable.View>
        </View>
    );
}