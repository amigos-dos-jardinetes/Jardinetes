import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'
import Menu from '../pages/Menu'
import Config from '../pages/Config'
import Inventory from '../pages/inventory'
import PaginaInicial from '../pages/PaginaInicial';
import Contato from '../pages/Contato';
import Accept from '../pages/Accept';
import Form from '../pages/Form';
import Tree from '../pages/Tree';
import Impact from '../pages/Impact';
import MeusJardinetes from '../pages/MeusJardinetes';
import JardinetesMap from '../pages/JardinetesMap';
import ImpactSolo from '../pages/ImpactSolo';

const Stack = createNativeStackNavigator();


export default function Routes() {
    return (
        <Stack.Navigator>

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
                name="PaginaInicial"
                component={PaginaInicial}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Contato"
                component={Contato}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Form"
                component={Form}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Accept"
                component={Accept}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Tree"
                component={Tree}
                options={{ headerShown: false }}
            />

         

            <Stack.Screen
                name="Impact"
                component={Impact}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="MeusJardinetes"
                component={MeusJardinetes}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="JardinetesMap"
                component={JardinetesMap}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="ImpactSolo"
                component={ImpactSolo}
                options={{ headerShown: false }}
            />

        </Stack.Navigator>



    )


}