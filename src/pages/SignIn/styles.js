import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },

  image: {
    width: width, // Largura da tela
    height: 1450, // Altura absoluta da imagem
    flex: 1,
    justifyContent: 'center',
    position: 'relative', // Permite que os elementos posicionados dentro do contêiner sejam relativos à imagem
  },

  navbar: {
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 2,
    position: 'absolute', // Define a posição absoluta do componente
    left: '12.7%',
    width: width - 430,
    top: 260, // Ajusta a posição vertical do componente
    justifyContent: 'space-around',
  },

  navbarButton: {
    fontFamily: 'Helvetica',
    fontSize: width * 0.018, // Não é necessário usar 'px' em React Native
    fontWeight: 'bold',
    color: '#271C00',
    marginBottom: '50px',
    marginRight: width * 0.015,
  },

  card: {
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
    position: 'absolute', // Define a posição absoluta do componente
    backgroundColor: '#FFFEF4', // Cor de fundo do card
    borderRadius: 85, // Borda arredondada
    top: 400,
    width: 693,
    height: 685,
    left: width - (width / 1.44),
  },
  containerLogo: {
    flex: 1,
    justifyContent: 'flex-start', // Alinhe o logo para o topo
    alignItems: 'center',
    marginTop: '-40%', // Mova o logo para cima ajustando a margem superior
  },
  containerwelcome: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '-26%',
  },
  imagelogo: {
    width: 200,
    height: 200
  },
  welcome: {
    width: 311,
    height: 85,
  }

});
