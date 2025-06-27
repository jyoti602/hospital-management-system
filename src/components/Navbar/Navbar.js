import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, Menu,ArrowRight, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <nav className="nav-bar">
      <div className="nav-left">
        <img src="/images/company_logo.jpg" alt="Logo" className="logo" />
      </div>

      <div className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
        <Link to="/home" onClick={toggleMobileMenu}>Home</Link>
        <Link to="/about-us" onClick={toggleMobileMenu}>About</Link>
        <Link to="/services" onClick={toggleMobileMenu}>Service</Link>

        <div className="dropdown" onClick={toggleDropdown}>
          <div className="dropbtn">
            Pages {dropdownOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </div>
          {dropdownOpen && (
            <div className="dropdown-content">
              <Link to="/feature" onClick={toggleMobileMenu}>Feature</Link>
              <Link to="/appointment" onClick={toggleMobileMenu}>Appointment</Link>
              <Link to="/doctor" onClick={toggleMobileMenu}>Doctor</Link>
            </div>
          )}
        </div>

        <Link to="/contact" onClick={toggleMobileMenu}>Contact</Link>
        <Link to="/login" onClick={toggleMobileMenu}>Login</Link>

        <div className="appointment-button">
          <Link to="/appointment" onClick={toggleMobileMenu}>
            <button>  Appointment <ArrowRight size={16} /></button>
          </Link>
        </div>
      </div>

      <div className="mobile-toggle" onClick={toggleMobileMenu}>
        {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </div>
    </nav>
  );
};

export default Navbar;
