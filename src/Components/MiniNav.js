import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/MiniNav.css'



const MiniNav = () => {
 return (
  <div className='nav-con'>
   <h2>Navigation</h2>
   <ul className='mini-nav'>
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
  </div>
 )
}

export default MiniNav