import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  
  scrollViewContent: {
    width: width,
    height: '100%',
  },
  backgroundImage: {
    width: width,
    height: (width * 1536) / 1440,
    resizeMode: 'contain',
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

  card: {
    zIndex: 1,
    backgroundColor: 'transparent', 
    borderRadius: 85,
    top: '14%',
    width: '68%',
    height: '50%',
    left: width - (width / 1.15),
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

  button: {
    width: width * 0.1041666666666667, // 60 é a soma das margens horizontais (20 * 3)
    height: width * 0.1041666666666667, // Mantendo o mesmo tamanho para quadrados
    backgroundColor: '#166034', // Cor de fundo verde
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

  buttonView: {
    width: width * 0.41,
    height: width * 0.1354166666666667,
    borderRadius: width * 0.015625,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    top: width * 0.23125,
    backgroundColor: '#271C00',
    alignItems: 'center', 

  },

  buttonText: {
    color: 'white',
    fontSize: width * 0.025, 
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
});
