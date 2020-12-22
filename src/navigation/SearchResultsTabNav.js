import React from 'react';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import SearchResultScreen from '../screens/SearchResultScreen';
//import  from '';

const Tab = createMaterialTopTabNavigator();

const SearchResultsTabNav = (props) => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#f15454',
        indicatorStyle: {
          backgroundColor: '#f15454',
        },
      }}>
      <Tab.Screen name={'list'} component={SearchResultScreen} />
      <Tab.Screen name={'map'} component={SearchResultScreen} />
    </Tab.Navigator>
  );
};

export default SearchResultsTabNav;
