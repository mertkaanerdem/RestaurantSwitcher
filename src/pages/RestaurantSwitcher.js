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
  const [restaurantData, setRestaurantData] = useState({});

  async function fetchData() {
    const {data} = await axios.get(url_path);
    setRestaurantData(data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View>
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
    </View>
  );
}

export {RestaurantViewer};
