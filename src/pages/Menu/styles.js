import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#195439',
        justifyContent: 'flex-end',
        backgroundColor: '#FFF',
    },
    containerLogo: {
        marginTop: width * 0.01,
        flex: 2,
        backgroundColor: 'transparent',  // Alteração aqui
        padding: width * 0.02604166666666666666666666666667,
        alignItems: 'center',
    },
    containerForm: {
        flex: 1,
        backgroundColor: '#FFF',
        borderTopLeftRadius: width * 0.01302083333333333333333333333333,
        borderTopRightRadius: width * 0.01302083333333333333333333333333,
        padding: width * 0.01041666666666666666666666666667,
    },
    title: {
        fontSize: width * 0.01666666666666666666666666666667,
        fontWeight: 'bold',
        marginTop: width * 0.01041666666666666666666666666667,
        marginBottom: width * 0.00625,
        textAlign: 'center',
        color: '#FFF'
    },
    logoutButton: {
        backgroundColor: '#FFFEF4',
        borderRadius: width * 0.00520833333333333333333333333333,
        width: width * 0.02604166666666666666666666666667, // Largura do botão
        height: width * 0.02604166666666666666666666666667, // Altura do botão
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: width * 0.00520833333333333333333333333333,
        left: '90%',
    },

    logoutButtonText: {
        color: 'red',
        fontSize: width * 0.01458333333333333333333333333333,
    },


    logoImage: {
        width: width * 0.10416666666666666666666666666667,
        height: width * 0.10416666666666666666666666666667,
        borderRadius: width * 0.05208333333333333333333333333333,
    },
    backcontainer: {
        width: '37%',  // Alteração aqui
        flex: 1,        // Adição aqui
        justifyContent: 'flex-end', // Adição aqui


    },
    textButton: {
        backgroundColor: '#FFF',
        padding: width * 0.00625,
        borderRadius: width * 0.00260416666666666666666666666667,
        marginTop: width * 0.01041666666666666666666666666667,
        alignItems: 'center',

    },

    textButtonConfig: {
        backgroundColor: '#FFFEF4',
        borderRadius: width * 0.00520833333333333333333333333333,
        width: width * 0.02604166666666666666666666666667, // Largura do botão
        height: width * 0.02604166666666666666666666666667, // Altura do botão
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: width * 0.00520833333333333333333333333333,
        right: '90%'
    },

    textButton2: {
        backgroundColor: '#271c00',
        padding: width * 0.00625,
        borderRadius: width * 0.00260416666666666666666666666667,
        marginTop: width * 0.05,
        alignItems: 'center',

    },
    textInfo: {
        fontSize: width * 0.01041666666666666666666666666667,

    },

    textInfo2: {
        fontSize: width * 0.01041666666666666666666666666667,
        color: '#FFF',

    },

    buttons: {
        marginBottom: width * 0.05208333333333333333333333333333,
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
        right: 0,
        width: '63%',
        zIndex: 2,
    },
    

    navbarButton: {

        fontSize: width * 0.01666666666666666666666666666667, // Tamanho do texto dos botões

    },

    navi: {
        backgroundColor: '#FFF',
        borderRadius: width * 0.01041666666666666666666666666667,
        alignItems: 'center',
        width: width * 0.15,
    },
    car: {
        backgroundColor: '#FFFEF4',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: '45%',
        position: 'absolute',
        top: '10%', // Mude de top para bottom
        right: 0,
        width: '63%',

    },

    car2: {
        backgroundColor: '#FFFEF4',
        flexDirection: 'row',
        justifyContent: 'space-around', // Centraliza horizontalmente
        height: '45%',
        position: 'absolute',
        top: '55%',
        right: 0,
        width: '63%',
    },

    car3: {
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
        width: '100%',

    },

    container_map1: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: '100%',
        position: 'absolute',
        left: 0,
        width: '50%',


    },

    container_car: {
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

        alignItems: 'center',
        justifyContent: 'center', // Centraliza verticalmente e horizontalmente
        overflow: 'hidden',
    },

    carouselImage1: {
        width: '100%',
        height: '100%',
        position: 'relative',
        objectFit: 'cover', 
    },

    carouselItem: {
        position: 'relative',
        width: '100%',
        height: '100%', // Defina a altura desejada para os itens do carrossel
        overflow: 'hidden',
        objectFit: 'cover', 
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    
    },
    carouselImage: {
       
        width: '70%',
        height: '70%',
        objectFit: 'cover', 
        alignSelf: 'center',
        justifyContent: 'center',
    },
    overlayContent: {
        textAlign: 'center',
        color: 'white',
        borderRadius: '8px',
        // Adicione mais estilos conforme necessário
    },
    carouselContainer: {
        position: 'relative',
        borderRadius: width * 0.00416666666666666666666666666667,
        overflow: 'hidden',
    },
    textgen: {
        alignItems: 'center',
        position: 'absolute',
        top: '1%',
        zIndex: 2,
        fontSize: width * 0.01666666666666666666666666666667,
    },

    textgen2: {
        alignItems: 'center',
        position: 'absolute',

        fontSize: width * 0.01666666666666666666666666666667,
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

    

popupButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: width * 0.0052083333333333,
  },
  popupButton: {
    flex: 1,
    marginHorizontal: width * 0.0026041666666667,
    paddingVertical: width * 0.0052083333333333,
    backgroundColor: '#809C30',
    borderRadius:  width * 0.0026041666666667,
    alignItems: 'center',
  },
  
  popupButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: width * 0.00625,
    textAlign: 'center',
  },

    mapContainer: {
        // Estilos compartilhados para ambos container_map e container_map1
        borderWidth: width * 0.00104166666666666666666666666667,

        borderRadius: width * 0.00520833333333333333333333333333,

    },
    borderedContainer: {
        borderWidth: width * 0.0078125,
        borderColor: '#271c00',  // ou qualquer cor desejada para a borda
        borderRadius: width * 0.00625,  // ou qualquer valor desejado para a borda arredondada

    },

    borderedContainer2: {
        borderWidth: width * 0.007,
        borderColor: '#271c00',  // ou qualquer cor desejada para a borda
        borderRadius: width * 0.00625,  // ou qualquer valor desejado para a borda arredondada
        height: '93%',
        width: '70%',
        alignItems: 'center',
        justifyContent: 'center',
   
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
        top: 0,
        left: '0%',
        bottom: '1%',

        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',


    },
    carouselNavigation: {
        position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: width * 0.00833333333333333333333333333333, // ou qualquer valor que você preferir
        bottom: width * 0.01041666666666666666666666666667, // ou qualquer valor que você preferir
    },

    carouselButton: {
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        padding: width * 0.00416666666666666666666666666667,
        borderRadius: width * 0.02604166666666666666666666666667,
        borderWidth: 1,
        borderColor: 'white',
        marginRight: width * 0.00416666666666666666666666666667, // ou qualquer valor que você preferir
    },




});