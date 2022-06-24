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


export default ProjectCards