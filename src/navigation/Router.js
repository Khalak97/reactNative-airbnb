import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import SearchScreen from '../screens/SearchScreen';
import SearchResultScreen from '../screens/SearchResultScreen';
import GuestsScreen from '../screens/GuestsScreen';

import HomeTabNavigator from '../navigation/HomeTabNavigator';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={'Home'}
          component={HomeTabNavigator}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name={'Search'} component={SearchScreen} />
        <Stack.Screen name={'Guests'} component={GuestsScreen} />
        <Stack.Screen name={'SearchResult'} component={SearchResultScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
