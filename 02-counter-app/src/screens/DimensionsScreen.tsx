import React from 'react';
import {Text, View, Dimensions, useWindowDimensions} from 'react-native';
import {dimensionsStyles as styles} from '../styles/styles';

// const { width, height } = Dimensions.get('window'); // ? medida estatica !!

const DimensionesScreen = () => {
  const {width, height} = useWindowDimensions(); // ? Medida en tiempo real!!

  return (
    <View>
      <View style={styles.container}>
        <View
          style={{
            ...styles.boxPurple,
            width: width * 0.6,
          }}
        />
        <View style={styles.boxOrange} />
      </View>
      <Text style={styles.title}>
        W: {width}, H: {height}
      </Text>
    </View>
  );
};

export default DimensionesScreen;
