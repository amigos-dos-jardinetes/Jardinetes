//android 381072997535-03mcaiclgt8kkdeg9tedhpobu5ggt2u4.apps.googleusercontent.com
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as animatable from 'react-native-animatable';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import { styles } from '../Welcome/styles';
import { rotateImage, checkUserLoggedIn, navigateToSignIn } from '../../../functions';


WebBrowser.maybeCompleteAuthSession();


export default function Welcome() {
    const navigation = useNavigation();
    const [animate, setAnimate] = useState(false);


    return (
        <View style={styles.container}>
            <View style={styles.containerLogo}>
                <TouchableOpacity onPress={() => rotateImage(setAnimate)}>
                    <animatable.Image
                        animation={animate ? { from: { rotateY: '0deg' }, to: { rotateY: '360deg' } } : null}
                        easing="linear"
                        duration={1000}
                        source={require('../../assets/logo.png')}
                        style={styles.imagelogo}
                    />
                </TouchableOpacity>
            </View>

            <animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
           
                <Text style={styles.title}>Amigos dos Jardinetes</Text>
                <Text style={styles.text}>Faça o login para começar</Text>
               

                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignIn')}>
                    <Text style={styles.buttonText}>Acessar</Text>
                </TouchableOpacity>
             
            </animatable.View>
        </View>
    );
}