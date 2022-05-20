import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../../../Screen/Home'
import Splash from '../../../Screen/Splash'
import Steps from '../../../Screen/Steps'
import AuthNavigation from '../../AuthNavigation'
import { Login, ForgotPassword } from '../../../Screen/Authentication'
export default function Index() {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen options={{ headerShown: false }} name="Splash" component={Splash} />
            <Stack.Screen options={{ headerShown: false }} name="Home" component={Home} />
            <Stack.Screen options={{ headerShown: false }} name="AuthNavigation" component={AuthNavigation} />
            <Stack.Screen options={{ headerShown: false }} name="Steps" component={Steps} />
            <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
            <Stack.Screen options={{ headerShown: false }} name="ForgotPassword" component={ForgotPassword} />
        </Stack.Navigator>
    )
}