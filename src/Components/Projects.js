import React from 'react'
import ProjectCards from './ProjectCards'
import { useInView } from 'react-intersection-observer'

const Projects = () => {
    const [sectionRef, inView] = useInView({
        triggerOnce: true,
        rootMargin: '-400px 0px',
    })

    return (
        <section ref={sectionRef} className={`section-container ${inView ? "transition" : "hide"}`}>
            <div className="content-container">
                <h1>Projects</h1>
                <ProjectCards />
            </div>
        </section>
    )
}

export default Projects