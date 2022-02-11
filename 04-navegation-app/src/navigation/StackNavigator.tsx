import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import FirstScreen from '../screens/FirstScreen';
import SecondScreen from '../screens/SecondScreen';
import ThirdScreen from '../screens/ThirdScreen';
import FourthScreen from '../screens/FourthScreen';
import FifthScreen from '../screens/FifthScreen';
import PersonScreen from '../screens/PersonScreen';

interface PersonData {
  id: number;
  name: string;
}

export type RootStackParams = {
  FirstScreen: undefined;
  SecondScreen: undefined;
  ThirdScreen: undefined;
  FourthScreen: undefined;
  FifthScreen: undefined;
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
        name="FourthScreen"
        options={{ title: 'Page 4' }}
        component={FourthScreen}
      />
      <Stack.Screen
        name="FifthScreen"
        options={{ title: 'Page 5' }}
        component={FifthScreen}
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
