import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import navLog from '../assets/Logo1.png'
import '../styles/NavbarStyle.css';
import '../styles/FooterStyle.css'
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="main-navbar">
        <div className='navLogo'>
          <img src={navLog} alt=""/>
          <h3>KEYSTONE CONSTRUCTION <br />
           <span>BUILDING & RENOVATION</span></h3>
        </div>
        <div className={`allNavLinks ${isMenuOpen ? 'active' : ''}`}>
          <Link to="/" className="nav-link" onClick={closeMenu}>
            Home
          </Link>
          <Link to="/aboutR" className="nav-link" onClick={closeMenu}>
            About Us
          </Link>
          <Link to="/serviceR" className='nav-link' onClick={closeMenu}>
            Services
          </Link>
          <Link to="/projectR" className='nav-link' onClick={closeMenu}>
             Project
          </Link>
          <Link to="/contactR" className='nav-link' onClick={closeMenu}>
             Contact Us
          </Link>
        </div>
        <div className='menu-icon' onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes size={28}/> : <FaBars size={28}/>}
        </div>
    </nav>
  )
}

export default Navbar;