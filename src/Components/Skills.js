import React from 'react'
import { FaFigma, FaReact } from 'react-icons/fa'
import { SiTailwindcss } from 'react-icons/si'
import { IoLogoCss3, IoLogoHtml5, IoLogoJavascript, IoLogoSass } from 'react-icons/io'
import { useInView } from 'react-intersection-observer'

import '../Styles/skills.css'


const Skills = () => {
    const [sectionRef, inView] = useInView({
        triggerOnce: true,
        rootMargin: '-400px 0px',
    })
    return (
        <section ref={sectionRef} className={`section-container ${inView ? "transition" : "hide"}`}>
            <div className='content-container '>
                <h1>Skills</h1>

                <div className="lists-con">

                    <div className="skill-con">
                        <ul className='list-con'>
                            <li className="skill-list">
                                <IoLogoHtml5 size={35} />
                                <h5>HTML</h5>
                            </li>

                            <li className="skill-list">
                                <FaFigma size={35} />
                                <h5>Figma</h5>
                            </li>

                        </ul>
                    </div>

                    <div className="skill-con">
                        <ul className='list-con'>

                            <li className='skill-list'>
                                <IoLogoCss3 size={35} />
                                <h5>CSS</h5>
                            </li>

                            <li className='skill-list'>
                                <IoLogoSass size={35} />
                                <h5>SASS/SCSS</h5>
                            </li>

                            <li className="skill-list">
                                <SiTailwindcss size={35} />
                                <h5>Tailwind</h5>
                            </li>

                        </ul>
                    </div>

                    <div className="skill-con">
                        <ul className='list-con'>
                            <li className='skill-list'>
                                <FaReact className='reactIcon' size={35} />
                                <h5>React</h5>
                            </li>

                            <li className="skill-list">
                                <IoLogoJavascript size={35} />
                                <h5>Javascript</h5>
                            </li>

                        </ul>
                    </div>
                </div>


            </div>
        </section>
    )
}

export default Skills