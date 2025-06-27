import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Gynecologist.css';

const Gynecologist = () => {
   const navigate = useNavigate();
  return (
    <div className="gyne-wrapper">
      <header className="gyne-header">
        <h1>Gynecologist</h1>
        <p>
          Gynecologists specialize in the female reproductive system, offering care from puberty to menopause,
          including pregnancy, fertility, menstruation, and sexual health.
        </p>
      </header>

      <section className="gyne-section">
        <h2>What Does a Gynecologist Do?</h2>
        <ul>
          <li>Reproductive health exams (breast, pelvic, Pap tests)</li>
          <li>Diagnosis and treatment of reproductive conditions</li>
          <li>Family planning and contraception advice</li>
          <li>STI testing and prevention</li>
        </ul>
      </section>

      <section className="gyne-section">
        <h2>Common Conditions Treated</h2>
        <ul>
          <li>Endometriosis and PCOS</li>
          <li>Uterine fibroids, ovarian cysts</li>
          <li>Irregular periods, painful menstruation</li>
          <li>Reproductive cancers (cervix, uterus, ovaries)</li>
        </ul>
      </section>

      <section className="gyne-section">
        <h2>When to Visit a Gynecologist</h2>
        <ul>
          <li>First visit between ages 13-15</li>
          <li>Annual checkups for sexually active individuals</li>
          <li>Symptoms like pelvic pain, abnormal bleeding, or lumps</li>
          <li>Pregnancy planning or menopause support</li>
        </ul>
      </section>

      <section className="gyne-section">
        <h2>Specializations</h2>
        <ul>
          <li>Gynecologic oncology</li>
          <li>Urogynecology & reconstructive surgery</li>
          <li>Pediatric, adolescent, and menopausal gynecology</li>
        </ul>
      </section>

      <footer className="gyne-footer">
        <p>Regular visits to a gynecologist support long-term reproductive health. Your comfort and care are their priority.</p>
        <button className="back-btn" onClick={() => navigate('/Doctor')}>
          ← Back to Doctors
        </button>
      </footer>
    </div>
  );
};

export default Gynecologist;