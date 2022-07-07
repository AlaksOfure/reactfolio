import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Link as Scroll } from 'react-scroll'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'


const Navbar2 = () => {

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


                <Link to="/"  >

                    <h1 style={{ color: `${textColor}`, fontSize: '2.5rem' }} >Alaks</h1>
                </Link>



                <ul className="nav-menu" >

                    <Link to="/">
                        <li style={{ color: `${textColor}` }} className='link'> Home
                        </li>
                    </Link>

                    <Scroll to="Top" smooth={true} duration={500} >
                        <li style={{ color: `${textColor}` }} className='link'>Back to Top
                        </li>
                    </Scroll>

                </ul>
                {/* Mobile Button */}

                <div className="mobile-btn">
                    {nav ? <AiOutlineClose size={20} style={{ color: `${textColor}` }} onClick={toggleNav} /> : <AiOutlineMenu style={{ color: `${textColor}` }} size={20} onClick={toggleNav} />}
                </div>

                {/* Mobile Menu */}

                <div className={
                    nav ? "mobile-menu" : "hide"
                } >
                    <div className="mnav-content">

                        <ul className="mnav-menu" >

                            <Link to="/home">
                                <li onClick={() => setNav(false)} className='link'>Home
                                </li>
                            </Link>

                            <Link to="Top" smooth={true} duration={500} >
                                <li onClick={() => setNav(false)} className='link'>Back to top
                                </li>
                            </Link>

                        </ul>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Navbar2