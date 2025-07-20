import React from 'react';
import './Footer.css';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  // Navigate to route and scroll to top smoothly
  const handleNavigate = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-section">
      <div className="footer-grid">
        {/* Logo and Newsletter */}
        <div className="footer-brand-col">
          <div className="footer-logo-row">
            <img src="/images/company_logo.jpg" alt="NovaCare Logo" className="footer-logo-img" />
            <span className="footer-logo-text"></span>
          </div>
          <p className="footer-desc">
            Empowering NovaCare with seamless technology – Your health, our priority.
          </p>
          <div className="footer-newsletter-label">Subscribe Newsletter</div>
          <form className="footer-newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Email Address" className="footer-newsletter-input" />
            <button type="submit" className="footer-newsletter-btn">→</button>
          </form>
        </div>

        {/* Quick Links */}
        <div className="footer-links-col">
          <div className="footer-links-title">Quick Links</div>
          <span onClick={() => handleNavigate('/home')} className="footer-link">Home</span>
          <span onClick={() => handleNavigate('/about-Us-Section')} className="footer-link">About Us</span>
          <span onClick={() => handleNavigate('/Service-Cards-Section')} className="footer-link">Services</span>
          <span onClick={() => handleNavigate('/testimonials-Section')} className="footer-link">Articles</span>
        </div>

        {/* Utility Pages */}
        <div className="footer-links-col">
          <div className="footer-links-title">Utility Pages</div>
          <span onClick={() => handleNavigate('/contact')} className="footer-link">Contact Us</span>
          <span onClick={() => handleNavigate('/privacy-policy')} className="footer-link">Privacy & Policy</span>
          <span onClick={() => handleNavigate('/terms-conditions')} className="footer-link">Terms & Conditions</span>
          <span onClick={() => handleNavigate('/not-found')} className="footer-link">404 Not Found</span>
        </div>

        {/* Follow Us */}
        <div className="footer-links-col">
          <div className="footer-links-title">Follow Us</div>
          <span onClick={() => window.open('https://instagram.com', '_blank')} className="footer-link">Instagram</span>
          <span onClick={() => window.open('https://twitter.com', '_blank')} className="footer-link">Twitter / X</span>
          <span onClick={() => window.open('https://linkedin.com', '_blank')} className="footer-link">LinkedIn</span>
          <span onClick={() => window.open('https://facebook.com', '_blank')} className="footer-link">Facebook</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
