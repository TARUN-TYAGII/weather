export const weatherAPI = async (city) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=09aafecfe68335d08c1eaa6af0008459`
      );
  
      if (!response.ok) {
        throw new Error('Weather API request failed');
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching weather data:', error);
      throw error; // Re-throw the error to handle it elsewhere if needed
    }
  };
  