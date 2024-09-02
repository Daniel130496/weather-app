import React, { useState } from "react";
import axios from "axios";
import WeatherCard from "./components/WeatherCard";
import "./App.css";

function App() {
  const [location, setLocation] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeather = async () => {
    const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`;

    try {
      const response = await axios.get(apiUrl);
      setWeatherData(response.data);
    } catch (error) {
      console.error("Error fetching weather data", error);
    }
  };

  return (
    <div className="app">
      <h1>Weather App</h1>
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Enter a city"
      />

      <button onClick={fetchWeather}>Search</button>
      {weatherData && <WeatherCard data={weatherData} />}
    </div>
  );
};

export default App;
