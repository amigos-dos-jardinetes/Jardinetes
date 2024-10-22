import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({

  scrollViewContent: {
    width: width,
    height: '100%',

  },
  backgroundImage: {
    width: width,
    height: (width * 2798) / 1440,
    resizeMode: 'contain',
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

  card: {
    zIndex: 1,
    backgroundColor: 'transparent',
    borderRadius: 85,
    top: '26.5%',
    width: '90%',
    height: '50%',
    left: width - (width / 1.05),
  },

  containerButton1: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: width * 0.0104166666666667, // Espaçamento horizontal entre os botões
    marginTop: width * 0.04, // Margem superior para separar dos outros elementos
  },


  containerButton2: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: width * 0.0104166666666667, // Espaçamento horizontal entre os botões
    marginTop: width * 0.03125, // Margem superior para separar dos outros elementos
  },

  containerButton3: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: width * 0.0104166666666667, // Espaçamento horizontal entre os botões
    marginTop: width * 0.03125, // Margem superior para separar dos outros elementos
  },

  containerButton4: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: width * 0.22760416666666666666666666666667, // Espaçamento horizontal entre os botões
    marginTop: width * 0.03125, // Margem superior para separar dos outros elementos
  },


  button: {
    width: width * 0.15625, // 60 é a soma das margens horizontais (20 * 3)
    height: width * 0.15625, // Mantendo o mesmo tamanho para quadrados
    backgroundColor: '#809C30', // Cor de fundo verde
    borderRadius: width * 0.0104166666666667, // Bordas arredondadas
    marginBottom: width * 0.0104166666666667, // Espaçamento inferior entre os botões
  },

  button1: {
    width: width * 0.15625, // 60 é a soma das margens horizontais (20 * 3)
    height: width * 0.15625, // Mantendo o mesmo tamanho para quadrados
    backgroundColor: '#1E6131', // Cor de fundo verde
    borderRadius: width * 0.0104166666666667, // Bordas arredondadas
    marginBottom: width * 0.0104166666666667, // Espaçamento inferior entre os botões
  },

  button2: {
    width: width * 0.15625, // 60 é a soma das margens horizontais (20 * 3)
    height: width * 0.15625, // Mantendo o mesmo tamanho para quadrados
    backgroundColor: '#F5F3E1', // Cor de fundo verde
    borderRadius: width * 0.0104166666666667, // Bordas arredondadas
    marginBottom: width * 0.0104166666666667, // Espaçamento inferior entre os botões
  },

  image: {
    flex: 1,
    width: '85%',
    height: '85%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'contain',
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonView: {
    width: width * 0.68,
    height: width * 0.171875,
    top: width * 0.511,
    left: width * 0.168,
    borderRadius: width * 0.015625,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#271C00',
    zIndex: 1,
    position: 'absolute',
  },
  buttonView2: {
    width: width * 0.7,
    height: width * 0.171875,
    top: width * 0.501,
    left: width * 0.142,
    borderRadius: width * 0.015625,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1E6131',
    zIndex: 0,
    position: 'absolute',
  },

  buttonView3: {
    width: width * 0.754,
    height: width * 0.145,
    top: width * 0.14,
    left: width * 0.12,
    borderRadius: width * 0.015625,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#271C00',
    zIndex: 0,
    position: 'absolute',
  },

  center: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',

  },
  
  buttonView33: {
    width: width * 0.400,
    height: width * 0.105,
    top: width * 0.35,
    borderRadius: width * 0.015625,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#809C30',
    zIndex: 0,
    position: 'absolute',
  },


  buttonText33: {
    color: 'white',
    fontSize: width * 0.02,
    textAlign: 'center',
  },

  buttonText: {
    color: 'white',
    fontSize: width * 0.04,
    textAlign: 'center',
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

modalContainer: {
  flex: 1,
  backgroundColor: 'white', // Fundo do modal
  justifyContent: 'flex-start',
},
closeButton: {
  position: 'absolute',
  top: width * 0.0208333333333333,
  right: width * 0.0208333333333333,
  zIndex: 1, 
  backgroundColor: 'white', 
  borderRadius: 25, 
  padding: 10,
  borderWidth: 1, 
  borderColor: '#ccc',
},
scrollViewModalContent: {
  flexGrow: 1,
  justifyContent: 'center',

},

});
