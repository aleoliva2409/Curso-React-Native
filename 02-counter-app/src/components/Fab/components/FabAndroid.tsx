import React from 'react';
import { Text, TouchableNativeFeedback, View } from 'react-native';
import { styles } from '../styles/styles';

interface Props {
  title: string;
  position?: 'br' | 'bl';
  onPress: () => void;
}

const FabAndroid = ({title, onPress, position = 'bl'}: Props) => {
  return (
    <View
      style={[
        styles.fabPosition,
        position === 'bl' ? styles.left : styles.right,
      ]}>
      <TouchableNativeFeedback
        onPress={onPress}
        background={TouchableNativeFeedback.Ripple('grey', false, 30)}>
        <View style={styles.fab}>
          <Text style={styles.fabText}>{title}</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

export default FabAndroid;
