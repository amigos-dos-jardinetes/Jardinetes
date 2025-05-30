import { StyleSheet, useWindowDimensions } from 'react-native';

export const styles = () => {
  const { width, height } = useWindowDimensions(); 

  return StyleSheet.create({

    scroll: {
        backgroundColor: '#FFFEF4',
    },

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFEF4',
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
        fontWeight: 'bold',
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

    title: {
        width: width * 0.3223958333333333,
        height: width * 0.0395833333333333,
    },

    bemTitle: {
        top: width * 0.1041666666666667,
        position: 'absolute',
    },

    retExpli:{
        top: width * 0.1666666666666667,
        position: 'absolute',
        borderRadius: width * 0.0052083333333333,
        backgroundColor: '#B68F40',
        width: width * 0.46875,
        height: width * 0.03125,
        alignItems: 'center',
        justifyContent: 'center',
        },

        expliText:{
            fontSize: width * 0.0166666666666667,
            color: 'white',
            textAlign: 'center'
        },

        petala1000: {
            top: -(width * 0.1041666666666667) * 0.75,
            left: -(width * 0.0364583333333333)  * 0.75,
            width: (width * 0.4192708333333333) * 0.57  * 0.75,
            height: (width * 0.2375) * 0.57  * 0.75,
            position: 'absolute',
            transform: [{ rotate: '90deg' }]
        },
    
        petala1001: {
            top: -(width * 0.0364583333333333)  * 0.75,
            left: width * 0.0729166666666667  * 0.75,
            width: (width * 0.4192708333333333) * 0.57  * 0.75,
            height: (width * 0.2375) * 0.57  * 0.75,
            position: 'absolute',
            transform: [{ rotate: '170deg' }]
        },
    
        petala1002: {
            top: width * 0.0729166666666667  * 0.75,
            left: width * 0.0416666666666667  * 0.75,
            width: (width * 0.4192708333333333) * 0.57  * 0.75,
            height: (width * 0.2375) * 0.57  * 0.75,
            position: 'absolute',
            transform: [{ rotate: '230deg' }]
        },
    
        petala1003: {
            top: width * 0.0729166666666667  * 0.75,
            left: -(width * 0.09375)  * 0.75,
            width: (width * 0.4192708333333333) * 0.57  * 0.75,
            height: (width * 0.2375) * 0.57  * 0.75,
            position: 'absolute',
            transform: [{ rotate: '310deg' }]
        },
        
        petala1004: {
            top: -(width * 0.0208333333333333)  * 0.75,
            left: -(width * 0.1354166666666667)  * 0.75,
            width: (width * 0.4192708333333333) * 0.57  * 0.75,
            height: (width * 0.2375) * 0.57  * 0.75,
            position: 'absolute',
            transform: [{ rotate: '370deg' }]
        },


        petala800: {
            top: -(width * 0.078125)  * 0.75,
            left: -(width * 0.0416666666666667)  * 0.75,
            width: (width * 0.3932291666666667) * 0.62  * 0.75,
            height: (width * 0.184375) * 0.62  * 0.75,
            position: 'absolute',
            transform: [{ rotate: '90deg' }]
        },
    
        petala801: {
            zIndex: -1,
            top: -(width * 0.0208333333333333)  * 0.75,
            left: (width * 0.0572916666666667)  * 0.75,
            width: (width * 0.3932291666666667) * 0.62  * 0.75,
            height: (width * 0.184375) * 0.62  * 0.75,
            position: 'absolute',
            transform: [{ rotate: '170deg' }, { scaleY: -1 }]
        },
    
        petala802: {
            zIndex: -1,
            top: (width * 0.0625)  * 0.75,
            left: (width * 0.015625)  * 0.75,
            width: (width * 0.3932291666666667) * 0.62  * 0.75,
            height: (width * 0.184375) * 0.62 * 0.75,
            position: 'absolute',
            transform: [{ rotate: '230deg' }]
        },
    
        petala803: {
            top: width * 0.0598958333333333  * 0.75,
            left: -(width * 0.1041666666666667)  * 0.75,
            width: (width * 0.3932291666666667) * 0.62  * 0.75,
            height: (width * 0.184375) * 0.62  * 0.75,
            position: 'absolute',
            transform: [{ rotate: '310deg' }]
        },

        petala804: {
            zIndex: -1,
            top: -(width * 0.0114166666666667)  * 0.75,
            left: -(width * 0.140625) * 0.75,
            width: (width * 0.3932291666666667) * 0.62  * 0.75,
            height: (width * 0.184375) * 0.62  * 0.75,
            position: 'absolute',
            transform: [{ rotate: '380deg' }]
        },

        petala600: {
            top: -(width * 0.0625)  * 0.75,    
            left: -(width * 0.0208333333333333)  * 0.75,
            width: (width * 0.2994791666666667) * 0.67  * 0.75,
            height: (width * 0.1447916666666667) * 0.67  * 0.75,
            position: 'absolute',
            transform: [{ rotate: '90deg' }]
        },
    
        petala601: {
            top: -(width * 0.0104166666666667)  * 0.75,
            left: width * 0.046875  * 0.75,
            width: (width * 0.2994791666666667) * 0.67  * 0.75,
            height: (width * 0.1447916666666667) * 0.67  * 0.75,
            position: 'absolute',
            transform: [{ rotate: '170deg' }]
        },
    
        petala602: {
            top: width * 0.0572916666666667  * 0.75,
            left: width * 0.0260416666666667  * 0.75,
            width: (width * 0.2994791666666667) * 0.67  * 0.75,
            height: (width * 0.1447916666666667) * 0.67  * 0.75,
            position: 'absolute',
            transform: [{ rotate: '230deg' }]
        },
    
        petala603: {
            top: width * 0.0572916666666667  * 0.75,
            left: -(width * 0.0520833333333333)  * 0.75,
            width: (width * 0.2994791666666667) * 0.67  * 0.75,
            height: (width * 0.1447916666666667) * 0.67  * 0.75,
            position: 'absolute',
            transform: [{ rotate: '310deg' }]
        },

        
        petala604: {
            top: -(width * 0.0052083333333333)  * 0.75,
            left: -(width * 0.0885416666666667)  * 0.75,
            width: (width * 0.2994791666666667) * 0.67  * 0.75,
            height: (width * 0.1447916666666667) * 0.67  * 0.75,
            position: 'absolute',
            transform: [{ rotate: '370deg' }]
        },

        petala400: {
            top: -(width * 0.0402777777777778)  * 0.75,
            left: (width * 0.0052083333333333)  * 0.75,
            width: (width * 0.2401041666666667) * 0.6  * 0.75,
            height: (width * 0.1536458333333333) * 0.6  * 0.75,
            position: 'absolute',
            transform: [{ rotate: '90deg' }]
        },
    
        petala401: {
            top: width * 0.0104166666666667  * 0.75,
            left: width * 0.0729166666666667  * 0.75,
            width: (width * 0.2401041666666667) * 0.6  * 0.75,
            height: (width * 0.1536458333333333) * 0.6  * 0.75,
            position: 'absolute',
            transform: [{ rotate: '170deg' }]
        },
    
        petala402: {
            top: width * 0.0572916666666667  * 0.75,
            left: width * 0.0416666666666667  * 0.75,
            width: (width * 0.2401041666666667) * 0.6  * 0.75,
            height: (width * 0.1536458333333333) * 0.6  * 0.75,
            position: 'absolute',
            transform: [{ rotate: '230deg' }]
        },
    
        petala403: {
            top: (width * 0.0625)  * 0.75,
            left: -(width * 0.0208333333333333)  * 0.75,
            width: (width * 0.2401041666666667) * 0.6  * 0.75,
            height: (width * 0.1536458333333333) * 0.6  * 0.75,
            position: 'absolute',
            transform: [{ rotate: '300deg' }]
        },

        petala404: {
            top: width * 0.0104166666666667  * 0.75,
            left: -(width * 0.0625)  * 0.75,
            width: (width * 0.2401041666666667) * 0.6  * 0.75,
            height: (width * 0.1536458333333333) * 0.6  * 0.75,
            position: 'absolute',
            transform: [{ rotate: '350deg' }]
        },

        petala200: {
            top: -(width * 0.0364583333333333)  * 0.75,
            left: (width * 0.0208333333333333)  * 0.75,
            width: (width * 0.18125) * 0.7  * 0.75,
            height: (width * 0.1260416666666667) * 0.7  * 0.75,
            position: 'absolute',
            transform: [{ rotate: '90deg' }]
        },
    
        petala201: {
            top: width * 0.0104166666666667  * 0.75,
            left: width * 0.0729166666666667  * 0.75,
            width: (width * 0.18125) * 0.7  * 0.75,
            height: (width * 0.1260416666666667) * 0.7  * 0.75,
            position: 'absolute',
            transform: [{ rotate: '170deg' }]
        },
    
        petala202: {
            top: (width * 0.0651041666666667)  * 0.75,
            left: (width * 0.046875)  * 0.75,
            width: (width * 0.18125) * 0.7  * 0.75,
            height: (width * 0.1260416666666667) * 0.7  * 0.75,
            position: 'absolute',
            transform: [{ rotate: '220deg' }]
        },
    
        petala203: {
            top: (width * 0.0625)  * 0.75,
            left: -(width * 0.015625)  * 0.75,
            width: (width * 0.18125) * 0.7  * 0.75,
            height: (width * 0.1260416666666667) * 0.7  * 0.75,
            position: 'absolute',
            transform: [{ rotate: '300deg' }]
        },
    
        petala204: {
            top: width * 0.0104166666666667  * 0.75,
            left: -(width * 0.0416666666666667) * 0.75,
            width: (width * 0.18125) * 0.7 * 0.75,
            height: (width * 0.1260416666666667) * 0.7 * 0.75,
            position: 'absolute',
            transform: [{ rotate: '350deg' }]
        },
        
    miolo: {
        width: (width * 0.1895833333333333) * 0.8  * 0.75,
        height: (width * 0.1427083333333333) * 0.8  * 0.75,
        top: width * 0.015625  * 0.75,
        left: width * 0.015625  * 0.75,
    },

        centralContainer: {
            top: width * 0.46875  * 0.825,
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
          
        },


        containerCirc1:{
        
            top: width * 0.21875,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            position: 'absolute',
        },

        containerCircText1:{
            top: width * 0.2302083333333333,
            left: width * 0.515,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            position: 'absolute',
        },

        textCirc1: {
            marginLeft: width * 0.0104166666666667,
            color: '#271C00',
            fontSize: width * 0.0125,
          },

          containerCirc2:{
            zIndex: 2,
            top: width * 0.3802083333333333,
            right: width * 0.2604166666666667,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            position: 'absolute',
    
        },

        containerCircText2:{
            top: width * 0.39,
            right: width * 0.054,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            position: 'absolute',
        },

        textCirc2: {
            marginLeft: width * 0.0104166666666667,
            color: '#271C00',
            fontSize: width * 0.0125,
            textAlign: 'left',
          },

          containerCirc3:{
            zIndex: 2,
            top: width * 0.55,
            left: width * 0.625,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            position: 'absolute',
    
        },

        containerCircText3:{
            top: width * 0.56,
            left: width * 0.665,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            position: 'absolute',

        },

        textCirc3: {
            marginLeft: width * 0.0104166666666667,
            color: '#271C00',
            fontSize: width * 0.0125,
            textAlign: 'left',
          },


          
          containerCirc4:{
            zIndex: 2,
            top: width * 0.55,
            right: width * 0.6041666666666667,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            position: 'absolute',
    
        },

        containerCircText4:{
            top: width * 0.545,
            right: width * 0.636,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            height: width * 0.0520833333333333,
            width: width * 0.2604166666666667,
            position: 'absolute',

        },

        textCirc4: {
            marginLeft: width * 0.0104166666666667,
            color: '#271C00',
            fontSize: width * 0.0125,
            textAlign: 'left',
          },


          containerCirc5:{
            zIndex: 2,
            top: width * 0.3802083333333333,
            left: width * 0.28125,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            position: 'absolute',
    
        },

        containerCircText5:{
            top: width * 0.382,
            right: width * 0.70,
            width: width * 0.2083333333333333,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            position: 'absolute',

        },

        textCirc5: {
            marginLeft: width * 0.0104166666666667,
            color: '#271C00',
            fontSize: width * 0.0125,
            textAlign: 'left',
          },

        circ: {
            width: width * 0.0442708333333333,
            height: width * 0.0442708333333333,
            postion: 'absolute',
            borderRadius: '50%',
            backgroundColor: '#FB9116',
            alignItems: 'center',
            justifyContent:'center',
        },

        textPerc:{
            fontSize: width * 0.0104166666666667,
            color: 'white',
            textAlign: 'center',
        },  

        navbar2: {
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            height: width * 0.1,
            backgroundColor: '#166034',
            position: 'absolute',
            bottom: 0,
            right: 0,
            width: '100%',
            top: width * 0.48,
            marginTop: width * 0.2604166666666667,
        },

        rowNav: {
            flexDirection: 'row',
          
            },
          
          column1nav: {
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            right: '100%',
            
          },
          
          column2nav: {
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            right: '50%',
            
          },
          
          column3nav: {
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            left: '50%',
            
          },
          
          column4nav: {
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            left: '100%',
          
            
          },
          
          navBt:{
              marginTop: (10 / 1920) * width,
              marginBottom: (10 / 1920) * width,
          },
          
          textNav:{
              fontSize: (20 / 1920) * width,
              color: 'black',
          },
          
          instaNav: {
              width: ((512 * 0.1) / 1920) * width,
              height: ((512 * 0.1) / 1920) * width,
              marginTop: (10 / 1920) * width,
              marginBottom: (10 / 1920) * width,
          },
    
        imageContainer22: {
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center', 
        },
    
        utfprImage3: {
            width: 144 * (width * 0.00067708333),
            height: 57 * (width * 0.00067708333),
        },

        araucarias: {
            width: width * 0.1651041666666667,
            height: width * 0.146875,
       
          },
        
          araucarias2: {
            width: width * 0.1155729166666667 * 0.6,
            height: width * 0.1028125 * 0.6, 
            position: 'absolute',
            left: width * 0.8072916666666667,
            top: width * 0.61,
          },

          retMore: {
            top: width * 0.2239583333333333,
            left: width * 0.0520833333333333,
            width: width * 0.2083333333333333,
            height: width * 0.1302083333333333,
            borderWidth: width * 0.0052083333333333,
            borderRadius: width * 0.015625,
            borderColor: '#FB9116',
            backgroundColor: '#FEE7CC',
            position: 'absolute',
          },

          backButton: {
            marginLeft: width * 0.0052083333333333,
          },

          loadingContainer: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#fff', 
          },


          gradientButtonContainer: {
            position: 'absolute',
            top: width * 0.675,
            alignSelf: 'center',
            zIndex: 1,
            borderRadius: width * 0.0104166666666667,
          },
          
          gradientButton: {
            width: width * 0.15625,
            height: width * 0.05, 
            left: width * 0.2083333333333333,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: width * 0.0104166666666667,
            paddingVertical: width * 0.0052083333333333,
          },
          
          gradientButtonText: {
            fontSize: width * 0.0197916666666667, 
            color: 'white',
          },
          
          linearGradient: {
            width: '100%',
            height: '100%',
            borderRadius: width * 0.015625,
            alignItems: 'center',
            justifyContent: 'center',
          },
          

          retMoreText: {
            fontSize: width * 0.009375,
            color: '#271C00',
            marginRight: width * 0.0052083333333333,
            marginLeft: width * 0.0052083333333333,
            textAlign: 'justify',
            marginTop: width * 0.0052083333333333,
            lineHeight: width * 0.015625,
            marginBottom: width * 0.0052083333333333,
          },

        });
    };
    