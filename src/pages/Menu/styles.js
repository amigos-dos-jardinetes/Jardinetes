import { StyleSheet, useWindowDimensions } from 'react-native';

export const styles = () => {
  const { width, height } = useWindowDimensions(); 

  return StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#195439',
        justifyContent: 'flex-end',
        backgroundColor: '#FFF',
    },
    containerLogo: {
        marginTop: width * 0.01,
        flex: 2,
        backgroundColor: 'transparent',
        padding: width * 0.02604166666666666666666666666667,
        alignItems: 'center',
        top: (100 / 1920) * width,
        position: 'absolute',
        alignSelf: 'center',
    },
    containerForm: {
        flex: 1,
        backgroundColor: '#FFF',
        borderTopLeftRadius: width * 0.01302083333333333333333333333333,
        borderTopRightRadius: width * 0.01302083333333333333333333333333,
        padding: width * 0.01041666666666666666666666666667,
    },
    title: {
        fontSize: width * 0.01666666666666666666666666666667,
        fontWeight: 'bold',
        top: (50 / 1920) * width,
        textAlign: 'center',
        color: '#FFF',
        position: 'absolute',
        alignSelf: 'center',
    },
    logoutButton: {
        backgroundColor: '#FFFEF4',
        borderRadius: width * 0.00520833333333333333333333333333,
        width: width * 0.02604166666666666666666666666667,
        height: width * 0.02604166666666666666666666666667,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: width * 0.00520833333333333333333333333333,
        left: '90%',
    },

    logoutButtonText: {
        color: 'red',
        fontSize: width * 0.01458333333333333333333333333333,
    },


    logoImage: {
        width: (200 / 1080) * height,
        height: (200 / 1080) * height,
        borderRadius: '50%',
    },
    backcontainer: {
        width: '37%',
        flex: 1,
        justifyContent: 'flex-start',



    },
    textButton: {
        backgroundColor: '#FFF',
        padding: width * 0.00625,
        borderRadius: width * 0.00260416666666666666666666666667,
        marginTop: width * 0.01041666666666666666666666666667,
        alignItems: 'center',

    },

    textButtonConfig: {
        backgroundColor: '#FFFEF4',
        borderRadius: width * 0.00520833333333333333333333333333,
        width: width * 0.02604166666666666666666666666667,
        height: width * 0.02604166666666666666666666666667,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: width * 0.00520833333333333333333333333333,
        right: '90%'
    },

    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      },
      
      modalContent: {
        width: '80%',
        height: '40%',
        backgroundColor: 'white',
        borderRadius: width * 0.0052083333333333,
        padding: width * 0.0104166666666667,
        justifyContent: 'center',
        alignItems: 'center',
      },
      modalText: {
        fontSize: width * 0.009375,
        marginBottom: width * 0.0104166666666667,
        textAlign: 'center',
      },
      modalButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
      },
      cancelButton: {
        backgroundColor: '#46923c',
        padding: width * 0.0052083333333333,
        borderRadius: width * 0.0026041666666667,
        flex: 1,
        marginRight: width * 0.0052083333333333,
        alignItems: 'center',
      },
      confirmButton: {
        backgroundColor: 'red',
        padding: width * 0.0052083333333333,
        borderRadius: width * 0.0026041666666667,
        flex: 1,
        alignItems: 'center',
      },
      buttonText2: {
        color: 'white',
        fontSize: width * 0.0083333333333333,
      },

    textButton2: {
        backgroundColor: '#271c00',
        padding: (12 / 1080) * height,
        borderRadius: width * 0.00260416666666666666666666666667,
        marginTop: (96 / 1080) * height,
        alignItems: 'center',
        marginBottom: width * 0.05,

    },
    textInfo: {
        fontSize: width * 0.01041666666666666666666666666667,

    },

    textInfo2: {
        fontSize: width * 0.01041666666666666666666666666667,
        color: '#FFF',

    },

    buttons: {
        marginBottom: width * 0.05208333333333333333333333333333,
        alignContent: 'center',
        width: '80%',
        alignSelf: 'center',
        position: 'absolute',
    },
    navbar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: '10%',
        backgroundColor: '#195439',
        position: 'absolute',
        top: 0,
        right: 0,
        width: '63%',
        zIndex: 2,
    },
    

    navbarButton: {

        fontSize: width * 0.01666666666666666666666666666667,

    },

    navi: {
        backgroundColor: '#FFF',
        borderRadius: width * 0.01041666666666666666666666666667,
        alignItems: 'center',
        width: width * 0.15,
    },
    car: {
        backgroundColor: '#FFFEF4',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: '45%',
        position: 'absolute',
        top: '10%',
        right: 0,
        width: '63%',

    },

    car2: {
        backgroundColor: '#FFFEF4',
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: '45%',
        position: 'absolute',
        top: '55%',
        right: 0,
        width: '63%',
    },

    car3: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: '82%',
        position: 'absolute',
        top: '12%',
        width: '82%',
    },




    container_map: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: '100%',
        position: 'absolute',
        right: 0,
        width: '100%',

    },

    container_map1: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: '100%',
        position: 'absolute',
        left: 0,
        width: '50%',


    },

    container_car: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: '100%',
        position: 'absolute',

        width: '100%',


    },

    carouselItem1: {
        position: 'relative',
        width: '100%',
        height: '60%',
        borderRadius: (8 / 1920) * width,
        overflow: 'hidden',

        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
    },

    carouselImage1: {
        width: '100%',
        height: '100%',
        position: 'relative',
        objectFit: 'cover', 
    },

    carouselItem: {
        position: 'relative',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        objectFit: 'cover', 
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    
    },
    carouselImage: {
       
        width: '70%',
        height: '70%',
        objectFit: 'cover', 
        alignSelf: 'center',
        justifyContent: 'center',
    },
    overlayContent: {
        
        textAlign: 'center',
        color: 'white',
        borderRadius: (8 / 1920) * width,
    
    },
    carouselContainer: {
        
        position: 'relative',
        borderRadius: width * 0.00416666666666666666666666666667,
        overflow: 'hidden',
    },
    textgen: {
        alignItems: 'center',
        position: 'absolute',
        top: '1%',
        zIndex: 2,
        fontSize: width * 0.01666666666666666666666666666667,
    },

    textgen2: {
        alignItems: 'center',
        position: 'absolute',

        fontSize: width * 0.01666666666666666666666666666667,
    },

    carouselText: {
        position: 'absolute',
        bottom: (10 / 1920) * width,
        width: '100%',
        background: 'rgba(255, 255, 255, 0.8)',
        color: 'black',
        padding: '5%',
        margin: '0',
        fontSize: width * 0.0166666666666667,
        textAlign: 'center',

    },
    container2: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        position: 'absolute',
        maxHeight: '80%',
        maxWidth: '75%',
        borderRadius: (8 / 1920) * width,
    },

    container3: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        position: 'absolute',
        maxHeight: '80%',
        maxWidth: '75%',
        borderRadius: (8 / 1920) * width,
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
    borderRadius:  width * 0.0026041666666667,
    alignItems: 'center',
  },
  
  popupButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: width * 0.00625,
    textAlign: 'center',
  },

    mapContainer: {
      
        borderWidth: width * 0.00104166666666666666666666666667,

        borderRadius: width * 0.00520833333333333333333333333333,

    },
    borderedContainer: {
        borderWidth: width * 0.0078125,
        borderColor: '#271c00',
        borderRadius: width * 0.00625,

    },

    borderedContainer2: {
        borderWidth: width * 0.007,
        borderColor: '#271c00',
        borderRadius: width * 0.00625,
        height: '93%',
        width: '70%',
        alignItems: 'center',
        justifyContent: 'center',
   
    },
    car4: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: '82%',
        width: '75%',
        position: 'absolute',
        top: '12%',
        backgroundColor: 'transparent',
    },

    container1: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        heigh: '100%',
        width: '100%',
    },

    borderedContainer3: {
        top: 0,
        left: '0%',
        bottom: '1%',
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',


    },
    carouselNavigation: {
        position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: width * 0.00833333333333333333333333333333,
        bottom: width * 0.01041666666666666666666666666667,
    },

    carouselButton: {
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        padding: width * 0.00416666666666666666666666666667,
        borderRadius: width * 0.02604166666666666666666666666667,
        borderWidth: 1,
        borderColor: 'white',
        marginRight: width * 0.00416666666666666666666666666667,
    },

    cliqueText: {
        fontSize: (48 / 1920) * width,
        color: '#271c00',

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
            top: ((1080 / 1080 ) * height),
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
    
    authorizedButton: {
        backgroundColor: "#4CAF50",
        padding: width * 0.00625,
        borderRadius: width * 0.00260416666666666666666666666667,
        marginTop: width * 0.01041666666666666666666666666667,
        alignItems: 'center',
    },

    authorizedButtonText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: (16 / 1920 * width),
    },
    textButton: {
        backgroundColor: '#FFF',
        padding: width * 0.00625,
        borderRadius: width * 0.00260416666666666666666666666667,
        marginTop: width * 0.01041666666666666666666666666667,
        alignItems: 'center',

    },
});
};
