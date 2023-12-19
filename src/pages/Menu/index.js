import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import * as animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'




export default function Welcome() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.containerLogo}>
                <animatable.Image
                    animation="flipInY"
                    source={require('../../assets/logo.png')}
                    style={{ width: '100%' }}
                    resizeMode="contain"
                />
            </View>

            <animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
                <Text style={styles.title}>MainPage</Text>
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