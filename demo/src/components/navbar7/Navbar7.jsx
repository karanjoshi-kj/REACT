import React from 'react'
import obj from "../styles/Navbar4.module.css"
import navbardata from "../navbar6/navbardata.json"

//! USE OF THE EXTERNAL JSON IN THE JSX FILE & JS CODE IN THE JSX FILE . 






const Navbar4 = () => {

    //! ARRAY DESTRUCTURING .. 
    //? THIS IS THE AREA OF THE PLAIN JAVASCRIPT FILE . 
    const{HOME , ABOUT , CARRER , SERVICES , CONTACT} = navbardata;


    
  return (
    <div>
      <ul className={`${obj.firstcss} ${obj.secondcss}`}  />

      <li className={obj["li-color"]}>{HOME}</li>
      <li className={`${obj["listyle"]} ${obj["li-color"]}`}>{CARRER}</li>

      <li>{ABOUT}</li>
      <li>{CONTACT}</li>
      <li>{SERVICES}</li>
    </div>
  )
}

export default Navbar4
