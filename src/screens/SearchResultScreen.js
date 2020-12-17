import React from 'react';
import {View, FlatList} from 'react-native';

import Post from '../components/Post';
import dbPost from '../../dbPost';

const SearchResultScreen = () => {
  return (
    <View>
      <FlatList data={dbPost} renderItem={({item}) => <Post post={item} />} />
    </View>
  );
};

export default SearchResultScreen;
