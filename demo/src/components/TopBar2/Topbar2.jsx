import React from 'react'
import karan1 from "../styles/Topbar2.module.css"
import { IoLocationSharp , IoMail } from "react-icons/io5";
import { FaPhone , FaInstagram , FaLinkedin} from "react-icons/fa6";
import { FaFacebookSquare , FaTwitter} from "react-icons/fa";
const Topbar2 = () => {
  return (
    <div className={karan1.Topbareg}>
      <div className={karan1.leftpart}>
        <span><IoLocationSharp />Location</span>
        <span><FaPhone />+13122323213</span>
        <span><IoMail />abc@gmail.com</span>
      </div>
      <div className={karan1.rightpart}>
        <span><FaFacebookSquare /></span>
        <span><FaTwitter /></span>
        <span><FaInstagram /></span>
        <span><FaLinkedin /></span>
      </div>
    </div>
  )
}

export default Topbar2
