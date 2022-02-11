import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../theme/appTheme';

interface Props extends StackScreenProps<any, any> {}

const FifthScreen = ({ navigation }: Props) => {
  return (
    <View>
      <Text style={styles.title}>Fifth Screen</Text>
    </View>
  );
};

export default FifthScreen;
