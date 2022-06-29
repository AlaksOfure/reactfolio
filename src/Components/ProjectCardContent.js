import React from 'react'
import '../Styles/ProjectCards.css'



const ProjectCardContent = (props) => {
    return (
        <div className="project-card">
            <div className="project-header">
                <img src={props.imgsrc} alt="react weather app" />
            </div>
            <div className="body-content">
                <div className="details">
                    <h2 className="project-title">
                        {props.title}
                    </h2>
                    <p>{props.text}</p>

                    <div className="project-info">
                        <div className="project-lang">
                            React
                        </div>
                        <button className='btn project-btns'>
                            <a href={props.view} target="_blank" rel='noreferrer' >View</a>
                        </button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCardContent