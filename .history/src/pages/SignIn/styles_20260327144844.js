import { StyleSheet, useWindowDimensions, Platform } from 'react-native';

const DESIGN_WIDTH = 1440;
const DESIGN_HEIGHT = 1024;
export const styles = () => {
  const { width, height } = useWindowDimensions();

  const ratioW = width / DESIGN_WIDTH;
  const ratioH = height / DESIGN_HEIGHT;
  // usar o menor para evitar overflow em uma dimensão
  const scale = Math.min(ratioW, ratioH);

  const isSmall = width < 420;
  const isMobile = width < 768;
  const isTablet = width >= 768 && width < 1024;
  const isDesktop = width >= 1024;

  // helpers
  const s = (value) => Math.round(value * scale);

  // tamanhos relativos usados no layout
  const cardWidth = isMobile ? '84%' : isTablet ? '60%' : '36%';
  const inputWidth = isMobile ? '78%' : isTablet ? '70%' : '64%';
  const logoSize = isMobile ? s(110) : isTablet ? s(140) : s(180);

  return StyleSheet.create({
    scrollViewContent: {
      flexGrow: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },

    container: {
      flex: 1,
      width: '100%',
    },

    image: {
      width: '100%',
      height: '100%',
      flex: 1,
    },

    navbar: {
      position: 'absolute',
      top: isMobile ? 18 : 28,
      left: '6%',
      right: '6%',
      zIndex: 20,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: isMobile ? 6 : 12,
    },

    navbarButton: {
      fontSize: isSmall ? 12 : isMobile ? 14 : 16,
      fontWeight: '700',
      color: '#271C00',
      paddingVertical: 6,
      paddingHorizontal: 8,
    },

    card: {
      position: 'absolute',
      top: isMobile ? '22%' : '28%',
      left: isMobile ? '8%' : isTablet ? '20%' : '32%',
      width: cardWidth,
      alignItems: 'center',
      paddingVertical: isMobile ? 18 : 28,
      paddingHorizontal: isMobile ? 12 : 24,
      backgroundColor: '#FFFEF4',
      borderRadius: s(30),
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 6,
      elevation: 6,
    },

    containerwelcome: {
      alignItems: 'center',
      marginBottom: isMobile ? 8 : 12,
    },

    welcome: {
      width: isMobile ? s(120) : s(160),
      height: isMobile ? s(32) : s(48),
      resizeMode: 'contain',
    },

    containerLogo: {
      alignItems: 'center',
      marginVertical: isMobile ? 8 : 12,
    },

    imagelogo: {
      width: logoSize,
      height: logoSize,
      resizeMode: 'contain',
      borderRadius: logoSize / 8,
    },

    textcont: {
      alignSelf: 'flex-start',
      marginLeft: isMobile ? '10%' : '12%',
      marginTop: isMobile ? 6 : 10,
    },

    inpText: {
      fontSize: isSmall ? 12 : 14,
      color: '#333',
      fontWeight: '600',
    },

    input: {
      width: inputWidth,
      alignSelf: 'center',
      height: isMobile ? 44 : 50,
      backgroundColor: '#fff',
      borderRadius: s(8),
      paddingHorizontal: 12,
      marginTop: 8,
      borderWidth: 1,
      borderColor: '#ddd',
    },

    textcont2: {
      alignSelf: 'flex-start',
      marginLeft: isMobile ? '10%' : '12%',
      marginTop: 12,
    },

    inpText2: {
      fontSize: isSmall ? 12 : 14,
      color: '#333',
      fontWeight: '600',
    },

    input2: {
      width: inputWidth,
      alignSelf: 'center',
      height: isMobile ? 44 : 50,
      backgroundColor: '#fff',
      borderRadius: s(8),
      paddingHorizontal: 12,
      marginTop: 8,
      borderWidth: 1,
      borderColor: '#ddd',
    },

    errorInput: {
      borderColor: '#f55',
    },

    errorText: {
      color: 'red',
      marginTop: 8,
      fontSize: isSmall ? 12 : 13,
      textAlign: 'center',
    },

    forgot: {
      marginTop: 8,
      alignSelf: 'flex-end',
      marginRight: isMobile ? '10%' : '12%',
    },

    forgotText: {
      color: '#166034',
      fontSize: isSmall ? 12 : 13,
      textDecorationLine: 'underline',
    },

    buttonLogin: {
      marginTop: 14,
      backgroundColor: '#166034',
      alignItems: 'center',
      justifyContent: 'center',
      width: isMobile ? '72%' : '60%',
      paddingVertical: isMobile ? 10 : 12,
      borderRadius: s(8),
    },

    buttonTextLogin: {
      color: '#fff',
      fontWeight: '700',
      fontSize: isSmall ? 14 : 16,
    },

    signUp: {
      marginTop: 10,
    },

    signUpText: {
      color: '#166034',
      fontSize: 14,
    },

    treeView1: {
      position: 'absolute',
      bottom: isMobile ? 6 : 30,
      left: isMobile ? 6 : 24,
    },

    treeView2: {
      position: 'absolute',
      bottom: isMobile ? 6 : 30,
      right: isMobile ? 6 : 24,
    },

    treeView3: {
      position: 'absolute',
      bottom: isMobile ? 28 : 60,
      left: isMobile ? 20 : 80,
    },

    treeView4: {
      position: 'absolute',
      bottom: isMobile ? 28 : 60,
      right: isMobile ? 20 : 80,
    },

    smallTree: {
      width: s(60),
      height: s(120),
      resizeMode: 'contain',
    },

    bigTree: {
      width: s(120),
      height: s(220),
      resizeMode: 'contain',
    },
  });
};