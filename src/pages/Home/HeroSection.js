import React from 'react';
import { Link } from 'react-router-dom';
import './HeroSection.css';


const avatar1 = 'https://randomuser.me/api/portraits/men/32.jpg';
const avatar2 = 'https://randomuser.me/api/portraits/women/44.jpg';
const avatar3 = 'https://randomuser.me/api/portraits/men/65.jpg';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-left">
          <span className="hero-welcome">Welcome to Novacare</span>
          <h1 className="hero-title">
            Get Premium  NovaCare For Your Health
          </h1>
         
          <div className="hero-cta-row">
            <Link to="/book-appointment">
              <button className="hero-cta-btn">Book Appointment <span className="arrow">→</span></button>
            </Link>
            <div className="hero-avatars">
              <img src={avatar1} alt="avatar1" />
              <img src={avatar2} alt="avatar2" />
              <img src={avatar3} alt="avatar3" />
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-doctor-img-wrap">
            <img src="../../images/carousel-1.jpg" alt="Doctor" className="hero-doctor-img" />
            <div className="hero-floating-img">
              <img src={avatar2} alt="Doctor floating" />
              <span>Meet our top doctor</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
