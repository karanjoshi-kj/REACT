import React from 'react'
import obj from "../styles/Navbar3.module.css"
import { FaSearch , FaHome , FaFlag , FaVideo , FaShoppingBag , FaPlus , } from "react-icons/fa";
import { IoPeopleSharp } from "react-icons/io5";
import { LuMessageCircleMore } from "react-icons/lu";
import { IoMdNotifications } from "react-icons/io";

const Navbar3 = () => {
  return (
    <div className={obj.complete}>
      <div className={obj.leftpart}>
        <h1>M</h1>
        <h1>D</h1>
        <h1>B</h1>
        <span><FaSearch /></span>
        <div className={obj.searchbox}>
            <input type='text' placeholder='search'/>
        </div>
      </div>

      <div className={obj.middlepart}>
        <span><FaHome /></span>
        <span><FaFlag /></span>
        <span><FaVideo /></span>
        <span><FaShoppingBag /></span>
        <span><IoPeopleSharp /></span>
      </div>

      <div className={obj.rightpart}>
        <h3>jhon</h3>
        <span><FaPlus /></span>
        <span><LuMessageCircleMore /></span>
        <span><IoMdNotifications /></span>
      </div>
    </div>
  )
}

export default Navbar3
