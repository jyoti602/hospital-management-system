import React from "react";
import "./NovaCare.css";
import {
  FaHospital,
  FaUsers,
  FaCalendarAlt,
  FaFileInvoiceDollar,
  FaUserMd,
  FaServicestack,
  FaPhoneAlt
} from "react-icons/fa";
import { Link } from "react-router-dom";

const NovaCare = () => {
  return (
    <div className="nova-container">
      {/* Header Section */}
      <header className="nova-header">
        <div className="nova-header-content">
          <FaHospital className="nova-icon" size={40} />
          <h1 className="nova-title">NovaCare Hospital System</h1>
        </div>
        <p className="nova-subtitle">
          Your partner for efficient and modern hospital management.
        </p>
      </header>

      {/* Feature Cards Section */}
      <section className="nova-features">
        <div className="nova-card">
          <h2 className="nova-card-title">
            <FaUsers className="nova-icon" size={24} /> Patient Management
          </h2>
          <p className="nova-card-text">
            Effortlessly manage patient records, appointments, and medical histories.
          </p>
        </div>

        <div className="nova-card">
          <h2 className="nova-card-title">
            <FaCalendarAlt className="nova-icon" size={24} /> Doctor Scheduling
          </h2>
          <p className="nova-card-text">
            Optimize doctor schedules and manage availability for seamless operations.
          </p>
        </div>

        <div className="nova-card">
          <h2 className="nova-card-title">
            <FaFileInvoiceDollar className="nova-icon" size={24} /> Billing & Reports
          </h2>
          <p className="nova-card-text">
            Generate accurate bills, manage payments, and access comprehensive financial reports.
          </p>
        </div>

        <div className="nova-card">
          <h2 className="nova-card-title">
            <FaUserMd className="nova-icon" size={24} /> Our Dedicated Doctors
          </h2>
          <p className="nova-card-text">
            Meet our team of experienced and qualified medical professionals.{" "}
            <Link to="/visionAndTeam-Section">Learn more</Link>.
          </p>
        </div>

        <div className="nova-card">
          <h2 className="nova-card-title">
            <FaServicestack className="nova-icon" size={24} /> Our Services
          </h2>
          <p className="nova-card-text">
            Explore the wide range of medical services and treatments we offer.{" "}
            <Link to="/Service-Cards-Section">View all</Link>.
          </p>
        </div>

        <div className="nova-card">
          <h2 className="nova-card-title">
            <FaPhoneAlt className="nova-icon" size={24} /> Contact Us
          </h2>
          <p className="nova-card-text">
            Have questions or need assistance? Reach out to our support team.{" "}
            <Link to="/contact">Get in touch</Link>.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="nova-about">
        <div className="nova-about-text-container">
          <h2 className="nova-about-title">About NovaCare</h2>
          <p className="nova-about-text">
            NovaCare is a comprehensive Hospital Management System dedicated to enhancing healthcare delivery.
            We focus on creating a seamless experience from patient admission to discharge, ensuring efficiency and accuracy.
          </p>
          <p className="nova-about-text">
            Our user-friendly design, cloud-based accessibility, and robust security features make NovaCare the ideal solution for modern hospitals.
          </p>
        </div>

        <div className="nova-about-image-gallery">
          <img src="/images/novaimg.jpg" alt="Hospital Lobby" />
          <img src="/images/novaimg1.jpg" alt="Doctor and Patient Interaction" />
          <img src="/images/novaimg2.jpg" alt="Advanced Medical Equipment" />
          <img src="/images/novaimg3.jpg" alt="Collaborative Medical Team" />
          <img src="/images/novaimg4.jpg" alt="Medical Team" />
          <img src="/images/novaimg5.jpg" alt="Team Collaboration" />
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="nova-cta">
        <h2 className="nova-cta-title">Ready to Experience NovaCare?</h2>
        <p>Explore all the features and benefits our system has to offer.</p>
        <Link to="/whyChooseUs-Section" className="nova-cta-button">Discover Features</Link>
      </section>
    </div>
  );
};

export default NovaCare;
