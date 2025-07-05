import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaArrowRight } from 'react-icons/fa';
import { FaRegCalendarCheck } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => setMenuOpen((open) => !open);
  const handleClose = () => setMenuOpen(false);

  return (
    <header className="hero-navbar">
      <div className="navbar-top">
        <div className="hero-logo-row">
          <img src="../../images/company_logo.jpg" height={60}></img>
        </div>
        <button className="mobile-toggle" onClick={handleToggle} aria-label="Toggle navigation">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      <div className={`navbar-menu${menuOpen ? ' active' : ''}`}>
        <nav className="hero-nav-links">
          <Link to="/" className="active" onClick={handleClose}>Home</Link>
          <a href="/#services" onClick={handleClose}>Services</a>
          <a href="/#about-us" onClick={handleClose}>About Us</a>
          <Link to="/book-appointment" className="appointment-nav-btn" onClick={handleClose}>
            <FaRegCalendarCheck style={{ marginRight: '8px' }} />
            Appointment
          </Link>
        </nav>
        <div className="hero-nav-actions">
          <Link to="/signup">
            <button className="hero-signup-btn" onClick={handleClose}>Sign Up</button>
          </Link>
          <Link to="/contact">
            <button className="hero-contact-btn" onClick={handleClose}>
              <span>Contact Us</span> <FaArrowRight style={{ marginLeft: '8px' }} />
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
