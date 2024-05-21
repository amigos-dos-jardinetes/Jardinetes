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
   bottom: 0,
  },

 
  araucarias: {
    width: width * 0.1651041666666667,
    height: width * 0.146875,
    marginRight: width * 0.0260416666666667,
  },

  araucarias2: {
    zIndex: -2,
    width: width * 0.1155729166666667,
    height: width * 0.1028125,

  },

  imageContainer22: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center', 

  },

  imageContainer33: {
    top: width * 0.52,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    left: width * 0.1041666666666667,
    marginRight: width * 0.1041666666666667,
  },
  imageContainer44: {
    zIndex:-1,
    top: width * 0.41,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginRight: width * 0.1380208333333333,
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
