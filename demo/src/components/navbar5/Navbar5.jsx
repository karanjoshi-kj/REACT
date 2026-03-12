import React from 'react'
import obj from "../styles/Navbar4.module.css"


//! TAKING THE CONTENT IN THE JSON FORMAT . 
//? HOW TO TAKE DATA FROM THE INTERNAL JSON . 



const navabardata = {
    ABOUT : "ABOUT",
    HOME : "HOME",
    CONTACT : "CONTACT",
    SERVICES : "SERVICES",
    CARRER : "CARRER"
};





const Navbar4 = () => {
  return (
    <div>
      <ul className={`${obj.firstcss} ${obj.secondcss}`}  />

      <li className={obj["li-color"]}>{navabardata.HOME}</li>
      <li className={`${obj["listyle"]} ${obj["li-color"]}`}>{navabardata.ABOUT}</li>

      <li>{navabardata.CONTACT}</li>
      <li>{navabardata.SERVICES}</li>
      <li>{navabardata.CARRER}</li>
    </div>
  )
}

export default Navbar4
