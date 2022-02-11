import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { Text, View, Button, TouchableOpacity } from 'react-native';
import { styles } from '../theme/appTheme';

interface Props extends StackScreenProps<any, any> {}

const FirstScreen = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>First Screen</Text>
      <Button
        title="To second screen"
        onPress={() => navigation.navigate('SecondScreen')}
      />
      {/* <Button
        title="Navigate with args"
        onPress={() => navigation.navigate('PersonScreen')}
      /> */}

      <Text style={styles.title}>To navigate with arguments</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() =>
            navigation.navigate('PersonScreen', {
              // ? en el 2do arg mandamos la data que querramos pasarle a dicha screen
              id: 1,
              name: 'Pedro',
              dni: '2222222',
            })
          }>
          <Text style={styles.textBtn}>Pedro</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() =>
            navigation.navigate('PersonScreen', {
              // ? en el 2do arg mandamos la data que querramos pasarle a dicha screen
              id: 2,
              name: 'Maria',
              dni: '333333',
            })
          }>
          <Text style={styles.textBtn}>Maria</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FirstScreen;
