import React from "react";
import { useNavigate } from 'react-router-dom';
import "./Pulmonary.css";


const Pulmonary = () => {
     const navigate = useNavigate();
  return (
    <div className="pulmonary-container">
      <div className="pulmonary-header">
        <h1>Pulmonary</h1>
        <p>
          Pulmonologists specialize in diagnosing and treating conditions that affect the lungs and
          respiratory system. They treat issues such as asthma, COPD, lung cancer, and sleep apnea.
        </p>
      </div>

      <div className="pulmonary-image-section">
        <img src="../../../images/Pulmonary.png" alt="Pulmonary System" className="pulmonary-main-img" />
      </div>

      <div className="pulmonary-content">
        <h2>Common Conditions</h2>
        <ul>
          <li>Asthma</li>
          <li>Chronic Obstructive Pulmonary Disease (COPD)</li>
          <li>Sleep Apnea</li>
          <li>Interstitial Lung Disease</li>
          <li>Lung Cancer</li>
          <li>Tuberculosis</li>
        </ul>

        <h2>Symptoms That Require Pulmonary Evaluation</h2>
        <ul>
          <li>Chronic cough</li>
          <li>Shortness of breath</li>
          <li>Wheezing</li>
          <li>Chest tightness</li>
          <li>Fatigue due to sleep apnea</li>
        </ul>

        <h2>Tests and Treatments</h2>
        <ul>
          <li>Pulmonary Function Tests</li>
          <li>Spirometry</li>
          <li>Chest X-rays and CT Scans</li>
          <li>Bronchoscopy</li>
          <li>Sleep Studies</li>
        </ul>

        <h2>Importance of Pulmonary Care</h2>
        <p>
          Maintaining respiratory health is critical for overall wellness. Pulmonologists offer
          specialized care that helps manage chronic lung conditions and improve quality of life.
        </p>
          </div>
          <button className="back-btn" onClick={() => navigate('/Services')}>
          ← Back to Service
          </button>
    </div>
  );
};

export default Pulmonary;
