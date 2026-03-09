import React from 'react'
import { IoLocationSharp , IoMail } from "react-icons/io5";
import { FaPhone , FaInstagram , FaLinkedin} from "react-icons/fa6";
import { FaFacebookSquare , FaTwitter} from "react-icons/fa";
const Topbar2 = () => {
  return (
    <div className='Topbar-eg'>
      <div className='leftpart'>
        <span><IoLocationSharp />Location</span>
        <span><FaPhone />+13122323213</span>
        <span><IoMail />abc@gmail.com</span>
      </div>
      <div className='rightpart'>
        <span><FaFacebookSquare /></span>
        <span><FaTwitter /></span>
        <span><FaInstagram /></span>
        <span><FaLinkedin /></span>
      </div>
    </div>
  )
}

export default Topbar2
