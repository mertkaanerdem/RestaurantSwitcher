import React from 'react';
import {View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

function RestaurantViewer({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text>Restaurant Screen</Text>
      </TouchableOpacity>
    </View>
  );
}

export {RestaurantViewer};
