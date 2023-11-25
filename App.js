<script src="http://localhost:8097"></script>

import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Weather from './components/weather/Weather';
import Header from './components/header/Header';
import { useState } from 'react';

export default function App() {
  const [theme , setTheme ] = useState('dark');
  return (
    <SafeAreaView>
      <Header theme = {theme}/>
      <Weather theme ={theme}/>
      <StatusBar style="auto" />
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
