import React, {useState} from 'react';
import { styles } from './styles';
import { doSignInWithEmailAndPassword, doSignInWithGoogle } from '../../firebase/auth'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Button } from 'react-native';
import * as Animatable from 'react-native-animatable';

const Login = () => {

    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[isSigningIn, setIsSignIn] = useState(false);
    const[errorMessage, setErrorMassage] = useState('');

    const onSubmit = async (e) => {
        e.preventDefalt()
        if(!isSigningIn) {
            setIsSignIn(true);
            await doSignInWithEmailAndPassword(email, password);
        }
    }

    const onGoogleSignIn = (e) => {
        e.preventDefalt()
        if(!isSigningIn) {
            setIsSignIn(true);
            doSignInWithGoogle().catch(err => {
                setIsSignIn(false)
            })
        }
    }
    
    return (
        <View style={styles.container}>
            <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
                <Text style={styles.message}>Bem-vindo</Text>
            </Animatable.View>
  
            <Animatable.View animation="fadeInUp" style={styles.containerForm}>
                <Text style={styles.title}>Email</Text>
                <TextInput
                    placeholder="Digite um email"
                    style={[
                    styles.input,
                    ]}
                    onChangeText={text => setEmail(text)}
                />
                <Text style={styles.title}>Senha</Text>
                <TextInput
                    placeholder="Sua senha"
                    style={[
                    styles.input,
                    ]}
                    onChangeText={text => setPassword(text)}
                    secureTextEntry={true}
                />
  
          <TouchableOpacity style={styles.button} onPress={doSignInWithEmailAndPassword}>
            <Text style={styles.buttonText}>Acessar</Text>
          </TouchableOpacity>


          <TouchableOpacity style={styles.button} 
                title='Sign in with Google'
               onPress={doSignInWithGoogle}>
          <Text style={styles.buttonText}>Acessar com o Google</Text>
          
          </TouchableOpacity>
    
  
          <TouchableOpacity
            style={styles.buttonRegister}
            onPress={() => navigation.navigate('SignUp')}>
            <Text>Cadastre-se</Text>
          </TouchableOpacity>
  
  
         
        </Animatable.View>
      </View>
    )
}

export default Login;