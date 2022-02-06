import React from 'react';
import {View} from 'react-native';
import { stylesPosition as styles } from '../styles/styles';

const PositionScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.boxGreen} />
      <View style={styles.boxPurple} />
      <View style={styles.boxOrange} />
    </View>
  );
};

export default PositionScreen;

