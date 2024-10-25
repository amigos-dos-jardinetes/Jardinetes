import { StyleSheet, useWindowDimensions } from 'react-native';

export const styles = () => {
  const { width, height } = useWindowDimensions(); 

  return StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFEF4',
      },

      mapContainer: {

        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        width: width * 0.9,
        height: width * 0.3125,
        top: width * 0.245,
        borderRadius: width * 0.0052083333333333,
        borderColor: '#271C00',
        borderWidth: width * 0.003125,
      },

      instructions: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        width: width * 0.9,
        top: width * 0.0859375,
        height: width * 0.1041666666666667,
        backgroundColor: '#B68F40' ,
        borderRadius: width * 0.0104166666666667,      
      },

      
  imageContainer33: {
    top: width * 0.57,
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    left: width * 0.8333333333333333,
  },

  araucarias: {
    width: width * 0.1651041666666667 * 0.8,
    height: width * 0.146875 * 0.8,
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

      imageContainer22: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center', 
    
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
              top: width * 0.67,
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

      utfprImage3: {
        width: 144 * (width * 0.00067708333),
        height:57 * (width * 0.00067708333),
      },

      backButton: {
        marginLeft: width * 0.0052083333333333,
      },

      imageContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginRight: width * 0.0104166666666667, // Adiciona margem à direita
      },

      logoImage: {
        width: width * 0.0520833333333333,
        height: width * 0.0520833333333333,
        borderRadius: width * 0.0260416666666667,
      },

      title: {
        fontSize: width * 0.0125,
        fontWeight: 'bold',
        marginBottom: width * 0.0104166666666667,
        marginTop: width * 0.0104166666666667,
        textAlign: 'center',
      },

      title1: {
        top: width * 0.57,
        alignItems: 'center',
        position: 'absolute',
      },

      title2: {
        fontSize: width * 0.0166666666666667,
        color: 'white',
        marginBottom: width * 0.0104166666666667,
        marginTop: width * 0.0104166666666667,
        textAlign: 'center',
      },
      
      buttonContainer: {
        flexDirection: 'row',
     
      },

      button: {
        backgroundColor: '#166034',
        paddingVertical: width * 0.0052083333333333,
        paddingHorizontal: width * 0.0104166666666667,
        borderRadius: width * 0.0026041666666667,
        marginEnd: width * 0.0052083333333333,
      },
      buttonText: {
        color: 'white',
        fontSize: width * 0.009375,
        fontWeight: 'bold',
      },

      popupImage: {
        width: '200px',
        height: '130px',
    },

    searchContainer: {
      position: 'absolute',
      top: width * 0.2, // Ajuste a posição do container de busca
      width: width * 0.9,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#FFFEF4',
      borderRadius: width * 0.005,
      zIndex: 3, // Certifique-se de que a barra de busca fique acima do mapa

    },
    
    searchInput: {
      flex: 1,
      height: width * 0.035,
      borderColor: '#ccc',
      borderWidth: 1,
      borderRadius: width * 0.005,
      paddingHorizontal: width * 0.03,
      fontSize: width * 0.018,
   
    },
    
    searchButton: {
      marginLeft: width * 0.02,
      backgroundColor: '#166034',
      paddingVertical: width * 0.01,
      paddingHorizontal: width * 0.01,
      height: width * 0.035,
      borderRadius: width * 0.005,
      alignItems: 'center',
      justifyContent: 'center',

    },
    
    searchButtonText: {
      color: 'white',
      fontSize: width * 0.02,
      fontWeight: 'bold',
    },

  });
};
