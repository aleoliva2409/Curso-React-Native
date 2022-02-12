import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import StackNavigator from './StackNavigator';
import DrawerMenuScreen from '../screens/DrawerMenuScreen';
import {
  Image,
  useWindowDimensions,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { styles } from '../theme/appTheme';
import SettingsScreen from '../screens/SettingsScreen';

const Drawer = createDrawerNavigator();

const Menu = () => {
  const { width } = useWindowDimensions();

  return (
    <Drawer.Navigator
      drawerContent={props => <MenuContent {...props} />}
      screenOptions={{
        drawerType: width >= 768 ? 'permanent' : 'front',
      }}>
      <Drawer.Screen
        name="StackNavigator"
        // options={{ title: 'Home' }}
        component={StackNavigator}
      />
      <Drawer.Screen
        name="DrawerMenuScreen"
        // options={{ title: 'Drawer Page' }}
        component={DrawerMenuScreen}
      />
      <Drawer.Screen
        name="SettingsScreen"
        // options={{ title: 'Drawer Page' }}
        component={SettingsScreen}
      />
    </Drawer.Navigator>
  );
};

export default Menu;

const MenuContent = ({ navigation }: DrawerContentComponentProps) => (
  <DrawerContentScrollView>
    <View style={styles.avatarContainer}>
      <Image
        source={{
          uri: 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png',
        }}
        style={styles.avatar}
      />
    </View>
    <View style={styles.menuContainer}>
      <TouchableOpacity
        style={styles.menuButton}
        onPress={() => navigation.navigate('StackNavigator')}>
        <Text style={styles.menuText}>Navigation</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.menuButton}
        onPress={() => navigation.navigate('DrawerMenuScreen')}>
        <Text style={styles.menuText}>Drawer Screen</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.menuButton}
        onPress={() => navigation.navigate('SettingsScreen')}>
        <Text style={styles.menuText}>Settings Screen</Text>
      </TouchableOpacity>
    </View>
  </DrawerContentScrollView>
);
