import React from 'react';
import { Platform } from 'react-native';
import TabIosNavigator from './TabIosNavigator';
import TabAndroidNavigator from './TabAndroidNavigator';

const TabsNavigator = () =>
  Platform.OS === 'ios' ? <TabIosNavigator /> : <TabAndroidNavigator />;

export default TabsNavigator;
