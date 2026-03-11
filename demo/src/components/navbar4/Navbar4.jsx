import React from 'react'
import obj from "../styles/Navbar4.module.css"
const Navbar4 = () => {
  return (
    <div>
        {/* FIRST METHOD TO APPLY MULTIPLE CSS IS STRING LITERALS */}
      <ul className={`${obj.firstcss} ${obj.secondcss}`}  />

      <li>About</li>
      <li>Contact</li>
      <li>Carrer</li>
      <li>Services</li>
    </div>
  )
}

export default Navbar4
