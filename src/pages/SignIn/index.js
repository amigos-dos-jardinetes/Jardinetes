import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { initializeApp } from 'firebase/app';
import {  signInWithPopup, GoogleAuthProvider, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-web';

const firebaseConfig = {
    apiKey: "AIzaSyB_xs_i7evQkeMf5vC7yyX8u6CAKqDmmzU",
    authDomain: "amigosdosjardinetes.firebaseapp.com",
    projectId: "amigosdosjardinetes",
    storageBucket: "amigosdosjardinetes.appspot.com",
    messagingSenderId: "381072997535",
    appId: "1:381072997535:web:157abb3a076162a90836aa"
};

const firebase_initialize = initializeApp(firebaseConfig);
const auth = getAuth(firebase_initialize);
auth.languageCode = 'it';
const provider = new GoogleAuthProvider();


export default function SignIn() {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const google_login = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
                console.log(user)
                navigation.navigate('Menu');
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.customData.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
            });
    }


    const handleLogin = async () => {
        try {
            const userLogin = await signInWithEmailAndPassword(auth, email, password);
            navigation.navigate('Menu');

        } catch (error) {

            AlertLogin();
        }
    };

    const AlertLogin = () =>
        Alert.alert('Erro de Login', 'Email ou senha incorretos.', [
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
            },
            { text: 'OK', onPress: () => console.log('OK Pressed') },
        ]);

    return (

        <View style={styles.container}>

            <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
                <Text style={styles.message}>Bem-vindo</Text>
            </Animatable.View>


            <Animatable.View animation="fadeInUp" style={styles.containerForm}>
                <Text style={styles.title}>Email</Text>
                <TextInput
                    placeholder="Digite um email"
                    style={styles.input}
                    onChangeText={text => setEmail(text)}

                />

                <Text style={styles.title}>Senha</Text>
                <TextInput
                    placeholder="Sua senha"
                    style={styles.input}
                    onChangeText={text => setPassword(text)}
                    secureTextEntry={true}
                />

                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={styles.buttonText}>Acessar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={google_login}>
                    <Text style={styles.buttonText}>Acessar pelo Google</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonRegister} onPress={() => navigation.navigate('SignUp')}>
                    <Text style={styles.registerText}>Cadastre-se</Text>
                </TouchableOpacity>

            </Animatable.View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#195439'
    },
    containerHeader: {
        marginTop: '14%',
        marginBottom: '8%',
        paddingStart: '5%'
    },
    message: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#FFF'
    },
    containerForm: {
        backgroundColor: '#FFF',
        flex: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    title: {
        fontSize: 20,
        marginTop: 28
    },
    input: {
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 16,
    },
    button: {
        backgroundColor: '#195439',
        width: '100%',
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center'
    },

    buttonText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold'
    },
    buttonRegister: {
        marginTop: 15,
        alignSelf: 'center',
    },
    registertext: {
        color: '#a1a1a1'
    }

});