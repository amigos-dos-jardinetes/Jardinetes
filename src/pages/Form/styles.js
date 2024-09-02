import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: (20 / 1920) * width,
    backgroundColor: '#F5F3E1', 
    width: (1200 / 1920) * width,
    top: (450 / 1920) * width,

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
    color: '#6f8a3b', // cor do título
  },
  label: {
    marginBottom: (5 / 1920) * width,
    fontSize: (16 / 1920) * width,
    fontWeight: 'bold',
    color: '#271C00', // cor do texto das labels
  
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


  input2: {
    height: (40 / 1920) * width,
    borderColor: '#6f8a3b',
    borderWidth: (1 / 1920) * width,
    paddingHorizontal: (10 / 1920) * width,
    marginBottom: (20 / 1920) * width,
    backgroundColor: '#4C6523', 
    color: 'white',
    fontSize: (20 / 1920) * width,
  },
  button: {
    backgroundColor: '#6f8a3b', // verde do botão
    paddingVertical: (10 / 1920) * width,
    paddingHorizontal: (20 / 1920) * width,
    borderRadius: (5 / 1920) * width,
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: (10 / 1920) * width,
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


  navbar2: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: width * 0.06814583333333333333333333333333,
    backgroundColor: '#166034',
    position: 'absolute',
    top: (1700 / 1920) * width,
    right: 0,
    width: '100%',

  },
  imageContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginRight: width * 0.0104166666666667, // Adiciona margem à direita
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

  utfprImage: {
    width: 144 * (width * 0.00067708333),
    height:57 * (width * 0.00067708333),
    marginLeft: width * 0.0208333333333333,
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
  width: '80%', // Ajuste a largura do container do Cropper
  height: width * 0.2083333333333333, // Defina a altura para limitar o tamanho da imagem
  backgroundColor: '#f0f0f0', // Cor de fundo para o wrapper
  overflow: 'hidden', // Garante que o Cropper não ultrapasse os limites
  borderRadius: 10, // Adiciona bordas arredondadas
},
cropButton: {
  marginTop: 20,
  padding: 10,
  backgroundColor: '#166034',
  borderRadius: 5,
},
cropButtonText: {
  color: '#fff',
  fontWeight: 'bold',
},

});
