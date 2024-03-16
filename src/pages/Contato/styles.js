import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({

  scrollViewContent: {
    width: width,
    height: '100%',
  },
  backgroundImage: {
    width: width,
    height: (width * 1024) / 1440,
    resizeMode: 'contain',
  },

  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '140px',
    backgroundColor: '#195439',
    position: 'absolute',
    top: 0,
    right: 0,
    width: '100%',
    zIndex: 2,
  },

  navbarButton: {
    fontSize: 32,
    color: '#FFF',
    fontWeight: 'bold'
  },

  card: {
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 1,
    position: 'absolute',
    justifyContent: 'space-around',
    top: '44%',
    left: '30%',
    width: '40%',
    height: '28%',
  },
  
  buttonEmail: {
    width: 150,
    height: 150,
    borderRadius: 75,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonInstagram: {
    width: 150,
    height: 150,
    borderRadius: 75,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    textAlign: 'center', // Centraliza horizontalmente o texto dentro do botão
    fontSize: 42,
    color: 'black',
    bottom: -10, // Ajuste para posicionar o texto no centro vertical do botão
  },

  buttonText2: {
    textAlign: 'center', // Centraliza horizontalmente o texto dentro do botão
    fontSize: 42,
    color: 'black',
    bottom: -10, // Ajuste para posicionar o texto no centro vertical do botão
    right: '6%'
  },


  
});
