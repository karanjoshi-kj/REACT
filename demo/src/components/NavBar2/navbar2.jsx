import React from "react";
import hello from "../styles/Navbar2.module.css";
import { FaInstagram , FaLinkedin} from "react-icons/fa6";
import { FaFacebookSquare , FaTwitter} from "react-icons/fa";
const Navbar2 = () => {
  return (
    <div className={hello.complete}>
      <div className={hello.leftpart}>
        <h2>startup 3</h2>
      </div>
      <div className={hello.middlepart}>
        <span>Tour</span>
        <span>Features</span>
        <span>Pricing</span>
        <span>Blog</span>
        <span>
          <FaFacebookSquare />
        </span>
        <span>
          <FaTwitter />
        </span>
        <span>
          <FaInstagram />
        </span>
        <span>
          <FaLinkedin />
        </span>
      </div>
      <div className={hello.rightpart}>
        <button>Buy on app store</button>
      </div>
    </div>
  );
};

export default Navbar2;
