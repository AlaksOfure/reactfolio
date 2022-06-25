import React from 'react'
import { NavLink } from 'react-router-dom'
import '../Styles/contact.css'


const Contact = () => {
 return (
  <section className='section-container '>
   <div className="text-styling brown-container">

    <h1>Get in Touch</h1>
    <p>If you wish to reach me, I am qickest to respond on my work email</p>
    <div className="project-btns">
     <NavLink to="/" className='btn'>Get in touch</NavLink>
    </div>

   </div>
  </section>
 )
}

export default Contact