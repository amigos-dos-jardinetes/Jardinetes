import { StyleSheet, useWindowDimensions } from 'react-native';

export const styles = () => {
  const { width, height } = useWindowDimensions(); 

  return StyleSheet.create({

    container: {
        alignItems: 'center',
        backgroundColor: '#FFFE',     
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

      backButton: {
        marginLeft: width * 0.0052083333333333,
      },
      
      logoImage: {
        width: width * 0.0520833333333333,
        height: width * 0.0520833333333333,
        borderRadius: width * 0.0260416666666667,
      },

      imageContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginRight: width * 0.0104166666666667, 
      },

      card: {
        backgroundColor: '#166034', 
        borderRadius: (12 / 1920) * width,
        padding: (16 / 1920) * width,
        marginBottom: (20  / 1920) * width,
        alignSelf: 'center',
        width: '50%', 
        elevation: (4  / 1920) * width, 
        shadowColor: '#000', 
        shadowOffset: { width: 0, height: (2  / 1920) * width },
        shadowOpacity: (0.2  / 1920) * width,
        shadowRadius: (4  / 1920) * width,
      },

      name: {
        fontSize: (18  / 1920) * width,
        fontWeight: 'bold',
        color: '#FFF',
        marginBottom: (8  / 1920) * width,
        textAlign: 'center',
      },
      image: {
        width: '30%', 
        aspectRatio: 16 / 9, 
        borderRadius: (8 / 1920) * width,
        alignSelf: 'center', 
        marginBottom: (10  / 1920) * width,
      },

      buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: (10 / 1920) * width,
      },
      button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: (8  / 1920) * width,
        paddingHorizontal: (12  / 1920) * width,
        borderRadius: (8  / 1920) * width,
      },
      editButton: {
        backgroundColor: '#4CAF50',
        width: (120 / 1920) * width,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: (5 / 1920) * width,
        height: (35 / 1920) * width,
      },
      deleteButton: {
        backgroundColor: '#F44336',
        width: (120 / 1920) * width,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: (5 / 1920) * width,
        height: (35 / 1920) * width,
      },
      buttonText: {
        color: 'white',
        marginLeft: (5 / 1920) * width,
      },

      modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
      },
      modalContent: {
        width: '80%',
        backgroundColor: '#fff',
        borderRadius: (10  / 1920) * width,
        padding: (20  / 1920) * width,
        alignItems: 'center',
      },
      modalText: {
        fontSize: (18  / 1920) * width,
        fontWeight: 'bold',
        marginBottom: (20  / 1920) * width,
        textAlign: 'center',
      },
      modalButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
      },
      cancelButton: {
        backgroundColor: '#ccc',
        padding: (10  / 1920) * width,
        borderRadius: (5  / 1920) * width,
        marginRight: (10  / 1920) * width,
        flex: 1,
        alignItems: 'center',
      },
      confirmButton: {
        backgroundColor: '#d9534f',
        padding: (10  / 1920) * width,
        borderRadius: (5  / 1920) * width,
        flex: 1,
        alignItems: 'center',
      },
      buttonText1: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: (18 / 1920) * width,
      },


});
};
;
