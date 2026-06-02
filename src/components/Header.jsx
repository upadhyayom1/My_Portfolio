import React from 'react'
import './styles/header.css'
const Header = () => {
  return (
    <div className="header">
      <div className="left-logo"><p>OU</p></div>
      <div className="center-titles">
        <a href="#home">Home</a>
        <a href="#services">Projects</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
       
      </div>
      <div className="right-logo">
        <a href="https://www.linkedin.com/in/om-upadhyay-772787371/"><button>Let's Connect</button></a>
      </div>
    </div>
  )
}

export default Header
