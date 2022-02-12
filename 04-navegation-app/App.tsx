import 'react-native-gesture-handler';
import React from 'react';
import { LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/navigation/StackNavigator';
import DrawerNavigator from './src/navigation/DrawerNavitgator';
import Menu from './src/navigation/Menu';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

const App = () => (
  <NavigationContainer>
    {/* <StackNavigator /> */}
    {/* <DrawerNavigator /> */}
    <Menu />
  </NavigationContainer>
);

export default App;
