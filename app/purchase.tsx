import React from 'react';
import { View, Image, StyleSheet, Text, Dimensions } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

// Get screen dimensions
const { width: screenWidth, height: screenHeight } = Dimensions.get('window');



// List of images
const images = [
  require('../assets/paintings/1.jpg'),
  require('../assets/paintings/2.jpg'),
  require('../assets/paintings/3.jpg'),
  require('../assets/paintings/4.jpg'),
  require('../assets/paintings/5.jpg'),
  require('../assets/paintings/6.jpg'),
  require('../assets/paintings/7.jpg'),
  require('../assets/paintings/8.jpg'),
  // Add more images as needed
];



export default function Purchase() {

  

  const { imageIndex } = useLocalSearchParams(); // Get the image index parameter from the URL
  const parsedIndex = imageIndex ? parseInt(imageIndex, 10) : null; // Convert the index to a number
  const selectedImage = parsedIndex !== null && parsedIndex >= 0 && parsedIndex < images.length
    ? images[parsedIndex] // Get the selected image based on the index
    : null; // Default to null if index is invalid

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Purchase Page</Text>
      {selectedImage && (
        <Image source={selectedImage} style={styles.image} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333', // Dark grey background
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#f5f5dc', // Cream colored text
    marginBottom: 20,
  },
  image: {
    width: screenWidth * 0.8, // Adjust width as needed
    height: screenHeight * 0.6, // Adjust height as needed
    resizeMode: 'contain',
    borderRadius: 10,
    borderColor: '#ddd',
    borderWidth: 0,
  },
});
