import { StyleSheet, useWindowDimensions } from 'react-native';

export const styles = () => {
  const { width, height } = useWindowDimensions(); 

  return StyleSheet.create({
    image: {
        width: width,
        height: (width * 1024) / 1440,
        resizeMode: 'contain',
      },

      container:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',  
              
      },

      errorText: {
        fontSize: (16 / 1920) * width,
        color: 'red',
        marginTop: width * 0.0026041666666667,
    },

      card:{
        width: (800 / 1920) * width,
        height: (900/ 1920) * width,
        top: (250 / 1920) * width,
        backgroundColor: '#F5F3E1',
        borderRadius: (30 / 1920) * width,
        posiiton: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
      },

      gaiaContainer: {
        flexDirection: 'column',
           alignItems: 'center',
           justifyContent: 'center',
           top: (287 / 1920) * width,
      },

      gaia: {
        width: (460 * 1.35 / 1920) * width,
        height: (582 * 1.35 / 1920) * width,


      },

      bom: {
        width: (340 * 1.3 / 1920) * width,
        height: (30 * 1.3 / 1920) * width,
        top: -(50 / 1920) * width
      },

      title: {
        fontSize: (48 / 1920) * width,
        marginBottom: (20 / 1920) * width,
    },
   
    button: {
        backgroundColor: '#166034',
        padding: (15 / 1920) * width,
        borderRadius: (5 / 1920) * width,
        alignItems: 'center',
        width: (400 / 1920) * width,
        marginTop: (50 / 1920) * width,
        marginBottom: (10 / 1920) * width,
    },

    backButton: {
        marginLeft: width * 0.004,
        top: -(width * 0.2)
      },

    buttonText: {
        color: 'white',
        fontSize: (24 / 1920) * width,
    },
    inputContainer: {
        width: '100%',
        marginBottom: (20 / 1920) * width,
        width: (700 / 1920) * width,
    },
    label: {
        marginBottom: (5 / 1920) * width,

        fontSize: (24 / 1920) * width,
    },
    input: {
        width: '100%',
        padding: (10 / 1920) * width,
        height: (40 / 1920) * width,
        borderWidth: (1 / 1920) * width,
        borderColor: '#ccc',
        backgroundColor: '#4C6523',
        color: 'white',
        fontSize: (24 / 1920) * width,
    },

    input2: {
        width: '100%',
        padding: (10 / 1920) * width,
        height: (40 / 1920) * width,
        borderWidth: (1 / 1920) * width,
        borderColor: '#ccc',
        backgroundColor: '#166034',
        color: 'white',
        fontSize: (24 / 1920) * width,
    },

    termsModalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    },
    termsModalContent: {
        backgroundColor: '#fff', 
        borderRadius: (10 / 1920) * width,
        padding: (20 / 1920) * width,
        width: '80%', 
        maxHeight: '80%', 
    },
    termsModalText: {
        fontSize: (16 / 1920) * width,
        lineHeight: (24 / 1920) * width,
        marginBottom: (20 / 1920) * width, 
    },
    agreeButton: {
        color: 'blue', 
        textAlign: 'center',
        textDecorationLine: 'underline',
        marginBottom: (10 / 1920) * width,
        fontSize: (16 / 1920) * width,
    },
    disagreeButton: {
        color: 'red', 
        textAlign: 'center',
        textDecorationLine: 'underline',
        fontSize: (16 / 1920) * width,
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: (10 / 1920) * width,
        alignSelf: 'flex-start',
        marginLeft: (52 / 1920) * width,

    },

  boldTitle: {
    fontSize: (16 / 1920) * width,
    fontWeight: 'bold',

  },
    
  checkbox: {
    width: (20 / 1920) * width,
    height: (20 / 1920) * width,
    borderRadius: (2 / 1920) * width,

    

  },


  });
};
