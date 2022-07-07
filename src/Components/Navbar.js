import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'


const Navbar = () => {

    const [nav, setNav] = useState(false)
    const [color, setColor] = useState('transparent')
    const [textColor, setTextColor] = useState('white')

    const toggleNav = () => {
        setNav(!nav)
    }

    useEffect(() => {
        const chanegColor = () => {
            if (window.scrollY > 90) {
                setColor('#fff')
                setTextColor('#000')
            } else {
                setColor('transparent')
                setTextColor('#fff')
            }
        }
        window.addEventListener('scroll', chanegColor)
    }, [])

    return (


        <div className="nav-container" style={{ backgroundColor: `${color}` }}>
            <div className="nav-content">


                <Link to="Home" smooth={true} duration={500} >

                    <h1 style={{ color: `${textColor}`, fontSize: '2.5rem' }} >Alaks</h1>
                </Link>



                <ul className="nav-menu" >



                    <Link to="Home" smooth={true} duration={500} >
                        <li style={{ color: `${textColor}` }} className='link'>Home
                        </li>
                    </Link>

                    <Link to="About" smooth={true} duration={500} >
                        <li style={{ color: `${textColor}` }} className='link'>About
                        </li>
                    </Link>
                    <Link to="Projecthome" smooth={true} duration={500} >
                        <li style={{ color: `${textColor}` }} className='link'>Projects
                        </li>
                    </Link>
                    <Link to="Contact" smooth={true} duration={500} >
                        <li style={{ color: `${textColor}` }} className='link'>Contact
                        </li>
                    </Link>

                </ul>
                {/* Mobile Button */}
                <div className="mobile-btn">
                    {nav ? <AiOutlineClose size={20} style={{ color: `${textColor}` }} onClick={toggleNav} /> : <AiOutlineMenu style={{ color: `${textColor}` }} size={20} onClick={toggleNav} />}
                </div>

                {/* Mobile Menu */}

                <div onClick={() => setNav(false)} className={
                    nav ? "mobile-menu" : "hide"
                } >
                    <div className="mnav-content">

                        <ul className="mnav-menu" >

                            <Link to="Home" smooth={true} duration={500} offset={50}>
                                <li onClick={() => setNav(false)} className='link'>Home
                                </li>
                            </Link>

                            <Link to="About" smooth={true} duration={500} >
                                <li onClick={() => setNav(false)} className='link'>About
                                </li>
                            </Link>

                            <Link to="Projecthome" smooth={true} duration={500}>
                                <li onClick={() => setNav(false)} className='link'>Projects
                                </li>
                            </Link>

                            <Link to="Contact" smooth={true} duration={500}>
                                <li onClick={() => setNav(false)} className='link'>Contact
                                </li>
                            </Link>
                        </ul>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Navbar