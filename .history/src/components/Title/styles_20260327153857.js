import { StyleSheet, useWindowDimensions } from 'react-native';

export const styles = () => {
  const { width } = useWindowDimensions();

  const fontSize = Math.max(20, width * 0.08);
  const offsetX = width * 0.005;
  const offsetY = width * 0.003;

  return StyleSheet.create({
    container: {
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      paddingVertical: width * 0.02,
    },
    text: {
      color: '#BBD089',
      fontSize,
      textAlign: 'center',
      zIndex: 2,
    },
    shadow: {
      color: '#2f4b20',
      fontSize,
      position: 'absolute',
      textAlign: 'center',
      zIndex: 1,
      transform: [{ translateX: offsetX }, { translateY: offsetY }],
    },
  });
};
