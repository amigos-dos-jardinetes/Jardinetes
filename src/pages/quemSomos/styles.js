import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({

    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    
    
    },

    navbar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: width * 0.0729166666666667,
        backgroundColor: '#195439',
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

      generalContainer:{
        position: 'absolute',
        alignItems: 'ce,nter',
        justifyContent: 'center',
        flexDirection: 'column',
      },

      title:{
        width: 1183,
        height: 123,
      
      },

      cards: {
      
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      },

      card1: {
        alignItems: 'center',
        backgroundColor: '#271C00',
        flexDirection: 'column',
        width: 300,
        height: 450,
        marginLeft: 50,
        marginRight: 50,
        marginTop: 50,

      },

      card2: {
        alignItems: 'center',
        backgroundColor: '#271C00',
        flexDirection: 'column',
        width: 300,
        height: 450,
        marginLeft: 50,
        marginRight: 50,
        marginTop: 50,

      },

      card3: {
        alignItems: 'center',
        backgroundColor: '#271C00',
        flexDirection: 'column',
        width: 300,
        height: 450,
        marginLeft: 50,
        marginRight: 50,
        marginTop: 50,

      },

      imageContainer: {
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'white',
            width: 141,
            height: 141,
            borderRadius: '50%',

      },

      photoContainer: {
            width: 136,
            height: 136,
      },
    
    
});
