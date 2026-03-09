import React from 'react'
import { IconName } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
const Topbar2 = () => {
  return (
    <div className='Topbar-eg'>
      <div className='leftpart'>
        <span><IoLocationSharp />Location</span>
        <span><FaPhone />+13122323213</span>
        <span><IoMail />abc@gmail.com</span>
      </div>
      <div className='rightpart'>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  )
}

export default Topbar2
