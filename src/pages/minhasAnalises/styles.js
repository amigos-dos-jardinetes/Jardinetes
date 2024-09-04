import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({

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
    marginRight: width * 0.0104166666666667, // Adiciona margem à direita
  },

  
backButton: {
  marginLeft: width * 0.0052083333333333,
},

card: {
    position: 'absolute',
    backgroundColor: '#809C30',
    alignItems: 'center',
    justifyContent: 'center',
    width: width * 0.78125,
    height: width * 0.3125,
    borderRadius: width * 0.0052083333333333,
    top: width * 0.15625,
},

row: {
    flexDirection: 'row',
},
column: {
    flexDirection: 'column',
},

navbar2: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: width * 0.06814583333333333333333333333333,
    backgroundColor: '#166034',
    position: 'absolute',
    bottom: 0,
    top: width * 0.61,
    right: 0,
    width: '100%',

  },

  araucariaContainer: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    flexDirection: 'row',
    top: width * 0.485,
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

araucarias: {
    width: width * 0.1651041666666667,
    height: width * 0.146875,
    marginRight: width * 0.0260416666666667,
    left: width * 0.41,
  },


  circle: {
        backgroundColor: 'transparent',
        borderWidth: width * 0.00625,
        borderColor: '#4C6523',
        width: width * 0.15625,
        height: width * 0.15625,
        borderRadius: '50%',
        zIndex: -3,
        position: 'absolute',
        left: -(width * 0.0625),
  },

  circle2: {
    top: width * 0.45,
    backgroundColor: 'transparent',
    borderWidth: width * 0.00625,
    borderColor: '#4C6523',
    width: width * 0.2083333333333333,
    height: width * 0.2083333333333333,
    borderRadius: '50%',
    zIndex: -3,
    position: 'absolute',
    left: -(width * 0.0625),
    overflow: 'hidden',
},

giantRet: {
        top: -300,
        width: 3000,
        height: 800,
        overflow: 'hidden',
        backgroundColor: '#4C6523',
        position: 'absolute',
        zIndex: -2,
        transform: [{ rotate: '-140deg' }],


},
  
});
