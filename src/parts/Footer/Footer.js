import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-grid">
        {/* Logo and Newsletter */}
        <div className="footer-brand-col">
          <div className="footer-logo-row">
            <span className="footer-logo-icon">🟣</span>
            <span className="footer-logo-text">NovaCare</span>
          </div>
          <p className="footer-desc">
            Lorem ipsum dolor sit amet consectetur. Dictum eget sit scelerisque lorem pulvinar. Sapien
          </p>
          <div className="footer-newsletter-label">Subscribe Newsletter</div>
          <form className="footer-newsletter-form">
            <input type="email" placeholder="Email Address" className="footer-newsletter-input" />
            <button type="submit" className="footer-newsletter-btn">→</button>
          </form>
        </div>
        {/* Quick Links */}
        <div className="footer-links-col">
          <div className="footer-links-title">Quick Links</div>
          <a href="home">Home</a>
          <a href="about-Us">About-Us</a>
          <a href="services">Services</a>
          <a href="articles">Articles</a>
        </div>
        {/* Utility Pages */}
        <div className="footer-links-col">
          <div className="footer-links-title">Utility Pages</div>
          <a href="contact">Contact Us</a>
          <a href="#">Privacy & policy</a>
          <a href="#">Terms & conditions</a>
          <a href="#">404 not found</a>
        </div>
        {/* Follow Us */}
        <div className="footer-links-col">
          <div className="footer-links-title">Follow Us</div>
          <a href="#">Instagram</a>
          <a href="#">Twitter / X</a>
          <a href="#">LinkedIn</a>
          <a href="#">Facebook</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
