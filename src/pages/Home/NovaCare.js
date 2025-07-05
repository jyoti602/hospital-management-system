import React from "react";
import "./NovaCare.css";
// Importing relevant icons from Font Awesome
import { FaHospital, FaUsers, FaCalendarAlt, FaFileInvoiceDollar, FaUserMd, FaServicestack, FaPhoneAlt, FaCogs } from "react-icons/fa";

const NovaCare = () => {
    return (
        <div className="nova-container">
            <header className="nova-header">
                <div className="nova-header-content">
                    {/* Main title with a hospital icon */}
                    <FaHospital className="nova-icon" size={36} />
                    <h1 className="nova-title">NovaCare Hospital System</h1>
                </div>
                <p className="nova-subtitle">
                    Your partner for efficient and modern hospital management.
                </p>
            </header>

            <section className="nova-features">
                {/* Feature Card: Patient Management */}
                <div className="nova-card">
                    <h2 className="nova-card-title"><FaUsers className="nova-icon" size={24} /> Patient Management</h2>
                    <p className="nova-card-text">
                        Effortlessly manage patient records, appointments, and medical histories.
                    </p>
                </div>

                {/* Feature Card: Doctor Scheduling */}
                <div className="nova-card">
                    <h2 className="nova-card-title"><FaCalendarAlt className="nova-icon" size={24} /> Doctor Scheduling</h2>
                    <p className="nova-card-text">
                        Optimize doctor schedules and manage availability for seamless operations.
                    </p>
                </div>

                {/* Feature Card: Billing & Reports */}
                <div className="nova-card">
                    <h2 className="nova-card-title"><FaFileInvoiceDollar className="nova-icon" size={24} /> Billing & Reports</h2>
                    <p className="nova-card-text">
                        Generate accurate bills, manage payments, and access comprehensive financial reports.
                    </p>
                </div>

                {/* Feature Card: Our Dedicated Doctors (linking to another part of your site) */}
                <div className="nova-card">
                    <h2 className="nova-card-title"><FaUserMd className="nova-icon" size={24} /> Our Dedicated Doctors</h2>
                    <p className="nova-card-text">
                        Meet our team of experienced and qualified medical professionals. <a href="/doctors">Learn more</a>.
                    </p>
                </div>

                {/* Feature Card: Our Services (linking to another part of your site) */}
                <div className="nova-card">
                    <h2 className="nova-card-title"><FaServicestack className="nova-icon" size={24} /> Our Services</h2>
                    <p className="nova-card-text">
                        Explore the wide range of medical services and treatments we offer. <a href="/services">View all</a>.
                    </p>
                </div>

                {/* Feature Card: Contact Us (linking to another part of your site) */}
                <div className="nova-card">
                    <h2 className="nova-card-title"><FaPhoneAlt className="nova-icon" size={24} /> Contact Us</h2>
                    <p className="nova-card-text">
                        Have questions or need assistance? Reach out to our support team. <a href="/contact">Get in touch</a>.
                    </p>
                </div>
            </section>

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
                {/* Image gallery for the About section */}
                <div className="nova-about-image-gallery">
                    <img
                        src="../../../images/novaimg.jpg"
                        alt="Hospital Lobby"
                    />
                    <img
                        src="../../../images/novaimg1.jpg"
                        alt="Doctor and Patient Interaction"
                    />
                    <img
                        src="../../../images/novaimg2.jpg"
                        alt="Advanced Medical Equipment"
                    />
                    <img
                        src="../../../images/novaimg3.jpg"
                        alt="Collaborative Medical Team"
                    />
                    <img
                        src="../../../images/novaimg4.jpg"
                        alt="Collaborative Medical Team"
                    />
                    <img
                        src="../../../images/novaimg5.jpg"
                        alt="Collaborative Medical Team"
                    />
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="nova-cta">
                <h2 className="nova-cta-title">Ready to Experience NovaCare?</h2>
                <p>Explore all the features and benefits our system has to offer.</p>
                <a href="/feature" className="nova-cta-button">Discover Features</a>
            </section>
        </div>
    );
};

export default NovaCare;