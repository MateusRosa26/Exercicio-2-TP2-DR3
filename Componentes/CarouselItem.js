import React from 'react';
import { StyleSheet, Image, View } from 'react-native';

const CarouselItem = ({ image }) => {
  return (
    <View style={styles.itemContainer}>
      <Image style={styles.image} source={{ uri: image }} />
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    marginHorizontal: 10,
  },
  image: {
    width: 300,
    height: 200,
    borderRadius: 10,
  },
});

export default CarouselItem;
