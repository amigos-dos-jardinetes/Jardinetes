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

      row: {
        flexDirection: 'row',
        top: width * 0.1041666666666667,
      },

      column1: {
        flexDirection: 'column',
        alignItems: 'center',
        right: width * 0.1041666666666667,
        top: width * 0.0208333333333333,
      },

      column2: {
        flexDirection: 'column',
        alignItems: 'center',
        left: width * 0.1041666666666667,
        justifyContent: 'center',
        top: -(width * 0.1822916666666667),
      },

      conhecaJard: {
        width: width * 0.290625,
        height: width * 0.0453125,
      },

      ret: {
        width: width * 0.21875,
        height: width * 0.0041666666666667,
        backgroundColor: '#DFA308',
        marginTop: width * 0.0208333333333333,
      },  

      retConheca1: {
          backgroundColor: '#271C00',
          width: width * 0.3125,
          height: width * 0.0260416666666667,
          borderRadius: (20 / 1920) * width,
      },

      retConheca2: {
        backgroundColor: '#F5F5F5',
        width: width * 0.3125,
        height: width * 0.0260416666666667,
        top: -(width * 0.0104166666666667),
        left: width * 0.0104166666666667,
        borderRadius: (20 / 1920) * width,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: (1 / 1920) * width,
        borderColor: '#4C6523'
      },

      parceirosTitle: {
        width: width * 0.3052083333333333,
        height: width * 0.025,
      },

      retOrange: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#B68F40',
        borderColor: '#271C00',
        borderWidth: width * 0.0130208333333333,
        width: width * 0.2604166666666667,
        height: width * 0.46875,
        marginTop: width * 0.0260416666666667,
        alignSelf: 'center',
        borderRadius: (15 / 1920) * width,
      },

      maozinha: {
        marginTop: width * 0.0104166666666667,
        width: width * 0.0729166666666667,
        height: width * 0.0729166666666667,
      },

      serAmbiental: {
        width: width * 0.0729166666666667,
        height: width * 0.0729166666666667,
      },

      biotiba: {
        width: width * 0.0729166666666667,
        height: width * 0.0729166666666667,
      },

      retVerde: {
        width: width * 0.2083333333333333,
        height: width * 0.0520833333333333,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1E6131',
        marginTop: width * 0.0104166666666667,
        marginBottom: width * 0.0104166666666667,
      },

      parceirosText: {
          textAlign: 'center',
          color: 'white',
          fontSize: width * 0.0145833333333333,
          marginRight: width * 0.0104166666666667,
          marginLeft: width * 0.0104166666666667,
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
        top: width * 0.22,
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

    

      navbar2: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: width * 0.06814583333333333333333333333333,
        backgroundColor: '#166034',
        position: 'absolute',
        bottom: 0,
        top: width * 0.81,
        right: 0,
        width: '100%',

      },
    

      borderedContainer3: {
        marginTop: width * 0.15625,
        borderColor: '#ddd',
        backgroundColor: '#fff',
        width: width * 0.4166666666666667,
        height: width * 0.234375,
        borderWidth: (10 / 1920) * width,
        borderRadius: (15 / 1920) * width,
        borderColor: '#271C00',
      },
    
      // Estilo para cada item do carrossel
      carouselItem: {
        position: 'relative',
        width: '100%',
        height: width * 0.234375, // Defina a altura desejada para os itens do carrossel
        overflow: 'hidden',
        objectFit: 'cover', 
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',

      },
    
      // Estilo para a imagem do jardinete
      carouselImage: {
       
        width: '100%',
        height: '100%',
        objectFit: 'cover', 
        alignSelf: 'center',
        justifyContent: 'center',
    },
    
      // Estilo para o texto do nome do jardinete
      carouselText: {
        position: 'absolute',
        bottom: '20px',
        width: '100%',
        background: 'rgba(255, 255, 255, 0.8)',
        color: 'black',
        padding: '5%',
        margin: '0',
        fontSize: width * 0.025,
        textAlign: 'center',
      },
    
      // Estilo para o botão de navegação do carrossel (setas)
      carouselButton: {
        position: 'absolute',
        top: '40%',
        zIndex: 2,
        background: 'rgba(0, 0, 0, 0.5)',
        border: 'none',
        color: 'white',
        padding: width * 0.0052083333333333,
        borderRadius: '50%',
      },
    
      // Estilo para o botão de navegação do carrossel (seta esquerda)
      carouselButtonLeft: {
        left: 0,
      },
    
      // Estilo para o botão de navegação do carrossel (seta direita)
      carouselButtonRight: {
        right: 0,
      },

      circle: {
        top: width * 0.2083333333333333,
          width: width * 0.5208333333333333,
          height: width * 0.5208333333333333,
          borderRadius: '50%',
          backgroundColor: '#1E6131',
          zIndex: -3,
          position: 'absolute',
          left: '-20%'
      }, 
      
      circle2: {
        top: width * 0.0520833333333333,
          width: width * 0.2604166666666667,
          height: width * 0.2604166666666667,
          borderRadius: '50%',
          backgroundColor: '#809C30',
          zIndex: -3,
          position: 'absolute',
          right: '-10%'
      },  
    });
  };
  