import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../theme/calulator.styles';

interface Props {
  text: string;
  color?: string;
  large?: boolean;
  action: (textNumber: string) => void;
}

const ButtonCalc = ({
  text,
  color = '#2D2D2D',
  large = false,
  action,
}: Props) => {
  return (
    <TouchableOpacity onPress={() => action(text)}>
      <View
        style={{
          ...styles.button,
          backgroundColor: color,
          width: large ? styles.button.width * 2.3 : styles.button.width,
        }}>
        <Text
          style={{
            ...styles.textButton,
            color: color === '#9B9B9B' ? '#000000' : '#ffffff',
          }}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ButtonCalc;
