import React from 'react'
import { FaFigma, FaReact } from 'react-icons/fa'
import { SiTailwindcss } from 'react-icons/si'
import { IoLogoCss3, IoLogoHtml5, IoLogoJavascript, IoLogoSass } from 'react-icons/io'
import { Link } from 'react-router-dom'
import { useInView } from 'react-intersection-observer'




const About = () => {
    const [sectionRef, inView] = useInView({
        triggerOnce: true,
        rootMargin: '-400px 0px',
    })

    return (
        <section ref={sectionRef} name='About' className={`container ${inView ? "transition" : "hidden"}`}>
            <div className="main-section">
                <h1 className='section-title'>About me</h1>
                <div className=" about-section">

                    <div className="sub-section-col">
                        <p className='section-text'>
                            Hi, my name is <span className='section-text'> Ofure Alakhume </span> , a Toronto based Front-end software developer.
                            <br /> My interest in web development started back in 2018 when I could not shop on certain online websites because I did not like their user experience. Given my talent in art and design and my skills in programming, I found my love for designing websites and bringing them to life. </p>

                        <h1 className='section-text'>Here are a couple of skills i've acquired</h1>

                        <div>
                            <ul className='about-row sub-section-row'>
                                <li className='sub-section-col'>
                                    <li className='skill-list'>
                                        <IoLogoHtml5 size={30} />
                                        <p className='section-text-small' >HTML</p>
                                    </li>
                                    <li className="skill-list">
                                        <FaFigma size={30} />
                                        <p className='section-text-small' >Figma</p>
                                    </li>
                                </li>
                                <li className='sub-section-col'>
                                    <li className='skill-list'>
                                        <IoLogoCss3 size={30} />
                                        <p className='section-text-small' >CSS</p>
                                    </li>

                                    <li className='skill-list'>
                                        <IoLogoSass size={30} />
                                        <p className='section-text-small' >SASS/SCSS</p>
                                    </li>

                                    <li className="skill-list">
                                        <SiTailwindcss size={30} />
                                        <p className='section-text-small' >Tailwind</p>
                                    </li>
                                </li>
                                <li className='sub-section-col'>
                                    <li className='skill-list'>
                                        <FaReact className='reactIcon' size={35} />
                                        <p className='section-text-small' >React</p>
                                    </li>

                                    <li className="skill-list">
                                        <IoLogoJavascript size={30} />
                                        <p className='section-text-small' >Javascript</p>
                                    </li>
                                </li>

                            </ul>
                        </div>

                        <Link to='/about' >

                            <div className="btn btn-1">
                                <svg>
                                    <rect x="0" y="0" fill="none" width="100%" height="100%" />
                                </svg>
                                More..</div>
                        </Link>


                    </div>
                    <div className="about-col">

                        <p className='section-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime unde, beatae minima deserunt voluptatem dolorem sequi eaque, neque, sed quasi debitis at nihil quod autem non adipisci sint enim vero?
                        </p>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default About