import { StyleSheet, useWindowDimensions } from 'react-native';

export const styles = () => {
  const { width, height } = useWindowDimensions(); 

  return StyleSheet.create({

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

      generalContainer:{
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      },

      title:{
        width: width * 0.6161458333333333,
        height: width * 0.0640625,
        marginTop: width * 0.1041666666666667,
      
      },

      cards: {
      
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: width * 0.0260416666666667,
      },

      card1: {
        alignItems: 'center',
        backgroundColor: '#271C00',
        flexDirection: 'column',
        width: width * 0.22,
        height: width * 0.3,
        marginLeft: width * 0.0260416666666667,
        marginRight: width * 0.0260416666666667,
        marginTop: width * 0.0260416666666667,

      },

      card2: {
        alignItems: 'center',
        backgroundColor: '#271C00',
        flexDirection: 'column',
        width: width * 0.22,
        height: width * 0.3,
        marginLeft: width * 0.0260416666666667,
        marginRight: width * 0.0260416666666667,
        marginTop: width * 0.0260416666666667,

      },

      card3: {
        alignItems: 'center',
        backgroundColor: '#271C00',
        flexDirection: 'column',
        width: width * 0.22,
        height: width * 0.3,
        marginLeft: width * 0.0260416666666667,
        marginRight: width * 0.0260416666666667,
        marginTop: width * 0.0260416666666667,

      },

      imageContainer: {
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'white',
            width: width * 0.0734375,
            height: width * 0.0734375,
            borderRadius: '50%',
            marginTop: width * 0.0260416666666667,

      },

      photoContainer: {
            width: width * 0.0708333333333333,
            height: width * 0.0708333333333333,
      },

      circContainer: {
        marginTop: width * 0.0416666666666667,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
      },

      circVerde1: {
          backgroundColor: '#809C30',
          width: width * 0.0416666666666667,
          height: width * 0.0416666666666667,
          borderRadius: '50%',
          marginRight: width * 0.0260416666666667,
      },

      circVerde2: {
        backgroundColor: '#809C30',
        width: width * 0.0416666666666667,
        height: width * 0.0416666666666667,
        borderRadius: '50%',
        marginRight: width * 0.0260416666666667,
    },

    circVerde3: {
      backgroundColor: '#809C30',
      width: width * 0.0416666666666667,
      height: width * 0.0416666666666667,
      borderRadius: '50%',
      marginRight: width * 0.0260416666666667,
  },

  circVerde4: {
    backgroundColor: '#809C30',
    width: width * 0.0416666666666667,
    height: width * 0.0416666666666667,
    borderRadius: '50%',
},

      araucarias: {
        width: width * 0.1651041666666667,
        height: width * 0.146875,
        marginRight: width * 0.0260416666666667,
        left: width * 0.45,
      },
    
      araucarias2: {
        zIndex: -2,
        width: width * 0.1155729166666667,
        height: width * 0.1028125,
        left: width * 0.2,
    
      },

      araucariaContainer: {
        alignItems: 'flex-end',
        justifyContent: 'center',
        flexDirection: 'row',
      },

        retBackground: {
          zIndex: -2,
          width: width * 0.4166666666666667,
          height: width * 0.4166666666666667,
          backgroundColor: '#166034',
          alignSelf: 'center',
          position: 'absolute',
          marginTop: width * 0.078125,

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
            top: width * 0.72,
            right: 0,
            width: '100%',
    
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

      titleText: {
        fontSize: width * 0.0145833333333333,
        color: 'white',
        marginTop: width * 0.0104166666666667,
      },

      titleText2: {
        fontSize: width * 0.0072916666666667,
        color: 'white',
        marginTop: width * 0.0104166666666667,
      },

      text: {
        fontSize: width * 0.0104166666666667,
        color: 'white',
        marginTop: width * 0.0104166666666667,
        alignSelf: 'center',
        marginRight: width * 0.015625,
        marginLeft: width * 0.015625,
        textAlign: 'justify',
      },
    
    });
  };
  