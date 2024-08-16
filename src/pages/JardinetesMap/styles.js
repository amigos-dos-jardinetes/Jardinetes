import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({

    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },

    container3:{
      backgroundColor: '#FFFEF4',

  },

    navbar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: width * 0.0729166666666667,
        backgroundColor: '#195439',
        position: 'absolute',
        top: 0,
        right: 0,
        width: '100%',
        zIndex: 2,
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
       top: width * 0.8854166666666667,
      },

      imageContainer22: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center', 
      },

       utfprImage: {
        width: 144 * (width * 0.00067708333),
        height:57 * (width * 0.00067708333),
        marginLeft: width * 0.0208333333333333,

      },

    
      navbarButton: {
        fontSize: width * 0.0166666666666667,
        color: '#FFF',
        fontWeight: 'bold'
      },

      map:{
        top: width * 0.1041666666666667,
        alignItems: 'flex-start',
        justifyContent: 'center',
        width: width,
        height: width * 0.3645833333333333,    

      },

      container_map: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        height: '90%',
        position: 'absolute',
        width: '60%',
        marginLeft: width * 0.0260416666666667,
        marginTop: width * 0.0177083333333333,

      
    },

    mapContainer: {
      width: '100%',
      height: '100%',
      borderRadius: width * 0.0052083333333333,
      borderColor: '#271C00',
      borderWidth: width * 0.003125,
  },

    popupImage: {
        width: '200px',
        height: '130px',
    },

        encontre:{
          top: width * 0.1041666666666667,
          alignItems: 'center',
          justifyContent: 'center',

    },
    encontreImage:{
      width: width * 0.6692708333333333,
      height: width * 0.0453125,


},
container_gaia: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-start',
height: width * 0.3125,
  position: 'absolute',
  left: 0,
  width: '100%',
  top: width * 0.54,
  backgroundColor: '#FFFEF4',

},

      image: {
        width: width * 0.290625,
        height: width * 0.2208333333333333,
        borderRadius: width * 0.0234375, 
        borderWidth: width * 0.0041666666666667,
        borderColor: '#271C00',
        top: 0,
        marginLeft: width * 0.15625,
    },

    linha: {
      width: width * 0.1015625,
      height: width * 0.0541666666666667,
      top: width * 0.0260416666666667,
      marginLeft: width * 0.0260416666666667,
  },

  balao: {
    width: width * 0.1989583333333333,
    height: width * 0.1541666666666667,
    top: -(width * 0.078125),
    marginLeft: width * 0.0260416666666667,
},

araucarias: {
  width: width * 0.1651041666666667,
  height: width * 0.146875,
  marginRight: width * 0.0260416666666667,
},

imageContainer33: {
  top: width * 0.3645833333333333,
  flexDirection: 'row',
  justifyContent: 'flex-end',
  alignItems: 'center',
  marginRight: width * 0.0104166666666667, 
},


    image2: {
        width: width * 0.190625,
        height: width * 0.0182291666666667,
        marginTop: width *0.0104166666666667,
    },

       container2: {
        zIndex: -1,
      flexDirection: 'column',
      alignItems: 'flex-end',
      height: '100%',
      position: 'absolute',
      right: width * 0.0260416666666667,
      width: '50%',
     top: width * 0.0260416666666667,
  },


    card:{
        backgroundColor: '#B68F40',
        borderRadius: width * 0.0260416666666667,
        flexDirection: 'column',
        width: width * 0.32,
        height: width * 0.33,
       alignItems: 'flex-start',


    },

    searchContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginLeft: width * 0.0033854166666667,
    },

    searchBar: {
      zIndex: 1,
      top: width * 0.0260416666666667,
      backgroundColor: '#271C00',
      borderRadius: width * 0.0052083333333333,
      width: width * 0.261,
      color: 'white',
      position: 'absolute',
      height: width * 0.0260416666666667,
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: width * 0.0260416666666667,
  },

  resultsContainer: {
    position: 'absolute',
    backgroundColor: '#F5F3E1',
    alignItems: 'center',
    borderRadius: 0.0052083333333333,
    padding: width * 0.0260416666666667,
    top: width * 0.03,
    width: width * 0.256,
    overflow: 'scroll', // permite rolagem vertical
    overflowX: 'hidden', // desativa a rolagem horizontal
    marginLeft: width * 0.0286458333333333,
    maxHeight: width * 0.1041666666666667,
},

