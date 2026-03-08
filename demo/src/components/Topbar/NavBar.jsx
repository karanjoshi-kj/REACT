import React from 'react'
import karan from "../styles/NavBar.module.css"
const NavBar = () => {
  return (
    <div>
        {/* WHEN WE USE MODULES IT WILL CREATE UNIQUE CLASS NAME  */}
        <ul className={karan.mainContainer}>   
      <li>home</li>
      <li>about</li>
      <li>contact</li>
      <li>career</li>
      <li>services</li>
      </ul>
    </div>
  )
}

export default NavBar