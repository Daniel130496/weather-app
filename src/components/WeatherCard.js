import React from "react";

const WeatherCard = ({ data }) => {
  return (
    <div className="weather-card">
      <h2>{data.location.name}</h2>
      <p>{Math.round(data.current.temp_c)}°C</p>
      <p>{data.current.condition.text}</p>
    </div>
  );
};

export default WeatherCard;
