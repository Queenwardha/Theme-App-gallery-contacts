// GalleryScreen.js
import React, { useContext } from 'react';
import { View, Text, FlatList, StyleSheet, Dimensions, Image } from 'react-native';
import { ThemeContext } from './ThemeContext'; // Import ThemeContext

const { width } = Dimensions.get('window');
const itemWidth = (width - 20) / 3;

const data = [
  { id: '1', image: require('./images/react1.jpeg') },
  { id: '2', image: require('./images/react2.jpeg') },
  { id: '3', image: require('./images/react4.jpeg') },
  { id: '4', image: require('./images/react5.jpeg') },
  { id: '5', image: require('./images/react1.jpeg') },
  { id: '6', image: require('./images/react2.jpeg') },
  { id: '7', image: require('./images/react4.jpeg') },
  { id: '8', image: require('./images/react5.jpeg') },
  { id: '9', image: require('./images/react1.jpeg') },
  // Add more images as needed
];

const GalleryScreen = () => {
  const { darkMode } = useContext(ThemeContext); // Use darkMode context

  const renderItem = ({ item }) => {
    return (
      <View style={[styles.item, darkMode && styles.darkItem]}>
        <Image source={item.image} style={styles.image} />
      </View>
    );
  };

  return (
    <View style={[styles.container, darkMode && styles.darkContainer]}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={3}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  darkContainer: {
    backgroundColor: '#333',
  },
  item: {
    width: itemWidth,
    height: itemWidth,
    margin: 5,
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: '#fff',
  },
  darkItem: {
    backgroundColor: '#444',
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});

export default GalleryScreen;
