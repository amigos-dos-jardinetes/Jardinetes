import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    width: width,
    height: '100%',
    resizeMode: 'contain',
  },

  image: {
    width: width,
    height: (width * 1024) / 1440,
    resizeMode: 'contain',
  },

  errorText: {
    color: 'red',
    fontSize: 14,
    marginVertical: 5,
    textAlign: 'center',
  },

  navbar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,
    position: 'absolute', 
    left: '12.7%',
    width: width * 0.7760416666666667,
    top: '18%',
    justifyContent: 'space-around',
  },

  navbarButton: {
    fontFamily: 'Helvetica',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: width * 0.0145, 
    fontWeight: 'bold',
    color: '#271C00',
    marginBottom: '50px',
    marginRight: width * 0.015,
  },

  card: {
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
    position: 'absolute',
    backgroundColor: '#FFFEF4', 
    borderRadius: 85,
    top: '28%',
    width: '30%',
    height: '50%',
    left: width - (width / 1.52),
  },
  containerwelcome: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '-1%',
    marginBottom: '5%',
  },


  containerLogo: {
    flex: 1,
    alignItems: 'center',
    marginTop: '-21%', 
  
  },

  imagelogo: {
    width: width * 0.104166666,
    height: width * 0.104166666,
  },
  welcome: {
    width: width * 0.16197916666,
    height: width * 0.044270833333,
  },



  input: {
    width: '75%',
    height: 32,
    backgroundColor: '#B68F40',
    borderRadius: 7,
  },
  input2: {
    width: '75%',
    marginTop: 4,
    height: 32,
    backgroundColor: '#00B44A',
    borderRadius: 7,
  },

  inpText: {
    marginBottom: 4,
    borderRadius: 7,
    fontSize: width * 0.01,
    alignItems: 'flex-start',
  },
  inpText2: {
    marginTop: 20,
    borderRadius: 7,
    fontSize: width * 0.01,
    alignItems: 'flex-start',
  },
  textcont: {
    left: '-33.3%'
  },
  textcont2: {
    left: '-32.5%'
  },

  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center', 
  },
  checkboxLabel: {
    marginLeft: 8, 
    fontSize: width * 0.0075,
  },

  checkcont: {
    marginTop: 5,
    left: '-20.78%'
  },

  forgot: {
    top: width * 0.005,
    left: '25.84%',
  },

  forgotText: {
    fontSize: width * 0.0075,
  },

  buttonLogin: {
    marginTop: 30,
    backgroundColor: '#166034', 
    color: 'white', 
    paddingVertical: '1%', 
    paddingHorizontal: '12%', 
    borderRadius: 30, 
  },
  buttonTextLogin: {
    color: 'white', 
    textAlign: 'center',
    fontWeight: 'bold', 
    fontSize: width * 0.016,
  },
  buttonGoogle: {
    marginTop: 10,
  },
  imageGoogle: {
    width: width * 0.026041666666666,
    height: width * 0.026041666666666,
  },

  signUp: {
    marginTop: 10,
  },

  signUpText: {
    fontSize: width * 0.01,
  },

  smallTree: {
    width: width * 0.0630208333333333,
    height: width * 0.1489583333333333,
  },

  bigTree: {
    width: width * 0.090625,
    height: width * 0.177484375,
  },

  treeView1: {
    zIndex: 2,
    position: 'absolute', 
    left: '29%',
    top: '63.5%',
  },

  treeView2: {
    zIndex: 2,
    position: 'absolute', 
    right: '28.5%',
    top: '63.5%', 
  },

  treeView3: {
    zIndex: 2,
    position: 'absolute', 
    left: '18%',
    top: '59.46%', 
  },

  treeView4: {
    zIndex: 2,
    position: 'absolute',
    right: '17.21%',
    top: '59.46%', 
  },
  
});
