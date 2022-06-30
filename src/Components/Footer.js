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
                        <a href='https://www.linkedin.com/in/ofure-alakhume-7b96aa164' className='skill-list' target="_blank" rel='noreferrer' > <FaLinkedin size={30} />  </a>
                        <a href='https://github.com/AlaksOfure?tab=repositories' className='skill-list' target="_blank" rel='noreferrer' > <FaGithub size={30} />  </a>
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