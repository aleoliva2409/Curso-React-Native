import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import StackNavigator from './StackNavigator';
import DrawerMenuScreen from '../screens/DrawerMenuScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="StackNavigator" component={StackNavigator} />
      <Drawer.Screen name="DrawerMenuScreen" component={DrawerMenuScreen} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;