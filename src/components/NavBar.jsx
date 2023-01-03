import React from 'react'
import WeatherFetch from './WeatherFetch'




function NavBar() {


  return (
    <div className="navbar bg-primary">
      <div className="flex-1">
        <p className="btn btn-ghost normal-case text-xl">Local Weather</p>
      </div>
      <div className="flex-none gap-2">

      </div>
    </div>
  )
}

export default NavBar