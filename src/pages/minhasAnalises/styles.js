import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({

  scrollViewContent: {
    width: width,
    height: '100%',
  },

  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
},

container3:{
    backgroundColor: '#FFFEF4',
      overflow: 'hidden',
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
    fontWeight: 'bold'
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

  
backButton: {
  marginLeft: width * 0.0052083333333333,
},

card: {
    position: 'absolute',
    backgroundColor: '#809C30',
    alignItems: 'center',
    justifyContent: 'center',
    width: width * 0.78125,
    height: width * 0.3125,
    borderRadius: width * 0.0052083333333333,
    top: width * 0.15625,
},

row: {
    flexDirection: 'row',
},
column: {
    flexDirection: 'column',
},

navbar2: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: width * 0.06814583333333333333333333333333,
    backgroundColor: '#166034',
    position: 'absolute',
    bottom: 0,
    top: width * 0.61,
    right: 0,
    width: '100%',

  },

  araucariaContainer: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    flexDirection: 'row',
    top: width * 0.485,
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

araucarias: {
    width: width * 0.1651041666666667,
    height: width * 0.146875,
    marginRight: width * 0.0260416666666667,
    left: width * 0.41,
  },


  circle: {
        backgroundColor: 'transparent',
        borderWidth: width * 0.00625,
        borderColor: '#4C6523',
        width: width * 0.15625,
        height: width * 0.15625,
        borderRadius: '50%',
        zIndex: -3,
        position: 'absolute',
        left: -(width * 0.0625),
  },

  circle2: {
    top: width * 0.45,
    backgroundColor: 'transparent',
    borderWidth: width * 0.00625,
    borderColor: '#4C6523',
    width: width * 0.2083333333333333,
    height: width * 0.2083333333333333,
    borderRadius: '50%',
    zIndex: -3,
    position: 'absolute',
    left: -(width * 0.0625),
    overflow: 'hidden',
},

giantRet: {
        top: -(width * 0.1041666666666667),
        width: width * 0.6770833333333333,
        height: width * 0.4166666666666667,
        overflow: 'hidden',
        backgroundColor: '#4C6523',
        position: 'absolute',
        zIndex: -2,
        transform: [{ rotate: '-140deg' }],
        right: -(width * 0.2604166666666667),

},
  

jardinetesContainer: {
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  flexWrap: 'wrap',
},
jardineteItem: {
  margin: width * 0.0052083333333333,
  alignItems: 'center',
  borderWidth: width * 0.0052083333333333,
  borderColor: '#271C00',
  borderRadius: width * 0.0052083333333333,
  backgroundColor: '#FFFEF4',
},
jardinetePhoto: {
  width: width * 0.1822916666666667,
  height: width * 0.1025390625,
  marginLeft: width * 0.0130208333333333,
  marginRight: width * 0.0130208333333333,
  marginBottom: width * 0.0130208333333333,
  marginTop: width * 0.0052083333333333,


},
jardineteName: {
  marginTop: width * 0.0052083333333333,
  textAlign: 'center',
  fontSize: width * 0.0145833333333333,
  fontWeight: 'bold',
  backgroundColor: '#B68F40',
  padding: width * 0.0036458333333333,
  borderRadius: width * 0.003125,
},
paginationContainer: {
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: -(width * 0.0052083333333333),
},
pageNumberText: {
  fontSize: width * 0.021875,
  fontWeight: 'bold',
  marginHorizontal: width * 0.0052083333333333,
  color: '#271C00',
},

jardineteWrapper: {
  marginBottom: width * 0.015625, 
  alignItems: 'center'
},
jardineteActions: {
  flexDirection: 'column',
  marginTop: width * 0.0078125,
  backgroundColor: '#271C00',
  padding: width * 0.0052083333333333,
  borderRadius: width * 0.0052083333333333,
  width: '96%'
},
viewButton: {
  backgroundColor: '#4C6523',
  padding: width * 0.0052083333333333,
  borderRadius: width * 0.0052083333333333,
  alignItems: 'center',
  justifyContent: 'center',
},
editButton: {
  backgroundColor: '#4C6523',
  padding: width * 0.0052083333333333,
  borderRadius: width * 0.0052083333333333,
  marginTop: width * 0.0078125,
  alignItems: 'center',
  justifyContent: 'center',
},
buttonText: {
  color: 'white',
  fontSize: width * 0.0135416666666667,
},

deleteButton: {
  position: 'absolute',
  top: width * 0.0026041666666667,
  right: width * 0.0026041666666667,
  backgroundColor: '#271C00',
  padding: width * 0.0015625,
  borderRadius: width * 0.0026041666666667,
},

modalContainer: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fundo semi-transparente para destacar o modal
},

modalContent: {
  width: '80%', // Define a largura do modal como 80% da tela
  height: '40%', // Define a altura do modal como 40% da tela
  backgroundColor: 'white',
  borderRadius: width * 0.0052083333333333, // Borda arredondada
  padding: width * 0.0104166666666667, // Espaçamento interno
  justifyContent: 'center', // Centraliza o conteúdo verticalmente
  alignItems: 'center', // Centraliza o conteúdo horizontalmente
},
modalText: {
  fontSize: width * 0.009375,
  marginBottom: width * 0.0104166666666667,
  textAlign: 'center',
},
modalButtons: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  width: '100%',
},
cancelButton: {
  backgroundColor: '#ccc',
  padding: width * 0.0052083333333333,
  borderRadius: width * 0.0026041666666667,
  flex: 1,
  marginRight: width * 0.0052083333333333,
  alignItems: 'center',
},
confirmButton: {
  backgroundColor: 'red',
  padding: width * 0.0052083333333333,
  borderRadius: width * 0.0026041666666667,
  flex: 1,
  alignItems: 'center',
},
buttonText2: {
  color: 'white',
  fontSize: width * 0.0083333333333333,
},

});
