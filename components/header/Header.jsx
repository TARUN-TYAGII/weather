import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.largeText}>Know Mausam</Text>
      <Text style={styles.smallText}>Find the Weather of your city</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    paddingTop: 20, 
    paddingBottom:20,
    justifyContent: 'center',
    alignItems: 'center',
     
  },
  largeText: {
    fontSize: 36, // Adjust the font size for the larger text
    color: 'white', // Set text color
  },
  smallText: {
    fontSize: 16, // Adjust the font size for the smaller text
    color: 'white', // Set text color
  },
});
