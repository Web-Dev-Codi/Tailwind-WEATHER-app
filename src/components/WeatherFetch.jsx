import axios from "axios"
import { useState, useEffect } from "react";
import WeatherList from "./components/WeatherList";




function WeatherFetch() {
  const [data, setData] = useState([]);
  const [city, setCity] = useState('berlin');
  const [location, setLocation] = useState(city);
  const [pending, setPending] = useState(false)
  const apiKey = "8ff77461b0ae2767ef37007036356fb8";
  const metric = "units=metric";

  const handleClick = (e) => {
    e.preventDefault()
    if (setCity === '') {
      alert('Please enter city is required')
    } else {
      setLocation(city)
      setPending(true)
    }
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
    <div className="flex justify-center container ">
      <div className="mx-auto">
        <form >
          <label className="">Enter Location</label>
          <input type="text" className="mr-1" name="location" onChange={handleChange} />
          <button type="submit" className="btn btn-xs sm:btn-sm mb-3" onClick={handleClick}>Load</button>
        </form>
        {pending && <WeatherList data={data} />}
      </div>
    </div >
  )

}

export default WeatherFetch