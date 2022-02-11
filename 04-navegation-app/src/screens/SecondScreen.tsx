import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, View, Button } from 'react-native';
import { styles } from '../theme/appTheme';

const SecondScreen = () => {
  const navigation = useNavigation<any>();

  useEffect(() => {
    navigation.setOptions({
      title: 'Hola Mundo', // ? titulo para la screen en el header, pisa si se le paso uno por props anteriormente
      headerBackTitle: 'Back', // ? para IOS, el nombre al lado del icono de back, Android no lo tiene
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Second Screen</Text>
      <Button
        title="To third screen"
        onPress={() => navigation.navigate({ name: 'ThirdScreen' })}
      />
    </View>
  );
};

export default SecondScreen;
