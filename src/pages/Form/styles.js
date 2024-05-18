import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
 
    container: {
        flexGrow: 1,
        padding: 20,
      },

      title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
      },
      
      label: {
        marginBottom: 5,
        fontSize: 16,
        fontWeight: 'bold',
      },
      input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 20,
      },
      button: {
        backgroundColor: '#166034',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignItems: 'center',
        alignSelf: 'center', 

      },

      button1: {
        backgroundColor: '#166034',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        width: 185,
        alignItems: 'center', 
        justifyContent: 'center', 
        marginBottom: 10,
        marginTop: 10
      },
      buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
      },

});
