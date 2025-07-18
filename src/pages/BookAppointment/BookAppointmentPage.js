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
