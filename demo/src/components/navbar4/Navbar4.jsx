import React from 'react'
import obj from "../styles/Navbar4.module.css"
const Navbar4 = () => {
  return (
    <div>
        {/* FIRST METHOD TO APPLY MULTIPLE CSS IS STRING LITERALS . */}
      <ul className={`${obj.firstcss} ${obj.secondcss}`}  />

        {/* SECOND METHOD TO APPLY MULTIPLE CSS IS JOIN METHOD . */}

      {/* <li className={[obj.licolor , obj.listyle].join("")}>home</li> */}

      {/* IF WE WANT TO GIVE ( - ) DESH IN THE CLASS NAME  */}
      <li className={obj["li-color"]}>home</li>
      <li className={`${obj["listyle"]} ${obj["li-color"]}`}>about</li>

      <li>Contact</li>
      <li>Carrer</li>
      <li>Services</li>
    </div>
  )
}

export default Navbar4
