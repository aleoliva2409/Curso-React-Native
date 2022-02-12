import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import StackNavigator from './StackNavigator';
import DrawerMenuScreen from '../screens/DrawerMenuScreen';
import { useWindowDimensions } from 'react-native';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  const { width } = useWindowDimensions();

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: width >= 768 ? 'permanent' : 'front',
      }}>
      <Drawer.Screen
        name="StackNavigator"
        options={{ title: 'Home' }}
        component={StackNavigator}
      />
      <Drawer.Screen
        name="DrawerMenuScreen"
        options={{ title: 'Drawer Page' }}
        component={DrawerMenuScreen}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
