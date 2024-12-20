import { StyleSheet, useWindowDimensions } from 'react-native';

export const styles = () => {
  const { width, height } = useWindowDimensions(); 

  return StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#166034',
        overflow: 'hidden',
      },

      scroll: {
        backgroundColor: '#FFFEF4',
    },


    card: {
        top: -(width * 0.0625),
        width: width * 0.8333333333333333,
        height: width * 0.390625,
        justifyContent: 'center',
        alignItems: 'center',
    },

    row:{
        flexDirection: 'row',
    },

    column: {
        flexDirection: 'column',
    },  

    barra: {
        width: ((2 / 1920) * width),
        height: width * 0.2604166666666667,
        backgroundColor: '#271C00',
        marginLeft: width * 0.1041666666666667,
        marginTop: width * 0.0520833333333333,
    },

    circ: {
        backgroundColor: '#166034',
        marginTop: width * 0.078125,
        width: width * 0.15625,
        height: width * 0.15625,
        borderRadius: width * 0.078125,
        marginLeft: width * 0.1041666666666667,
    },

    textCirc: {
        color: 'white',
        fontSize: width * 0.0145833333333333,
        textAlign: 'center',
        marginTop: width * 0.0520833333333333,
        marginLeft: width * 0.0104166666666667,
        marginRight: width * 0.0104166666666667,
    },


    bigTree:{
        left: width * 0.0260416666666667,
        width: width * 0.0927083333333333 * 0.75,
        height: width * 0.1786458333333333 * 0.75,
       },

       smallTree:{
        marginTop: width * 0.0296875 * 0.75,
        left:  width * 0.0520833333333333,
        width: width * 0.0630208333333333 * 0.75,
        height: width * 0.1489583333333333 * 0.75,
       },

       textRec: {
            fontSize: width * 0.0166666666666667,
            color: '#271C00',
            marginTop:  width * 0.0520833333333333,
            marginLeft: width * 0.0260416666666667,
            marginRight: width * 0.0260416666666667,
            textAlign: 'justify',

       },

       textRecContainer: {
        width: width * 0.3125,
        height: width * 0.1041666666666667, 
        marginLeft: width * 0.0260416666666667,
        marginRight: width * 0.0260416666666667,
        textAlign: 'justify',

   },

       input: {
        width: width * 0.234375,
        height: width * 0.0260416666666667,
        borderColor: '#999',
        borderWidth: ((1 / 1920) * width),
        borderRadius: ((5 / 1920) * width),
        backgroundColor: 'white',

      },

      inputContainer: {
        width: width * 0.3125,
        height: width * 0.15625,
        marginLeft: width * 0.0260416666666667,
        marginRight: width * 0.0260416666666667,
        marginTop: width * 0.078125,
      alignItems: 'center',


   },

   button: {
    marginTop: width * 0.0260416666666667,
    width: width * 0.15625,
    height: width * 0.0260416666666667,
    borderRadius: ((15 / 1920) * width),
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: '#FFF',
    fontSize: width * 0.0125,
  },

  errorText: {
    color: 'red',
    marginTop: ((5 / 1920) * width),
    marginBottom: ((10 / 1920) * width),
  },



  circBorda: {
    zIndex: -1,
    backgroundColor: 'transparent',
    borderWidth: ((10 / 1920) * width),
    borderColor: '#B68F40',
    width: width * 0.1302083333333333,
    height:width * 0.1302083333333333,
    borderRadius: width * 0.0651041666666667,
    top: -((width * 0.1302083333333333) /1.5),
    left: '50%',

}, 



backButton: {
  top: width * 0.19,
  right: '47%',
  top: width * 0.0208333333333333,

},

});
};
