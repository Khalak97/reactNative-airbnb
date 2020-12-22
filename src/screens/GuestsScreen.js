import React, {useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

import {useNavigation} from '@react-navigation/native';

const GuestsScreen = () => {
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);

  const navigation = useNavigation();

  return (
    <View style={{justifyContent: 'space-between', height: '100%'}}>
      <View>
        <View style={styles.row}>
          <View>
            <Text style={styles.supText}>Adults</Text>
            <Text style={styles.subText}>Ages 13 or above</Text>
          </View>
          <View style={styles.count}>
            <Pressable
              onPress={() => setAdults(Math.max(0, adults - 1))}
              style={styles.button}>
              <Text style={styles.buttonText}>-</Text>
            </Pressable>
            <Text style={styles.ageText}>{adults}</Text>
            <Pressable
              onPress={() => setAdults(adults + 1)}
              style={styles.button}>
              <Text style={styles.buttonText}>+</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.row}>
          <View>
            <Text style={styles.supText}>Children</Text>
            <Text style={styles.subText}>Ages 0 - 12</Text>
          </View>
          <View style={styles.count}>
            <Pressable
              onPress={() => setChildren(Math.max(0, children - 1))}
              style={styles.button}>
              <Text style={styles.buttonText}>-</Text>
            </Pressable>
            <Text style={styles.ageText}>{children}</Text>
            <Pressable
              onPress={() => setChildren(children + 1)}
              style={styles.button}>
              <Text style={styles.buttonText}>+</Text>
            </Pressable>
          </View>
        </View>
      </View>
      <Pressable
        onPress={() =>
          navigation.navigate('Home', {
            screen: 'Explore',
            params: {
              screen: 'SearchResults',
            },
          })
        }
        style={styles.bottomSearch}>
        <Text style={{color: 'white', fontSize: 20}}>Search</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
  count: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 20,
    borderColor: 'lightgray',
    width: 40,
    height: 40,
  },
  buttonText: {
    fontSize: 24,
    color: 'gray',
  },
  subText: {color: 'gray', paddingTop: 10},
  supText: {fontWeight: 'bold', fontSize: 20},
  ageText: {fontSize: 20, marginHorizontal: 15},
  bottomSearch: {
    backgroundColor: '#f15454',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    marginHorizontal: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
});

export default GuestsScreen;
