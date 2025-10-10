
import WebNavigator from './WebNavigator';

import { Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  if (Platform.OS === 'web') {
    return <WebNavigator />;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="PaginaInicial">
        {/* ...existing code... */}
        <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
        <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
        <Stack.Screen name="Menu" component={Menu} options={{ headerShown: false }} />
        <Stack.Screen name="Config" component={Config} options={{ headerShown: false }} />
        <Stack.Screen name="Inventory" component={Inventory} options={{ headerShown: false }} />
        <Stack.Screen name="PaginaInicial" component={PaginaInicial} options={{ headerShown: false }} />
        <Stack.Screen name="Contato" component={Contato} options={{ headerShown: false }} />
        <Stack.Screen name="Accept" component={Accept} options={{ headerShown: false }} />
        <Stack.Screen name="Form" component={Form} options={{ headerShown: false }} />
        <Stack.Screen name="Tree" component={Tree} options={{ headerShown: false }} />
        <Stack.Screen name="Impact" component={Impact} options={{ headerShown: false }} />
        <Stack.Screen name="JardinetesMap" component={JardinetesMap} options={{ headerShown: false }} />
        <Stack.Screen name="ImpactSolo" component={ImpactSolo} options={{ headerShown: false }} />
        <Stack.Screen name="AnaliseFinal" component={AnaliseFinal} options={{ headerShown: false }} />
        <Stack.Screen name="BemEstar" component={BemEstar} options={{ headerShown: false }} />
        <Stack.Screen name="Infraestrutura" component={Infraestrutura} options={{ headerShown: false }} />
        <Stack.Screen name="Seguranca" component={Seguranca} options={{ headerShown: false }} />
        <Stack.Screen name="Pertencimento" component={Pertencimento} options={{ headerShown: false }} />
        <Stack.Screen name="Redefinir" component={Redefinir} options={{ headerShown: false }} />
        <Stack.Screen name="quemSomos" component={quemSomos} options={{ headerShown: false }} />
        <Stack.Screen name="acoesSociais" component={acoesSociais} options={{ headerShown: false }} />
        <Stack.Screen name="minhasAnalises" component={minhasAnalises} options={{ headerShown: false }} />
        <Stack.Screen name="moreInfo" component={moreInfo} options={{ headerShown: false }} />
        <Stack.Screen name="moreInfo2" component={moreInfo2} options={{ headerShown: false }} />
        <Stack.Screen name="Form2" component={Form2} options={{ headerShown: false }} />
        <Stack.Screen name="Inventory2" component={Inventory2} options={{ headerShown: false }} />
        <Stack.Screen name="Tree2" component={Tree2} options={{ headerShown: false }} />
        <Stack.Screen name="Impact2" component={Impact2} options={{ headerShown: false }} />
        <Stack.Screen name="Admin" component={Admin} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
