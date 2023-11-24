import { StyleSheet, Text, TextInput, View, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import Header from '../header/Header';
import { weatherAPI } from '../../utilities/api/weather-api';

const Weather = () => {
    const [result, setResult] = useState(null);
    const [text, setText] = useState('');

    // console.log(text,"ABC");

    useEffect(() => {
        const fetchData = async (city) => {
            try {
                console.log("CITY  =>", city);
                const data = await weatherAPI(city);
                setResult(data);
            } catch (error) {
                // Handle errors, e.g., show an error message to the user
                console.error('Error in Weather component:', error);
            }
        };

        fetchData(text);
    }, [text]); // Empty dependency array to run the effect only once when the component mounts

    const onChangeHandler = (val) => {
        // console.log(e)
        setText(val)
        // fetchData(text);
    }

    const fetchImage = (val) => {
        console.log("Val => ", val);
        const name = val.trim().toLowerCase(); // Convert to lowercase for case-insensitive comparison
        switch (name) {
          case "clouds":
            return require("weather/assets/clouds.png");
          case "smoke":
            return require("weather/assets/cloudy.png");
          case "clear":
            return require("weather/assets/sunny.png");
          case "rain":
            return require("weather/assets/rainy.png");
          default:
            return null;
        }
      };
      
    return (
        <View style={styles.container}>
            <View>
                <TextInput style={styles.input}
                    onChangeText={(val) => onChangeHandler(val)}
                    value={text}></TextInput>
            </View>
            {result && (
                <>
                {
                    console.log("IMAGE",fetchImage(result.weather[0].description))
                }
                    <Image source={fetchImage(result.weather[0].main)} style={{ height: 100, width: 100 }} />
                    <Text>Seher : {result.name}</Text>
                    <Text>Mausam : {result.weather[0].description}</Text>
                    <Text>Tapman : {result.main.temp}°C</Text>
                </>
            )}
        </View>
    );
};

export default Weather;

const styles = StyleSheet.create({
    container: {
        // borderWidth : 5,
        // borderColor:'green',
        // backgroundColor:'grey',
        // justifyContent:'center',
        // flex:1,
        width: '100%',
        height: '100%'

    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    }

});
