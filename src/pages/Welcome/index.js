import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import * as animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'

export default function Welcome() {
    const navigation = useNavigation();
    const [animate, setAnimate] = useState(false);

    const rotateImage = () => {
        setAnimate(true);
        setTimeout(() => {
            setAnimate(false);
        }, 1000);
    };

    return (
        <View style={styles.container}>
            <View style={styles.containerLogo}>
                <TouchableOpacity onPress={rotateImage}>
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

                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignIn')}>

                    <Text style={styles.buttonText}>Acessar</Text>
                </TouchableOpacity>
            </animatable.View>


        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#195439'
    },

    containerLogo: {
        flex: 2,
        backgroundColor: '#195439',
        justifyContent: 'center',
        alignItems: 'center'
    },

    containerForm: {
        flex: 1,
        backgroundColor: '#FFF',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 28,
        marginBottom: 12

    },
    text: {
        color: '#a1a1a1'


    },
    button: {
        position: 'absolute',
        backgroundColor: '#195439',
        borderRadius: 50,
        paddingVertical: 8,
        width: '60%',
        alignSelf: 'center',
        bottom: '15%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 18,
        color: '#FFF',
        fontWeight: 'bold'
    }

})