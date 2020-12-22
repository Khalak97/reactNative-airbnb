import React from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  Text,
  Pressable,
  Dimensions,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      <ImageBackground
        source={{
          uri:
            'https://a0.muscache.com/im/pictures/c8dd7889-d579-49c7-9650-24ff71a82190.jpg',
        }}
        style={styles.image}>
        <Pressable
          style={styles.searchButton}
          onPress={() => navigation.navigate('Search')}>
          <Fontisto
            name="search"
            size={25}
            color="#f15454"
            style={{marginHorizontal: 10}}
          />
          <Text style={styles.searchButtonText}>Where are you going?</Text>
        </Pressable>
        <Text style={styles.title}>Go Near</Text>
        <Pressable
          style={styles.button}
          onPress={() => console.warn('Button clicked')}>
          <Entypo
            name="location-pin"
            size={30}
            style={{padding: 15, color: '#f15454'}}
          />
          <Text style={styles.buttonText}>Explore nearby stays</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  title: {
    fontSize: 80,
    fontWeight: 'bold',
    color: 'white',
    width: '70%',
    marginLeft: 25,
  },
  searchButton: {
    backgroundColor: 'white',
    width: Dimensions.get('screen').width - 50,
    marginHorizontal: 25,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 20,
    top: 50,
    borderRadius: 40,
  },
  searchButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 25,
    width: 230,
    marginLeft: 25,
    borderRadius: 30,
  },
  buttonText: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 18,
    marginRight: 20,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
