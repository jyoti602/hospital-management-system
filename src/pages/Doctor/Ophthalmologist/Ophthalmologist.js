import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Ophthalmologist.css';

const Ophthalmologist = () => {
   const navigate = useNavigate();
  return (
    <div className="oph-wrapper">
      <header className="oph-header">
        <h1>Ophthalmologist</h1>
        <p>
          Ophthalmologists are medical doctors who diagnose and treat all eye and vision conditions. They prescribe glasses, medications, and can perform surgeries.
        </p>
      </header>

      <section className="oph-section">
        <h2>What is an Ophthalmologist?</h2>
        <p>
          Ophthalmologists are MDs or DOs with specialized training in eye care. They offer complete eye care, from exams and prescriptions to surgeries.
        </p>
      </section>

      <section className="oph-section">
        <h2>Education Path</h2>
        <ul>
          <li>Undergraduate Degree (4 years)</li>
          <li>Medical School (4 years)</li>
          <li>Internship (1 year)</li>
          <li>Ophthalmology Residency (3+ years)</li>
        </ul>
      </section>

      <section className="oph-section">
        <h2>What Do They Do?</h2>
        <ul>
          <li>Eye exams and vision testing</li>
          <li>Prescribing glasses and contact lenses</li>
          <li>Diagnosing and treating eye diseases (e.g., diabetes-related vision issues)</li>
          <li>Eye surgery (e.g., cataracts, glaucoma)</li>
        </ul>
      </section>

      <section className="oph-section">
        <h2>Conditions Treated</h2>
        <ul>
          <li>Myopia, Hyperopia, Astigmatism</li>
          <li>Amblyopia, PVD</li>
          <li>Age-related Macular Degeneration</li>
          <li>Glaucoma, Cataracts</li>
          <li>Retinal Detachment, Strabismus</li>
        </ul>
      </section>

      <section className="oph-section">
        <h2>When to See One</h2>
        <ul>
          <li>Blurry or double vision</li>
          <li>Redness, pain or light sensitivity</li>
          <li>Floaters or flashes</li>
          <li>Eye injuries or infections</li>
        </ul>
      </section>

      <section className="oph-section">
        <h2>Eye Exam Frequency</h2>
        <ul>
          <li>Kids: Every 1-2 years</li>
          <li>Adults under 40: Every 5-10 years</li>
          <li>Age 40–54: Every 2-4 years</li>
          <li>Age 55+: Every 1-3 years</li>
          <li>Diabetics: Annually</li>
        </ul>
      </section>

      <section className="oph-section">
        <h2>Ophthalmologist vs. Optometrist</h2>
        <p>
          Ophthalmologists are medical doctors who can perform surgery. Optometrists hold a Doctor of Optometry degree and provide vision care but not surgery.
        </p>
      </section>

      <footer className="oph-footer">
        <p>
          Ophthalmologists ensure complete eye health management. Whether for routine exams or complex surgeries, they provide vital vision care for all ages.
        </p>
        <button className="back-btn" onClick={() => navigate('/Doctor')}>
          ← Back to Doctors
          </button>
      </footer>
    </div>
  );
};

export default Ophthalmologist;