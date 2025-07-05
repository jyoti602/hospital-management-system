import React, { useRef } from 'react';
import './BookAppointmentPage.css';
import BookAppointmentForm from './BookAppointmentForm';

const BookAppointmentPage = () => {
  const formRef = useRef(null);

  const handleScrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="book-appointment-page">
      <section className="book-appointment-hero">
        <div className="book-appointment-hero-content">
          <h1 className="book-appointment-hero-title">Book Your Appointment</h1>
          <p className="book-appointment-hero-subtitle">
            Schedule your visit with our expert doctors. Fast, easy, and personalized care for you and your family.
          </p>
          <button className="book-appointment-hero-btn" onClick={handleScrollToForm}>
            Book Appointment
          </button>
        </div>
      </section>
      <div ref={formRef} className="book-appointment-form-wrapper">
        <BookAppointmentForm />
      </div>
    </div>
  );
};

export default BookAppointmentPage; 