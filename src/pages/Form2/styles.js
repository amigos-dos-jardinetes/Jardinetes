import { StyleSheet, useWindowDimensions } from 'react-native';

export const styles = () => {
  const { width, height } = useWindowDimensions(); 

  return StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: (20 / 1920) * width,
    backgroundColor: '#F5F3E1', 
    width: (1200 / 1920) * width,
    top: (475 / 1920) * width,
    maxHeight: (1000 / 1920) * width,
    position: 'absolute',

  },

  vamos:{
    width: (699 / 1920) * width,
    height: (77 / 1920) * width,
    top: (350 / 1920) * width,
    position: 'absolute',
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

  container1: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: (20 / 1920) * width,
  },
  title: {
    fontSize: (28 / 1920) * width,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: (20 / 1920) * width,
    color: '#6f8a3b',
  },
  label: {
    marginBottom: (5 / 1920) * width,
    fontSize: (28 / 1920) * width,
    fontWeight: 'bold',
    color: '#271C00',
    flexDirection: 'row',
  
  },

  label1: {
    marginBottom: (5 / 1920) * width,
    fontSize: (28 / 1920) * width,
    fontWeight: 'bold',
    color: '#271C00',
    flexDirection: 'row',
    marginTop: (25 / 1920) * width,
  
  },
  input: {
    height: (40 / 1920) * width,
    borderColor: '#6f8a3b',
    borderWidth: (1 / 1920) * width,
    paddingHorizontal: (10 / 1920) * width,
    marginBottom: (20 / 1920) * width,
    backgroundColor: '#166034',
    color: 'white',
    fontSize: (20 / 1920) * width,
    flexDirection: 'row',
    width: (400 / 1920) * width,
  },

  textRow: {
    flexDirection: 'row',   
    flexWrap: 'wrap',        
    alignItems: 'center',    
    marginTop: (25 / 1920) * width,
  },

  textInputCorrido: {
    borderBottomWidth: 1,   
    borderBottomColor: '#000', 
    padding: 0,              
    marginHorizontal: (5 / 1920) * width,  
    fontSize: (24 / 1920) * width,        
    width: (250 / 1920) * width,           
    alignItems: 'center',
    justifyContent: 'center',
    color: '#166034', 
    fontWeight: 'bold',
    textAlign: 'center',
  },

  picker: {
    height: (50 / 1920) * width, 
    width: (150  / 1920) * width,
    marginHorizontal: (5  / 1920) * width,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: (24 / 1920) * width,   
    fontWeight: 'bold',
    color: '#166034', 
  
  },

  bola:{
    zIndex: -1,
    backgroundColor: '#809C30',
    width: (600 / 1920) * width,
    height: (600 / 1920) * width,
    left: (1400 / 1920) * width,
    position: 'absolute',
    top: (850 / 1920) * width,
    borderRadius: '50%',
  },

  bola2:{
    zIndex: -1,
    backgroundColor: '#4C6523',
    width: (1000 / 1920) * width,
    height: (1000 / 1920) * width,
    right: (1300 / 1920) * width,
    position: 'absolute',
    top: (400 / 1920) * width,
    borderRadius: '50%',
  },

  bola3:{
    zIndex: -1,
    backgroundColor: 'transparent',
    borderColor: '#B68F40',
    borderWidth: (25 / 1920) * width,
    width: (400 / 1920) * width,
    height: (400 / 1920) * width,
    left: (1700 / 1920) * width,
    position: 'absolute',
    top: (270 / 1920) * width,
    borderRadius: '50%',
  },

  rowContainer: {
    flexDirection: 'row', 
    alignItems: 'center', 
    marginVertical: 8,
  },

  input2: {
    height: (40 / 1920) * width,
    borderColor: '#6f8a3b',
    borderWidth: (1 / 1920) * width,
    paddingHorizontal: (10 / 1920) * width,
    marginBottom: (20 / 1920) * width,
    backgroundColor: '#4C6523', 
    color: 'white',
    fontSize: (20 / 1920) * width,
    flexDirection: 'row',
  },
  button: {
    backgroundColor: '#6f8a3b',
    paddingVertical: (10 / 1920) * width,
    paddingHorizontal: (20 / 1920) * width,
    borderRadius: (5 / 1920) * width,
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: (20 / 1920) * width,
  },
  button1: {
    backgroundColor: '#166034',
    width: (350 / 1920) * width,  
    paddingVertical: (50 / 1920) * width, 
    paddingHorizontal: (15 / 1920) * width, 
    borderRadius: (5 / 1920) * width, 
    alignItems: 'center', 
    justifyContent: 'center', 
    marginBottom: (10 / 1920) * width,
    marginTop: (10 / 1920) * width,
    alignSelf: 'center',
  },

  buttonText: {
    color: 'white',
    fontSize: (16 / 1920) * width,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonText2: {
    color: 'white',
    fontSize: (24 / 1920) * width,
    fontWeight: 'bold',
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
          top: (1700 / 1920) * width,
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

  imageContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginRight: width * 0.0104166666666667,
  },

  imageContainer33: {
    top: width * 0.86,
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    left: width * 0.4333333333333333,
  },




  logoImage: {
    width: width * 0.0520833333333333,
    height: width * 0.0520833333333333,
    borderRadius: width * 0.0260416666666667,
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

  araucarias2: {
    width: width * 0.1155729166666667,
    height: width * 0.1028125,
    position: 'absolute',
    zIndex: 1,
  },

  link: {
    textDecorationLine: 'underline',
  
},

backButton: {
  marginLeft: width * 0.0052083333333333,
},

cropperContainer: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  padding: 20,
},
controlsContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: 10,
},
slider: {
  width: width * 0.1041666666666667,
},
zoomButtons: {
  flexDirection: 'row',
  marginLeft: 10,
},
cropperWrapper: {
  width: '80%',
  height: width * 0.2083333333333333,
  backgroundColor: '#f0f0f0',
  overflow: 'hidden',
  borderRadius: 10,
},
cropButton: {
  marginTop: 20,
  padding: 10,
  backgroundColor: '#166034',
  borderRadius: 5,
  marginRight: 20,
},
cropButtonText: {
  color: '#fff',
  fontWeight: 'bold',
},

errorText: {
  fontSize: width * 0.009375,
  color: 'red',
  textAlign: 'center',
  marginTop: width * 0.0052083333333333,
},

cropButton1: {
  marginTop: 20,
  padding: 10,
  backgroundColor: '#166034',
  borderRadius: 5,
},


row: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
},


});
};
;
