import { StyleSheet, useWindowDimensions } from 'react-native';

export const styles = () => {
  const { width, height } = useWindowDimensions(); 

  return StyleSheet.create({

    scrollView: {
        flex: 1,
        backgroundColor: '#FFFEF4',
        padding: (200 / 1920) * width,
    },

    navbar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: width * 0.07,
        backgroundColor: '#166034',
        position: 'absolute',
        top: 0,
        right: 0,
        width: '100%',
        zIndex: 2,
    },
    ret1: {
        position: 'absolute',
        top: width * 0.18,
        width: width * 0.6,
        height: width * 0.1,
        borderRadius: width * 0.02,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#271C00',
        zIndex: 1,
    },
    ret2: {
        position: 'absolute',
        top: width * 0.16,
        width: width * 0.6,
        height: width * 0.1,
        borderRadius: width * 0.02,
        backgroundColor: '#B68F40',
        zIndex: 0,
    },

    buttonText: {
        color: 'white',
        fontSize: width * 0.02,
        textAlign: 'center',
        paddingHorizontal: (20 / 1920) * width,
    },

    imageContainer: {
        position: 'absolute',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        top: width * 0.27,
        width: '100%',
        marginTop: width * 0.005,
        height: width * 0.1,
    },

    imageIcon: {
        width: width * 0.15,
        height: width * 0.045,
        marginRight: width * 0.03,
    },

    imageIcon2: {
        width: width * 0.08,
        height: width * 0.08,
        marginRight: width * 0.03,
    },

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: width * 0.00833333333333333333333333333333,
        backgroundColor: '#FFFEF4',
    },
    searchBarContainer: {
        width: '100%',
        height: width * 0.025,
        marginBottom: width * 0.005,
        borderRadius: width * 0.01041666666666666666666666666667,
        overflow: 'hidden',
        backgroundColor: 'transparent',
    },
    searchBar: {
        flex: 1,
        width: '100%',
        height: width * 0.025,
        paddingLeft: width * 0.005,
        color: '#ffffff',
        fontSize: width * 0.015,
    },
    searchBarGradient: {
        position: 'absolute',
        top: width * 0.385,
        width: width * 0.78,
        height: width * 0.025,
        borderRadius: width * 0.01041666666666666666666666666667,
        marginTop: width * 0.01041666666666666666666666666667,
    },
    resultsContainer: {
        position: 'absolute',
        top: width * 0.4205,
        backgroundColor: '#F5F3E1',
        padding: width * 0.01041666666666666666666666666667,
        maxHeight: width * 0.245,
        width: width * 0.7,
        alignItems: 'center',
    },
    resultItem: {
        padding: (10 / 1920) * width,
        paddingVertical: (10 / 1920) * width,
        borderBottomWidth: (20 / 1920) * width,
        borderBottomColor: '#F5F3E1',
        width: width * 0.6,
    },
    firstResult: {
        backgroundColor: '#4C6523',
        padding: (10 / 1920) * width,
        borderBottomWidth: (20 / 1920) * width,
        borderBottomColor: '#F5F3E1',
    },
    noResultsText: {
        textAlign: 'center',

    },
    resultItemText: {
        color: '#ffffff',
        padding: (10 / 1920) * width,
        fontSize: width * 0.0166666666666667,
    },

    searchBarContainerStyle: {
        flex: 1,
        justifyContent: 'center',
        marginTop: (50 / 1920) * width,
    },
    clearButton: {
        position: 'absolute',
        right: (10 / 1920) * width,
        top: '50%',
        transform: [{ translateY: -((width * 0.015625) / 2) }],
        width: width * 0.015625,
        height: width * 0.015625,
        borderRadius: width * 0.0078125,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
    },
    clearButtonText: {
        fontSize: (14 / 1920) * width,
        color: '#000000',
    },
    searchIcon: {
        position: 'absolute',
        left: width * 0.01,
        top: '50%',
        transform: [{ translateY: -(width * 0.00520833333333333333333333333333)} , { scale: 1.5 }],
    },
    selectedResultsContainer: {
        position: 'absolute',
        top: width * 0.72,
        paddingHorizontal: (10 / 1920) * width,
    },

    selectedResultsRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },

    selectedResultCard: {
        width: width * 0.15,
        height: width * 0.15,
        backgroundColor: 'FFFEF4',
        marginRight: width * 0.05208333333333333333333333333333,
        marginLeft: width * 0.05208333333333333333333333333333,
        borderWidth: width * 0.00520833333333333333333333333333,
        borderColor: '#271C00',
        alignItems: 'center',
        borderRadius: width * 0.01041666666666666666666666666667,
        marginBottom: (50 / 1920) * width,
        position: 'relative',
    },

    textContainer: {
        width: '80%',
        backgroundColor: '#B68F40',
        height: '15%',
        borderRadius: (5 / 1920) * width,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: width * 0.015625,
    },

    selectedResultText: {
        fontSize: width * 0.0125,
        color: '#271C00',
        textAlign: 'center',
    },
    closeButton: {
        position: 'absolute',
        top: 0,
        right: 0,
        padding: (2 / 1920) * width,
        backgroundColor: 'transparent',
    },
    sendImageButton: {
        width: '80%',
        height: '50%',
        backgroundColor: '#CCCCCC',
        borderRadius: width * 0.00260416666666666666666666666667,
        marginTop: width * 0.015625,
        alignItems: 'center',
        justifyContent: 'center',
    },
    sendImageButtonText: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: width * 0.01041666666666666666666666666667,
    },

    logoImage: {
        width: width * 0.0520833333333333,
        height: width * 0.0520833333333333,
        borderRadius: width * 0.0260416666666667,
    },
    imageContainer1: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginRight: width * 0.0104166666666667,
    },

    checkboxContainer: {
        position: 'absolute',
        top: width * 0.363,
        flexDirection: 'row',
        alignItems: 'center',
    },
    checkboxLabel: {
        marginLeft: width * 0.00520833333333333333333333333333,
        color: '#271C00',
        fontSize: width * 0.00833333333333333333333333333333,
    },


    continueButtonText: {
        color: '#271C00',
        fontSize: width * 0.01145833333333333333333333333333,
        fontWeight: 'bold',
        textAlign: 'center',
        textAlignVertical: 'center',
    },
    redSendImageButton: {
        backgroundColor: '#FF0000',
    },

    backButton: {
        marginLeft: width * 0.0052083333333333,
      },


      cropperContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: (20 / 1920) * width,
      },
      controlsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: (10 / 1920) * width,
      },
      slider: {
        width: width * 0.1041666666666667,
      },
      zoomButtons: {
        flexDirection: 'row',
        marginLeft: (10 / 1920) * width,
      },
      cropperWrapper: {
        width: '80%',
        height: width * 0.2083333333333333,
        backgroundColor: '#f0f0f0',
        overflow: 'hidden',
        borderRadius: (10 / 1920) * width,
      },
      cropButton: {
        marginTop: (20 / 1920) * width,
        padding: (10 / 1920) * width,
        backgroundColor: '#166034',
        borderRadius: (5 / 1920) * width,
        marginRight: (20 / 1920) * width,
      },
      cropButtonText: {
        color: '#fff',
        fontWeight: 'bold',
      },

      cropButton1: {
        marginTop: (20 / 1920) * width,
        padding: (10 / 1920) * width,
        backgroundColor: '#166034',
        borderRadius: (5 / 1920) * width,
      },
      
      
      row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      },

      buttonView33: {
        width: width * 0.200,
        height: width * 0.05,
        borderRadius: width * 0.014,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#809C30',

      },
    
    
      buttonText33: {
        color: 'white',
        fontSize: width * 0.015,
        textAlign: 'center',
      },

      modalContainer: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'flex-start',
      },

      closeButton1: {
        position: 'absolute',
        top: width * 0.0208333333333333,
        right: width * 0.0208333333333333,
        zIndex: 1, 
        backgroundColor: 'white', 
        borderRadius: '50%', 
        padding: (10 / 1920) * width,
        borderWidth: (1 / 1920) * width,
        borderColor: '#ccc',
      },

      scrollViewModalContent: {
        flexGrow: 1,
        justifyContent: 'center',
      
      },

      imageContainer22: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center', 
    
      },

      navbar2: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: width * 0.1,
        backgroundColor: '#166034',
        width: '110%',
        marginTop: (100 / 1920) * width,
      },
      navbarFixed: {
        position: 'absolute',
        bottom: 0,
      },
      navbarScroll: {
        position: 'relative',
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

      button1: {
        backgroundColor: '#F5F5F5',
        borderRadius: '50%',
        width: width * 0.1302083333333333,
        height: width * 0.1302083333333333,
        alignItems: 'center',
        justifyContent: 'center',
      },


      
stepView: {
  alignItems: 'center',
  flexDirection: 'row',
  justifyContent: 'center',
  width: '100%',
  top: -100,
},

stepText: {
  fontSize: (48 / 1920) * width,
  color: 'white',
  fontWeight: 'bold'
},


retStep1: {
  width: (200 / 1920) * width,
  height: (15 / 1920) * width,
  backgroundColor: '#9ccc65',
  marginRight: (20 / 1920) * width,
  marginLeft: (20 / 1920) * width,
  borderRadius: (4 / 1920) * width,
},
retStep2: {
  width: (200 / 1920) * width,
  height: (15 / 1920) * width,
  backgroundColor: '#9ccc65',
  marginRight: (20 / 1920) * width,
  marginLeft: (20 / 1920) * width,
  borderRadius: (4 / 1920) * width,
},


retStep3: {
  width: (200 / 1920) * width,
  height: (15 / 1920) * width,
  backgroundColor: '#ccc',
  marginRight: (20 / 1920) * width,
  marginLeft: (20 / 1920) * width,
  borderRadius: (4 / 1920) * width,
},

circ1: {
  width: (100 / 1920) * width,
  height: (100 / 1920) * width,
  borderRadius: '50%',
  backgroundColor: '#9ccc65',
  alignItems: 'center',
  justifyContent: 'center',
},

circ2: {
  width: (100 / 1920) * width,
  height: (100 / 1920) * width,
  borderRadius: '50%',
  backgroundColor: '#9ccc65',
  alignItems: 'center',
  justifyContent: 'center',
},

circ3: {
  width: (100 / 1920) * width,
  height: (100 / 1920) * width,
  borderRadius: '50%',
  backgroundColor: '#9ccc65',
  alignItems: 'center',
  justifyContent: 'center',
},

circ4: {
  width: (100 / 1920) * width,
  height: (100 / 1920) * width,
  borderRadius: '50%',
  backgroundColor: '#ccc',
  alignItems: 'center',
  justifyContent: 'center',
},


    });
};
