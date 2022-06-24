import React from 'react'
import '../Styles/ProjectCards.css'
import proj1 from '../assets/Weather-app.png'
import { NavLink } from 'react-router-dom'

import ProjectCardContent from './ProjectCardContent'
import ProjectData from './ProjectData'

const ProjectCards = () => {
 return (
  <div className="project-container">
   {ProjectData.map((val, ind) => {
    return (
     <ProjectCardContent
      key={ind}
      imgsrc={val.imgscrc}
      title={val.title}
      text={val.text}
      view={val.view}
     />
    )
   })}
  </div>
 )
}


// const ProjectCards = (props) => {
//  return (
//   <div className="project-container">
//    <div className="project-card">
//     <img src={props.imgsrc} alt="react weather app" />
//     <h2 className="project-title">
//      {props.title}
//     </h2>
//     <div className="details">
//      <p>{props.text}</p>
//      <div className="project-btns">
//       <NavLink to={props.view} className='btn'>View</NavLink>
//      </div>
//     </div>
//    </div>
//   </div>
//  )
// }


export default ProjectCards