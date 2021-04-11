import React from 'react';
import {useState} from 'react';
import {FaBars} from 'react-icons/fa'
import './nav.css'

const NavBar = ({title}) =>    {
    const [open, setOpen] = useState(false);

    return  (
        <nav>
            <div className="logo" ><a href="/">{title}</a></div>

            <FaBars className="FaBars" onClick={() => setOpen(!open)} style={{color: 'white', fontSize:'1.5rem', position: 'absolute', right: '1rem', cursor: 'pointer'}}/>
            <ul className="navbar-links" style={{transform: open ? 'translateX(0px)' : ''}}>
                <li><a href="/">Home</a></li>
                <li><a href="/">Projects</a></li>
                <li><a href="/">About Us</a></li>
                <li><a href="/">Contact Us</a></li>
            </ul>         
        </nav>
    )
}

export default NavBar;