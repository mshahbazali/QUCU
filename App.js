import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Splash from './src/Screen/Splash'
import Steps from './src/Screen/Steps'
import { Register, Login, ForgotPassword } from './src/Screen/Authentication'
import { Stack } from './src/Config/Navigation'
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { RootSiblingParent } from 'react-native-root-siblings';

export default function App() {
  return (
    <RootSiblingParent>
      <NavigationContainer>
        <Stack />
      </NavigationContainer>
    </RootSiblingParent>
    // <Stack />
  );
}
