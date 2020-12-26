// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {HomeScreen, RestaurantViewer} from './pages';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Restaurants" component={RestaurantViewer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
