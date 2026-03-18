import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaChartBar, FaBrain, FaChartLine, FaCog } from 'react-icons/fa';
import config from '../config';
import '../styles/Navbar.css';

const Navbar = ({ onMenuClick, isSidebarOpen }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    if (window.innerWidth <= 768 && onMenuClick) {
      onMenuClick();
      return;
    }

    setIsMenuOpen((prev) => !prev);
  };

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

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
          className="menu-toggle"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={window.innerWidth <= 768 ? isSidebarOpen : isMenuOpen}
          onClick={handleMenuToggle}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
          <Link to="/" className="nav-link" onClick={handleNavClick}><FaChartBar /> Dashboard</Link>
          <Link to="/prediction" className="nav-link" onClick={handleNavClick}><FaBrain /> Predictions</Link>
          <Link to="/history" className="nav-link" onClick={handleNavClick}><FaChartLine /> History</Link>
          <Link to="/settings" className="nav-link" onClick={handleNavClick}><FaCog /> Settings</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
