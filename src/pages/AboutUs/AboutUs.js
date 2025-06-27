import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AboutUs.css'; // Link to the CSS file

const AboutUs = () => {
   const navigate = useNavigate();
  return (
    <div className="container">
      <div className="right-box">
        <h1>Why You Should Trust Us? Get Know About Us!</h1>
        <p>
          Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
          Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
          sed stet lorem sit clita duo justo magna dolore erat amet.
        </p>
        <p>
          Stet no et lorem dolor et diam, amet duo ut dolore vero eos.
          No stet est diam rebum amet diam ipsum. Clita clita labore,
          dolor duo nonumy clita sit at, sed sit sanctus dolor eos.
        </p>
          <ul>
          <li>Quality health care</li>
          <li>Only Qualified Doctors</li>
          <li>Medical Research Professionals</li>
            </ul>
        <div className="button">
          <button onClick={() => navigate("/nova-care")}>Read more</button>
        </div>
      </div>

      <div className="left-box">
        <img src="../../../images/Contact.png" alt="Contact" height="500px" width="700px" />
      </div>
    </div>
  );
};

export default AboutUs;
