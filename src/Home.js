import React, {useState} from 'react';
import {
  View,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {deviceHeight, deviceWidth} from './Dimantion';
import Icon from 'react-native-vector-icons/Ionicons';
import Cards from './Cards';
export default function Home(props) {
  const [City, setCity] = useState('');

  const cities = [
    {
      name: 'New Delhi',
      image: require('../images/delhi.jpg'),
    },
    {
      name: 'Mumbai',
      image: require('../images/mumbai.jpg'),
    },

    {
      name: 'Chennai',
      image: require('../images/chennai.jpg'),
    },

    {
      name: 'kolkata',
      image: require('../images/kolkata.jpg'),
    },
  ];
  return (
    <View>
      <ImageBackground
        source={require('../images/earth.jpg')}
        style={{height: deviceHeight, width: deviceWidth}}
        imageStyle={{opacity: 0.6, backgroundColor: 'black'}}
      />
      <View
        style={{
          position: 'absolute',
          paddingVertical: 60,
          paddingHorizontal: 25,
        }}>
        <View style={{alignItems: 'center', paddingTop: 50}}>
          <Text style={{fontSize: 35, color: 'white'}}>Weather Forecast</Text>
          <Text style={{color: 'white', marginTop: 3, fontWeight: 'bold'}}>
            Search Your City By Name
          </Text>
          <View
            style={{
              marginTop: 40,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderRadius: 50,
              borderWidth: 1,
              borderColor: 'white',
              paddingHorizontal: 10,
              paddingRight: 20,
              height: 40,
            }}>
            <TextInput
              value={City}
              onChangeText={val => setCity(val)}
              placeholder="Search your place"
              placeholderTextColor="white"
              style={{paddingHorizontal: 40, color: 'white', width: '95%'}}
            />
            <TouchableOpacity
              onPress={() =>
                props.navigation.navigate('Details', {name: City})
              }>
              <Icon name="search" size={22} color="white" />
            </TouchableOpacity>
          </View>
          <Text
            style={{
              color: 'white',
              fontSize: 18,
              paddingHorizontal: 10,
              marginTop: 250,
              marginBottom: 20,
            }}>
            Nearby Locations
          </Text>
          <FlatList
            horizontal
            data={cities}
            renderItem={({item}) => (
              <Cards
                name={item.name}
                image={item.image}
                navigation={props.navigation}
              />
            )}
          />
        </View>
      </View>
    </View>
  );
}
