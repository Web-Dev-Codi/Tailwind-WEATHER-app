import React from 'react'
import LocalWeather from './LocalWetaher'
import GlobalWeather from './GlobalWeather'

function Home() {
  return (
    <div className="">
      <div className="flex justify-center min-h-screen min-w-full">
        <LocalWeather />
        <GlobalWeather />
      </div>
    </div>
  )
}

export default Home