resultItem: {
  justifyContent: 'flex-start',
  marginTop: width * 0.0104166666666667,
marginBottom: width * 0.0104166666666667,
   width: width * 0.22,
    height: width * 0.0416666666666667,
    borderRadius: width * 0.0104166666666667,
    alignItems: 'center',
    justifyContent: 'center',
},

resultsInnerContainer: {
  flexGrow: 1,
},

 clearButton: {
        position: 'absolute',
        zIndex: 1,
        left: width * 0.2630208333333333,
        top: width * 0.0377083333333333,
        transform: [{ translateY: -((width * 0.015625) / 2) }],
        width: width * 0.015625,
        height: width * 0.015625,
        borderRadius: width * 0.0078125,
        alignItems: 'center',
        justifyContent: 'center',
     
    },
    clearButtonText: {
        fontSize: width * 0.0135416666666667,
        color: 'white',
    },

resultText: {
  fontSize: width * 0.0197916666666667,
  color: 'white',
},

evenResult: {
    backgroundColor: '#4C6523',
    color: 'white'
},
oddResult: {
    backgroundColor: '#166034',
    color: 'white'
},

searchIcon: {
  zIndex: 2,
  position: 'absolute',
  left: width * 0.0322916666666667,
  top: width * 0.0375,
  transform: [{ translateY: -(width * 0.00520833333333333333333333333333)} , { scale: 1.5 }],
},


detailsContainer: {
  width: width * 0.28,
  right: width * 0.0192708333333333,
  position: 'absolute',
  bottom: width * 0.13,
  backgroundColor: '#FFFFFF',
  borderRadius: width * 0.0052083333333333,
  padding: width * 0.0104166666666667,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.25,
  shadowRadius: width * 0.0020833333333333,
  elevation: width * 0.0026041666666667,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
},
closeButton: {
  backgroundColor: '#809C30',
  borderRadius: width * 0.0026041666666667,
  padding: width * 0.0052083333333333,
},
closeButtonText: {
  color: '#FFFFFF',
  fontWeight: 'bold',
  fontSize: width * 0.0125, 
},
jardimName: {
  flex: 1, 
  textAlign: 'center', 
  color: '#4C6523',
  fontWeight: 'bold',
  fontSize: width * 0.0197916666666667,
},

gradientButtonContainer: {
  position: 'absolute',
  bottom: width * 0.0104166666666667,
  alignSelf: 'center',
  zIndex: 1,

  borderRadius: width * 0.0104166666666667,
},

gradientButton: {
  width: width * 0.15625,
  height: width * 0.046875, 
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: width * 0.0104166666666667,
  paddingVertical: width * 0.0052083333333333,
},

gradientButtonText: {
  fontSize: width * 0.0197916666666667, 
  color: 'white',
},

linearGradient: {
  width: '100%',
  height: '100%',
  borderRadius: width * 0.015625,
  alignItems: 'center',
  justifyContent: 'center',
},



popupButtonContainer: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginTop: width * 0.0052083333333333,
},
popupButton: {
  flex: 1,
  marginHorizontal: width * 0.0026041666666667,
  paddingVertical: width * 0.0052083333333333,
  backgroundColor: '#809C30',
  borderRadius:  width * 0.0026041666666667,
  alignItems: 'center',
},

popupButtonText: {
  color: '#ffffff',
  fontWeight: 'bold',
  fontSize: width * 0.00625,
  textAlign: 'center',
},



});