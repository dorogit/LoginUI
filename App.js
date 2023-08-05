import React from "react";
import Screen from './src/Screen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} >
        <Stack.Screen name = "Screen" component = {Screen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;