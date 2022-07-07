import React from 'react'
import { Link } from 'react-scroll'


const Hero = () => {
    return (
        <section name='Home' className='container'>
            {/* Hero */}
            <div className='hero'>
                <p className='title-text' >Hi my name is</p>
                <h1 className='name-text' >Ofure Alakhume</h1>
                <h1 className='description-text' >A front end software developer.</h1>
                {/* <div className="btn btn1">About Me</div> */}


                <Link to="About" smooth={true} duration={500} >

                    <div className="btn btn-1">
                        <svg>
                            <rect x="0" y="0" fill="none" width="100%" height="100%" />
                        </svg>
                        About Me
                    </div>
                </Link>
            </div>
        </section>
    )
}

export default Hero