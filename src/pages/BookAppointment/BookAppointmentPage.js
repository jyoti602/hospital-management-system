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
            Schedule your visit with ease. Our streamlined booking process ensures you can secure your preferred time quickly and conveniently.
          </p>
          <button className="book-appointment-scroll-button" onClick={handleScrollToForm}>
            Book Now
          </button>
        </div>
      </section>
      <div ref={formRef} className="book-appointment-form-wrapper">
        {/* The BookAppointmentForm component will need its own internal responsiveness */}
        <BookAppointmentForm />
      </div>
    </div>
  );
};

export default BookAppointmentPage;
