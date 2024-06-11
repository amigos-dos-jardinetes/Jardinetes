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
        top: width * 0.8333333333333333,
        marginTop: width * 0.2604166666666667,
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
        width: width * 0.296875,
        height: width * 0.0416666666666667,
        top: width * 0.1822916666666667,
    },

    backButton: {
        marginLeft: width * 0.0052083333333333,
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
        width: (width * 0.2401041666666667) * 0.6,
        height: (width * 0.1536458333333333) * 0.6,
        position: 'absolute',
        transform: [{ rotate: '110deg' }]
    },

    petala401: {
        top: width * 0.0104166666666667,
        left: width * 0.0729166666666667,
        width: (width * 0.2401041666666667) * 0.6,
        height: (width * 0.1536458333333333) * 0.6,
        position: 'absolute',
        transform: [{ rotate: '170deg' }]
    },

    petala402: {
        top: width * 0.0572916666666667,
        left: width * 0.0416666666666667,
        width: (width * 0.2401041666666667) * 0.6,
        height: (width * 0.1536458333333333) * 0.6,
        position: 'absolute',
        transform: [{ rotate: '230deg' }]
    },

    petala403: {
        top: width * 0.0416666666666667,
        left: -(width * 0.0208333333333333),
        width: (width * 0.2401041666666667) * 0.6,
        height: (width * 0.1536458333333333) * 0.6,
        position: 'absolute',
        transform: [{ rotate: '310deg' }]
    },

    petala600: {
        top: -(width * 0.0625),    
        left: width * 0.0104166666666667,
        width: (width * 0.2994791666666667) * 0.67,
        height: (width * 0.1447916666666667) * 0.67,
        position: 'absolute',
        transform: [{ rotate: '110deg' }]
    },

    petala601: {
        top: -(width * 0.0104166666666667),
        left: width * 0.046875,
        width: (width * 0.2994791666666667) * 0.67,
        height: (width * 0.1447916666666667) * 0.67,
        position: 'absolute',
        transform: [{ rotate: '170deg' }]
    },

    petala602: {
        top: width * 0.0572916666666667,
        left: width * 0.0260416666666667,
        width: (width * 0.2994791666666667) * 0.67,
        height: (width * 0.1447916666666667) * 0.67,
        position: 'absolute',
        transform: [{ rotate: '230deg' }]
    },

    petala603: {
        top: width * 0.0572916666666667,
        left: -(width * 0.0520833333333333),
        width: (width * 0.2994791666666667) * 0.67,
        height: (width * 0.1447916666666667) * 0.67,
        position: 'absolute',
        transform: [{ rotate: '310deg' }]
    },


    petala800: {
        top: -(width * 0.078125),
        left: width * 0.0104166666666667,
        width: (width * 0.3932291666666667) * 0.62,
        height: (width * 0.184375) * 0.62,
        position: 'absolute',
        transform: [{ rotate: '110deg' }]
    },

    petala801: {
        top: -(width * 0.0104166666666667),
        left: width * 0.0520833333333333,
        width: (width * 0.3932291666666667) * 0.62,
        height: (width * 0.184375) * 0.62,
        position: 'absolute',
        transform: [{ rotate: '170deg' }]
    },

    petala802: {
        top: width * 0.0729166666666667,
        left: width * 0.0208333333333333,
        width: (width * 0.3932291666666667) * 0.62,
        height: (width * 0.184375) * 0.62,
        position: 'absolute',
        transform: [{ rotate: '230deg' }]
    },

    petala803: {
        top: width * 0.0598958333333333,
        left: -(width * 0.1041666666666667),
        width: (width * 0.3932291666666667) * 0.62,
        height: (width * 0.184375) * 0.62,
        position: 'absolute',
        transform: [{ rotate: '310deg' }]
    },

    petala1000: {
        top: -(width * 0.125),
        left: 0,
        width: (width * 0.4192708333333333) * 0.57,
        height: (width * 0.2375) * 0.57,
        position: 'absolute',
        transform: [{ rotate: '110deg' }]
    },

    petala1001: {
        top: -(width * 0.0364583333333333),
        left: width * 0.0729166666666667,
        width: (width * 0.4192708333333333) * 0.57,
        height: (width * 0.2375) * 0.57,
        position: 'absolute',
        transform: [{ rotate: '170deg' }]
    },

    petala1002: {
        top: width * 0.0729166666666667,
        left: width * 0.0416666666666667,
        width: (width * 0.4192708333333333) * 0.57,
        height: (width * 0.2375) * 0.57,
        position: 'absolute',
        transform: [{ rotate: '230deg' }]
    },

    petala1003: {
        top: width * 0.0729166666666667,
        left: -(width * 0.09375),
        width: (width * 0.4192708333333333) * 0.57,
        height: (width * 0.2375) * 0.57,
        position: 'absolute',
        transform: [{ rotate: '310deg' }]
    },



    centralContainer: {
        top: width * 0.46875,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
      
    },

    infraContainer: {
        top: width * 0.2604166666666667,
        left: width * 0.6041666666666667,
        position: 'absolute',
        flexDirection: 'row',
        alignItems: 'center',
       
    },

    infraContainer2: {
        left: width * 0.0677083333333333,
        top: width * 0.0171875,
        position: 'absolute',
        flexDirection: 'column',
        alignItems: 'center',
       
    },

    bemContainer2: {
        left: width * 0.0677083333333333,
        top: width * 0.0171875,
        position: 'absolute',
        flexDirection: 'column',
        alignItems: 'center',
       
    },

    segContainer2: {
        left: width * 0.0677083333333333,
        top: width * 0.0171875,
        position: 'absolute',
        flexDirection: 'column',
        alignItems: 'center',
       
    },

    pertContainer2: {
        left: width * 0.0677083333333333,
        top: width * 0.0171875,
        position: 'absolute',
        flexDirection: 'column',
        alignItems: 'center',
       
    },

    infraRet:{
        width: width * 0.15625,
        height: width * 0.078125,
        borderRadius: width * 0.0104166666666667,
        backgroundColor: '#FB9116',
        marginTop: width * 0.0078125,

    },

    bemRet:{
        width: width * 0.15625,
        height: width * 0.078125,
        borderRadius: width * 0.0104166666666667,
        backgroundColor: '#B781FD',
        marginTop: width * 0.0078125,

    },

    segRet:{
        width: width * 0.15625,
        height: width * 0.078125,
        borderRadius: width * 0.0104166666666667,
        backgroundColor: '#FFBC10',
        marginTop: width * 0.0078125,

    },

    pertRet:{
        width: width * 0.15625,
        height: width * 0.078125,
        borderRadius: width * 0.0104166666666667,
        backgroundColor: '#FEACAC',
        marginTop: width * 0.0078125,

    },

    infraText: {
        width: (width * 0.1380208333333333) * 1.15,
        height: (width * 0.0171875) * 1.15,
    },

    bemText: {
        width: (width * 0.0979166666666667) * 1.15,
        height: (width * 0.0130208333333333) * 1.15,
    },

    segText: {
        width: (width * 0.1026041666666667) * 1.2,
        height: (width * 0.0177083333333333) * 1.15,
    },

    pertText: {
        width: (width * 0.1416666666666667) * 1.15,
        height: (width * 0.0145833333333333) * 1.15,
    },

    infra: {
        width: width * 0.0520833333333333,
        height: width * 0.0520833333333333,
        borderRadius: width * 0.0260416666666667,
        borderWidth: width * 0.0052083333333333,
        borderColor: '#FB9116',
        marginRight: width * 0.015625,
      
    },

    bemContainer: {
        top: width * 0.453125,
        left: width * 0.738,
        position: 'absolute',
        flexDirection: 'row',
        alignItems: 'center',
    },

    bem: {
        width: width * 0.0520833333333333,
        height: width * 0.0520833333333333,
        borderRadius: width * 0.0260416666666667,
        borderWidth: width * 0.0052083333333333,
        borderColor: '#B781FD',
        marginRight: width * 0.015625,
      
    },

    segContainer: {
        top: width * 0.6614583333333333,
        left: width * 0.671875,
        position: 'absolute',
        flexDirection: 'row',
        alignItems: 'center',
    },

    seg: {
        width: width * 0.0520833333333333,
        height: width * 0.0520833333333333,
        borderRadius: width * 0.0260416666666667,
        borderWidth: width * 0.0052083333333333,
        borderColor: '#FFBC10',
        marginRight: width * 0.015625,
      
    },

    pertContainer: {
        top: width * 0.6614583333333333,
        left: width * 0.1041666666666667,
        position: 'absolute',
        flexDirection: 'row',
        alignItems: 'center',
    },

    pert: {
        width: width * 0.0520833333333333,
        height: width * 0.0520833333333333,
        borderRadius: width * 0.0260416666666667,
        borderWidth: width * 0.0052083333333333,
        borderColor: '#FEACAC',
        marginRight: width * 0.015625,

      
    },

    retExp: {
        top: width * 0.8333333333333333,
        width: width * 0.78125,
        height: width * 0.15625,
        borderRadius: width * 0.0260416666666667,
        backgroundColor: '#B68F40',
        marginBottom: width * 0.0260416666666667,
        position: 'absolute',
        flexDirection:  'row',
    },

    circExp: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',

    },

    circ:{
        width: width * 0.0208333333333333,
        height: width * 0.0208333333333333,
        borderRadius: width * 0.0104166666666667,  
        backgroundColor: '#271C00',
        marginLeft: width * 0.0130208333333333,
        marginBottom: width * 0.0078125,

    },

    bigRet:{
        width: width * 0.1302083333333333,
        height: width * 0.703125, 
        top: width * 0.1822916666666667,
        backgroundColor: '#271C00',
        left: 0,
        position: 'absolute',

    },

    retGreen:{
        top: width * 0.2604166666666667,
        left: width * 0.1041666666666667,
        width: width * 0.2604166666666667,
        height: width * 0.1041666666666667,
        borderRadius: width * 0.0104166666666667,
        backgroundColor: '#4C6523',
        position: 'absolute',

    },

    retGreenText:{
       color:'white',
       fontSize: width * 0.0125,
       marginBottom: width * 0.0078125,
       marginTop: width * 0.0078125,
       marginRight: width * 0.0078125,
       marginLeft: width * 0.0078125,
       textAlign: 'justify',
    },

    bigWheel:{
        width: width * 0.625,
        height: width * 0.625, 
        borderRadius: width * 0.3125,
        top: width * 0.3125,
        backgroundColor: '#809C30',
        right: -(width * 0.4166666666666667),
        position: 'absolute',

    },

    araucarias: {
        width: width * 0.1651041666666667,
        height: width * 0.146875,
        left: width * 0.3645833333333333,
        top: width * 0.9375,
      },
    
      araucarias2: {
        width: width * 0.1155729166666667,
        height: width * 0.1028125,
    
      },

      loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff', 
      },

      backButtonGradient: {
        position: 'absolute',

        left: width * 0.6770833333333333,
        borderRadius: width * 0.0052083333333333,
        top: width * 1.03,

      },
      gradient: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: width * 0.0104166666666667,
        paddingHorizontal: width * 0.0104166666666667,
      },
      backButtonText: {
        color: 'white',
        fontSize: width * 0.02,
        marginLeft: width * 0.0026041666666667,
      },
    
});
