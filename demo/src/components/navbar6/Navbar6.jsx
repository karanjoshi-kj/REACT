import React from 'react'
import obj from "../styles/Navbar4.module.css"
import navbardata from "../navbar6/navbardata.json"

//! USE OF THE EXTERNAL JSON IN THE JSX FILE . 






const Navbar4 = () => {
  return (
    <div>
      <ul className={`${obj.firstcss} ${obj.secondcss}`}  />

      <li className={obj["li-color"]}>{navbardata.HOME}</li>
      <li className={`${obj["listyle"]} ${obj["li-color"]}`}>{navbardata.CARRER}</li>

      <li>{navbardata.ABOUT}</li>
      <li>{navbardata.CONTACT}</li>
      <li>{navbardata.SERVICES}</li>
    </div>
  )
}

export default Navbar4
