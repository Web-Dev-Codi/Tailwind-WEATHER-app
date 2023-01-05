import axios from "axios"
import { useEffect, useState } from 'react'
import Clock from 'react-live-clock';
import ReactAnimatedWeather from "react-animated-weather";


function LocalWetaher() {
  const [data, setData] = useState([]);

  const apiKey = "8ff77461b0ae2767ef37007036356fb8";
  const metric = "units=metric";

  const timeLoader = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day}, ${date} ${month} ${year}`;
  };


  function geoFindMe() {
    if (navigator.geolocation) {
      getPosition()
        .then((position) => {
          getWeather(position.coords.latitude, position.coords.longitude)
        })
    } else {
      alert('Location Not Found')
    }

  }

  const getPosition = (options) => {
    return new Promise(function (resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
  };

  getPosition()

  function getWeather(latitude, longitude) {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&${metric}`, { timeout: 5000 })
      .then(res => {
        console.log(res);
        setData([res.data])

      })
      .catch((error) => {
        console.log(error);
      });

  }

  useEffect(() => {
    geoFindMe()
  }, []);



  const handleClick = () => {
    geoFindMe();
  }


  return (
    <div className="container" style={{ backgroundImage: `url(/images/background.jpg)`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
      {data.map((data, index) =>
        <div className="" key={index}>
          <div className="text-end mr-2 mt-2">
            <h2>{data.name}</h2>
            <h3>{data.sys.country}</h3>
          </div>
          <div className="flex justify-center">
            <div className="content-center">
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
          <div className="container w-11/12 mx-auto">
            <div className="lg:text-3xl sm:text-xl md:text-lg leading-[1.8rem]">
              <p>Temp<span className="float-right">{Math.round(data.main.temp)}°c ({data.weather[0].main})</span></p>
              <p>Humidity<span className="float-right">{data.main.humidity}%</span></p>
              <p>Visibility<span className="float-right">{Math.round(data.visibility)} mi </span></p>
              <p>Wind Speed<span className="float-right">{Math.round(data.wind.speed)} Km/h</span></p>
            </div>
          </div>
          <div className="container w-11/12 mx-auto grid grid-cols-12 grid-rows-[repeat(4,30px)]">
            <div className="col-start-1 col-span-full row-start-3">
              <div>
                <Clock format={'HH:mm:ss'} ticking={true} timezone={'Europe/Berlin'} />
              </div>
              <div>
                {timeLoader(new Date())}
              </div>
            </div>
          </div>

        </div>
      )}


    </div>
  )
}

export default LocalWetaher