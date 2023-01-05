import React from 'react'
import LocalWeather from './LocalWetaher'
import GlobalWeather from './GlobalWeather'

function Home() {
  return (
    <div className="container">
      <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row">
        <LocalWeather />
        <GlobalWeather />
      </div>
    </div>
  )
}

export default Home