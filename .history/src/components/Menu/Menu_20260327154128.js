import { View, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';
import Title from '../Title/Title';

export default function Menu({ titulo }) {
    const navigation = useNavigation();
    const myStyles = styles();
    return (
        <>
            <View style={myStyles.navbar}>
                <TouchableOpacity onPress={() => navigation.replace('Inicio')}>
                    <Text style={myStyles.navbarButton}>PÁGINA INICIAL</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.replace('acoesSociais')}>
                    <Text style={myStyles.navbarButton}>JARDINETES</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.replace('JardinetesMap')}>
                    <Text style={myStyles.navbarButton}>FAÇA SUA PARTE</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.replace('quemSomos')}>
                    <Text style={myStyles.navbarButton}>QUEM SOMOS</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.replace('SignIn')}>
                    <Text style={myStyles.navbarButton}>LOGIN</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.replace('Contato')}>
                    <Text style={myStyles.navbarButton}></Text>
                </TouchableOpacity>
            </View>

            <Title>{titulo}</Title>
        </>
    );
}
