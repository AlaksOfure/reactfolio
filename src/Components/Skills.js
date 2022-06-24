import React from 'react'
import { FaReact } from 'react-icons/fa'
import { IoLogoCss3, IoLogoHtml5, IoLogoJavascript } from 'react-icons/io'
import '../Styles/skills.css'

const Skills = () => {
 return (
  <section className="section-container">
   <div className='content-container brown-container'>
    <h1 className='black-header'>Skills</h1>
    <ul className='list-con'>
     <li className="skill-list">
      <IoLogoHtml5 size={35} />
      <h5>HTML</h5>
     </li>

     <li className='skill-list'>
      <FaReact className='reactIcon' size={35} />
      <h5>React</h5>
     </li>

     <li className='skill-list'>
      <IoLogoCss3 size={35} />
      <h5>Css</h5>
     </li>

     <li className="skill-list">
      <IoLogoJavascript size={35} />
      <h5>Javascript</h5>
     </li>

    </ul>


   </div>
  </section>
 )
}

export default Skills