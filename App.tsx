import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import {BackHandler, StyleSheet, Text, View } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import Entypo from '@expo/vector-icons/Entypo';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import HomeScreen from './screens/HomeScreen';
//import { createStackNavigator } from "react-navigation";
import { NativeBaseProvider, Box, HStack } from "native-base";
import FilterScreen from './screens/filterScreen';
import More from './screens/More';
import Save from './screens/Save';
import ContactScreen from './screens/ContactScreen';
import AboutScreen from './screens/AboutScreen';
import PrivacyScreen from './screens/PrivacyScreen';
import AgentPropertiesScreen from './screens/agentPropertiesScreen';
import PropertyDetailsScreen from './screens/PropertyDetailsScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons, AntDesign} from "@expo/vector-icons";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { store } from './app/store';
import { Provider } from 'react-redux';
import LoginScreen from './screens/loginScreen';
import MapScreen from './screens/mapScreen';
import AllPropertyMapScreen from './screens/AllPropertyMapScreen';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    //  <NativeRouter>
    <Provider store={store}>
     <NativeBaseProvider>
        <NavigationContainer>
       <Stack.Navigator>
       <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
       <Stack.Screen name="Filter"  component={FilterScreen} />
       <Stack.Screen name="Contact" component={ContactScreen} />                           
       <Stack.Screen name="About" component={AboutScreen} />
      <Stack.Screen name="Privacy" component={PrivacyScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Map" component={MapScreen} />
      <Stack.Screen name="AllPropertyMap" component={AllPropertyMapScreen} />
     <Stack.Screen name="Propertydetails" component={PropertyDetailsScreen} options={{ title: 'Property Details'}} />
     <Stack.Screen name="Agentproperties" component={AgentPropertiesScreen} options={{ title: 'Agent Properties'}} />
    </Stack.Navigator>
     </NavigationContainer> 
    {/* <Routes>
    <Route path='/' element={<HomeScreen />} />
    <Route path='/filter' element={<FilterScreen />} />
    <Route path='/more' element={<More />} />
    <Route path='/save' element={<Save />} />
    <Route path='/contact' element={<ContactScreen />} />
    <Route path='/about' element={<AboutScreen />} />
    <Route path='/privacy' element={<PrivacyScreen />} />
    <Route path='/propertydetails/:id' element={<PropertyDetailsScreen />} />
  </Routes>*/}
    </NativeBaseProvider>
    </Provider>
  // {/* </NativeRouter>  */}
  )
}