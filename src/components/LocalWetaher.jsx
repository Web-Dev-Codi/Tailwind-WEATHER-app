import axios from "axios"
import { useEffect, useState } from 'react'
import Clock from 'react-live-clock';

function LocalWetaher() {
  const [data, setData] = useState([]);
  const [city, setCity] = useState('berlin');
  // const [location, setLocation] = useState(city);

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

  useEffect(() => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&${metric}`)
      .then(res => {
        console.log(res);
        setData([res.data])

      })
      .catch((error) => {
        console.log(error);
      });

  }, [city]);



  return (
    <div className="w-9/12" style={{ backgroundImage: `url(/images/background.jpg)`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
      {data.map((data, index) =>
        <div className="flex flex-col" key={index}>
          <div>
            <h2 className="text-end">{data.name}</h2>
          </div>
          <div className="items-end">
            <div className="flex flex-row">
              <div className="">
                <div><Clock format={'HH:mm:ss'} ticking={true} timezone={'Europe/Berlin'} /></div>
                <div>{timeLoader(new Date())}</div>
              </div>
              <div>
                <h3>{Math.floor(data.main.temp)}°<span>C</span></h3>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default LocalWetaher