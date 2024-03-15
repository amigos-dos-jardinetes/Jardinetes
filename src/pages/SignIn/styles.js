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
  },

  input: {
    width: '250%',
    height: 32,
    backgroundColor: '#B68F40',
    borderRadius: 7,
  },
  input2: {
    width: '250%',
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
    left: '-112%'
  },

  checkboxContainer: {
    flexDirection: 'row', // Alinha os itens na horizontal
    alignItems: 'center', // Alinha os itens verticalmente ao centro
  },
  checkboxLabel: {
    marginLeft: 8, // Adiciona um espaçamento entre o ícone e o texto
  },

  checkcont: {
    marginTop: 5,
    left: '-78%'
  },

  forgot: {
    top: -23,
    left: '91%'
  },

  buttonLogin: {
    marginTop: 10,
    backgroundColor: '#166034', // Cor de fundo do botão
    color: 'white', // Cor do texto
    paddingVertical: '2%', // Espaçamento vertical dentro do botão
    paddingHorizontal: '50%', // Espaçamento horizontal dentro do botão
    borderRadius: 30, // Bordas arredondadas
  },
  buttonTextLogin: {
    color: 'white', // Cor do texto
    textAlign: 'center', // Alinhamento do texto
    fontWeight: 'bold', // Peso da fonte
    fontSize: width*0.016,
  },
  buttonGoogle: {
    marginTop: 10,
  },
  imageGoogle:{
    width: 50,
    height: 50,
  },

  signUp:{
    marginTop: 10,
  },

  signUpText:{
    fontSize: width * 0.01,
  },
});
