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

    cropperContainer: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
      },
      cropActions: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        padding: 20,
      },
});