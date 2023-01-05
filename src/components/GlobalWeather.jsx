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
    <div className="container text-white " style={{ backgroundImage: `url(/images/glow.jpg)`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
      {data.map((data, index) =>
        <div key={index} className="">
          <div className="flex flex-col-reverse">
            <div className="flex flex-row self-center p-2">
              <div className="">
                <input type="text" placeholder="Enter City" className="input btn-sm w-full  placeholder:italic  placeholder:text-slate-400" onChange={handleChange} />
              </div>
              <input type="submit" value="Submit" className="btn btn-sm" onClick={handleClick} />
            </div>
            <div className="self-center text-4xl md:text-3xl lg:text-5xl xl:text-5xl font-bold mb-2">{data.weather[0].main}</div>
            <div className="self-center">
              <div className="">
                {(() => {
                  const defaults = {
                    color: "white",
                    size: 160,
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
          <div className="flex flex-row justify-center ">
            <div className="self-center text-1xl md:text-2xl lg:text-3xl">
              {data.name}, {data.sys.country}
            </div>
            <div>
              <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`} alt="" />
            </div>
          </div>
          <div className="w-11/12 mx-auto" >
            <div className="sm:text-xl md:text-lg lg:text-2xl lx:text-2xl leading-[1.8rem]">
              <p>Temp<span className="float-right">{Math.round(data.main.temp)}°c ({data.weather[0].main})</span></p>
              <p>Humidity<span className="float-right">{data.main.humidity}%</span></p>
              <p>Visibility<span className="float-right">{Math.round(data.visibility)} mi </span></p>
              <p>Wind Speed<span className="float-right">{Math.round(data.wind.speed)} Km/h</span></p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default GlobalWeather