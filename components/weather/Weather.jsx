import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { weatherAPI } from '../../utilities/api/weather-api';

const Weather = () => {
    const [result, setResult] = useState(null);
    const [text, setText] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (text) {
                    const data = await weatherAPI(text);
                    setResult(data);
                }
            } catch (error) {
                console.error('Error in Weather component:', error);
            }
        };

        fetchData();
    }, [text]);

    const handleChange = (val) => {
        setText(val);
    }

    const fetchImage = (val) => {
        const name = val.trim().toLowerCase();
        switch (name) {
            case 'clouds':
                return require('weather/assets/clouds.png');
            case 'smoke':
                return require('weather/assets/cloudy.png');
            case 'clear':
                return require('weather/assets/sunny.png');
            case 'rain':
                return require('weather/assets/rainy.png');
            default:
                return null;
        }
    };

    function kelvinToCelsius(kelvin) {
        return kelvin - 273.15;
    }


    const tempInCelsius = kelvinToCelsius(result?.main?.temp);

    return (
        <View style={styles.container}>
            <View>
                <TextInput
                    style={styles.input}
                    onChangeText={(val) => handleChange(val)}
                    value={text}
                />

            </View>
            {result && text ? (
                <View style={styles.showcontainer}>
                    <Image
                        source={fetchImage(result.weather[0].main)}
                        style={{ height: 300, width: 300, marginTop: -200 }}
                    />
                    <View style={{padding: 8, height: 300, width: '100%', justifyContent: 'center'}}>
                        <View style={{alignSelf:'center'}}>
                        <Text style={styles.light}><Text style={styles.bold}>Seher:</Text> {result.name}</Text>
                        <Text style={styles.light}><Text style={styles.bold}>Mausam:</Text> {result.weather[0].description}</Text>
                        <Text style={styles.light}><Text style={styles.bold}>Tapman:</Text> {tempInCelsius.toFixed(2)}°C</Text>
                        </View>
                        
                    </View>
                </View>
            ):
            <View>
                <Text>Yarr Chal na, Search kr na!!!</Text>
            </View>
            }
        </View>
    );
};

export default Weather;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },

    showcontainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    bold:{
        fontSize:20,
        fontWeight:'800',
        fontFamily:'sans-serif'
    },
    light:{
        fontSize:20,
        fontWeight:'500',
        fontFamily:'sans-serif',
    }
});
