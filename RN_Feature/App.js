import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackScreen from './src/route/stack/StackScreen';
console.disableYellowBox = true;

export default function App() {
  return (
    <NavigationContainer>
      <StackScreen />
    </NavigationContainer>
  );
}
