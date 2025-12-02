import React from 'react'
import { Link } from 'react-router-dom';
import navLog from '../assets/Logo1.png'

const Navbar: React.FC = () => {
  return (
    <nav className="main-navbar">
        <div className='navLogo'>
          <img src={navLog} alt=""/>
          <h3>KEYSTONE CONSTRUCTION <br />
           <span>BUILDING & RENOVATION</span></h3>
        </div>
        <div className='allNavLinks'>
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/about" className="nav-link">
            About Us
          </Link>
          <Link to="/Services" className='nav-link'>
            Services
          </Link>
          <Link to="/Projects" className='nav-link'>
             Project
          </Link>
          <Link to="/Contact" className='nav-link'>
             Contact Us
          </Link>
        </div>
    </nav>
  )
}

export default Navbar;
