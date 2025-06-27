import React from "react";
import "./NovaCare.css";

const NovaCare = () => {
  return (
    <div className="nova-container">
      <header className="nova-header">
        <div className="nova-header-content">
          <h1 className="nova-title">🏥 NovaCare Hospital Management System</h1>
        </div>
        <p className="nova-subtitle">
          A modern, secure, and efficient solution for hospital operations.
        </p>
      </header>

      <section className="nova-features">
        <div className="nova-card">
          <h2 className="nova-card-title">👩‍⚕️ Patient Management</h2>
          <p className="nova-card-text">
            Register, track, and manage patient data including appointments, medical history, and billing records.
          </p>
        </div>

        <div className="nova-card">
          <h2 className="nova-card-title">📅 Doctor Scheduling</h2>
          <p className="nova-card-text">
            Organize doctor shifts, patient appointments, and availability with ease.
          </p>
        </div>

        <div className="nova-card">
          <h2 className="nova-card-title">💰 Billing & Reports</h2>
          <p className="nova-card-text">
            Manage hospital finances with automated billing, invoices, and detailed reports.
          </p>
        </div>
      </section>

      <section className="nova-about">
        <h2 className="nova-about-title">📌 About NovaCare</h2>
        <p className="nova-about-text">
          NovaCare is a comprehensive Hospital Management System designed to improve the healthcare experience.
          From patient admissions to discharges, our system makes everything seamless, with a user-friendly design,
          cloud-based access, and secure data handling.
        </p>
        <img
          src="https://images.unsplash.com/photo-1588776814546-ec7e8c6d2f29"
          alt="Hospital Management"
          className="nova-image"
        />
      </section>

      <footer className="nova-footer">
        &copy; 2025 NovaCare. All rights reserved.
      </footer>
    </div>
  );
};

export default NovaCare;
