import React, { useEffect } from 'react';
// import { StackScreenProps } from '@react-navigation/stack';
import { Text, View, Button, TouchableOpacity } from 'react-native';
import { styles } from '../theme/appTheme';
import { DrawerScreenProps } from '@react-navigation/drawer';

// interface Props extends StackScreenProps<any, any> {}
interface Props extends DrawerScreenProps<any, any> {}

const FirstScreen = ({ navigation }: Props) => {
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Button title="Menu" onPress={() => navigation.toggleDrawer()} />
      ),
    });
  }, []); // ? esto sirve para colocarle un boton para hacer el toogle pero Drawer ya incluye dicho menu en la ultima version
  // ? no se esta usando el header de drawer porque necesito el del stack navigator

  
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
