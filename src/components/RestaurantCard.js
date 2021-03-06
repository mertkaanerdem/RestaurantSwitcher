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

      <View style={restaurant_view.contactContainer}>
        <View style={restaurant_view.addressContainer}>
          <Text style={restaurant_view.address}>{data.address}</Text>
        </View>
        <View style={restaurant_view.phoneContainer}>
          <Text style={restaurant_view.phone}>{data.phone_number}</Text>
        </View>
      </View>
      <Text style={restaurant_view.review}>"{data.review}"</Text>
    </View>
  );
}

export default RestaurantCard;
