import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="nav-bar sticky-top">
      <div>
        <img src="images/company_logo.jpg" alt="Company Logo" height="50px" width="100px" />
      </div>

      <div className="nav-menu">
        <Link to="/home">Home</Link>
        <Link to="/about-us">About</Link>
        <Link to="/services">Service</Link>
        

        <div className="dropdown">
          <Link className="dropbtn" to="#">Pages</Link>
          <div className="dropdown-content">
            <Link to="/feature">Feature</Link>
            <Link to="/appointment">Appointment</Link>
            <Link to="/doctor">Doctor</Link>
          </div>
        </div>

        <Link to="/contact">Contact</Link>
        <Link to="/login">Login</Link>
      </div>
      <div className="hover-underline">

      <div className="appointment-button">
        
          <Link to="/appointment">
            <button>
            <h3>Appointment →</h3>
            </button>
          </Link>
        </div>
        </div>
    </nav>
  );
};

export default Navbar;

