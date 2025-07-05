import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import './ContactUsPage.css';

const ContactUsPage = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const validate = () => {
    let newErrors = {};
    if (!form.name) newErrors.name = 'Name is required';
    if (!form.email) newErrors.email = 'Email is required';
    if (!form.subject) newErrors.subject = 'Subject is required';
    if (!form.message) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitted(false);
    } else {
      setErrors({});
      setSubmitted(true);
      // Here you can handle the form data (e.g., send to backend)
    }
  };

  return (
    <section className="contactus-section">
      <div className="contactus-container">
        <div className="contactus-info-col">
          <h2 className="contactus-title">Contact Information</h2>
          <div className="contactus-info-list">
            <div className="contactus-info-item">
              <span className="contactus-info-icon"><FaMapMarkerAlt /></span>
              <span>123 Main Street, City, Country</span>
            </div>
            <div className="contactus-info-item">
              <span className="contactus-info-icon"><FaPhoneAlt /></span>
              <span>+1 234 567 890</span>
            </div>
            <div className="contactus-info-item">
              <span className="contactus-info-icon"><FaEnvelope /></span>
              <span>info@medico.com</span>
            </div>
          </div>
        </div>
        <div className="contactus-form-col">
          <div className="contactus-form-card">
            <h2 className="contactus-form-title">Contact Us</h2>
            <form className="contactus-form" onSubmit={handleSubmit} autoComplete="off">
              <div className="contactus-form-row">
                <div className="contactus-form-group">
                  <label>Name<span>*</span></label>
                  <input type="text" name="name" value={form.name} onChange={handleChange} className={errors.name ? 'error' : ''} />
                  {errors.name && <div className="form-error">{errors.name}</div>}
                </div>
                <div className="contactus-form-group">
                  <label>Email<span>*</span></label>
                  <input type="email" name="email" value={form.email} onChange={handleChange} className={errors.email ? 'error' : ''} />
                  {errors.email && <div className="form-error">{errors.email}</div>}
                </div>
              </div>
              <div className="contactus-form-group">
                <label>Subject<span>*</span></label>
                <input type="text" name="subject" value={form.subject} onChange={handleChange} className={errors.subject ? 'error' : ''} />
                {errors.subject && <div className="form-error">{errors.subject}</div>}
              </div>
              <div className="contactus-form-group">
                <label>Message<span>*</span></label>
                <textarea name="message" value={form.message} onChange={handleChange} rows={4} className={errors.message ? 'error' : ''} />
                {errors.message && <div className="form-error">{errors.message}</div>}
              </div>
              <button className="contactus-form-btn" type="submit">Send Message</button>
              {submitted && <div className="form-success">Message sent successfully!</div>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsPage; 