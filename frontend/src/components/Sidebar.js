import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaChartBar, FaBrain, FaChartLine, FaCog, FaInfoCircle } from 'react-icons/fa';
import '../styles/Sidebar.css';

const Sidebar = ({ isOpen, onClose }) => {
  const handleLinkClick = () => {
    if (window.innerWidth <= 768 && onClose) {
      onClose();
    }
  };

  return (
    <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-content">
        <div className="sidebar-section">
          <h3 className="section-title">Main</h3>
          <NavLink to="/" className="sidebar-link" onClick={handleLinkClick}>
            <span className="icon"><FaChartBar /></span>
            <span className="text">Dashboard</span>
          </NavLink>
          <NavLink to="/prediction" className="sidebar-link" onClick={handleLinkClick}>
            <span className="icon"><FaBrain /></span>
            <span className="text">Predictions</span>
          </NavLink>
          <NavLink to="/history" className="sidebar-link" onClick={handleLinkClick}>
            <span className="icon"><FaChartLine /></span>
            <span className="text">History</span>
          </NavLink>
        </div>

        <div className="sidebar-section">
          <h3 className="section-title">System</h3>
          <NavLink to="/settings" className="sidebar-link" onClick={handleLinkClick}>
            <span className="icon"><FaCog /></span>
            <span className="text">Settings</span>
          </NavLink>
          <NavLink to="/about" className="sidebar-link" onClick={handleLinkClick}>
            <span className="icon"><FaInfoCircle /></span>
            <span className="text">About</span>
          </NavLink>
        </div>

        <div className="sidebar-footer">
          <p className="version">v1.0.0</p>
          <p className="status">Online</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
