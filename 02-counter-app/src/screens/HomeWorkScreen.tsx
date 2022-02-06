import React from 'react';
import {View} from 'react-native';
import {stylesHomeWork as styles} from '../styles/styles';

const HomeWorkScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.boxPurple} />
      <View style={styles.boxOrange} />
      <View style={styles.boxBlue} />
    </View>
  );
};

export default HomeWorkScreen;
