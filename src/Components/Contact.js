import React from 'react'

import { useInView } from 'react-intersection-observer'

const Contact = () => {
    const [sectionRef, inView] = useInView({
        triggerOnce: true,
        rootMargin: '-400px 0px',
    })
    return (
        <section name='Contact' ref={sectionRef} className={`section-container ${inView ? "transition" : "hidden"}`}>
            <div className="main-section" style={{ alignItems: 'center' }}>
                <h1 className='section-title' style={{ textAlign: 'center' }} >Contact</h1>
                <p className='section-text' style={{ textAlign: 'center', width: '40rem' }}> I am currently in the process of looking for a job. If you are interested in working with me, please contact me VIA email or connect with me on LinkedIn </p>
                <a href='mailto: alaksdev@gmail.com' className='btn btn-1'>
                    <svg>
                        <rect x="0" y="0" fill="none" width="100%" height="100%" />
                    </svg>
                    Email Me </a>
            </div>

        </section>
    )
}

export default Contact