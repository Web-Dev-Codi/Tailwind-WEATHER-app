import React from 'react'
import Clock from 'react-live-clock';


function HeroCard() {
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


  return (
    <div className="hero min-h-screen" style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="flex flex-row">
        <div>
          <h2>Germany</h2>
          <h3>DE</h3>
          <Clock format={'HH:mm:ss'} ticking={true} timezone={'Europe/Berlin'} />
          <p>
            32°<span>C</span>
          </p>
          <div>{timeLoader(new Date())}</div>
        </div>
        <div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <div className="flex flex-row">
                <input type="text" placeholder="Enter City" className="input input-ghost w-full max-w-xs" />
                <button>
                  <img
                    src="https://images.avishkaar.cc/workflow/newhp/search-white.png"
                    alt="Search Button"
                  />
                </button>
              </div>

              <ul>
                <li>Berlin, <span>DE</span></li>
                <li>Temperature <span>32°C</span></li>
                <li>Humidity <span>33%</span></li>
                <li>Visibility <span>2000 mi</span></li>
                <li>Wind Speed <span>4 km/h</span></li>
              </ul>
            </div>
          </div></div>
      </div>
    </div>
  )
}

export default HeroCard