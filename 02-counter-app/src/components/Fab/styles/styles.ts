import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
  fabPosition: {
    position: 'absolute',
    bottom: 12,
  },
  right: {
    right: 12,
  },
  left: {
    left: 12,
  },
  fab: {
    backgroundColor: '#5856D6',
    width: 60,
    height: 60,
    borderRadius: 100,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,

    elevation: 14,
  },
  fabText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});