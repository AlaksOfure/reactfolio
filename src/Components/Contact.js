import React from 'react'
import { NavLink } from 'react-router-dom'
import '../Styles/contact.css'


const Contact = () => {
 return (
  <section className='section-container '>
   <div className="content-container text-styling">

    <h1>Get in Touch</h1>
    <p>I am currently free and open to work, my inbox is always open </p>

    <button className='btn'>
     <NavLink to="/" className='btn-text'>Say Hi</NavLink>
    </button>

   </div>
  </section>
 )
}

export default Contact