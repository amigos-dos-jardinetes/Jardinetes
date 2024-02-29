import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Welcome from '../pages/Welcome'
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'
import Menu from '../pages/Menu'
import Config from '../pages/Config'
import Inventory from '../pages/inventory'
import QuemSomos from '../pages/SignIn/QuemSomos'
import AcoesSociais from '../pages/SignIn/AcoesSociais'
import Contato from '../pages/SignIn/Contato'
import PaginaInicial from '../pages/PaginaInicial';


const Stack = createNativeStackNavigator();


export default function Routes() {
    return (
        <Stack.Navigator>

            <Stack.Screen
                name="Welcome"
                component={Welcome}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="SignIn"
                component={SignIn}
                options={{ headerShown: false }}

            />
            
            <Stack.Screen
                name="Config"
                component={Config}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="SignUp"
                component={SignUp}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Menu"
                component={Menu}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Inventory"
                component={Inventory}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Quem Somos"
                component={QuemSomos}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Ações Sociais"
                component={AcoesSociais}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Contato"
                component={Contato}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="PaginaInicial"
                component={PaginaInicial}
                options={{ headerShown: false }}
            />

        </Stack.Navigator>



    )


}