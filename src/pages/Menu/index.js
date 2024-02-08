import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, ImageBackground, StatusBar, ScrollView, RefreshControl } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getAuth } from 'firebase/auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';
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
    const [wallpaper, setWallpaper] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [refreshing, setRefreshing] = useState(false);  // Estado para controlar o RefreshControl
    WebBrowser.maybeCompleteAuthSession();

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
        }
    }

    const handleLogoutFunc = () => {
        handleLogout(auth, navigation);
    };

    const onRefresh = async () => {
        setRefreshing(true);

        // Coloque aqui a lógica de atualização, por exemplo, chame a função userSearchData novamente
        await userSearchData(auth, firestore, storage, navigation, setUserName, setWallpaper, setImageUrl, setEmail);

        setRefreshing(false);
    };

    React.useEffect(() => {
        handleSignINWithGoogle();
    }, [response]);

    useEffect(() => {
        const unsubscribe = userSearchData(auth, firestore, storage, navigation, setUserName, setWallpaper, setImageUrl, setEmail);

        // Ensure that unsubscribe is called when the component is unmounted
        return () => {
            if (unsubscribe && typeof unsubscribe === 'function') {
                unsubscribe();
            }
        };
    }, []);

    return (
        <ScrollView
            style={{ flex: 1 }}
            refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        >
            <ImageBackground source={wallpaper ? { uri: wallpaper } : require('../../assets/default-background.jpg')} style={styles.container}>
                <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
                <Text style={styles.title}>Bem-vindo, {userName}</Text>
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
                <View style={styles.buttons}>
                    <Text>{JSON.stringify(userInfo.given_name, null, 2)}</Text>
                    <TouchableOpacity style={styles.textButton}>
                        <Text style={styles.textInfo}>{email}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.textButton}>
                        <Text style={styles.textInfo}>Segurança e privacidade</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.textButton} onPress={() => navigation.navigate('Config')}>
                        <Text style={styles.textInfo}>Configurações</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.textButton}>
                        <Text style={styles.textInfo}>Suporte</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.logoutButton} onPress={handleLogoutFunc}>
                        <Text style={styles.logoutButtonText}>Sair</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </ScrollView>
    );
}
