import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
    scroll: {
        backgroundColor: '#FFFEF4',
    },

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFEF4',
    },

    navbar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: width * 0.06814583333333333333333333333333,
        backgroundColor: '#166034',
        position: 'absolute',
        top: 0,
        right: 0,
        width: '100%',
        zIndex: 2,
    },

    navbarButton: {
        fontSize: width * 0.0166666666666667,
        color: '#FFF',
        fontWeight: 'bold',
    },

    logoImage: {
        width: width * 0.0520833333333333,
        height: width * 0.0520833333333333,
        borderRadius: width * 0.0260416666666667,
    },

    imageContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginRight: width * 0.0104166666666667, // Adiciona margem à direita
    },

    navbar2: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: width * 0.06814583333333333333333333333333,
        backgroundColor: '#166034',
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: '100%',
        top: 1200,
        marginTop: 200,
    },

    imageContainer22: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center', 
    },

    utfprImage: {
        width: 144 * (width * 0.00067708333),
        height: 57 * (width * 0.00067708333),
        marginLeft: width * 0.0208333333333333,
    },

    analise: {
        width: width * 0.290625,
        height: width * 0.0359375,
        top: width * 0.1822916666666667,
    },

    miolo: {
        width: (width * 0.1895833333333333) * 0.8,
        height: (width * 0.1427083333333333) * 0.8,
        top: width * 0.015625,
        left: width * 0.015625,
    },

    manaca: {
        position: 'absolute',
    },

    folhas: {
        width: (width * 0.4192708333333333) * 0.64,
        height: (width * 0.3947916666666667) * 0.64,
        position: 'absolute',
    },

    petala200: {
        top: -(width * 0.0402777777777778),
        left: width * 0.046875,
        width: (width * 0.18125) * 0.7,
        height: (width * 0.1260416666666667) * 0.7,
        position: 'absolute',
        transform: [{ rotate: '110deg' }]
    },

    petala201: {
        top: width * 0.0104166666666667,
        left: width * 0.0729166666666667,
        width: (width * 0.18125) * 0.7,
        height: (width * 0.1260416666666667) * 0.7,
        position: 'absolute',
        transform: [{ rotate: '170deg' }]
    },

    petala202: {
        top: width * 0.0572916666666667,
        left: width * 0.0416666666666667,
        width: (width * 0.18125) * 0.7,
        height: (width * 0.1260416666666667) * 0.7,
        position: 'absolute',
        transform: [{ rotate: '230deg' }]
    },

    petala203: {
        top: width * 0.0416666666666667,
        left: -(width * 0.0208333333333333),
        width: (width * 0.18125) * 0.7,
        height: (width * 0.1260416666666667) * 0.7,
        position: 'absolute',
        transform: [{ rotate: '310deg' }]
    },



    petala400: {
        top: -(width * 0.0402777777777778),
        left: width * 0.046875,
        width: 461 * 0.6,
        height: 295 * 0.6,
        position: 'absolute',
        transform: [{ rotate: '110deg' }]
    },

    petala401: {
        top: width * 0.0104166666666667,
        left: width * 0.0729166666666667,
        width: 461 * 0.6,
        height: 295 * 0.6,
        position: 'absolute',
        transform: [{ rotate: '170deg' }]
    },

    petala402: {
        top: width * 0.0572916666666667,
        left: width * 0.0416666666666667,
        width: 461 * 0.6,
        height: 295 * 0.6,
        position: 'absolute',
        transform: [{ rotate: '230deg' }]
    },

    petala403: {
        top: width * 0.0416666666666667,
        left: -(width * 0.0208333333333333),
        width: 461 * 0.6,
        height: 295 * 0.6,
        position: 'absolute',
        transform: [{ rotate: '310deg' }]
    },

    petala600: {
        top: -(120),
        left: 20,
        width: 575 * 0.67,
        height: 278 * 0.67,
        position: 'absolute',
        transform: [{ rotate: '110deg' }]
    },

    petala601: {
        top: -20,
        left: 90,
        width: 575 * 0.67,
        height: 278 * 0.67,
        position: 'absolute',
        transform: [{ rotate: '170deg' }]
    },

    petala602: {
        top: width * 0.0572916666666667,
        left: 50,
        width: 575 * 0.67,
        height: 278 * 0.67,
        position: 'absolute',
        transform: [{ rotate: '230deg' }]
    },

    petala603: {
        top: 110,
        left: -(100),
        width: 575 * 0.67,
        height: 278 * 0.67,
        position: 'absolute',
        transform: [{ rotate: '310deg' }]
    },


    petala800: {
        top: -(150),
        left: 20,
        width: 575 * 0.7,
        height: 278 * 0.7,
        position: 'absolute',
        transform: [{ rotate: '110deg' }]
    },

    petala801: {
        top: -10,
        left: 150,
        width: 575 * 0.7,
        height: 278 * 0.7,
        position: 'absolute',
        transform: [{ rotate: '170deg' }]
    },

    petala802: {
        top: 180,
        left: 70,
        width: 575 * 0.7,
        height: 278 * 0.7,
        position: 'absolute',
        transform: [{ rotate: '230deg' }]
    },

    petala803: {
        top: 160,
        left: -(160),
        width: 575 * 0.7,
        height: 278 * 0.7,
        position: 'absolute',
        transform: [{ rotate: '310deg' }]
    },




    centralContainer: {
        top: 800,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },


    
});
