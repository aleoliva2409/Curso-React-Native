import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
// const myIcon = <Icon name="rocket" size={30} color="#900" />;
import { Text, View } from 'react-native';
import { styles, colors } from '../theme/appTheme';

const Tab1Screen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Icons</Text>
      <Text style={styles.title}>
        <Icon name="rocket-outline" size={60} color={colors.primary} />
      </Text>
      <Text style={styles.title}>
        <Icon name="arrow-undo-outline" size={60} color={colors.primary} />
      </Text>
      <Text style={styles.title}>
        <Icon name="bluetooth-outline" size={60} color={colors.primary} />
      </Text>
      <Text style={styles.title}>
        <Icon name="car-sport-outline" size={60} color={colors.primary} />
      </Text>
      <Text style={styles.title}>
        <Icon name="bus-outline" size={60} color={colors.primary} />
      </Text>
    </View>
  );
};

export default Tab1Screen;
