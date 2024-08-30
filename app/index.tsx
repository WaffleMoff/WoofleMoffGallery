import React, { useEffect, useState } from 'react';
import { View, Image, StyleSheet, ScrollView, Text, TouchableOpacity, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';

// Get screen dimensions
const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

// Import your images
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



export default function HomeScreen() {
  const router = useRouter();
  const [currentImage, setCurrentImage] = useState(images[0]);
  const [timeLeft, setTimeLeft] = useState(15); // 15 seconds timer

  useEffect(() => {
    // Update the image and reset the timer every 15 seconds
    const intervalId = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * images.length);
      setCurrentImage(images[randomIndex]);
      setTimeLeft(15); // Reset timer to 15 seconds
    }, 15000); // Change image every 15 seconds

    return () => clearInterval(intervalId); // Clear interval on component unmount
  }, []);

  useEffect(() => {
    // Countdown timer effect
    const timerId = setInterval(() => {
      setTimeLeft(prevTime => {
        if (prevTime <= 1) {
          clearInterval(timerId);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000); // Update every second

    return () => clearInterval(timerId); // Clear interval on component unmount
  }, [timeLeft]);

  const handlePurchasePress = () => {
    const imageIndex = images.indexOf(currentImage);
    router.push(`/purchase?imageIndex=${imageIndex}`);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.topContent}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>The </Text>
          <Image source={require('../assets/images/WoofleMoffBlank.png')} style={styles.logo} />
          <Text style={styles.headerText}> Gallery</Text>
        </View>
        <Text style={styles.lightText}>Random paintings shown every 15 seconds</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image source={currentImage} style={styles.image} />
        <View style={styles.timerContainer}>
          <Text style={styles.timerText}>Next painting in {timeLeft} seconds</Text>
          {/*
          <TouchableOpacity style={styles.button} onPress={handlePurchasePress}>
            <Text style={styles.buttonText}>Purchase</Text>
          </TouchableOpacity>
          */}
        </View>
      </View>
      <View style={styles.bottomContent}>
        <Text style={styles.footerText}>Send an email to erikely8@gmail.com if you are interested in purchasing any of the paintings</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333', // Dark grey background
  },
  timerContainer: {
    flexDirection: 'row', // Align text and button horizontally
    alignItems: 'center', // Center items vertically
    justifyContent: 'center', // Center items horizontally
    marginVertical: 10, // Add vertical margin
  },
  topContent: {
    padding: 20,
    backgroundColor: '#444', // Slightly lighter grey for contrast
    borderBottomWidth: 1,
    borderBottomColor: '#555', // Darker grey for the border
  },
  headerContainer: {
    flexDirection: 'row', // Align text and image horizontally
    alignItems: 'center', // Center items vertically
    justifyContent: 'center', // Center items horizontally
  },
  bottomContent: {
    padding: 20,
    backgroundColor: '#444', // Slightly lighter grey for contrast
    borderTopWidth: 1,
    borderTopColor: '#555', // Darker grey for the border
    marginBottom: 20, // Add margin to ensure content is not too close to the bottom
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#f5f5dc', // Cream colored text
  },
  timerText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#f5f5dc', // Cream colored text
    marginVertical: 0,
  },
  logo: {
    width: screenWidth * 0.12, // Adjust width as 50% of screen width
    height: screenHeight * 0.05, // Adjust height as 10% of screen height
    resizeMode: 'contain', // Ensure the logo fits within the specified dimensions
    marginHorizontal: 0, // Add space between text and logo
  },
  lightText: {
    fontSize: 14,
    textAlign: 'center',
    color: '#f5f5dc', // Cream colored text
    marginVertical: 2,
  },
  footerText: {
    fontSize: 18,
    textAlign: 'center',
    color: '#f5f5dc', // Cream colored text
  },
  imageContainer: {
    alignItems: 'center',
    marginVertical: 20, // Adds vertical margin to the image container
  },
  image: {
    width: screenWidth * 0.9, // Set the width to 90% of the screen width
    height: screenHeight * 0.65, // Set the height to 50% of the screen height
    resizeMode: 'contain', // Ensure the image fits within the specified dimensions
    borderRadius: 10, // Optional: adds rounded corners
    borderColor: '#ddd', // Optional: adds a border color
    borderWidth: 0, // Optional: adds a border width
  },
  button: {
    backgroundColor: '#f5f5dc', // Mustard yellow background for the button
    borderRadius: 5, // Rounded corners for the button
    paddingVertical: 10, // Vertical padding inside the button
    paddingHorizontal: 20, // Horizontal padding inside the button
    marginLeft: 10, // Space between the timer text and button
  },
  buttonText: {
    fontSize: 16,
    color: '#333', // Dark text color for contrast
    textAlign: 'center',
  },
});
