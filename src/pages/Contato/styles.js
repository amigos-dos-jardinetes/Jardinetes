import { StyleSheet, useWindowDimensions } from 'react-native';

export const styles = () => {
  const { width, height } = useWindowDimensions(); // Pegando width e height dinamicamente

  return StyleSheet.create({
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
      height: width * 0.0729,
      backgroundColor: '#195439',
      position: 'absolute',
      top: 0,
      right: 0,
      width: '100%',
      zIndex: 2,
    },
    navbarButton: {
      fontSize: width * 0.0167,
      color: '#FFF',
      fontWeight: 'bold',
    },
    navbar2: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      height: width * 0.0681,
      backgroundColor: '#166034',
      position: 'absolute',
      bottom: 0,
      right: 0,
      width: '100%',
    },
    araucarias: {
      width: width * 0.1651,
      height: width * 0.1469,
      marginRight: width * 0.0260,
    },
    araucarias2: {
      zIndex: -2,
      width: width * 0.1156,
      height: width * 0.1028,
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
      left: width * 0.1042,
      marginRight: width * 0.1042,
    },
    imageContainer44: {
      zIndex: -1,
      top: width * 0.41,
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
      marginRight: width * 0.1380,
    },
    utfprImage: {
      width: 144 * (width * 0.000677),
      height: 57 * (width * 0.000677),
      marginLeft: width * 0.0208,
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
      textAlign: 'center',
      fontSize: width * 0.0219,
      color: 'black',
      bottom: width * -0.0052,
    },
    buttonText2: {
      textAlign: 'center',
      fontSize: width * 0.0219,
      color: 'black',
      bottom: width * -0.0052,
      left: width * 0.001,
    },
  });
};
