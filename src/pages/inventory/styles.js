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
    height: (width * 2798) / 1440,
    resizeMode: 'contain',
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
          top: width * 1.86,
          right: 0,
          width: '100%',
  
        },
  
        imageContainer33: {
          top: width * 1.85,
          position: 'absolute',
          flexDirection: 'row',
          alignItems: 'center',
          left: width * 0.4333333333333333,
        },

        utfprImage3: {
          width: 144 * (width * 0.00067708333),
          height:57 * (width * 0.00067708333),
        },
      
        araucarias: {
          zIndex: 1,
          width: width * 0.1651041666666667,
          height: width * 0.146875,
          left: width * 0.3645833333333333,
          top: -(210 / 1920) * width,
          position: 'absolute',
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

  navbarButton: {
    fontSize: width * 0.0166666666666667,
    color: '#FFF',
    fontWeight: 'bold'
  },

  card: {
    zIndex: 1,
    backgroundColor: 'transparent',
    borderRadius: 85,
    top: '26.5%',
    width: '90%',
    height: '50%',
    left: width - (width / 1.05),
  },

  containerButton1: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: width * 0.0104166666666667,
    marginTop: width * 0.04,
  },


  containerButton2: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: width * 0.0104166666666667,
    marginTop: width * 0.03125,
  },

  containerButton3: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: width * 0.0104166666666667,
    marginTop: width * 0.03125,
  },

  containerButton4: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: width * 0.22760416666666666666666666666667,
    marginTop: width * 0.03125,
  },


  button: {
    width: width * 0.15625,
    height: width * 0.15625,
    backgroundColor: '#809C30',
    borderRadius: width * 0.0104166666666667,
    marginBottom: width * 0.0104166666666667,
  },

  button1: {
    width: width * 0.15625,
    height: width * 0.15625,
    backgroundColor: '#1E6131',
    borderRadius: width * 0.0104166666666667,
    marginBottom: width * 0.0104166666666667,
  },

  button2: {
    width: width * 0.15625,
    height: width * 0.15625,
    backgroundColor: '#F5F3E1',
    borderRadius: width * 0.0104166666666667,
    marginBottom: width * 0.0104166666666667,
  },

  image: {
    flex: 1,
    width: '85%',
    height: '85%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'contain',
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonView: {
    width: width * 0.68,
    height: width * 0.171875,
    top: width * 0.511,
    left: width * 0.168,
    borderRadius: width * 0.015625,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#271C00',
    zIndex: 1,
    position: 'absolute',
  },
  buttonView2: {
    width: width * 0.7,
    height: width * 0.171875,
    top: width * 0.501,
    left: width * 0.142,
    borderRadius: width * 0.015625,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1E6131',
    zIndex: 0,
    position: 'absolute',
  },

  buttonView3: {
    width: width * 0.754,
    height: width * 0.145,
    top: width * 0.195,
    left: width * 0.12,
    borderRadius: width * 0.015625,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#271C00',
    zIndex: 0,
    position: 'absolute',
  },

  center: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',

  },
  
  buttonView33: {
    width: width * 0.400,
    height: width * 0.105,
    top: width * 0.375,
    borderRadius: width * 0.015625,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#809C30',
    zIndex: 0,
    position: 'absolute',
  },


  buttonText33: {
    color: 'white',
    fontSize: width * 0.02,
    textAlign: 'center',
  },

  buttonText: {
    color: 'white',
    fontSize: width * 0.04,
    textAlign: 'center',
  },


  logoImage: {
    width: width * 0.0520833333333333,
    height: width * 0.0520833333333333,
    borderRadius: width * 0.0260416666666667,
  },
  imageContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginRight: width * 0.0104166666666667,
  },

  
backButton: {
  marginLeft: width * 0.0052083333333333,
},

modalContainer: {
  flex: 1,
  backgroundColor: 'white',
  justifyContent: 'flex-start',
},
closeButton: {
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


stepView: {
  alignItems: 'center',
  flexDirection: 'row',
  justifyContent: 'center',
  width: '100%',
  top: (200 / 1920) * width,
},

stepText: {
  fontSize: (48 / 1920) * width,
  color: 'white',
  fontWeight: 'bold'
},


ret1: {
  width: (200 / 1920) * width,
  height: (15 / 1920) * width,
  backgroundColor: '#9ccc65',
  marginRight: (20 / 1920) * width,
  marginLeft: (20 / 1920) * width,
  borderRadius: (4 / 1920) * width,
},
ret2: {
  width: (200 / 1920) * width,
  height: (15 / 1920) * width,
  backgroundColor: '#ccc',
  marginRight: (20 / 1920) * width,
  marginLeft: (20 / 1920) * width,
  borderRadius: (4 / 1920) * width,
},

ret3: {
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
  backgroundColor: '#ccc',
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
