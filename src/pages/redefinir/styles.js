import { StyleSheet, Dimensions } from 'react-native';



const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({


    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#166034',
      },


    card: {
        width: 1400,
        height: 600,
        justifyContent: 'center',
        alignItems: 'center',
    },

    row:{
        flexDirection: 'row',
    },

    column: {
        flexDirection: 'column',
    },  

    barra: {
        width: 2,
        height: 500,
        backgroundColor: '#271C00',
        marginLeft: 200,
        marginTop: 100,
    },

    circ: {
        backgroundColor: '#166034',
        marginTop: 150,
        width: 300,
        height: 300,
        borderRadius: 150,
        marginLeft: 200,
    },

    textCirc: {
        color: 'white',
        fontSize: 28,
        textAlign: 'center',
        marginTop: 100,
        marginLeft: 20,
        marginRight: 20,
    },


    bigTree:{
        left: 50,
        width: width * 0.0927083333333333 * 0.75,
        height: width * 0.1786458333333333 * 0.75,
       },

       smallTree:{
        marginTop: 57 * 0.75,
        left: 100,
        width: width * 0.0630208333333333 * 0.75,
        height: width * 0.1489583333333333 * 0.75,
       },

       textRec: {
            fontSize: 32,
            color: '#271C00',
            marginTop: 100,
            marginLeft: 50,
            marginRight: 50,
            textAlign: 'justify',

       },

       textRecContainer: {
        width: 600,
        height: 200, 
        marginLeft: 50,
        marginRight: 50,
        textAlign: 'justify',

   },

       input: {
        width: 450,
        height: 50,
        borderColor: '#999',
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: 'white'

      },

      inputContainer: {
        width: 600,
        height: 300, 
        marginLeft: 50,
        marginRight: 50,
        marginTop: 150,
      alignItems: 'center',


   },

   button: {
    marginTop: 50,
    width: 300,
    height: 50,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: '#FFF',
    fontSize: 24,
  },

  errorText: {
    color: 'red',
    marginTop: 5,
    marginBottom: 10,
  },


});