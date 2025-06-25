import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaTwitter,
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Address Section */}
        <div className="footer-box">
          <h3>Address</h3>
          <p>
            <FaMapMarkerAlt className="footer-icon" /> 123 Street, New York, USA
          </p>
          <p>
            <FaPhoneAlt className="footer-icon" /> +012 345 67890
          </p>
          <p>
            <FaEnvelope className="footer-icon" /> info@example.com
          </p>
          <div className="footer-icons">
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaYoutube /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div>
        </div>

        {/* Services Section */}
        <div className="footer-box">
          <h3>Services</h3>
          <ul>
            <li>› Cardiology</li>
            <li>› Pulmonary</li>
            <li>› Neurology</li>
            <li>› Orthopedics</li>
            <li>› Laboratory</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="footer-box">
          <h3>Quick Links</h3>
          <ul>
            <li>› About Us</li>
            <li>› Contact Us</li>
            <li className="active">› Our Services</li>
            <li>› Terms & Conditions</li>
            <li>› Support</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="footer-box">
          <h3>Newsletter</h3>
          <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
          <div className="newsletter">
            <input type="email" placeholder="Your email" />
            <button>SignUp</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
