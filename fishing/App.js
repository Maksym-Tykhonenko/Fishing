import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import FishingPlaceScreen from './screens/FishingPlaceScreen';
import Place from './screens/Place';



const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{ headerShown: false }} />
        <Stack.Screen name="FishingPlaceScreen" component={FishingPlaceScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Place" component={Place} options={{ headerShown: false }} />

      </Stack.Navigator>
    </NavigationContainer>
    
  );
 
};



export default App;
