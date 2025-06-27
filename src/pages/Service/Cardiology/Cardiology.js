import React from "react";
import { useNavigate } from 'react-router-dom';
import "./Cardiology.css";


const Cardiology = () => {
     const navigate = useNavigate();
  return (
    <div className="cardiology-container">
      <div className="cardiology-header">
        <h1>Cardiology</h1>
        <p>
          Cardiology is the branch of medicine that deals with diseases and abnormalities of the
          heart and blood vessels.
        </p>
      </div>

      <div className="cardiology-image-section">
        <img src="../../../images/Cardiology.png" alt="Heart labeled anatomy" className="cardiology-main-img" />
      </div>

      <div className="cardiology-content">
        <h2>Common Heart Conditions</h2>
        <ul>
          <li>Coronary artery disease</li>
          <li>Heart failure</li>
          <li>Arrhythmias (abnormal heart rhythms)</li>
          <li>Valvular heart diseases</li>
        </ul>

        <h2>Diagnostic Tests</h2>
        <ul>
          <li>Electrocardiogram (ECG or EKG)</li>
          <li>Echocardiogram</li>
          <li>Cardiac catheterization</li>
          <li>Stress test</li>
        </ul>

        <h2>When to See a Cardiologist</h2>
        <ul>
          <li>Chest pain or pressure</li>
          <li>Shortness of breath</li>
          <li>High blood pressure</li>
          <li>Family history of heart disease</li>
        </ul>

        <h2>Care Tips</h2>
        <ul>
          <li>Maintain a healthy diet</li>
          <li>Exercise regularly</li>
          <li>Avoid smoking and limit alcohol</li>
          <li>Manage stress and sleep well</li>
        </ul>

        <p>
          Regular cardiology checkups can save lives by catching heart conditions early and
          managing risks effectively.
        </p>
          </div>
           <button className="back-btn" onClick={() => navigate('/Services')}>
          ← Back to Service
          </button>
    </div>
  );
};

export default Cardiology;
