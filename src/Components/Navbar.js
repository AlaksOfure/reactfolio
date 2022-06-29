import React, { useState } from 'react'
import "../Styles/navbar.css"
import { Link } from 'react-router-dom'

import { CgMenuGridR } from "react-icons/cg"
import { FaTimes } from "react-icons/fa"


const Navbar = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click)

    return (
        <div className="nav-container">
            <div className="nav-content">

                <Link to="/" >
                    <h1>Alaks</h1>
                </Link>
                <ul className={`${click ? "nav-menu active" : "nav-menu"}`} >
                    <li className='link'>
                        <Link to="/" >Home</Link>
                    </li>

                    <li className='link'>
                        <Link to="/about" >About</Link>
                    </li>

                    <li className='link'>
                        <Link to="/projects" >Projects</Link>
                    </li>

                    <li className='link'>
                        <Link to="/contact" >Contact</Link>
                    </li>

                </ul>

                <div className="menu-icon" onClick={handleClick}>
                    {click ? (
                        <FaTimes size={20} style={{ color: "#fff" }} />
                    ) : (
                        <CgMenuGridR size={20} style={{ color: "#fff" }} />
                    )}
                </div>
            </div>
        </div>
    )
}

export default Navbar