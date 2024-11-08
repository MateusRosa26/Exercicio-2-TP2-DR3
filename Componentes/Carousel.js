import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import CarouselItem from './CarouselItem';

const Carousel = ({ items }) => {
  return (
    <View style={styles.carouselContainer}>
      <FlatList
        horizontal
        data={items}
        renderItem={({ item }) => <CarouselItem image={item.image} />}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    width: '100%',
  },
});

export default Carousel;
