import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({

    scrollView: {
        flex: 1,
        backgroundColor: '#FFFEF4',
    },

    navbar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: width * 0.07,
        backgroundColor: '#166034',
        position: 'absolute',
        top: 0,
        right: 0,
        width: '100%',
        zIndex: 2,
    },
    ret1: {
        position: 'absolute',
        top: width * 0.12,
        width: width * 0.6,
        height: width * 0.1,
        borderRadius: width * 0.02,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#271C00',
        zIndex: 1,
    },
    ret2: {
        position: 'absolute',
        top: width * 0.1,
        width: width * 0.6,
        height: width * 0.1,
        borderRadius: width * 0.02,
        backgroundColor: '#B68F40',
        zIndex: 0,
    },

    buttonText: {
        color: 'white',
        fontSize: width * 0.02,
        textAlign: 'center',
        paddingHorizontal: 20,
    },

    imageContainer: {
        position: 'absolute',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        top: width * 0.21,
        width: '100%',
        marginTop: width * 0.005,
        height: width * 0.1,
    },

    imageIcon: {
        width: width * 0.15,
        height: width * 0.045,
        marginRight: width * 0.03,
    },

    imageIcon2: {
        width: width * 0.08,
        height: width * 0.08,
        marginRight: width * 0.03,
    },

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: width * 0.00833333333333333333333333333333,
        backgroundColor: '#FFFEF4',
    },
    searchBarContainer: {
        width: '100%',
        height: width * 0.025,
        marginBottom: width * 0.005,
        borderRadius: width * 0.01041666666666666666666666666667,
        overflow: 'hidden',
        backgroundColor: 'transparent',
    },
    searchBar: {
        flex: 1,
        width: '100%',
        height: width * 0.025,
        paddingLeft: width * 0.005,
        color: '#ffffff',
        fontSize: width * 0.015,
    },
    searchBarGradient: {
        position: 'absolute',
        top: width * 0.325,
        width: width * 0.78,
        height: width * 0.025,
        borderRadius: width * 0.01041666666666666666666666666667,
        marginTop: width * 0.01041666666666666666666666666667,
    },
    resultsContainer: {
        position: 'absolute',
        top: width * 0.3605,
        backgroundColor: '#F5F3E1',
        padding: width * 0.01041666666666666666666666666667,
        maxHeight: width * 0.10416666666666666666666666666667,
        width: width * 0.7,
        alignItems: 'center',
    },
    resultItem: {
        padding: 10,
        paddingVertical: 10,
        borderBottomWidth: 20,
        borderBottomColor: '#F5F3E1',
        width: width * 0.6,
    },
    firstResult: {
        backgroundColor: '#4C6523',
        padding: 10,
        borderBottomWidth: 20,
        borderBottomColor: '#F5F3E1',
    },
    noResultsText: {
        textAlign: 'center',

    },
    resultItemText: {
        color: '#ffffff',
        padding: 10,
        fontSize: width * 0.0166666666666667,
    },

    searchBarContainerStyle: {
        flex: 1,
        justifyContent: 'center',
        marginTop: 50,
    },
    clearButton: {
        position: 'absolute',
        right: 10,
        top: '50%',
        transform: [{ translateY: -((width * 0.015625) / 2) }],
        width: width * 0.015625,
        height: width * 0.015625,
        borderRadius: width * 0.0078125,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
    },
    clearButtonText: {
        fontSize: 14,
        color: '#000000',
    },
    searchIcon: {
        position: 'absolute',
        left: width * 0.01,
        top: '50%',
        transform: [{ translateY: -(width * 0.00520833333333333333333333333333)} , { scale: 1.5 }],
    },
    selectedResultsContainer: {
        position: 'absolute',
        top: width * 0.48,
        paddingHorizontal: 10,
    },

    selectedResultsRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },

    selectedResultCard: {
        width: width * 0.15,
        height: width * 0.15,
        backgroundColor: 'FFFEF4',
        marginRight: width * 0.05208333333333333333333333333333,
        marginLeft: width * 0.05208333333333333333333333333333,
        borderWidth: width * 0.00520833333333333333333333333333,
        borderColor: '#271C00',
        alignItems: 'center',
        borderRadius: width * 0.01041666666666666666666666666667,
        marginBottom: 50,
        position: 'relative',
    },

    textContainer: {
        width: '80%',
        backgroundColor: '#B68F40',
        height: '15%',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: width * 0.015625,
    },

    selectedResultText: {
        fontSize: width * 0.0125,
        color: '#271C00',
        textAlign: 'center',
    },
    closeButton: {
        position: 'absolute',
        top: 0,
        right: 0,
        padding: 2,
        backgroundColor: 'transparent',
    },
    sendImageButton: {
        width: '80%',
        height: '50%',
        backgroundColor: '#CCCCCC',
        borderRadius: width * 0.00260416666666666666666666666667,
        marginTop: width * 0.015625,
        alignItems: 'center',
        justifyContent: 'center',
    },
    sendImageButtonText: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: width * 0.01041666666666666666666666666667,
    },

    logoImage: {
        width: width * 0.0520833333333333,
        height: width * 0.0520833333333333,
        borderRadius: width * 0.0260416666666667,
    },
    imageContainer1: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginRight: width * 0.0104166666666667, // Adiciona margem à direita
    },

    checkboxContainer: {
        position: 'absolute',
        top: width * 0.303,
        flexDirection: 'row',
        alignItems: 'center',
    },
    checkboxLabel: {
        marginLeft: width * 0.00520833333333333333333333333333, // Ajuste a margem esquerda conforme necessário
        color: '#271C00', // Defina a cor do texto aqui
        fontSize: width * 0.00833333333333333333333333333333, // Ajuste o tamanho da fonte conforme necessário
    },


    continueButtonText: {
        color: '#271C00',
        fontSize: width * 0.01145833333333333333333333333333,
        fontWeight: 'bold',
        textAlign: 'center', // Centraliza o texto horizontalmente
        textAlignVertical: 'center', // Centraliza o texto verticalmente
    },
    redSendImageButton: {
        backgroundColor: '#FF0000', // Altere para a cor vermelha que desejar
    },

    backButton: {
        marginLeft: width * 0.0052083333333333,
      },

});

