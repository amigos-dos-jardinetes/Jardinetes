import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Image, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../SignUp/styles';
import { checkUserLoggedInSignUp, handleRegister, pickImageAsync, uploadImageToFirebase } from '../../../functions';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBe8nNAzDIXpriQ2fqE7QFHAMtETRbiN84",
    authDomain: "amigosdosjardinetes.firebaseapp.com",
    projectId: "amigosdosjardinetes",
    storageBucket: "amigosdosjardinetes.appspot.com",
    messagingSenderId: "381072997535",
    appId: "1:381072997535:web:157abb3a076162a90836aa"
};

const firebase_initialize = initializeApp(firebaseConfig);
const auth = getAuth(firebase_initialize);
const firestore = getFirestore();
const storage = getStorage(firebase_initialize);

export default function SignUp() {
    const navigation = useNavigation();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [selectedImage, setSelectedImage] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const checkLoggedInUser = async () => {
            const user = await checkUserLoggedInSignUp(auth);
            if (user) {
                console.log('Usuário logado:', user);
                setIsLoggedIn(true);
                navigation.replace('Menu');
            } else {
                console.log('Nenhum usuário logado');
                setIsLoggedIn(false);
            }
        };

        checkLoggedInUser();
    }, []);

    const handleRegisterPress = async () => {
        await handleRegister(auth, firestore, storage, email, password, username, selectedImage, navigation);
    };

    const handlePickImageAsync = async () => {
        const uri = await pickImageAsync();
        if (uri) {
            setSelectedImage(uri);
        }
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 0} // Ajuste o valor conforme necessário
        >
            <ScrollView
                contentContainerStyle={{ flexGrow: 1 }}
                keyboardShouldPersistTaps="handled"
            >
                <View style={styles.container}>
                    <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
                        <Text style={styles.message}>Registre-se</Text>
                    </Animatable.View>

                    <Animatable.View animation="fadeInUp" style={styles.containerForm}>
                        <TouchableOpacity style={styles.image} onPress={handlePickImageAsync}>
                            {selectedImage ? (
                                <Image
                                    source={{ uri: selectedImage }}
                                    style={styles.image}
                                    resizeMode="cover"
                                />
                            ) : (
                                <Image
                                    style={styles.image}
                                    source={require('../../assets/camera.png')}
                                />
                            )}
                        </TouchableOpacity>

                        <Text style={styles.title}>Usuário</Text>
                        <TextInput
                            placeholder="Digite um nome de usuário"
                            style={styles.input}
                            value={username}
                            onChangeText={text => setUsername(text)}
                        />

                        <Text style={styles.title}>Email</Text>
                        <TextInput
                            placeholder="Digite um email"
                            style={styles.input}
                            value={email}
                            onChangeText={text => setEmail(text)}
                        />

                        <Text style={styles.title}>Senha</Text>
                        <TextInput
                            placeholder="Sua senha"
                            style={styles.input}
                            value={password}
                            onChangeText={text => setPassword(text)}
                            secureTextEntry={true}
                        />

                        <TouchableOpacity style={styles.button} onPress={handleRegisterPress}>
                            <Text style={styles.buttonText}>Registrar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.buttonVoltar} onPress={() => navigation.navigate('SignIn')}>
                            <Text>Voltar ao login</Text>
                        </TouchableOpacity>
                    </Animatable.View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}