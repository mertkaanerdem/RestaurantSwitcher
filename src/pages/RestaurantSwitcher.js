import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {
  ActivityIndicator,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import RestaurantCard from '../components/RestaurantCard';
import {restaurant_view} from '../styles';

const url_path = 'https://random-data-api.com/api/restaurant/random_restaurant';

function RestaurantViewer({navigation}) {
  const [loading, setLoading] = useState(false);
  const [restaurantData, setRestaurantData] = useState(null);

  async function fetchData() {
    setLoading(true);
    const {data} = await axios.get(url_path);
    setRestaurantData(data);
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (!restaurantData) {
    return (
      <SafeAreaView>
        <ActivityIndicator />
        <Text>Restaurants are Loading</Text>
      </SafeAreaView>
    );
  }

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={loading} onRefresh={() => fetchData()} />
      }>
      <ScrollView>
        <RestaurantCard data={restaurantData} />
      </ScrollView>

      <View style={restaurant_view.buttonContainer}>
        <TouchableOpacity
          style={restaurant_view.button}
          onPress={() => navigation.goBack()}>
          <Text style={restaurant_view.buttonText}>Go Back</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

export {RestaurantViewer};
