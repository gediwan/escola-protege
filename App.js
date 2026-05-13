// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';

import HomeScreen from './src/screens/HomeScreen';
import DenunciaScreen from './src/screens/DenunciaScreen';
import AjudaScreen from './src/screens/AjudaScreen';
import EducacaoScreen from './src/screens/EducacaoScreen';
import ComoAgirScreen from './src/screens/ComoAgirScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Home"
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Denuncia" component={DenunciaScreen} />
        <Stack.Screen name="Ajuda" component={AjudaScreen} />
        <Stack.Screen name="Educacao" component={EducacaoScreen} />
        <Stack.Screen name="ComoAgir" component={ComoAgirScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
