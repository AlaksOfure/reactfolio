import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'





const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">


                <div className="socials">
                    <a href='https://www.linkedin.com/in/ofure-alakhume-7b96aa164' className='skill-list' target="_blank" rel='noreferrer' > <FaLinkedin size={30} />  </a>
                    <a href='https://github.com/AlaksOfure?tab=repositories' className='skill-list' target="_blank" rel='noreferrer' > <FaGithub size={30} />  </a>
                </div>
                <h5 style={{ fontSize: '1.2rem' }} >alaksdev@gmail.com</h5>
                <h4 style={{ fontSize: '1.2rem' }} >Based in Toronto</h4>
                <p style={{ fontSize: '1.2rem' }}>@2022 Ofure Alakhume| All Rights Reserved</p>

            </div>
        </div>
    )
}

export default Footer