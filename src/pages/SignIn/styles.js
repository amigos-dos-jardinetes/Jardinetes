import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#195439'
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
    buttonRegister: {
        marginTop: 15,
        alignSelf: 'center',
    },

    errorInput: {
        borderColor: 'red',
        borderWidth: 1,
      },
    
      // Estilo para mensagem de erro
      errorText: {
        color: 'red',
        marginTop: 5, // Adapte conforme necessário
        textAlign: 'center',
      },

      googleButton: {
        backgroundColor: '#4285F4', // Cor azul do Google
        padding: 15,
        borderRadius: 5,
        marginTop: 10,
        alignItems: 'center',
      },
    
      googleButtonText: {
        color: 'white',
        fontWeight: 'bold',
      },
});