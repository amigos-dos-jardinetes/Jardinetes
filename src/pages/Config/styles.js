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
        height: width * 0.06814583333333333333333333333333,
        backgroundColor: '#166034',
        position: 'absolute',
        top: 0,
        right: 0,
        width: '100%',
        zIndex: 2,
      },
    
      backButton: {
        marginLeft: width * 0.0052083333333333,
      },

      navbarButton: {
        fontSize: width * 0.0166666666666667,
        color: '#FFF',
        fontWeight: 'bold'
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

      perfil: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',

      },

      
     
      balao: {
        top: width * 0.1041666666666667,
        width: width * 0.5729166666666667,
        height: width * 0.0520833333333333,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#B68F40',
        borderRadius: width * 0.015625,
      },    
      title: {
        color: '#271C00',
        fontSize: width * 0.021875,
      },

      card1: {
        zIndex: width * 0.0052083333333333,
            top: width * 0.1041666666666667,
            width: width * 0.4166666666666667,
            height: width * 0.2083333333333333,
            backgroundColor: '#809C30',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: width * 0.0104166666666667,
            marginTop: width * 0.0260416666666667,

      },

      balao2: {
        width: width * 0.5729166666666667,
        height: width * 0.0520833333333333,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#B68F40',
        borderRadius: width * 0.015625,
      },    

      card2: {
        width: width * 0.3125,
        height: width * 0.4166666666666667,
        backgroundColor: '#809C30',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: width * 0.0104166666666667,
        marginTop: width * 0.0260416666666667,
    },
    wallpaper: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        top: width * 0.1302083333333333,
  
    },

    button2: {
        backgroundColor: '#F5F5F5',
        width: width * 0.2083333333333333,
        height: width * 0.3645833333333333,
      },

      imageContainer22: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center', 
    
      },

      imageContainer33: {
        top: width * 0.87,
        position: 'absolute',
        flexDirection: 'row',
        alignItems: 'center',
        left: width * 0.8333333333333333,
      },
    
      araucarias: {
        width: width * 0.1651041666666667 * 0.8,
        height: width * 0.146875 * 0.8,
      },
    
    

      navbar2: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: width * 0.1,
        backgroundColor: '#166034',
        position: 'absolute',
        bottom: 0,
        top: width * 0.97,
        right: 0,
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

      

      buttonText: {
        color: 'black',
        fontSize: width * 0.0145833333333333,
      },


      
cropperContainer: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  padding: width * 0.0104166666666667,
},
controlsContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: (10 /1920) * width,
},
slider: {
  width: width * 0.1041666666666667,
},
zoomButtons: {
  flexDirection: 'row',
  marginLeft: (10 /1920) * width,
},
cropperWrapper: {
  width: '80%',
  height: width * 0.2083333333333333,
  backgroundColor: '#f0f0f0',
  overflow: 'hidden',
  borderRadius: (10 /1920) * width,
},
cropButton: {
  marginTop: (20 /1920) * width,
  padding: (10 /1920) * width,
  backgroundColor: '#166034',
  borderRadius: (5 /1920) * width,
  marginRight: (20 /1920) * width,
},

cropButton1: {
    marginTop: (20 /1920) * width,
    padding: (10 /1920) * width,
    backgroundColor: '#166034',
    borderRadius: (5 /1920) * width,
  },
cropButtonText: {
  color: '#fff',
  fontWeight: 'bold',
},

row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
}

  });
};
