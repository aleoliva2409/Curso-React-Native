import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25,
    justifyContent: 'flex-end',
  },
  textResult: {
    color: '#ffffff',
    fontSize: 60,
    textAlign: 'right',
    paddingBottom: 10,
  },
  littleText: {
    color: '#ffffff50',
    fontSize: 30,
    textAlign: 'right',
  },
  rowButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 18,
    paddingHorizontal: 10,
  },
  button: {
    height: 75,
    width: 75,
    backgroundColor: '#333333',
    borderRadius: 100,
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  textButton: {
    textAlign: 'center',
    // padding: 10,
    fontSize: 30,
    fontWeight: '400',
  },
});
