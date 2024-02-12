//android 381072997535-03mcaiclgt8kkdeg9tedhpobu5ggt2u4.apps.googleusercontent.com
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as animatable from 'react-native-animatable';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import { styles } from '../Welcome/styles';
import { rotateImage, checkUserLoggedIn, navigateToSignIn } from '../../../functions';
import "./style.css";
import logo from '../../assets/logo.png'
import BigTree from '../../assets/BigTree.png'
import BigWavyTree from '../../assets/BigWavyTree.png'
import Vector6 from '../../assets/Vector6.png'
import Vector1 from '../../assets/Vector1.png'
import Vector2 from '../../assets/Vector2.png'


WebBrowser.maybeCompleteAuthSession();

function NewSignIn() {
    navigation.navigate('NewSignIn')
}

export default function Welcome() {
    const navigation = useNavigation();
    const [animate, setAnimate] = useState(false);


    return (
        <div className="login-page">
        <div className="overlap-group-wrapper">
          <div className="overlap-group">
            <div className="ellipse" />
            <div className="rectangle" />
            <div className="div" />
            <img className="img" alt="Vector" src={Vector2} />
            <img className="vector-2" alt="Vector" src={Vector1} />
            <div className="SOBRA-FUNDO" />
            <img className="vector-3" alt="Vector" src={Vector6} />
            <div className="fundo" />
            <p className="p-GINA-NICIAL-a-ES">
              <span className="text-wrapper">
                PÁGINA ÍNICIAL&nbsp;&nbsp;&nbsp;AÇÕES SOCIAIS&nbsp;&nbsp;&nbsp; QUEM
                SOMOS&nbsp;&nbsp;&nbsp; CONTATO&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </span>
              <span className="span">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>
            </p>
            <div className="rectangle-2" />
            <div className="ellipse-2" />
            <div className="ellipse-3" />
            <div className="ellipse-4" />
            <div className="text-wrapper-2">B</div>
            <div className="text-wrapper-3">E</div>
            <div className="text-wrapper-4">M</div>
            <div className="text-wrapper-5">-</div>
            <div className="text-wrapper-6">V</div>
            <div className="text-wrapper-7">I</div>
            <div className="text-wrapper-8">N</div>
            <div className="text-wrapper-9">D</div>
            <div className="text-wrapper-10">O</div>
            <img className="ellipse-5" src='logo' alt={logo}/>
            <img className="go-green-big-tree" alt="Go green big tree" src={BigTree} />
            <div className="text-wrapper-11">lembre-me</div>
            <div className="text-wrapper-12">concordo com os termos</div>
            <div className="text-wrapper-13">esqueci minha senha</div>
            <img className="go-green-big-tree-2" alt="Go green big tree" src={BigTree} />
            <img className="go-green-big-wavy" alt="Go green big wavy" src={BigWavyTree} />
            <div className="quadrado-v" />
            <div className="quadrado-v-2" />
            <div className="quadrado-v-3" />
            <div className="rectangle-3" />
            <div className="text-wrapper-14">nome de úsuario:</div>
            <div className="text-wrapper-15">cadastre-se</div>
            <div className="text-wrapper-16">senha:</div>
            <div className="rectangle-4" />
            <div className="rectangle-5" />
            <div className="text-wrapper-17">ENTRAR</div>
          </div>
        </div>
      </div>

    );
}