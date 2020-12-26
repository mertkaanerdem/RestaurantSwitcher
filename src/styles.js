import {StyleSheet, Dimensions} from 'react-native';

const deviceSize = Dimensions.get('window');

const home_view = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff176',
  },
  button: {
    backgroundColor: '#fff9c4',
    padding: 20,
    borderRadius: 20,
  },
  text: {
    color: '#f57f17',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

const restaurant_view = StyleSheet.create({});

export {home_view, restaurant_view};
