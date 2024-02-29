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

    textButton2: {
        backgroundColor: '#271c00',
        padding: 12,
        borderRadius: 5,
        marginTop: 20,
        alignItems: 'center',

    },
    textInfo: {
        fontSize: 20,
        
    },

    textInfo2: {
        fontSize: 20,
        color: '#FFF',
        
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
  
        fontSize: 32, // Tamanho do texto dos botões
     
    },

    navi: {
        backgroundColor: '#FFF',
        borderRadius: '20px',
        alignItems: 'center',
        width: '30%',
    },
    car:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: '45%',
        position: 'absolute',
        top: '10%', // Mude de top para bottom
        right: 0,
        width: '63%',
       
    },
    
    car2:{
       
        flexDirection: 'row',
        justifyContent: 'space-around', // Centraliza horizontalmente
        height: '45%',
     
        position: 'absolute',
        top: '55%',
        right: 0,
        width: '63%',
    },

    car3:{
        flexDirection: 'row',
        justifyContent: 'space-around', // Centraliza horizontalmente
        height: '82%',
        position: 'absolute',
        top: '12%',
        width: '82%',
    },

 


    container_map: {
        flexDirection: 'row',
        justifyContent: 'space-around', // Centraliza horizontalmente
        alignItems: 'center',    // Centraliza verticalmente
        height: '100%',
        position: 'absolute',
        right: 0,
        width: '50%',
  
      },

  container_map1:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '100%',
    position: 'absolute',
    left: 0, 
    width: '50%',
  
    
  },

  container_car:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '100%',
    position: 'absolute',
 
    width: '100%',
  
    
  },

  carouselItem1: {
    position: 'relative',
    width: '100%',
    height: '60%', // Defina a altura desejada para os itens do carrossel
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 0 8px rgba(0,0,0,0.1)',
    alignItems: 'center',
    justifyContent: 'center', // Centraliza verticalmente e horizontalmente
    overflow: 'hidden',
},

carouselImage1 : {
    width: '100%',
    height: '100%',
    position: 'relative',
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
    top: '1%',
    zIndex: 2,
    fontSize: 32,
},

textgen2: {
    alignItems: 'center',
    position: 'absolute',
   
    fontSize: 32,
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
    flexDirection: 'row',
justifyContent: 'space-around',
alignItems: 'center',
position: 'absolute',
maxHeight: '80%',
  maxWidth: '75%',
    borderRadius: '8px',
},

container3: {
    flexDirection: 'row',
justifyContent: 'space-around',
alignItems: 'center',
position: 'absolute',
maxHeight: '80%',
  maxWidth: '75%',
    borderRadius: '8px',
},


popupImage: {
    width: '200px',
    height: '130px',
},

mapContainer: {
    // Estilos compartilhados para ambos container_map e container_map1
    borderWidth: 2,

    borderRadius: 10,

  },
  borderedContainer: {
    borderTopWidth: 10,    
    borderBottomWidth: 10, 
    borderRightWidth: 15, 
    borderLeftWidth: 15, 
    borderColor: '#271c00',  // ou qualquer cor desejada para a borda
    borderRadius: 12,  // ou qualquer valor desejado para a borda arredondada
  
},

borderedContainer2: {
    borderTopWidth: 8,    
    borderBottomWidth: 15, 
    borderRightWidth: 15, 
    borderLeftWidth: 15, 
    borderColor: '#271c00',  // ou qualquer cor desejada para a borda
    borderRadius: 12,  // ou qualquer valor desejado para a borda arredondada
    height: '100%',
    width: '100%',
},
car4: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: '82%',
    width: '75%',
    position: 'absolute',
    top: '12%',
    backgroundColor: 'transparent',  // Alteração aqui
},

container1: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    heigh: '100%',
    width: '100%',  // Alteração aqui
},

borderedContainer3: {
   top: '35%',
   left: '5%',
   bottom: '1%',
    borderRadius: 12,  // ou qualquer valor desejado para a borda arredondada
    height: '90%',
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',

    
},
carouselNavigation: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 16, // ou qualquer valor que você preferir
    bottom: 20, // ou qualquer valor que você preferir
},

carouselButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    padding: 8,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'white',
    marginRight: 8, // ou qualquer valor que você preferir
},




});