import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import FirstScreen from '../screens/FirstScreen';
import SecondScreen from '../screens/SecondScreen';
import ThirdScreen from '../screens/ThirdScreen';
import PersonScreen from '../screens/PersonScreen';

interface PersonData {
  id: number;
  name: string;
}

export type RootStackParams = {
  FirstScreen: undefined;
  SecondScreen: undefined;
  ThirdScreen: undefined;
  PersonScreen: PersonData;
}

const Stack = createStackNavigator<RootStackParams>();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      // initialRouteName="FourthScreen" // ? indicamos que screen sera la principal
      screenOptions={{
        cardStyle: {
          backgroundColor: '#ffffff',
        },
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent',
        },
        headerTitleAlign: 'center'
      }}>
      <Stack.Screen
        name="FirstScreen"
        options={{ title: 'Page 1' }}
        component={FirstScreen}
      />
      <Stack.Screen
        name="SecondScreen"
        options={{ title: 'Page 2' }}
        component={SecondScreen}
      />
      <Stack.Screen
        name="ThirdScreen"
        options={{ title: 'Page 3' }}
        component={ThirdScreen}
      />
      <Stack.Screen
        name="PersonScreen"
        options={{ title: 'Person Screen' }}
        component={PersonScreen}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
