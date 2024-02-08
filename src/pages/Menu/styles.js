import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#195439',
        padding: 20,
    },
    containerLogo: {
        flex: 2,
        backgroundColor: 'transparent',  // Alteração aqui
        padding: 50,
        alignItems: 'center',
    },
    containerForm: {
        flex: 1,
        backgroundColor: '#FFF',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        padding: 20,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 12,
        textAlign: 'center',
        color: '#FFF'
    },
    logoutButton: {
        backgroundColor: '#FF6347',
        padding: 12,
        borderRadius: 5,
        marginTop: 20,
        alignItems: 'center',
        marginBottom: 75
    },
    logoutButtonText: {
        color: '#FFF',
        fontSize: 18,
    },
    logoImage: {
        width: 200,
        height: 200,
        borderRadius: 100,
    },
    textButton: {
        backgroundColor: '#FFF',
        padding: 12,
        borderRadius: 5,
        marginTop: 20,
        alignItems: 'center',

    },
    textInfo: {
        fontSize: 20,
        
    },

    buttons: {
        alignContent: 'center',
        
    },
});
