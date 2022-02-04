import React, {useState} from 'react';
import {View, Text} from 'react-native';
import Fab from '../components/Fab';
import { styles } from '../styles/styles';

const CounterScreen = () => {
  const [counter, setCounter] = useState(10);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Counter: {counter}</Text>
      <Fab title="-1" onPress={() => setCounter(counter - 1)} />
      <Fab title="+1" onPress={() => setCounter(counter + 1)} position="br" />
      {/* <Button onPress={() => setCounter(counter + 1)} title='+ 1' /> // ? No usar Button */}
    </View>
  );
};

export default CounterScreen;
