import React from 'react'
import "../Styles/navbar.css"
import { Link } from 'react-router-dom'


const Navbar = () => {

    // const [click, setClick] = useState(false);
    // const handleClick = () => setClick(!click)

    return (
        <div className="nav-container">
            <div className="nav-content">

                <Link to="/" >
                    <h1>Alaks</h1>
                </Link>
                <ul className="nav-menu" >
                    <li className='link'>
                        <Link to="/" >Home</Link>
                    </li>

                    <li className='link'>
                        <Link to="/about" >About</Link>
                    </li>

                    <li className='link'>
                        <Link to="/projects" >Projects</Link>
                    </li>

                    <li className='link'>
                        <Link to="/contact" >Contact</Link>
                    </li>

                </ul>
            </div>
        </div>
    )
}

export default Navbar