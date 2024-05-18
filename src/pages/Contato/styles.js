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
    fontSize: width * 0.0166666666666667,
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
    width: width * 0.09375,
    height: width * 0.09375,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonInstagram: {
    width: width * 0.09375,
    height: width * 0.09375,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    textAlign: 'center', // Centraliza horizontalmente o texto dentro do botão
    fontSize: width * 0.021875,
    color: 'black',
    bottom: width * -0.0052083333333333, 
  },

  buttonText2: {
    textAlign: 'center', // Centraliza horizontalmente o texto dentro do botão
    fontSize: width * 0.021875,
    color: 'black',
    bottom: width * -0.0052083333333333, 
    left: width * 0.001
  },


  
});
