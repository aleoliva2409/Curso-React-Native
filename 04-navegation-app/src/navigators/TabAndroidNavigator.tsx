import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Tab1Screen from '../screens/Tab1Screen';
import StackNavigator from './StackNavigator';
import { colors } from '../theme/appTheme';
import { Text } from 'react-native';
import TopTabNavigator from './TopTabNavigator';

const Tab = createMaterialBottomTabNavigator();

const TabAndroidNavigator = () => {
  return (
    <Tab.Navigator
      sceneAnimationEnabled
      barStyle={{
        backgroundColor: colors.primary,
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          // ? No viene la propiedad size en las props de este tabNavigator pero si en el de IOS
          let iconName: string = '';

          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'home-outline';
              break;
            case 'TopTabNavigator':
              iconName = 'grid-outline';
              break;
            case 'StackNavigator':
              iconName = 'file-tray-stacked-outline';
              break;
          }

          return <Icon name={iconName} size={20} color="#fff" />;
        },
      })}>
      <Tab.Screen
        name="Tab1Screen"
        options={{
          title: 'Tap1',
          // tabBarIcon: props => <Text style={{ color: props.color }}>T1</Text>, // ? vemos que podemos mandar iconos individualmente
        }}
        component={Tab1Screen}
      />
      <Tab.Screen
        name="TopTabNavigator"
        options={{ title: 'Tab2' }}
        component={TopTabNavigator}
      />
      <Tab.Screen
        name="StackNavigator"
        options={{ title: 'Stack' }}
        component={StackNavigator}
      />
    </Tab.Navigator>
  );
};

export default TabAndroidNavigator;
