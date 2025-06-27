import React from "react";
import { useNavigate } from 'react-router-dom';
import "./DentalSurgery.css";


const DentalSurgery = () => {
     const navigate = useNavigate();
  return (
    <div className="dental-container">
      <div className="dental-header">
        <h1>Dental Surgery Overview</h1>
        <p>
          Dental surgery includes procedures on teeth, gums, jaw, or surrounding structures. It's
          commonly used for extractions, implants, grafts, and treating severe decay or trauma.
        </p>
      </div>

      <div className="dental-image-section">
        <img src="../../../images/OralSurgery.png" alt="Oral Surgery" className="dental-main-img" />
      </div>

      <div className="dental-content">
        <h2>Common Procedures</h2>
        <ul>
          <li>Tooth Extractions</li>
          <li>Dental Implants</li>
          <li>Gum and Bone Grafts</li>
          <li>Wisdom Tooth Removal</li>
        </ul>

        <h2>When Is Surgery Recommended?</h2>
        <ul>
          <li>Severe tooth decay or infection</li>
          <li>Broken or impacted teeth</li>
          <li>Bone loss in jaw</li>
          <li>Tooth loss needing implants</li>
        </ul>

        <h2>Aftercare Tips</h2>
        <ul>
          <li>Eat soft foods and avoid straws</li>
          <li>Apply ice for swelling</li>
          <li>Keep the area clean gently</li>
          <li>Follow your dentist's medication and care advice</li>
        </ul>

        <h2>Benefits</h2>
        <p>
          Prompt dental surgery can relieve pain, prevent further infection, and restore oral
          function and aesthetics.
        </p>
          </div>
          <button className="back-btn" onClick={() => navigate('/Services')}>
          ← Back to Service
          </button>
    </div>
  );
};

export default DentalSurgery;
