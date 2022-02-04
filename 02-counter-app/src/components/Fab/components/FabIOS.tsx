import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../styles/styles';

interface Props {
  title: string;
  position?: 'br' | 'bl';
  onPress: () => void;
}

const FabIOS = ({title, onPress, position = 'bl'}: Props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[
        styles.fabPosition,
        position === 'bl' ? styles.left : styles.right,
      ]}
      onPress={onPress}>
      <View style={styles.fab}>
        <Text style={styles.fabText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default FabIOS;
