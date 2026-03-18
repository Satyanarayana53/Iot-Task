import React from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import config from '../config';
import '../styles/Navbar.css';

const Navbar = ({ onMenuClick }) => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <img 
            src={config.COLLEGE_LOGO} 
            alt="College Logo" 
            className="navbar-logo"
            onError={(e) => e.target.style.display = 'none'}
          />
          <Link to="/" className="navbar-title">
            <h1>{config.COLLEGE_NAME}</h1>
            <p>Water Tank Monitoring System</p>
          </Link>
        </div>

        <button 
          type="button"
          className="menu-toggle"
          onClick={onMenuClick}
          aria-label="Open navigation menu"
        >
          <FaBars />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
