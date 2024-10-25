import { StyleSheet, useWindowDimensions } from 'react-native';

export const styles = () => {
  const { width, height } = useWindowDimensions(); 

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
 
    rowNav: {
      flexDirection: 'row',
    
      },
    
      navbar2: {
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            height: width * 0.1,
            backgroundColor: '#166034',
            position: 'absolute',
            bottom: 0,
            right: 0,
            width: '100%',
            top: width * 0.65,    
          },
    
          utfprImage3: {
            width: 144 * (width * 0.00067708333),
            height: 57 * (width * 0.00067708333),
        },
    
    column1nav: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      right: '100%',
      
    },
    
    column2nav: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      right: '50%',
      
    },
    
    column3nav: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      left: '50%',
      
    },
    
    column4nav: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      left: '100%',
    
      
    },
    
    navBt:{
        marginTop: (10 / 1920) * width,
        marginBottom: (10 / 1920) * width,
    },
    
    textNav:{
        fontSize: (20 / 1920) * width,
        color: 'black',
    },
    
    instaNav: {
        width: ((512 * 0.1) / 1920) * width,
        height: ((512 * 0.1) / 1920) * width,
        marginTop: (10 / 1920) * width,
        marginBottom: (10 / 1920) * width,
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
