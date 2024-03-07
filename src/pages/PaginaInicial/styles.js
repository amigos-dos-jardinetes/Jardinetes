import { StyleSheet, Dimensions } from 'react-native';



const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({

  scrollViewContent: {
    width: width,  // Largura da tela
    height: 10000, // Altura da imagem
  },
  backgroundImage: {
    width: width, // Largura da tela
    height: 10000,
    resizeMode: 'contain', // ou 'stretch' dependendo do efeito desejado
  },
  content: {
    // Adicione estilos para o conteúdo da sua página, como margens, preenchimentos, etc.
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

  overlayImage: {
    position: 'absolute',
    width: 1620,
    height: 709,
    left: (width - 1595) / 2,
    top: 609,

  },
  keep: {
    position: 'absolute',
    width: 1250, // Defina a largura desejada
    height: 660,    // Deixe a altura como 0 para ajustar automaticamente
    aspectRatio: 1782 / 934, // Proporção original da imagem
    left: (width - 1250) / 2,
    top: 2520,
  },


  mascote: {
    position: 'absolute',
    width: 730, // Defina a largura desejada
    height: 902,    // Deixe a altura como 0 para ajustar automaticamente
    aspectRatio: 521 / 644, // Proporção original da imagem
    left: 96,
    top: 6913,
  },

  blackTextBox: {
    position: 'absolute',
    left: 1046, // Ajuste a largura da caixa de texto conforme necessário
    top: 7270,
    right: 282,
  },
  blackTextBoxText: {
    fontSize: 42,
    color: '#271c00',
    textAlign: 'justify',
  },
  whiteTextBox: {
    position: 'absolute',
    left: 1026, // Ajuste a largura da caixa de texto conforme necessário
    top: 7170,
    right: 282,
  },
  whiteTextBoxText: {
    fontSize: 64,
    color: '#FFF',
    textAlign: 'center',

  },
  whiteTextBoxText1: {
    fontSize: 80,
    color: '#FFF',
    textAlign: 'left',
    lineHeight: 100,

  },

  utfprBox: {
    position: 'absolute',
    left: '24%', // Centraliza horizontalmente
    right: '25%',
    top: '18%',

  },

  quadBox1: {
    position: 'absolute',
    left: '12%', // Centraliza horizontalmente
    right: '60%',
    top: '39%',
  },

  quadboxText1: {
    fontSize: 64,
    color: '#FFF',
    textAlign: 'left',
  },

  quadBox2: {
    position: 'absolute',
    left: '69%', // Centraliza horizontalmente
    right: '12%',
    top: '36.5%',
  },

  quadboxText2: {
    fontSize: 32,
    color: '#FFF',
    textAlign: 'left',
  },


  quadBox3: {
    position: 'absolute',
    left: '53%', // Centraliza horizontalmente
    right: '30%',
    top: '41.5%',
  },

  quadboxText3: {
    fontSize: 32,
    color: '#FFF',
    textAlign: 'left',
  },

  quadBox4: {
    position: 'absolute',
    left: '72%', // Centraliza horizontalmente
    right: '12%',
    top: '46.5%',
  },

  quadboxText4: {
    fontSize: 32,
    color: '#FFF',
    textAlign: 'left',
  },

  valbox: {
    position: 'absolute',
    left: '14.5%', // Centraliza horizontalmente
    right: '40%',
    top: '52.15%',
  },

  valboxtext: {
    fontSize: 64,
    color: '#FFF',
    textAlign: 'justify',
  },

  valbox1: {
    position: 'absolute',
    left: '20%', // Centraliza horizontalmente
    right: '14%',
    top: '53.35%',
  },

  valboxtext1: {
    fontSize: 58,
    color: '#271c00',
    textAlign: 'justify',
    lineHeight: 66,
  },

  valbox2: {
    position: 'absolute',
    left: '57%', // Centraliza horizontalmente
    right: '24%',
    top: '58.8%',
  },

  valboxtext2: {
    fontSize: 58,
    color: '#271c00',
    textAlign: 'justify',
    lineHeight: 66,
  },

  valx: {
    position: 'absolute',
    left: '35%', // Centraliza horizontalmente
    right: '14%',
    top: '60.7%',
  },

  valxtext: {
    fontSize: 58,
    color: '#271c00',
    textAlign: 'justify',
    lineHeight: 66,
  },

  valy: {
    position: 'absolute',
    left: '35%', // Centraliza horizontalmente
    right: '14%',
    top: '63%',
  },

  valytext: {
    fontSize: 58,
    color: '#271c00',
    textAlign: 'justify',
    lineHeight: 66,
  },

  cur: {
    position: 'absolute',
    left: '13%', // Centraliza horizontalmente
    right: '64%',
    top: '79.55%',
  },

  curtext: {
    fontSize: 68,
    color: '#FFF',
    textAlign: 'justify',
    lineHeight: 76,
  },

  textbox5: {
    position: 'absolute',
    left: '15%', // Centraliza horizontalmente
    right: '21%',
    top: '82.1%',
  },

  text5: {
    fontSize: 42,
    color: 'black',
    textAlign: 'justify',
    lineHeight: 57,
  },

  textbox14: {
    position: 'absolute',
    left: '13.28%', // Centraliza horizontalmente
    right: '22.5%',
    top: '87.06%',
  },

  text14: {
    fontSize: 42,
    color: 'black',
    textAlign: 'justify',
    lineHeight: 48,
  },

  topButtonContainer: {
    position: 'absolute',
    top: '93.9%',
    left: '28%',
    zIndex: 1, // Para garantir que o botão fique acima do conteúdo
  },
  topButton: {

    borderRadius: '50%',
    padding: 165
  },



});