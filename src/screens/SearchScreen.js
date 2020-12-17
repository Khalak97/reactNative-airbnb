import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
  Pressable,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Entypo from 'react-native-vector-icons/Entypo';

import dbSearch from '../../dbSearch';

const SearchResult = () => {
  const [inputText, setInputText] = useState('');
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Where are you going?"
        value={inputText}
        onChangeText={setInputText}
      />
      <FlatList
        data={dbSearch}
        renderItem={({item}) => (
          <Pressable
            onPress={() => navigation.navigate('Guests')}
            style={styles.row}>
            <View style={styles.iconContainer}>
              <Entypo name="location-pin" size={30} />
            </View>
            <Text style={styles.locationText}>{item.desc}</Text>
          </Pressable>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  textInput: {
    fontSize: 20,
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
  },
  iconContainer: {
    backgroundColor: 'lightgray',
    padding: 5,
    borderRadius: 10,
    marginRight: 15,
  },
  locationText: {
    fontSize: 16,
  },
});

export default SearchResult;
