import React from 'react'
import About from '../Components/About'
import Contact from '../Components/Contact'
import Hero from '../Components/Hero'
import Navbar from '../Components/Navbar'
import Projects from '../Components/Projects'


const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <Projects />
            <Contact />
        </>

    )
}

export default Home