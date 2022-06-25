import React from 'react'
import { Link } from 'react-router-dom'
import "../Styles/welcome.css"

const welcome = () => {
 return (
  <section className="hero">
   <div className='content'>
    <p className='simple-text color-text-green'>Hi, my name is</p>
    <h1> <span className='firstNa' >Ofure</span>  <span className='lastNa'>Alakhume</span> </h1>
    <p className='simple-text-thin'>A front-end software developer</p>

    <button className='btn'>
     <Link to="/about" > <span className='btn-text'>About me</span> </Link>
    </button>
   </div>
  </section>
 )
}

export default welcome



