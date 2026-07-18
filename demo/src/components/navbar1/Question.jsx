import React from 'react'
import './Question.css'
const Question = () => {
  return (
      <nav className="navbar">
        <div className="logo">Mylogo</div>
        <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
        </ul>
        <button className="btn">Login</button>
      </nav>
  )
}

export default Question
