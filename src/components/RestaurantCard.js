import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/EvilIcons';
import {restaurant_view} from '../styles';

function RestaurantCard({data}) {
  return (
    <View style={restaurant_view.cardContainer}>
      <ImageBackground
        style={restaurant_view.cardImage}
        imageStyle={{borderRadius: 10}}
        source={{uri: data.logo}}>
        <Text style={restaurant_view.cardText}>{data.name}</Text>
      </ImageBackground>

      <ScrollView style={restaurant_view.descriptionContainer}>
        <Text style={restaurant_view.description}>{data.description}</Text>
      </ScrollView>
    </View>
  );
}

export default RestaurantCard;
