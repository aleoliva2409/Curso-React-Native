import 'react-native-gesture-handler';
import React from 'react';
import { LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/navigators/StackNavigator';
import DrawerNavigator from './src/navigators/DrawerNavitgator';
import Menu from './src/navigators/Menu';
import TabsNavigator from './src/navigators/TabsNavigator';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

const App = () => (
  <NavigationContainer>
    {/* <StackNavigator /> */}
    {/* <DrawerNavigator /> */}
    <Menu />
    {/* <TabsNavigator /> */}
  </NavigationContainer>
);

export default App;
