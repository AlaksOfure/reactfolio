import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/aboutIntro.css'



const Aboutintro = () => {
    return (
        <section className='about-container'>
            <div className="about-content">

                <section className='about-text'>
                    <h1>Intro</h1>
                    <p>Hi, my name is Ofure Alakhume, a Toronto based Front-end software developer.
                        <br /> My interest in web development started back in 2018 when I could not shop on certain online websites because I did not like their user experience. Given my talent in art and design and my skills in programming, I found my love for designing websites and bringing them to life. </p>
                    <Link to="/contact" className='btn'> <span className='btn-text'>Contact Me</span> </Link>
                </section>

                <section className='about-text'>
                    <h1>Experience</h1>
                    <p>I begun working freelance in 2020, designing for one-off clients.  </p>
                    <Link to="/project" className='btn'> <span className='btn-text'>Projects</span> </Link>

                </section>

                <section className='about-text'>
                    <h1>Work Tools</h1>
                    <p>
                        I have used a various amount of tools during my web development journey.
                        <br /> For my design tools i use my sketch pad for quickly drawing down ideas and then use my main design tool Procreate to add colour and visualise my ideas. I have recently started working with Figma which is a really good design tool that consists of alot of time-saving features and very useful community plug-ins/add-ons
                    </p>
                    <p>
                        Like most developers, the editor of my choice is VS code. I am currently working with React and have a solid background with HTML, CSS and Javascript
                    </p>
                    <p>
                        I originally used the app Minimalist for my productivity but I have since switched to Notion which aids in my organization and helps me keep track my projects and also write notes down.
                    </p>
                </section>

                <section className='about-text'>
                    <h1>Life</h1>
                    <p>Growing up in Nigeria I was always interested in art and found a passion for drawing and painting, which later evolved to designing due to me working with my mum with her event planning business. A couple of years later and i have learnt to be able to channel my creativity through code, the web and various different outlets</p>

                    <p>At home, I like to stay fit and active, by working out and playing soccer. I also have a deep love for cooking and tend to make various new dishes when i have the time to do so. <br />In my free time I embrace my creative side and either sketch or step out to take pictures  </p>
                </section>


            </div>
        </section>
    )
}

export default Aboutintro