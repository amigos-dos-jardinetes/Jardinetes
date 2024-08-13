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

  navbarButton: {
    fontSize: width * 0.0166666666666667,
    color: '#FFF',
    fontWeight: 'bold'
  },

  titleView:{
    top: width * 0.1041666666666667,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },

  amigosTitle: {
    marginTop: width * 0.0260416666666667,
    width: width * 0.6494791666666667,
    height: width * 0.0640625,
  },


  utfprImage:{
    marginTop: width * 0.0260416666666667,
    width: width * 0.7734375,
    height: width * 0.4333333333333333,
    borderWidth: width * 0.0078125,
    borderColor: '#271C00',
    borderRadius: 10,
  },

projetoUTFPR: {

  marginTop: width * 0.0260416666666667,
  width: width * 0.609375,
  height: width * 0.0260416666666667,
},

orangeRet: {
  marginTop: width * 0.0520833333333333,
  width: width * 0.3385416666666667,
  height: width * 0.15625,
  backgroundColor: '#B68F40',
  borderRadius: 10,

},

orangeText: {
  color: 'white',
  fontSize: width * 0.0145833333333333,
  textAlign: 'justify',
  marginLeft: width * 0.0104166666666667,
  marginRight: width * 0.0104166666666667,
  marginTop: width * 0.0104166666666667,

},

illustration: {
  marginTop: width * 0.0520833333333333,
  width: width * 0.425,
  height: width * 0.5864583333333333,
},

sobreProjeto: {
  marginTop: width * 0.0260416666666667,
  width: width * 0.4135416666666667,
  height: width * 0.0494791666666667,
},

row: {
  flexDirection: 'row',


},

column: {
  flexDirection: 'column',
  
},

retBig: {
  marginTop: width * 0.0390625,
  backgroundColor: '#B68F40',
  borderRadius: width * 0.0052083333333333,
  width: width * 0.390625,
  height: width * 0.546875,
  right: width * 0.1041666666666667,
},

retMenor: {
  left: width * 0.1041666666666667,
  marginTop: width * 0.0390625,
  backgroundColor: '#B68F40',
  borderRadius: 10,
  borderColor:  '#271C00',
  borderWidth: width * 0.0104166666666667,
  width: width * 0.15625,
  height: width * 0.15625,
},

retMenor2: {
  right: width * 0.1145833333333333,
  marginTop: width * 0.0390625,
  backgroundColor: '#B68F40',
  borderRadius: 10,
  borderColor:  '#271C00',
  borderWidth: width * 0.0104166666666667,
  width: width * 0.15625,
  height: width * 0.15625,
},

retBigText: {
  color: 'white',
  fontSize: width * 0.015625,
  textAlign: 'center',
  marginLeft: width * 0.0208333333333333,
  marginRight: width * 0.0208333333333333,
  marginTop: width * 0.0390625,
},

retMenorText: {
  color: 'white',
  fontSize: width * 0.0104166666666667,
  textAlign: 'center',
  marginLeft: width * 0.0104166666666667,
  marginRight: width * 0.0104166666666667,
  marginTop: width * 0.0104166666666667,
},

retMenorText3: {
  color: 'white',
  fontSize: width * 0.0098958333333333,
  textAlign: 'center',
  marginLeft: width * 0.0104166666666667,
  marginRight: width * 0.0104166666666667,
  marginTop: width * 0.0104166666666667,
},

conheca: {
  marginTop: width * 0.1302083333333333,
  width: width * 0.6578125,
  height: width * 0.0682291666666667,
},

gaiaInicial: {
  right: width * 0.0520833333333333,
  marginTop: width * 0.0260416666666667,
  width: width * 0.2713541666666667,
  height: width * 0.3354166666666667,
},

quadro: {
  left: width * 0.0520833333333333,
  width: width * 0.3125,
  height: width * 0.2833333333333333,
  borderWidth: width * 0.0078125,
  borderColor: '#271C00',
  borderRadius: 10,
  backgroundColor: '#B68F40',
  alignItems: 'center',

},

ponta: {
  marginTop: width * 0.0260416666666667,
left: width * 0.1041666666666667,
width: width * 0.0052083333333333,
height: width * 0.0520833333333333,
backgroundColor: '#271C00',
},

ponta2: {
  marginTop: width * 0.0260416666666667,
  left: width * 0.3020833333333333,
  width: width * 0.0052083333333333,
  height: width * 0.0520833333333333,
  backgroundColor: '#271C00',
  },

  gaiaTitle: {
   fontSize: width * 0.0354166666666667,
   color: 'white',
   marginTop: width * 0.007,
    },

    gaiaText: {
      fontSize: width * 0.0145833333333333,
      color: 'white',
      marginTop: width * 0.015625,
      marginLeft: width * 0.0104166666666667,
      marginRight: width * 0.0104166666666667,
      textAlign: 'justify',

       },

       curiosidadestitle: {
        marginTop: width * 0.0520833333333333,
        width: width * 0.6973958333333333,
        height: width * 0.0640625,
       },

       curiosidades: {
        marginTop: width * 0.0520833333333333,
        fontSize: width * 0.021875,
        color: 'black',
        textAlign: 'justify',
  
         },

       curioText: {
        maxWidth: width * 0.5208333333333333,
        marginLeft: width * 0.15625,
        marginRight: width * 0.15625,
         },

         bigTree:{
          right: width * 0.0572916666666667,
          marginTop: width * 0.0520833333333333,
          width: width * 0.0927083333333333,
          height: width * 0.1786458333333333,
         },

         smallTree:{
          right: width * 0.0572916666666667,
          marginTop: width * 0.0817708333333333,
          width: width * 0.0630208333333333,
          height: width * 0.1489583333333333,
         },

         final:{
          marginTop: width * 0.0520833333333333,
          width: width * 0.1359375,
          height: width * 0.1291666666666667,
         },

         ret1: {
            left: width * 0.0625,
            marginTop: width * 0.1041666666666667,
            width: width * 0.2604166666666667,
            height: width * 0.0520833333333333,
            backgroundColor: '#166034',
            borderRadius: 50,
            alignItems: 'center',
            justifyContent: 'center',
         },

         ret2: {
          left: width * 0.0625,
          marginTop: -(width * 0.0625),
          zIndex: -1,
          width:  width * 0.2604166666666667,
          height: width * 0.0520833333333333,
          backgroundColor: '#B68F40',
          borderRadius: 50,
       },

       imageContainer22: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center', 
    },

    utfprImage3: {
        width: 144 * (width * 0.00067708333),
        height: 57 * (width * 0.00067708333),
        marginLeft: width * 0.0208333333333333,
    },

    

      navbar2: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: width * 0.06814583333333333333333333333333,
        backgroundColor: '#166034',
        position: 'absolute',
        bottom: 0,
        top: width * 3.776041666666667,
        right: 0,
        width: '100%',

      },

      noticias: {
        color: 'white',
        fontSize: width * 0.025,
      },


});