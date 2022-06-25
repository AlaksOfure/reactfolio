import React from 'react'
import '../Styles/ProjectCards.css'


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