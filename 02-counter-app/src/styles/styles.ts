import {StyleSheet} from 'react-native';

export const counterStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 50,
    textAlign: 'center',
    top: -20,
  },
});

export const boxModelStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  title: {
    paddingHorizontal: 100,
    paddingVertical: 20,
    fontSize: 20,
    marginHorizontal: 20,
    // width: 250,
    borderWidth: 10,
    // backgroundColor: 'red'
  },
});

export const dimensionsStyles = StyleSheet.create({
  container: {
    width: '100%',
    height: 200,
    backgroundColor: 'red',
  },
  boxPurple: {
    backgroundColor: '#5856D6',
    // width: '20%',
    height: '50%',
  },
  boxOrange: {
    backgroundColor: '#F0A23B',
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
  },
});

export const stylesPosition = StyleSheet.create({
  container: {
    flex: 1,
    // width: 400,
    // height: 400,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#28C4D9',
  },
  boxPurple: {
    width: 100,
    height: 100,
    backgroundColor: '#5856D6',
    borderWidth: 10,
    borderColor: 'white',
    position: 'absolute',
    top: 0,
    right: 0,
  },
  boxOrange: {
    width: 100,
    height: 100,
    backgroundColor: '#F0A23B',
    borderWidth: 10,
    borderColor: 'white',
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  boxGreen: {
    // width: 100,
    // height: 100,
    backgroundColor: 'green',
    borderWidth: 10,
    borderColor: 'white',
    // position: 'absolute',
    // bottom: 0,
    // left: 0,
    // top: 0,
    // right: 0
    ...StyleSheet.absoluteFillObject, // ?
  },
});

export const stylesFlex = StyleSheet.create({
  container: {
    flex: 1,
    // height: 300,
    backgroundColor: '#28C4D9',
  },
  box1: {
    borderWidth: 2,
    borderColor: 'white',
    fontSize: 30,
  },
  box2: {
    borderWidth: 2,
    borderColor: 'white',
    fontSize: 30,
  },
  box3: {
    borderWidth: 2,
    borderColor: 'white',
    fontSize: 30,
  },
});

export const stylesHomeWork = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28425B',
    // justifyContent: 'center', // ? Ex 2
    // justifyContent: 'center', // ? Ex 3
    // justifyContent: 'space-between' // ? Ex 4
    // flexDirection: 'row', // ? Ex 5
    // justifyContent: 'space-between', // ? Ex 5
    // justifyContent: 'center', // ? Ex 7
    // alignItems: 'center', // ? Ex 7
    // justifyContent: 'center', // ? Ex 8
    // alignItems: 'center', // ? Ex 8
    // justifyContent: 'center', // ? Ex 9
    // alignItems: 'center', // ? Ex 9
    // flexDirection: 'row', // ? Ex 10
    // justifyContent: 'center', // ? Ex 10
    // alignItems: 'center', // ? Ex 10
  },
  boxPurple: {
    width: 100, // ? Ex 6 (comentar)
    height: 100, // ?  Ex 1 y Ex 5 (comentar)
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#5856D6',
    // alignSelf: 'flex-end' // ? Ex 3
    // alignSelf: 'flex-end' // ? Ex 4
    // flex: 1, // ? Ex 6
    // top: 100, // ? Ex 9
    // bottom: 50, // ? Ex 10
  },
  boxOrange: {
    width: 100, // ? Ex 6 (comentar)
    height: 100, // ? Ex 5 (comentar)
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#F0A23B',
    // flex: 1 // ? Ex 1
    // alignSelf: 'center' // ? Ex 4
    // flex: 1, // ? Ex 6
    // left: 100, // ? Ex 8
    // left: 100, // ? Ex 9
  },
  boxBlue: {
    width: 100, // ? Ex 2 y Ex 6 (comentar)
    height: 100, // ? Ex 5 (comentar)
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#28C4D9',
    // width: '100%' // ? Ex 2 o comentar width
    // alignSelf: 'center' // ? Ex 3
    // alignSelf: 'flex-start' // ? Ex 4
    // flex: 2, // ? Ex 6
    // bottom: 50, // ? Ex 10
  },
});
