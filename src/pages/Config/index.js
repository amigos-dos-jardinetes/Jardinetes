import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Image, Button, Text } from 'react-native';
import { getFirestore, doc, updateDoc } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { launchImageLibraryAsync } from 'expo-image-picker';
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBe8nNAzDIXpriQ2fqE7QFHAMtETRbiN84",
    authDomain: "amigosdosjardinetes.firebaseapp.com",
    projectId: "amigosdosjardinetes",
    storageBucket: "amigosdosjardinetes.appspot.com",
    messagingSenderId: "381072997535",
    appId: "1:381072997535:web:157abb3a076162a90836aa"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

export default function ImageUploadScreen() {
  const firestore = getFirestore();
  const storage = getStorage(firebaseApp);

  const [selectedImage, setSelectedImage] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  const pickImage = async () => {
    let result = await launchImageLibraryAsync({
      mediaTypes: 'Images',
      allowsEditing: true,
      quality: 1,
    });

    if (!result.cancelled) {
      setSelectedImage(result.uri);
    }
  };

  const uploadImage = async () => {
    try {
      if (selectedImage && user) {
        const storageRef = ref(storage, `wallpapers/${Date.now()}`);
        const response = await fetch(selectedImage);
        const blob = await response.blob();
        await uploadBytes(storageRef, blob);

        const wallpaper = await getDownloadURL(storageRef);

        const userDoc = doc(firestore, 'users', user.uid);
        await updateDoc(userDoc, { wallpaper: wallpaper });

        // Limpar a imagem selecionada após o envio
        setSelectedImage(null);
      }
    } catch (error) {
      console.error('Erro ao fazer upload da imagem:', error);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity onPress={pickImage}>
        <View style={{ width: 200, height: 200, backgroundColor: 'lightgray', justifyContent: 'center', alignItems: 'center' }}>
          {selectedImage ? (
            <Image source={{ uri: selectedImage }} style={{ width: '100%', height: '100%', borderRadius: 10 }} />
          ) : (
            <Text>Selecionar Imagem</Text>
          )}
        </View>
      </TouchableOpacity>

      <Button title="Enviar para Firestore" onPress={uploadImage} />
    </View>
  );
}
