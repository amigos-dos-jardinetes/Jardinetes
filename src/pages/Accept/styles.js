import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({


    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
      },

      mapContainer: {

        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        width: width * 0.9,
        height: 600,
        backgroundColor: 'red',
        top: 400,
        borderRadius: width * 0.0052083333333333,
        borderColor: '#271C00',
        borderWidth: width * 0.003125,
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

      imageContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginRight: width * 0.0104166666666667, // Adiciona margem à direita
      },

      logoImage: {
        width: width * 0.0520833333333333,
        height: width * 0.0520833333333333,
        borderRadius: width * 0.0260416666666667,
      },

      title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 30,
        textAlign: 'center',
      },

      title1: {
        top: 600,
        alignItems: 'center',
      },
      buttonContainer: {
        flexDirection: 'row',
     
      },

      button: {
        backgroundColor: '#166034',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginEnd: 10,
      },
      buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
      },

});
