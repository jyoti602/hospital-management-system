import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Urologist.css';

const Urologist = () => {
   const navigate = useNavigate();
  return (
    <div className="uro-wrapper">
      <header className="uro-header">
        <h1>Urologist</h1>
        <p>
          A urologist is a medical doctor specializing in diagnosing and treating disorders of the urinary and reproductive systems in adults and children.
          This includes everything from urinary tract infections to cancers of the bladder, kidneys, and prostate.
        </p>
      </header>

      <section className="uro-section">
        <h2>What Does a Urologist Do?</h2>
        <ul>
          <li>Diagnoses and treats urinary system conditions (kidneys, bladder, ureters, urethra)</li>
          <li>Treats reproductive issues and adrenal gland conditions</li>
          <li>Performs surgery for conditions like cancers or obstructions</li>
          <li>Handles sexual dysfunction, infertility, and urinary incontinence</li>
        </ul>
      </section>

      <section className="uro-section">
        <h2>Subspecialties</h2>
        <ul>
          <li>Pediatric Urology</li>
          <li>Urologic Oncology</li>
          <li>Kidney Transplantation</li>
          <li>Sexual Dysfunction and Infertility</li>
          <li>Minimally Invasive and Robotic Surgery</li>
        </ul>
      </section>

      <section className="uro-section">
        <h2>When Should You Visit a Urologist?</h2>
        <ul>
          <li>Changes in urination (pain, blood, urgency, weak stream)</li>
          <li>Pelvic pain or heaviness</li>
          <li>Infertility or erectile dysfunction</li>
          <li>Recurring urinary tract infections</li>
          <li>Kidney or bladder stones</li>
        </ul>
      </section>

      <section className="uro-section">
        <h2>Common Conditions Treated</h2>
        <ul>
          <li>Kidney, bladder, and prostate cancer</li>
          <li>Urinary incontinence and frequent UTIs</li>
          <li>Kidney and bladder stones</li>
          <li>Pelvic organ prolapse</li>
          <li>Congenital urinary problems</li>
        </ul>
      </section>

      <section className="uro-section">
        <h2>What to Expect During a Visit</h2>
        <ul>
          <li>Medical history review and symptom discussion</li>
          <li>Physical exam (may include pelvic or rectal exam)</li>
          <li>Urine tests, blood tests, imaging like ultrasound or CT</li>
          <li>Semen analysis for reproductive issues</li>
        </ul>
      </section>

      <section className="uro-section">
        <h2>Urologist vs. Nephrologist</h2>
        <p>
          A nephrologist specializes only in kidney diseases and is not a surgeon. Urologists treat surgical and non-surgical urinary/reproductive issues.
        </p>
      </section>

      <footer className="uro-footer">
        <p>
          Urologists are key to treating a wide range of conditions that impact quality of life. Early diagnosis and specialized care can significantly improve outcomes.
        </p>
        <button className="back-btn" onClick={() => navigate('/Doctor')}>
          ← Back to Doctors
          </button>
      </footer>
    </div>
  );
};

export default Urologist;