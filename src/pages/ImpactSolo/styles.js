import { StyleSheet, useWindowDimensions } from 'react-native';

export const styles = () => {
  const { width, height } = useWindowDimensions(); 

  return StyleSheet.create({
 
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
      checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: width * 0.0052083333333333,
    },
    checkboxLabel: {
        marginLeft: width * 0.0041666666666667,
        fontSize: width * 0.0083333333333333,
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
        marginTop: width * 0.0520833333333333,
      },

      forma: {
        width: width * 0.21875,
        height: width * 0.4010416666666667,
        justifyContent: 'flex-start',
        backgroundColor: '#271C00',
        top: width * 0.078125,
        zIndex: -1, 
    },
    forma2: {
      width: width * 0.4166666666666667,
      top: width * 0.8854166666666667,
      height: width * 0.4166666666666667,
      borderRadius: '50%',
      justifyContent: 'flex-start',
      marginLeft: -(width * 0.2083333333333333),
      backgroundColor: '#1E6131',
      zIndex: -5, 
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
        marginRight: width * 0.0104166666666667, 
      },

      global: {
        marginTop: -(width * 0.8072916666666667), 
        alignItems: 'center', 
    },
    ret: {
        width: width * 0.5208333333333333, 
        height: width * 0.078125,
        backgroundColor: '#B68F40', 
        borderRadius: width * 0.0182291666666667,
        justifyContent: 'center', 
        alignItems: 'center', 
    },
    retText: {
        color: 'white', 
        fontSize: width * 0.021875,
    },
    bem: {
        marginTop: width * 0.05,
        width: width *0.3015625,
        height: width * 0.0380208333333333,
    },

    infra: {
        marginTop: width * 0.05,
        width: width * 0.4125,
        height: width * 0.0510416666666667,
    },

    pertence: {
        marginTop: width * 0.05,
        width: width * 0.4234375,
        height: width * 0.04375,
    },

    seguranca: {
        marginTop: width * 0.05,
        width: width * 0.3520833333333333,
        height: width * 0.0588541666666667,
    },

    card1:{
        width: width * 0.6078125,
        height: width * 0.434375,
        borderWidth: width * 0.0104166666666667,
        borderColor: '#809C30',
        backgroundColor: '#F5F3E1',
        justifyContent: 'center', 
        alignItems: 'center',
        marginTop: width * 0.0182291666666667,
        flexDirection: 'column',
    },

    card2:{
        width: width * 0.6078125,
        height: width * 0.434375,
        backgroundColor: '#DFE3AA',
        justifyContent: 'center', 
        alignItems: 'center',
        marginTop: width * 0.0182291666666667,
        flexDirection: 'column',
    },


    card3:{
      width: width * 0.6078125,
      height: width * 0.434375,
      backgroundColor: '#DFE3AA',
      justifyContent: 'center', 
      alignItems: 'center',
      marginTop: width * 0.0182291666666667,
      flexDirection: 'column',
      marginBottom: width * 0.0520833333333333,
  },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
      },

      button: {
        marginRight: width * 0.0260416666666667,
        marginLeft: width * 0.0260416666666667,
      },

      separator: {
        width: width * 0.0453125, 
        height: width * 0.0041666666666667, 
        backgroundColor: '#271C00', 
        marginLeft: -(width * 0.0010416666666667),
        marginRight: width * 0.0052083333333333, 
      },

      formText: {
        color: '#000000', 
        fontSize: width * 0.0125,
        marginBottom: width * 0.0078125,
        marginTop: width * 0.0078125,
        textAlign: 'left',
        
    },

    formText2: {
      color: '#000000', 
      fontSize: width * 0.0125,
      marginBottom: width * 0.0078125,
      marginTop:  width * 0.0078125,
      textAlign: 'left',
      marginLeft: width * 0.0104166666666667
      
  },

    textContainer: {
        alignSelf: 'flex-start', 
        marginLeft: width * 0.028125,
      },

      imageContainer2: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center', 
      },

      imageContainer3: {
        top: -(width * 0.0520833333333333),
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginRight: width * 0.0104166666666667, 
      },

      utfprImage: {
        width: 144 * (width * 0.00067708333),
        height:57 * (width * 0.00067708333),
        marginLeft: width * 0.0208333333333333,
      },

      araucarias: {
        width: width * 0.1651041666666667,
        height: width * 0.146875,
        marginRight: width * 0.0260416666666667,
      },

    

      selectedButton: {
        borderColor: '#271C00',
        borderWidth: width * 0.0041666666666667, 
        borderRadius: '10%', // ou qualquer raio que você preferir
      },
   

      um: {
        width: width * 0.0520833333333333,
        height:  width * 0.0520833333333333130,
        marginLeft: width * 0.0677083333333333,
        justifyContent: 'flex-start',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4C6523',
        top: width * (-0.2256666666666667),
        borderRadius: width * 0.0104166666666667,
        zIndex: -1, 
    },

  dois: {
    width: width * 0.0520833333333333,
    height:  width * 0.0520833333333333130,
    marginLeft: width * 0.0677083333333333,
    justifyContent: 'flex-start',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4C6523',
    top: width * 0.2743333333333333,
    borderRadius: width * 0.0104166666666667,
    zIndex: -2, 
},

tres: {
  width: width * 0.0520833333333333,
  height:  width * 0.0520833333333333130,
  marginLeft: width * 0.0677083333333333,
  justifyContent: 'flex-start',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#4C6523',
  top: width * 0.7703333333333333,
  borderRadius: width * 0.0104166666666667,
  zIndex: -3, 
},

quatro: {
  width: width * 0.0520833333333333,
  height:  width * 0.0520833333333333130,
  marginLeft: width * 0.0677083333333333,
  justifyContent: 'flex-start',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#4C6523',
  top: width * 1.270333333333333,
  borderRadius: width * 0.0104166666666667,
  zIndex: -4, 
},

    textNumber:{
      fontSize: width * 0.0333333333333333,
      color: "white",
    },


    continuar: {
      top: -(width * 0.0520833333333333),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: width * 0.0520833333333333,
    },

    backButton: {
      marginLeft: width * 0.0052083333333333,
    },

    
    checkbox: {
      width: (20 / 1920) * width,
      height: (20 / 1920) * width,
      
  
    },
    
  });
  
};
