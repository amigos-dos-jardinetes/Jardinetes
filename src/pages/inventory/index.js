import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import Carousel, { Pagination } from '@react-native-snap-carousel';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

export default function Inventory() {
  const navigation = useNavigation();

  // Aqui você pode definir os itens que deseja exibir no carrossel
  const items = [
    { id: 1, image: require('../../assets/ret.png') },
    { id: 2, image: require('../../assets/ret.png') },
    { id: 3, image: require('../../assets/ret.png') },
    { id: 4, image: require('../../assets/ret.png') },
    { id: 5, image: require('../../assets/ret.png') },
  ];

  const renderItem = ({ item, index }) => {
    return (
      <View style={styles.slide}>
        {/* Conteúdo do slide */}
        <Image source={item.image} style={styles.image} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Carousel
        data={items}
        renderItem={renderItem}
        sliderWidth={width}
        itemWidth={width * 0.7}
        loop
        autoplay
        autoplayInterval={4000}
        autoplayDelay={500}
        layout={'default'}
      />
    </View>
  );
}
