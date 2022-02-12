import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Tab1Screen from '../screens/Tab1Screen';
import StackNavigator from './StackNavigator';
import { colors } from '../theme/appTheme';
import { Text } from 'react-native';
import TopTabNavigator from './TopTabNavigator';

const Tab = createBottomTabNavigator();

const TabsNavigator = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: '#fff',
      }}
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: colors.primary,
        tabBarStyle: {
          borderTopColor: colors.primary,
          borderTopWidth: 0,
          elevation: 0,
        },
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: 15,
        },
        tabBarIcon: ({ color }) => {
          let iconName: string = '';

          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'T1';
              break;
            case 'Tab2Screen':
              iconName = 'T2';
              break;
            case 'StackNavigator':
              iconName = 'ST';
              break;
          }

          return <Text style={{ color }}>{iconName}</Text>;
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

export default TabsNavigator;
