import React from 'react'
import '../Styles/contact.css'
import { useInView } from 'react-intersection-observer'

const Contact = () => {
    const [sectionRef, inView] = useInView({
        triggerOnce: true,
        rootMargin: '-400px 0px',
    })
    return (
        <section ref={sectionRef} className={`section-container ${inView ? "transition" : "hide"}`}>
            <div className="content-container text-styling">

                <h1>Get in Touch</h1>
                <p>I am currently free and open to work, my inbox is always open </p>

                <a href='mailto: alaksdev@gmail.com' className='btn btn-text'> Email Me </a>

            </div>
        </section>
    )
}

export default Contact