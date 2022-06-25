import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/aboutIntro.css'



const Aboutintro = () => {
 return (
  <section className='about-container'>
   <div className="about-content">

    <section className='about-text'>
     <h1>Intro</h1>
     <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, maxime magnam, facere nesciunt necessitatibus cumque, vero quam aut incidunt non exercitationem rerum rem id libero dolores ratione officia quis accusamus.</p>
     <Link to="/contact" className='btn'> <span className='btn-text'>Contact Me</span> </Link>
    </section>

    <section className='about-text'>
     <h1>Experience</h1>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, atque assumenda in reiciendis ut hic est perspiciatis ea corporis voluptates obcaecati quos ipsa repellat ex animi commodi dolorem placeat cumque.</p>
     <Link to="/project" className='btn'> <span className='btn-text'>Projects</span> </Link>

    </section>

    <section className='about-text'>
     <h1>Work Tools</h1>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque dolores officiis vitae velit! Velit cupiditate possimus recusandae voluptatum? Cum quod quo adipisci sequi dolorem facilis sed animi aperiam ipsa exercitationem.</p>
    </section>

    <section className='about-text'>
     <h1>Life</h1>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque dolores officiis vitae velit! Velit cupiditate possimus recusandae voluptatum? Cum quod quo adipisci sequi dolorem facilis sed animi aperiam ipsa exercitationem.</p>
    </section>


   </div>
  </section>
 )
}

export default Aboutintro