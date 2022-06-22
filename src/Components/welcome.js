import React from 'react'
import { Link } from 'react-router-dom'
import "../Styles/welcome.css"

const welcome = () => {
 return (
  <section className="hero">
   <div className='content'>
    <h1> <span className='firstNa' >Ofure</span>  Alakhume</h1>
    <p>A front-end React developer</p>
    <Link to="/about" className='btn'> <span className='btn-text'>About me</span> </Link>
    <Link to="/project" className='btn'> <span className='btn-text'>Projects</span> </Link>
   </div>
  </section>
 )
}

export default welcome