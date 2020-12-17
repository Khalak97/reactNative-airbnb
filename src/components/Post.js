import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

const Post = (props) => {
  const post = props.post;

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: post.image,
        }}
      />
      <Text style={styles.bedrooms}>
        {post.bed} bed {post.bedroom} bedroom
      </Text>
      <Text style={styles.desc} numberOfLines={2}>
        {post.type}. {post.title}
      </Text>
      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>${post.oldPrice}</Text>
        <Text style={styles.newPrice}> ${post.newPrice} </Text>/night
      </Text>
      <Text style={styles.totalPrice}>${post.totalPrice}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    paddingBottom: 20,
  },
  image: {
    width: '100%',
    aspectRatio: 3 / 2,
    resizeMode: 'cover',
    borderRadius: 15,
  },
  bedrooms: {
    marginVertical: 10,
    color: 'gray',
  },
  desc: {
    fontSize: 18,
    lineHeight: 26,
  },
  prices: {
    fontSize: 18,
    marginVertical: 10,
  },
  oldPrice: {
    color: 'gray',
    textDecorationLine: 'line-through',
  },
  newPrice: {
    fontWeight: 'bold',
  },
  totalPrice: {
    color: 'gray',
    textDecorationLine: 'underline',
  },
});

export default Post;
