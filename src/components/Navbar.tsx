import React from 'react'
import { Link } from 'react-router-dom';
import navLog from '../assets/Logo.png'

const Navbar: React.FC = () => {
  return (
    <nav className="main-navbar">
        <img src={navLog} alt=""/>
      <Link to="/" className="nav-link">
        Home
      </Link>
      <Link to="/projects" className="nav-link">
        Projects
      </Link>
    </nav>
  )
}

export default Navbar;
