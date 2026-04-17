import React from 'react';
import { View, Text } from 'react-native';
import { useFonts, Lemon_400Regular } from '@expo-google-fonts/lemon';
import { styles } from './styles';

export default function Title({ children }) {
  const myStyles = styles();
  const [fontsLoaded] = useFonts({ Lemon_400Regular });

  return (
    <View style={myStyles.container}>
      <Text style={[myStyles.shadow, fontsLoaded && { fontFamily: 'Lemon_400Regular' }]}>{children}</Text>
      <Text style={[myStyles.text, fontsLoaded && { fontFamily: 'Lemon_400Regular' }]}>{children}</Text>
    </View>
  );
}
