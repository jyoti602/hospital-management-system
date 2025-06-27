
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Laboratory.css';

const Laboratory = () => {
    const navigate = useNavigate();
  return (
    <div className="lab-container">
      <header className="lab-header">
        <h1>🧪 Laboratory Testing</h1>
        <p>Explore safe, convenient, and board-approved at-home lab testing options.</p>
      </header>

      <section className="lab-section">
        <h2>What Is At-Home Testing?</h2>
        <p>
          At-home testing allows individuals to test for various health conditions from the comfort of their home. It became especially popular during the COVID-19 pandemic and continues to grow in use and accuracy.
        </p>
      </section>

      <section className="lab-section">
        <h2>Types of At-Home Tests</h2>
        <ul>
          <li>🧬 DNA Ancestry & Genetic Tests</li>
          <li>🦠 Infectious Disease Tests (COVID-19, STDs, Flu)</li>
          <li>🩸 Blood Tests (Cholesterol, Hormones, Vitamin D)</li>
          <li>🥗 Food & Allergy Tests</li>
          <li>🧘 Wellness Panels (Stress, Sleep, Hormones)</li>
        </ul>
      </section>

      <section className="lab-section">
        <h2>Benefits of At-Home Testing</h2>
        <div className="lab-grid">
          <div className="lab-card">
            <h3>Convenience</h3>
            <p>Collect samples anytime, anywhere, with no need to visit a clinic.</p>
          </div>
          <div className="lab-card">
            <h3>Privacy</h3>
            <p>Test discreetly at home with results delivered online securely.</p>
          </div>
          <div className="lab-card">
            <h3>Monitoring</h3>
            <p>Track your health over time and optimize wellness with regular checks.</p>
          </div>
        </div>
      </section>

      <section className="lab-section">
        <h2>Important Tips</h2>
        <ul className="lab-tips">
          <li>✅ Always check the expiration date before use.</li>
          <li>📦 Follow storage and usage instructions carefully.</li>
          <li>🧾 Some tests require prescriptions; consult your doctor if needed.</li>
        </ul>
          </section>
            <button className="back-btn" onClick={() => navigate('/Services')}>
          ← Back to Service
          </button>
    </div>
  );
};

export default Laboratory;
