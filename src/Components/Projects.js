import React from 'react'
import ProjectCards from './ProjectCards'
import { useInView } from 'react-intersection-observer'

const Projects = () => {
    const [sectionRef, inView] = useInView({
        triggerOnce: true,
        rootMargin: '-400px 0px',
    })

    return (
        <section ref={sectionRef} name='Projecthome' className={`container ${inView ? "transition" : "hidden"}`}>
            <div className="main-section">
                <h1 className='section-title'>Projects</h1>
                <ProjectCards />
            </div>
        </section>
    )
}

export default Projects