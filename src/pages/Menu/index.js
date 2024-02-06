import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { handleLogout, userSearchData } from '../../../functions';
import { styles } from '../Menu/styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import { checkLoggedInUser } from '../../../functions';

export default function Menu() {
    const auth = getAuth();
    const firestore = getFirestore();
    const storage = getStorage();
    const navigation = useNavigation();
    const [userName, setUserName] = useState('');
    const [imageUrl, setImageUrl] = useState(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
  
    WebBrowser.maybeCompleteAuthSession()
  
    const [request, response, promptAsync] = Google.useAuthRequest({
      iosClientId: '<IOS_CLIENT_ID>',
      androidClientId: '381072997535-926po31tefpm6knqfml8si4ki83hb9rj.apps.googleusercontent.com',
      webClientId: '381072997535-ab8js7tf8aie1s2lplbkae4uummgpll1.apps.googleusercontent.com',
      expoClientId: '381072997535-dduhtvsr4tt4apo5orl1pjhsccmom6mv.apps.googleusercontent.com',
    },{
      projectNameForProxy: "@jardinetes/Amigos_dos_Jardinetes",
      redirectUri: "https://auth.expo.io/@jardinetes/Amigos_dos_Jardinetes/start"
    });
     
    const [userInfo, setUserInfo] = useState(false);
   
    async function handleSignINWithGoogle() {
      try {
          const user = await AsyncStorage.getItem('@user');
          if (!user) {
              if (response?.type === 'success' && response.authentication?.accessToken) {
                  await getUserInfo(response.authentication.accessToken);
                  
              }
          } else {
              setUserInfo(JSON.parse(user));
              navigation.navigate('Menu');
          }
      } catch (error) {
          console.error('Error during Google login:', error);
          // Log or handle the error appropriately
      }
    };
  
  
    React.useEffect(() => {
        handleSignINWithGoogle();
    }, [response])
    
    const getUserInfo = async (token) => {
        if (!token) return;
        try {
        const response = await fetch(
            "https://www.googleapis.com/userinfo/v2/me",
            {
                headers: { Authorization: `Bearer ${token}` },
            }
        );
  
        if (!response.ok) {
            throw new Error(`Google API request failed with status ${response.status}`);
        }
  
        const user = await response.json();
        await AsyncStorage.setItem("@user", JSON.stringify(user));
        setUserInfo(user);
    } catch (error) {
        console.error('Error fetching user info from Google:', error);
        // Log or handle the error appropriately
    }
    };
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
                <Text>{JSON.stringify(userInfo, null, 2)}</Text>
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
