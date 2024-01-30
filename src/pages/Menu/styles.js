import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#195439',
    },
    containerLogo: {
        flex: 2,
        backgroundColor: '#195439',
        justifyContent: 'center',
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
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 12,
        textAlign: 'center',
    },
    logoutButton: {
        backgroundColor: '#FF6347',
        padding: 12,
        borderRadius: 5,
        marginTop: 20,
        alignItems: 'center',
    },
    logoutButtonText: {
        color: '#FFF',
        fontSize: 18,
    },
    logoImage: {
        width: 150,
        height: 150,
        borderRadius: 75,
    },
    InicioButton: {
        backgroundColor: 'green',
        padding: 12,
        borderRadius: 5,
        marginTop: 20,
        alignItems: 'center',
    },
});