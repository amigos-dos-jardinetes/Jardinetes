import React, { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import { getAuth } from 'firebase/auth';
import { getFirestore, addDoc, collection, deleteDoc, getDocs, updateDoc, doc, getDoc, arrayRemove, FieldValue, firestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { initializeApp } from 'firebase/app';
import { styles } from '../MeusJardinetes/styles';

const firebaseConfig = {
    apiKey: "AIzaSyBe8nNAzDIXpriQ2fqE7QFHAMtETRbiN84",
    authDomain: "amigosdosjardinetes.firebaseapp.com",
    projectId: "amigosdosjardinetes",
    storageBucket: "amigosdosjardinetes.appspot.com",
    messagingSenderId: "381072997535",
    appId: "1:381072997535:web:157abb3a076162a90836aa"
};



export default function MeusJardinetes() {
    const [jardins, setJardins] = useState([]);
    const [user, setUser] = useState(null);
    
    // Inicialização do Firebase
    const firebaseApp = initializeApp(firebaseConfig);
    const auth = getAuth(firebaseApp);
    const firestore = getFirestore(firebaseApp);
    const storage = getStorage(firebaseApp);

    useEffect(() => {
        // Verificando se há um usuário logado
        const unsubscribeAuth = auth.onAuthStateChanged((user) => {
            setUser(user);
            if (user) {
                // Inicialização do Firestore
                const db = firestore();

                // Busca os jardins...
                const unsubscribeJardins = db.collection('users').doc(user.uid).onSnapshot((snapshot) => {
                    const jardinsIds = snapshot.data().jardinetes || [];
                    Promise.all(jardinsIds.map(jardimId => {
                        return db.collection('jardins').doc(jardimId).get();
                    })).then(jardinsDocs => {
                        const jardinsData = jardinsDocs.map(doc => ({
                            id: doc.id,
                            ...doc.data()
                        }));
                        setJardins(jardinsData);
                    }).catch(error => {
                        console.error("Error fetching jardins:", error);
                    });
                });
                return () => unsubscribeJardins();
            } else {
                setJardins([]); 
            }
        });

        return () => unsubscribeAuth();
    }, []);

    return (
        <View style={styles.container}>
            {jardins.map(jardim => (
                <JardimCard key={jardim.id} jardim={jardim} />
            ))}
        </View>
    );
}


const JardimCard = ({ jardim }) => (
    <View style={cardStyles.container}>
        <Text style={cardStyles.title}>{jardim.nome}</Text>
        <Image source={{ uri: jardim.jardinetePhoto }} style={cardStyles.image} />
    </View>
);
