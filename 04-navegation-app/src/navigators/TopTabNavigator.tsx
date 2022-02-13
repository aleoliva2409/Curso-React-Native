import React from 'react';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ChatScreen from '../screens/ChatScreen';
import ContactScreen from '../screens/ContactScreen';
import AlbumScreen from '../screens/AlbumScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from '../theme/appTheme';
import { Text } from 'react-native';

const Tab = createMaterialTopTabNavigator();

const TopTabNavigator = () => {
  const inset = useSafeAreaInsets();

  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: '#fff',
      }}
      screenOptions={({ route }) => ({
        tabBarPressColor: colors.primary,
        tabBarShowIcon: true,
        tabBarIndicatorStyle: {
          backgroundColor: colors.primary,
        },
        tabBarStyle: {
          elevation: 0,
          shadowColor: 'transparent', // ? para IOS
        },
        tabBarIcon: ({ color }) => {
          let iconName: string = '';

          switch (route.name) {
            case 'ChatScreen':
              iconName = 'Ch';
              break;
            case 'ContactScreen':
              iconName = 'Ct';
              break;
            case 'AlbumScreen':
              iconName = 'Al';
              break;
          }

          return <Text style={{ color }}>{iconName}</Text>;
        },
      })}
      style={{
        marginTop: inset.top,
      }}>
      <Tab.Screen
        name="ChatScreen"
        options={{ title: 'Chat' }}
        component={ChatScreen}
      />
      <Tab.Screen
        name="ContactScreen"
        options={{ title: 'Contact' }}
        component={ContactScreen}
      />
      <Tab.Screen
        name="AlbumScreen"
        options={{ title: 'Album' }}
        component={AlbumScreen}
      />
    </Tab.Navigator>
  );
};

export default TopTabNavigator;
