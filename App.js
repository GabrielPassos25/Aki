import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './src/pages/Home'
import Details from './src/pages/Details'
import Location from './src/pages/Location'
import Login from './src/pages/Login'
import Register from './src/pages/Register'
import ForgotPassword from './src/pages/ForgotPassword'


const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Location" screenOptions={{headerShown: false}}>
        <Stack.Screen name="LocationAsk" component={Location}/>
        <Stack.Screen name="LoginScreen" component={Login}/>
        <Stack.Screen name="Menu" component={Home}/>
        <Stack.Screen name="MenuDetails" component={Details}/>
        <Stack.Screen name="RegisterScreen" component={Register}/>
        <Stack.Screen name="ForgotPassword" component={ForgotPassword}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}