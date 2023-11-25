import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Header = ({theme}) => {
  return (
    <View style={styles.container(theme)}>
      <Text style={styles.largeText(theme)}>Know Mausam</Text>
      <Text style={styles.smallText(theme)}>Find the Weather of your city</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: (theme) => ({
    backgroundColor: theme === 'light' ? '#3476b9' : '#3476b9',
    paddingTop: 20,
    paddingBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    
  }),
  largeText: (theme)=> ({
    fontSize: 36,
    color: theme === 'light' ? 'black' : 'white',
  }),
  smallText: (theme) => ({
    fontSize: 16,
    color: theme === 'light' ? 'black' : 'white',
  }),
});
