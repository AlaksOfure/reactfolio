import React from 'react'



import ProjectCardContent from './ProjectCardContent'
import ProjectData from './ProjectData'

const ProjectCards = () => {
    return (
        <div className="project-section">
            {ProjectData.map((val, ind) => {
                return (
                    <ProjectCardContent
                        key={ind}
                        imgsrc={val.imgscrc}
                        title={val.title}
                        text={val.text}
                        view={val.view}
                        code={val.code}
                    />
                )
            })}
        </div>
    )
}


export default ProjectCards