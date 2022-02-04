import React from 'react';
import {Platform} from 'react-native';
import FabAndroid from './components/FabAndroid';
import FabIOS from './components/FabIOS';

interface Props {
  title: string;
  position?: 'br' | 'bl';
  onPress: () => void;
}

const Fab = (props: Props) =>
  Platform.OS === 'ios' ? <FabIOS {...props} /> : <FabAndroid {...props} />;

export default Fab;
