import { StyleSheet, useWindowDimensions } from 'react-native';

export const styles = () => {
  const { width, height } = useWindowDimensions(); 

  return StyleSheet.create({

  scrollViewContent: {
    width: width,
    height: '100%',
  },

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

  
backButton: {
  marginLeft: width * 0.0052083333333333,
},

column:{
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

},

row1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    top: width * 0.46875,
    
},

row2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: width * 0.965,

},

name: {
    fontSize: width * 0.0416666666666667,
    top: width * 0.1145833333333333,
    color: '#166034',
  },

  retImage: {
    width: width * 0.5208333333333333,
    height: width * 0.29296875,
    position: 'absolute',
    top: width * 0.1822916666666667,

  },

  jardineteImage: {
    width: '100%', 
    height: '100%',
    resizeMode: 'cover', 
    borderWidth: width * 0.0104166666666667,
    borderColor: '#1E6131',
    borderRadius: width * 0.0052083333333333,
  },

  title: {
    color: '#271C00',
    fontSize: width * 0.025,
    marginBottom: width * 0.0260416666666667,
  },

  ret1: {
    width: width * 0.5208333333333333,
    padding: width * 0.001,
    borderWidth: width * 0.0078125,
    borderColor: '#271C00',
    borderRadius: width * 0.0052083333333333,
    backgroundColor: '#FFFEF4',
  },
  
  ret2: {
    width: width * 0.3125,
    borderWidth: width * 0.0078125,
    borderColor: '#271C00',
    borderRadius:  width * 0.0052083333333333,
    backgroundColor: '#FFFEF4',
  },

  column1:{
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: width * 0.0260416666666667,
    

},

ret3: {
    width: width * 0.5208333333333333,
    height: width * 0.2604166666666667,
    borderWidth: width * 0.0078125,
    borderColor: '#271C00',
    borderRadius: width * 0.0052083333333333,
    flexDirection: 'column',
    backgroundColor: '#FFFEF4',
  },

  ret4: {
    width: width * 0.3125,
       height: width * 0.2604166666666667,
    borderWidth: width * 0.0078125,
    borderColor: '#271C00',
    borderRadius:  width * 0.0052083333333333,
    backgroundColor: '#FFFEF4',
  },

column2:{
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: width * 0.0260416666666667,

},

inventoryImage:{
    width: width * 0.0677083333333333,
    height: width * 0.0677083333333333,
    borderRadius: width * 0.0052083333333333,
    borderWidth: width * 0.00625,
    borderColor: 'red',
    marginRight: width * 0.0104166666666667,
    marginLeft: width * 0.0104166666666667,
    marginTop: width * 0.0104166666666667,
},

row3: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
},

textData: {
    color: '#271C00',
    fontSize: width * 0.01875,
    marginTop: width * 0.0104166666666667,
    marginBottom: width * 0.0104166666666667,
    marginRight: width * 0.0104166666666667,
    marginLeft: width * 0.0104166666666667,
    textAlign: 'justify',
    lineHeight: width * 0.03125,
    textIndent: width * 0.015625, 
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
        top: width * 1.405,
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

  imageContainer33: {
    top: width * 1.305,
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    right: width * 0.04,
  },

  araucarias: {
    width: width * 0.1651041666666667 * 0.8,
    height: width * 0.146875 * 0.8,
  },

  imageContainer22: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center', 

  },

  circle: {
    zIndex: -2,
    width: width * 0.2604166666666667,
    height: width * 0.2604166666666667,
    borderRadius: '50%',
    backgroundColor: '#809C30',
    position: 'absolute',
    right: -(width * 0.078125),
  },

  giantRet: {
    zIndex: -2,
    width: width * 0.3125,
    height: width * 1.197916666666667,
    backgroundColor: '#B68F40',
    position: 'absolute',
    left: 0,

  },

  row4: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: width * 0.078125,
},

  bt1: {
    backgroundColor: '#B68F40',
    borderRadius: width * 0.0260416666666667,
    width: width * 0.109,
    height: width * 0.04,
    alignItems: 'center',
    justifyContent: 'center',
  },

  bt2: {
    backgroundColor: '#99CB47',
    borderRadius: width * 0.0260416666666667,
    width: width * 0.109,
    height: width * 0.04,
    alignItems: 'center',
    justifyContent: 'center',
  },

  bt3: {
    backgroundColor: '#99CB47',
    borderRadius: width * 0.0260416666666667,
    width: width * 0.109,
    height: width * 0.04,
    alignItems: 'center',
    justifyContent: 'center',
  },

  bt1View: {
    left: (50 / 1920) * width,
  },

  bt2View: {
    left: (300 / 1920) * width,
  },

  bt3View: {
    left: (550 / 1920) * width,
  },
  textBt: {
    fontSize: width * 0.0145833333333333,
    color: 'white',
  },


});
};
