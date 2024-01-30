import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { handleLogout, userSearchData } from '../../../functions';
import { styles } from '../Menu/styles';

const firebaseConfig = {
    apiKey: "AIzaSyBe8nNAzDIXpriQ2fqE7QFHAMtETRbiN84",
  authDomain: "amigosdosjardinetes.firebaseapp.com",
  projectId: "amigosdosjardinetes",
  storageBucket: "amigosdosjardinetes.appspot.com",
  messagingSenderId: "381072997535",
  appId: "1:381072997535:web:157abb3a076162a90836aa"
};

export default function Menu() {
    const auth = getAuth();
    const firestore = getFirestore();
    const storage = getStorage();
    const navigation = useNavigation();
    const [userName, setUserName] = useState('');
    const [imageUrl, setImageUrl] = useState(null);

    const handleLogoutFunc = () => {
        handleLogout(auth, navigation);
    };

    useEffect(() => {
        const unsubscribe = userSearchData(auth, firestore, storage, navigation, setUserName, setImageUrl);

        // Ensure that unsubscribe is called when the component is unmounted
        return () => {
            if (unsubscribe && typeof unsubscribe === 'function') {
                unsubscribe();
            }
        };
    }, []); // Pass an empty dependency array to ensure the effect runs only once


    return (
        <View style={styles.container}>
            <View style={styles.containerLogo}>
                {imageUrl ? (
                    <Image
                        style={styles.logoImage}
                        source={{
                            uri: imageUrl,
                        }}
                    />
                ) : (
                    <Text>Imagem não disponível</Text>
                )}
            </View>

            <View style={styles.containerForm}>
                <Text style={styles.title}>Bem-vindo, {userName}</Text>
                <TouchableOpacity style={styles.InicioButton} onPress={() => navigation.navigate('Welcome')}>
                    <Text style={styles.logoutButtonText}>Início</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.logoutButton} onPress={handleLogoutFunc}>
                    <Text style={styles.logoutButtonText}>Logout</Text>
                </TouchableOpacity>

            </View>
        </View>
    );
}
