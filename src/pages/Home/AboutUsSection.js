import React from 'react';
import './AboutUsSection.css';

const AboutUsSection = () => {
  return (
    <section className="aboutus-section" id="about-us">
      <div className="aboutus-container">
        <div className="aboutus-img-col">
          <div className="aboutus-img-wrap">
            <img src="/images/doctorA.jpg" alt="Doctors" className="aboutus-img" />
          </div>
        </div>
        <div className="aboutus-content-col">
          <div className="aboutus-label-row">
            <span className="aboutus-label">About Us</span>
            <span className="aboutus-label-underline"></span>
          </div>
          <h2 className="aboutus-title">Quality Care For Every<br/>Stage Of Life</h2>
          <p className="aboutus-desc">
            We're a dedicated team committed to helping you achieve optimal health and wellness. With a focus on well-being, we combine expert knowledge
          </p>
          <button className="aboutus-btn">
            More About <span className="aboutus-btn-arrow">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
