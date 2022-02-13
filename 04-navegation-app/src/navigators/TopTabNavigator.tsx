import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
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
          // ? No viene la propiedad size en las props de este tabNavigator pero si en el de IOS
          let iconName: string = '';

          switch (route.name) {
            case 'ChatScreen':
              iconName = 'chatbox-outline';
              break;
            case 'ContactScreen':
              iconName = 'mail-outline';
              break;
            case 'AlbumScreen':
              iconName = 'images-outline';
              break;
          }

          return <Icon name={iconName} size={20} color="#000" />;
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
