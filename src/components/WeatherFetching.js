import React, { useState, useEffect } from "react";
import axios from "axios";




export function WeatherFeatching() {
  const [data, setData] = useState([]);
  const [city, setCity] = useState('berlin');
  const [location, setLocation] = useState(city);
  const [pending, setPending] = useState(false)
  const apiKey = "8ff77461b0ae2767ef37007036356fb8";
  const metric = "units=metric";


  function handleClick(e) {
    e.preventDefault();
    setLocation(city);
    setPending(true);


  }

  const handleChange = e => setCity(e.target.value)

  useEffect(() => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&${metric}`)
      .then(res => {
        console.log(res);
        setData([res.data])

      })
      .catch((error) => {
        console.log(error);
      });

  }, [location]);

  return (
    <WeatherFeatching value={{ data, pending, handleClick, handleChange }} />
  )
}


export default WeatherFeatching;