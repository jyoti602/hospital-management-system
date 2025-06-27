import React from 'react';
import { useNavigate } from 'react-router-dom';
import './GeneralPhysician.css';

const GeneralPhysician = () => {
   const navigate = useNavigate();
  return (
    <div className="physician-wrapper">
      <header className="physician-header">
        <h1>General Physician</h1>
        <p>
          General Physicians are highly trained specialists who provide comprehensive non-surgical health care to adult patients,
          especially for complex or serious conditions involving multiple body systems.
        </p>
      </header>

      <section className="physician-section">
        <h2>Roles of a General Physician</h2>
        <ul>
          <li><strong>Global Approach:</strong> Looks at overall health, not just one issue.</li>
          <li><strong>Complex Care:</strong> Handles complex illnesses involving multiple body systems.</li>
          <li><strong>Procedures:</strong> Performs diagnostic and management procedures.</li>
          <li><strong>Diagnosis:</strong> Expert in evaluating and choosing effective diagnostic tests.</li>
          <li><strong>Treatment:</strong> Skilled in selecting effective, safe treatments for complicated conditions.</li>
          <li><strong>Pre/Post-op Care:</strong> Assesses patient risks before surgery and manages complications afterward.</li>
        </ul>
      </section>

      <section className="physician-section">
        <h2>What Makes a General Physician Special?</h2>
        <ul>
          <li>Broad knowledge across all body systems</li>
          <li>Scientific, logical, and thorough diagnosis</li>
          <li>Wise drug selection and therapy planning</li>
          <li>Whole-patient care: physical, emotional, and psychological</li>
          <li>Cost-effective and evidence-based medical decisions</li>
        </ul>
      </section>

      <footer className="physician-footer">
        <p>
          General Physicians are essential to modern medicine, offering holistic, expert care especially when multiple medical
          problems coexist or when a diagnosis is unclear.
        </p>
        <button className="back-btn" onClick={() => navigate('/Doctor')}>
          ← Back to Doctors
        </button>
      </footer>
    </div>
  );
};

export default GeneralPhysician;
