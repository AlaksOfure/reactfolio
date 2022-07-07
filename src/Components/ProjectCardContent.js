import React from 'react'




const ProjectCardContent = (props) => {
    return (
        <div className="project-card">

            <div className="sub-section-col card-content">
                <h2 className="title-text">
                    {props.title}
                </h2>
                <p className='section-text'>{props.text}</p>
                <ul className='sub-section-row'>
                    <li>
                        <span className='section-text-small'>React</span>
                    </li>
                    <li>
                        <span className='section-text-small'>Styled Components</span>
                    </li>
                    <li>
                        <span className='section-text-small'>Weather Api</span>
                    </li>
                </ul>

                <div className=" project-row sub-section-row">

                    <a className="btn btn-1" href={props.view} target="_blank" rel='noreferrer'>
                        <svg>
                            <rect x="0" y="0" fill="none" width="100%" height="100%" />
                        </svg>
                        View
                    </a>
                    <a className="btn btn-1" href={props.code} target="_blank" rel='noreferrer'>
                        <svg>
                            <rect x="0" y="0" fill="none" width="100%" height="100%" />
                        </svg>
                        Code
                    </a>
                </div>
            </div>
            <div className="sub-section-col">
                {/* picture goes here */}

                <img className='img-container' src={props.imgsrc} alt="react weather app" />


            </div>

        </div>
    )
}

export default ProjectCardContent