import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from './src/pages/SignIn';
import SignUp from './src/pages/SignUp';
import Menu from './src/pages/Menu';
import Config from './src/pages/Config';
import Inventory from './src/pages/Inventory';
import PaginaInicial from './src/pages/PaginaInicial';
import Contato from './src/pages/Contato';
import Accept from './src/pages/Accept';
import Form from './src/pages/Form';
import Tree from './src/pages/Tree';
import Impact from './src/pages/Impact';
import MeusJardinetes from './src/pages/MeusJardinetes';
import JardinetesMap from './src/pages/JardinetesMap';
import ImpactSolo from './src/pages/ImpactSolo';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="signin">
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
        <Stack.Screen name="Meus-jardinetes" component={MeusJardinetes} options={{ headerShown: false }} />
        <Stack.Screen name="JardinetesMap" component={JardinetesMap} options={{ headerShown: false }} />
        <Stack.Screen name="ImpactSolo" component={ImpactSolo} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
