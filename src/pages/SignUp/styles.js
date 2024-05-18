import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#195439',

    },

    containerHeader: {
        marginTop: '14%',
        marginBottom: '8%',
        paddingStart: '5%'
    },
    message: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#FFF'
    },
    containerForm: {
        backgroundColor: '#FFF',
        flex: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    title: {
        fontSize: 20,
        marginTop: 28
    },
    input: {
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 16,
    },
    button: {
        backgroundColor: '#195439',
        width: '100%',
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center'
    },

    buttonText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold'
    },

    buttonVoltar: {
        marginTop: 15,
        alignSelf: 'center'

    },
    imagePickerButton: {
        backgroundColor: '#195439',
        padding: 10,
        borderRadius: 5,
        marginBottom: 20,

    },

    image: {
        width: 200,
        height: 200,
        paddingTop: 25,
        borderRadius: 100,
        alignSelf: 'center',
        justifyContent: 'center',
    },

    termsModalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Cor de fundo semi-transparente
    },
    termsModalContent: {
        backgroundColor: '#fff', // Cor de fundo do conteúdo do modal
        borderRadius: 10,
        padding: 20,
        width: '80%', // Largura do conteúdo do modal
        maxHeight: '80%', // Altura máxima do conteúdo do modal
    },
    termsModalText: {
        fontSize: 16,
        lineHeight: 24,
        marginBottom: 20,
    },
    agreeButton: {
        color: 'blue', // Cor do texto do botão Concordo
        textAlign: 'center',
        textDecorationLine: 'underline',
        marginBottom: 10,
    },
    disagreeButton: {
        color: 'red', // Cor do texto do botão Não concordo
        textAlign: 'center',
        textDecorationLine: 'underline',
    },

});