import React from 'react';
import {View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import {home_view} from '../styles';

function HomeScreen({navigation}) {
  return (
    <View style={home_view.container}>
      <TouchableOpacity
        style={home_view.button}
        onPress={() => navigation.navigate('Restaurants')}>
        <Text style={home_view.text}>Find a Good Place</Text>
      </TouchableOpacity>
    </View>
  );
}

export {HomeScreen};
