import React from 'react';
import {Text, View} from 'react-native';
import {stylesFlex as styles} from '../styles/styles';

const FlexScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.box1}>Caja 1</Text>
      <Text style={styles.box2}>Caja 2</Text>
      <Text style={styles.box3}>Caja 3</Text>
    </View>
  );
};

export default FlexScreen;

