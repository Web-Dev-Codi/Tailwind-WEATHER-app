import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactAnimatedWeather from "react-animated-weather";

function GlobalWeather() {

  const [data, setData] = useState([]);
  const [city, setCity] = useState('berlin');
  const [location, setLocation] = useState(city);
  const apiKey = "8ff77461b0ae2767ef37007036356fb8";
  const metric = "units=metric";


  function handleClick(e) {
    e.preventDefault();
    setLocation(city);
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
    <div className="container  flex flex-col w-2/3" style={{ backgroundImage: `url(/images/background1.jpg)`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
      {data.map((data, index) =>
        <div key={index} className="flex flex-col">
          <div className="flex flex-col-reverse">
            <div className="flex flex-row self-center mt-2 mb-4">
              <div className="mr-2 ">
                <input type="text" placeholder="Enter City" className="btn w-full max-w-xs placeholder:italic  placeholder:text-slate-400" onChange={handleChange} />
              </div>
              <input type="submit" value="Submit" className="btn" onClick={handleClick} />
            </div>

            <div className="self-center text-5xl font-bold mb-10">{data.weather[0].main}</div>

            <div className="self-center items-center mt-16 mb-14">
              <div>
                {" "}
                {(() => {
                  const defaults = {
                    color: "white",
                    size: 240,
                    animate: true,
                  };
                  switch (data.weather[0].main) {
                    case "Haze": return <ReactAnimatedWeather
                      icon="CLEAR_DAY"
                      color={defaults.color}
                      size={defaults.size}
                      animate={defaults.animate}>
                      {data.weather[0].main}
                    </ReactAnimatedWeather>;
                    case "Clouds": return <ReactAnimatedWeather
                      icon="CLOUDY"
                      color={defaults.color}
                      size={defaults.size}
                      animate={defaults.animate}>
                      {data.weather[0].main}
                    </ReactAnimatedWeather>;
                    case "Rain": return <ReactAnimatedWeather
                      icon="RAIN" color={defaults.color}
                      size={defaults.size}
                      animate={defaults.animate}>
                      {data.weather[0].main}
                    </ReactAnimatedWeather >
                    case "Snow": return <ReactAnimatedWeather
                      icon="SNOW"
                      color={defaults.color}
                      size={defaults.size}
                      animate={defaults.animate}>
                      {data.weather[0].main}
                    </ReactAnimatedWeather>
                    case "Dust": return <ReactAnimatedWeather
                      icon="WIND"
                      color={defaults.color}
                      size={defaults.size}
                      animate={defaults.animate}>
                      {data.weather[0].main}
                    </ReactAnimatedWeather>
                    case "Drizzle": return <ReactAnimatedWeather
                      icon="SLEET"
                      color={defaults.color}
                      size={defaults.size}
                      animate={defaults.animate}>
                      {data.weather[0].main}
                    </ReactAnimatedWeather>
                    case "Fog": return <ReactAnimatedWeather
                      icon="FOG" color={defaults.color}
                      size={defaults.size}
                      animate={defaults.animate}>
                      {data.weather[0].main}
                    </ReactAnimatedWeather>
                    case "Smoke": return <ReactAnimatedWeather
                      icon="FOG" color={defaults.color}
                      size={defaults.size}
                      animate={defaults.animate}>
                      {data.weather[0].main}
                    </ReactAnimatedWeather>
                    case "Tornado": return <ReactAnimatedWeather
                      icon="WIND" color={defaults.color}
                      size={defaults.size}
                      animate={defaults.animate}>
                      {data.weather[0].main}
                    </ReactAnimatedWeather>
                    default: return <ReactAnimatedWeather
                      icon="CLEAR_DAY" color={defaults.color}
                      size={defaults.size}
                      animate={defaults.animate}>
                      {data.weather[0].main}
                    </ReactAnimatedWeather>
                  }
                })()}
              </div>
            </div>
          </div>
          <div className="mx-auto w-9/12">
            <div>
              <div className="flex flex-row items-center justify-center mt-4">
                <div className="text-2xl">
                  {data.name}, {data.sys.country}
                </div>
                <div>
                  <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`} alt="" />
                </div>
              </div>
              <div className="text-3xl leading-10 border-b-indigo-400">Temperature{" "}  <span className="float-right">{Math.round(data.main.temp)}°c ({data.weather[0].main})</span></div>
              <div className="text-3xl leading-10 border-b-indigo-400">Humidity <span className="float-right">{data.main.humidity}%</span></div>
              <div className="text-3xl leading-10 border-b-indigo-400">Visibility  <span className="float-right">{Math.round(data.visibility)} mi </span></div>
              <div className="text-3xl leading-10 border-b-indigo-400">Wind Speed <span className="float-right">{Math.round(data.wind.speed)} Km/h</span></div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default GlobalWeather