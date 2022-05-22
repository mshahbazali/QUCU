import React, { useState, useEffect } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Splash from './src/Screen/Splash'
import Steps from './src/Screen/Steps'
import { Register, Login, Verification, ResetPassword, ResetPasswordVerification } from './src/Screen/Authentication'
import { Stack, Bottom } from './src/Config/Navigation'
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { RootSiblingParent } from 'react-native-root-siblings';
import Home from './src/Screen/Home'
import { Provider } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Store from './src/Store';

export default function App() {
  const [token, setToken] = useState();
  const getToken = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('token')
      return jsonValue != null ? setToken(JSON.parse(jsonValue)) : null;
    } catch (e) { }
  }
  useEffect(() => {
    getToken()
  }, [])
  return (
    <Provider store={Store}>
      <RootSiblingParent>
        <NavigationContainer>
          {
            token == undefined ?
              <Stack />
              :
              <Bottom />
          }
        </NavigationContainer>
      </RootSiblingParent>
    </Provider>
    // <Verification />
  );
}
