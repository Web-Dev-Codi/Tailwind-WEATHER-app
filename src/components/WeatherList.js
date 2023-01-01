import React from 'react';


const WeatherList = ({ data }) => {

  return (
    <div className="flex flex-col">
      {data.map((data, index) =>
        <div key={index} className="place-self-center">
          <h2>{data.weather[0].icon}</h2>
          <h2>Location: {data.name}</h2>
          <h2>Weather: {data.weather[0].main}</h2>
          <h2>Temp: {data.main.temp} C</h2>
          <h2>Feels Like: {data.main.feels_like} C</h2>
          <h2>Pressure: {data.main.pressure}</h2>
          <h2>Humidity: {data.main.humidity}</h2>
          <h2>Minimum Temp: {data.main.temp_min} C</h2>
          <h2>Max Temp: {data.main.temp_max} C</h2>
          <h2>Visibility: {data.visibility}</h2>
          <h2>Wind Speed: {data.wind.speed} kph</h2>
        </div>
      )}
    </div>
  );
};

export default WeatherList;