import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { Text, View, Button } from 'react-native';
import { styles } from '../theme/appTheme';

interface Props extends StackScreenProps<any, any> {}

const ThirdScreen = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title} >Third Screen</Text>
      <Button title="back" onPress={() => navigation.pop()} />
      <Button title="To first screen" onPress={() => navigation.popToTop()} />
    </View>
  );
};

export default ThirdScreen;
