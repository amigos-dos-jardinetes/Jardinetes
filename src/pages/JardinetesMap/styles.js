import { StyleSheet, useWindowDimensions } from 'react-native';

export const styles = () => {
  const { width, height } = useWindowDimensions();

  return StyleSheet.create({

    container3: {
      backgroundColor: '#FFFEF4',
    },

    container: {
    },

    containerContent: {
      alignItems: 'center',
      justifyContent: 'center',
    },

    navbar: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      height: width * 0.0729166666666667,
      backgroundColor: '#195439',
      width: '100%',
    },

    navbarButton: {
      fontSize: width * 0.0166666666666667,
      color: '#FFF',
      fontWeight: 'bold'
    },

    encontre: {
      alignItems: 'center',
      justifyContent: 'center',
      margin: 50
    },

    container2: {
      width: '100%',
      marginBottom: 50,
    },

    container2Content: {
      alignItems: 'center',
      flexWrap: 'wrap',
      justifyContent: 'center',
    },

    card: {
      display: 'flex',
      backgroundColor: '#B68F40',
      borderRadius: width * 0.027,
      flexDirection: 'row',
      height: width * 0.104,
      width: '85%',
      margin: 'auto',
    },

    searchContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginLeft: width * 0.0033854166666667,
    },

    searchIcon: {
      zIndex: 2,
      position: 'absolute',
      left: width * 0.038,
      top: width * 0.048,
      transform: [{ translateY: -(width * 0.0052) }, { scale: 1.5 }],
    },

    resultsContainer: {
      position: 'absolute',
      backgroundColor: '#F5F3E1',
      alignItems: 'center',
      borderRadius: 0.0052083333333333,
      padding: width * 0.0260416666666667,
      top: width * 0.104,
      width: '85%',
      overflow: 'scroll',
      overflowX: 'hidden',
      marginLeft: width * 0.0286458333333333,
      maxHeight: width * 0.1041666666666667,
    },

    resultsInnerContainer: {
      flexGrow: 1,
    },

    resultItem: {
      justifyContent: 'flex-start',
      marginTop: width * 0.0104166666666667,
      marginBottom: width * 0.0104166666666667,
      width: width * 0.22,
      height: width * 0.0416666666666667,
      borderRadius: width * 0.0104166666666667,
      alignItems: 'center',
      justifyContent: 'center',
    },

    resultText: {
      fontSize: '25px',
      color: 'white',
    },

    searchBar: {
      backgroundColor: '#271C00',
      borderRadius: width * 0.0052,
      width: width * 0.6,
      color: 'white',
      height: width * 0.04,
      marginLeft: width * 0.03,
      paddingLeft: width * 0.04, 
      fontSize: width * 0.03
    },

    clearButton: {
      position: 'absolute',
      zIndex: 1,
      left: width * 0.2630208333333333,
      top: width * 0.0377083333333333,
      transform: [{ translateY: -((width * 0.015625) / 2) }],
      width: width * 0.015625,
      height: width * 0.015625,
      borderRadius: width * 0.0078125,
      alignItems: 'center',
      justifyContent: 'center',
    },

    clearButtonText: {
      fontSize: width * 0.0135416666666667,
      color: 'white',
    },

    gradientButtonContainer: {
      alignSelf: 'center',
      borderRadius: width * 0.0104166666666667,
    },

    gradientButtonText: {
      fontSize: width * 0.0198,
      color: 'white',
    },

    gradientButton: {
      width: width * 0.15625,
      height: width * 0.046875,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: width * 0.0104,
      paddingVertical: width * 0.0052,
      marginLeft: width * 0.0260416666666667,
    },

    map: {
      width: '100%',
      marginBottom: 50,
    },

    container_map: {
      height: width * 0.5,
      width: '85%',
      margin: 'auto',
    },

    imageContainer33: {
      width: '100%',
    },

    araucarias: {
      width: width * 0.1651041666666667,
      height: width * 0.146875,
      marginLeft: width * 0.8,
    },

    navbar2: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      height: width * 0.1,
      backgroundColor: '#166034',
      width: '100%',
    },

    rowNav: {
      flexDirection: 'row',
    },

    column1nav: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      right: '100%',
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

    navBt: {
      marginTop: (10 / 1920) * width,
      marginBottom: (10 / 1920) * width,
    },

    textNav: {
      fontSize: (20 / 1920) * width,
      color: 'black',
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




    instaNav: {
      width: ((512 * 0.1) / 1920) * width,
      height: ((512 * 0.1) / 1920) * width,
      marginTop: (10 / 1920) * width,
      marginBottom: (10 / 1920) * width,
    },

    mapContainer: {
      width: '100%',
      height: '100%',
      borderRadius: width * 0.0052083333333333,
      borderColor: '#271C00',
      borderWidth: width * 0.003125,
    },

    popupImage: {
      width: '200px',
      height: '130px',
    },

    popupButtonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: width * 0.0052083333333333,
    },

    popupButton: {
      flex: 1,
      marginHorizontal: width * 0.0026041666666667,
      paddingVertical: width * 0.0052083333333333,
      backgroundColor: '#809C30',
      borderRadius: width * 0.0026041666666667,
      alignItems: 'center',
    },

    popupButtonText: {
      color: '#ffffff',
      fontWeight: 'bold',
      fontSize: width * 0.00625,
      textAlign: 'center',
    },

    encontreImage: {
      width: width * 0.6692708333333333,
      height: width * 0.0453125,
    },

    container_gaia: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      height: width * 0.3125,
      position: 'absolute',
      left: 0,
      width: '100%',
      top: width * 0.54,
      backgroundColor: '#FFFEF4',
    },

    image: {
      width: width * 0.290625,
      height: width * 0.2208333333333333,
      borderRadius: width * 0.0234375,
      borderWidth: width * 0.0041666666666667,
      borderColor: '#271C00',
      top: 0,
      marginLeft: width * 0.15625,
    },

    linha: {
      width: width * 0.1015625,
      height: width * 0.0541666666666667,
      top: width * 0.0260416666666667,
      marginLeft: width * 0.0260416666666667,
    },

    balao: {
      width: width * 0.1989583333333333,
      height: width * 0.1541666666666667,
      top: -(width * 0.078125),
      marginLeft: width * 0.0260416666666667,
    },


    image2: {
      width: width * 0.190625,
      height: width * 0.0182291666666667,
      marginTop: width * 0.0104166666666667,
    },

    evenResult: {
      backgroundColor: '#4C6523',
      color: 'white'
    },

    oddResult: {
      backgroundColor: '#166034',
      color: 'white'
    },

    detailsContainer: {
      width: width * 0.28,
      right: width * 0.0192708333333333,
      position: 'absolute',
      bottom: width * 0.088,
      backgroundColor: '#FFFFFF',
      borderRadius: width * 0.0052083333333333,
      padding: width * 0.0104166666666667,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: width * 0.0020833333333333,
      elevation: width * 0.0026041666666667,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },

    closeButton: {
      backgroundColor: '#809C30',
      borderRadius: width * 0.0026041666666667,
      padding: width * 0.0052083333333333,
    },

    closeButtonText: {
      color: '#FFFFFF',
      fontWeight: 'bold',
      fontSize: width * 0.0125,
    },

    jardimName: {
      flex: 1,
      textAlign: 'center',
      color: '#4C6523',
      fontWeight: 'bold',
      fontSize: width * 0.0197916666666667,
    },

    linearGradient: {
      width: '100%',
      height: '100%',
      borderRadius: width * 0.015625,
      alignItems: 'center',
      justifyContent: 'center',
    },

  });
};
