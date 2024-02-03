import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LogBox } from 'react-native';

const Stack = createNativeStackNavigator();

import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import FishingPlaceScreen from './screens/FishingPlaceScreen';
import Place from './screens/Place';
import NewPlace from './screens/NewPlace';



const App = () => {

  LogBox.ignoreLogs(['RCTBridge required dispatch_sync']);
  

  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{ headerShown: false }} />
        <Stack.Screen name="FishingPlaceScreen" component={FishingPlaceScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Place" component={Place} options={{ headerShown: false }} />
        <Stack.Screen name="NewPlace" component={NewPlace} options={{ headerShown: false }} />

      </Stack.Navigator>
    </NavigationContainer>
    
  );
 
};



export default App;
