import React from "react";
import "./Feature.css";
const Feature = () => {
  return (
    <div className="container">
      <div className="right-boxr">
        <h1>Why Choose Us</h1>
        <p>
          Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam
          amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit
          clita duo justo erat amet
        </p>

        <div className="boxs">
          <div className="icon">
            <img src="../../images/fimg.png" alt="Experience Doctors" height="70px" />
            <h4>Experience Doctors</h4>
          </div>

          <div className="icon">
            <img src="../../images/fimg1.png" alt="Quality Services" height="70px" />
            <h4>Quality Services</h4>
          </div>

          <div className="icon">
            <img src="../../images/fimg2.png" alt="Positive Consultation" height="70px" />
            <h4>Positive Consultation</h4>
          </div>

          <div className="icon">
            <img src="../../images/fimg4.png" alt="24 Hours Support" height="70px" />
            <h4>24 Hours Support</h4>
          </div>
        </div>
      </div>

      <div className="left-box">
        <img src="../../images/docpulse.jpg" alt="Feature" />
      </div>
    </div>
  );
};

export default Feature;
