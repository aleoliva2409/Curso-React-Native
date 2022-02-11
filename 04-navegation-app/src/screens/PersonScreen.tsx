import React, { useEffect } from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { Text, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { RootStackParams } from '../navigation/StackNavigator';

// interface RouteParams { // ? Example 2
//   id: number;
//   name: string;
// }

// interface Props extends StackScreenProps<any, any> {} // ? Example 1 and 2
interface Props extends StackScreenProps<RootStackParams, 'PersonScreen'> {} // ? Example 3
// ? Primer arg => Stack params, 2do arg, el nombre de la ruta o screen

const PersonScreen = ({ route, navigation }: Props) => {
  // const params = route.params // ? Example 1
  // const params = route.params as RouteParams // ? Example 2
  const params = route.params; // ? Example 3

  // useEffect(() => {
  //   navigation.setOptions({
  //     title: params!.name // ? el "!" forza a que le se lea la variable como sea y le de un tipado
  //   })
  // }, []) // ? Example 1

  useEffect(() => {
    navigation.setOptions({
      title: params.name,
    });
  }, []); // ? Example 2 and 3

  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>{JSON.stringify(params, null, 3)}</Text> //?Example 1 */}
      <Text style={styles.title}>{JSON.stringify(params, null, 3)}</Text>
    </View>
  );
};

export default PersonScreen;
