import React from 'react'
import '../Styles/ProjectCards.css'
import { NavLink } from 'react-router-dom'


const ProjectCardContent = (props) => {
 return (
  <div className="project-card">
   <img src={props.imgsrc} alt="react weather app" />
   <h2 className="project-title">
    {props.title}
   </h2>
   <div className="details">
    <p>{props.text}</p>
    <div className="project-btns">
     <NavLink to={props.view} className='btn'>View</NavLink>
    </div>
   </div>
  </div>
 )
}

export default ProjectCardContent