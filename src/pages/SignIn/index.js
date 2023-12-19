import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithCredential, } from 'firebase/auth';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';

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

export default function SignIn() {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const userLogin = await signInWithEmailAndPassword(auth, email, password);
            console.log('Login realizado com sucesso!', userLogin.user);
            navigation.navigate('Menu');

        } catch (error) {
            console.error('Erro de login:',
             error.message);
            navigation.navigate('Menu');
        }
    };



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