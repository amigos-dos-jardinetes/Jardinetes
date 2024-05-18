import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
 
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 30,
        textAlign: 'center',
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
