import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#195439',
        justifyContent: 'flex-end',
        backgroundColor: '#FFF',
    },
    containerLogo: {
        flex: 2,
        backgroundColor: 'transparent',  // Alteração aqui
        padding: 50,
        alignItems: 'center',
    },
    containerForm: {
        flex: 1,
        backgroundColor: '#FFF',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        padding: 20,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 12,
        textAlign: 'center',
        color: '#FFF'
    },
    logoutButton: {
        backgroundColor: '#FF6347',
        padding: 12,
        borderRadius: 5,
        marginTop: 20,
        alignItems: 'center',
        marginBottom: 75
    },
    logoutButtonText: {
        color: '#FFF',
        fontSize: 18,
    },
    logoImage: {
        width: 200,
        height: 200,
        borderRadius: 100,
    },
    backcontainer: {
        width: '37%',  // Alteração aqui
        flex: 1,        // Adição aqui
        justifyContent: 'flex-end', // Adição aqui

     
    },
    textButton: {
        backgroundColor: '#FFF',
        padding: 12,
        borderRadius: 5,
        marginTop: 20,
        alignItems: 'center',

    },
    textInfo: {
        fontSize: 20,
        
    },

    buttons: {
        alignContent: 'center',
        width: '80%', // Defina a largura desejada para os botões
        alignSelf: 'center', // Alinha os botões ao centro horizontalmente
    },
    navbar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: '10%',
        backgroundColor: '#195439',
        position: 'absolute',
        top: 0,
        right: 0, // Alinha a barra de navegação à direita
        width: '63%',
        zIndex: 2,  
    },

    navbarButton: {

        fontSize: 16, // Tamanho do texto dos botões
    },

    car:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: '45%',
        backgroundColor: '#FFF',
        position: 'absolute',
        top: '10%', // Mude de top para bottom
        right: 0,
        width: '63%',

    },


    container_map: {
        flexDirection: 'row',
        justifyContent: 'space-around', // Centraliza horizontalmente
        alignItems: 'center',    // Centraliza verticalmente
        height: '45%',
        backgroundColor: 'blue',
        position: 'absolute',
        top: '55%',
        right: 0,
        width: '31.5%',
      
       
        
      },

  container_map1:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '45%',
    backgroundColor: 'yellow',
    position: 'absolute',
    top: '55%',
    left: '37%', // Alinha a barra de navegação à direita
    width: '31.5%',
    
  },

  container1: {
    maxWidth: '40%',
    maxHeight: '60%',
    borderRadius: '8px',
},
carouselItem: {
    position: 'relative',
    width: '100%',
    height: '100%', // Defina a altura desejada para os itens do carrossel
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 0 8px rgba(0,0,0,0.1)',
},
carouselImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover', // Ajuste para 'contain' se preferir que a imagem seja totalmente visível
},
overlayContent: {
    textAlign: 'center',
    color: 'white',
    borderRadius: '8px',
    // Adicione mais estilos conforme necessário
},
carouselContainer: {
    position: 'relative',
    borderRadius: 8,  // Define a borda do carrossel
    overflow: 'hidden',
  },
  textgen: {
    alignItems: 'center',
    position: 'absolute',
    top: '12%',
    zIndex: 2,
    fontSize: 20,
},


carouselText: {
    position: 'absolute',
    bottom: '10px',
    width: '100%',
    background: 'rgba(255, 255, 255, 0.8)', 
    color: 'white',
    padding: '5%',
    margin: '0',
    fontSize: '20px',
    textAlign: 'center', 

},
container2: {
    maxWidth: '70%',
    maxHeight: '90%',
    borderRadius: '8px',
},

});
