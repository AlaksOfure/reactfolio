import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

import "../Styles/footer.css"
import MiniNav from './MiniNav'



const Footer = () => {
 return (
  <div className="footer">
   <div className="footer-container">
    <div className="left">
     <MiniNav />
    </div>
    <div className="right">
     <div className="socials">
      <div className="skill-list">
       <FaLinkedin size={30} />
      </div>
      <div className="skill-list">
       <FaGithub size={30} />
      </div>
     </div>
     <h5>alaksdev@gmail.com</h5>
     <h4>Based in Toronto</h4>
     <p>@2022 Ofure Alakhume| All Rights Reserved</p>
    </div>
   </div>
  </div>
 )
}

export default Footer