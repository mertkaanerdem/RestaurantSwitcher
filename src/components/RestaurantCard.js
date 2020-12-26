import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import {restaurant_view} from '../styles';

function RestaurantCard({data}) {
  return <Text>{data.name}</Text>;
}

export default RestaurantCard;
