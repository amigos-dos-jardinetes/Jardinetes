import { StyleSheet, Dimensions } from 'react-native';



const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({

  scrollViewContent: {
    width: width,  // Largura da tela
    height: 1024, // Altura da imagem
  },
  backgroundImage: {
    width: width, // Largura da tela
    height: 1450,
    resizeMode: 'contain', // ou 'stretch' dependendo do efeito desejado
  },

  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '140px',
    backgroundColor: '#195439',
    position: 'absolute',
    top: 0,
    right: 0, // Alinha a barra de navegação à direita
    width: '100%',
    zIndex: 2,
  },

  navbarButton: {

    fontSize: 32, // Tamanho do texto dos botões
    color: '#FFF',
    fontWeight: 'bold'
  },

  buttonContainer: {
   
    borderRadius: '50%',
    position: 'absolute',
    top: '46.3%',
    left: '32.7%',
    zIndex: 1,
  },

  buttonContainer2: {

    borderRadius: '50%',
    position: 'absolute',
    top: '46.9%',
    right: '32.9%',
    zIndex: 1,
  },

  circularButton: {
    padding: 125,

  },



});