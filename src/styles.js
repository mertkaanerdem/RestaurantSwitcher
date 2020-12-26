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

const restaurant_view = StyleSheet.create({
  cardContainer: {
    height: deviceSize.height * 0.8,
    backgroundColor: '#ff7f37' /*#fff176*/,
    padding: 10,
    margin: 10,
    borderRadius: 10,
    opacity: 0.9,
  },

  cardImage: {
    height: deviceSize.height / 3,
    resizeMode: 'contain',
    justifyContent: 'center',
  },
  cardText: {
    textAlign: 'center',
    fontSize: 40,
    color: '#fff176',
    fontWeight: 'bold',
    textShadowOffset: {width: 3, height: 3},
    textShadowColor: '#f57f17',
    textShadowRadius: 2,
    textDecorationLine: 'underline',
  },
  description: {
    textAlign: 'justify',
    fontSize: 15,
    fontWeight: 'bold',
    padding: 20,
    color: '#222',
    overflow: 'scroll',
  },
  descriptionContainer: {
    marginVertical: 20,
    backgroundColor: '#fff179',
    borderRadius: 10,
    opacity: 0.9,
  },

  contactContainer: {
    height: deviceSize.height / 7,
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#e3e3e3',
    alignItems: 'center',
  },
  addressContainer: {
    padding: 20,
    width: deviceSize.width * 0.5,
  },
  address: {
    color: '#222',
    textAlign: 'left',
    textDecorationLine: 'underline',
  },
  phoneContainer: {
    padding: 20,
    width: deviceSize.width * 0.5,
  },
  phone: {
    textDecorationLine: 'underline',
    color: '#222',
    textAlign: 'right',
  },
  buttonContainer: {
    height: deviceSize.height * 0.1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#fff9c4',
    padding: 20,
    borderRadius: 20,
  },
  buttonText: {
    color: '#f57f17',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export {home_view, restaurant_view};
