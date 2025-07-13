// ✅ src/pages/Contact/ContactUsPage.js

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import './ContactUsPage.css';
import { submitContact } from '../../api/authService';

// ✅ Validation schema using Yup
const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  subject: Yup.string().required('Subject is required'),
  message: Yup.string().required('Message is required'),
});

const ContactUsPage = () => {
  const [successMsg, setSuccessMsg] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm({ resolver: yupResolver(validationSchema) });

  const onSubmit = async (data) => {
    try {
      const response = await submitContact(data);
      if (response.status === 200 || response.status === 201) {
      reset();
      setSuccessMsg(response.data.message)
    } 
    } catch (err) {
      console.error('Contact API error:', err.response?.data || err.message);
      alert('Failed to send message');
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
              <span>info@NovaCare.com</span>
            </div>
          </div>
        </div>

        <div className="contactus-form-col">
          <div className="contactus-form-card">
            <h2 className="contactus-form-title">feedback</h2>
            <form className="contactus-form" onSubmit={handleSubmit(onSubmit)} noValidate>
              <div className="contactus-form-row">
                <div className="contactus-form-group">
                  <label>Name<span>*</span></label>
                  <input type="text" {...register('name')} className={errors.name ? 'error' : ''} />
                  {errors.name && <div className="form-error">{errors.name.message}</div>}
                </div>
                <div className="contactus-form-group">
                  <label>Email<span>*</span></label>
                  <input type="email" {...register('email')} className={errors.email ? 'error' : ''} />
                  {errors.email && <div className="form-error">{errors.email.message}</div>}
                </div>
              </div>

              <div className="contactus-form-group">
                <label>Subject<span>*</span></label>
                <input type="text" {...register('subject')} className={errors.subject ? 'error' : ''} />
                {errors.subject && <div className="form-error">{errors.subject.message}</div>}
              </div>

              <div className="contactus-form-group">
                <label>Message<span>*</span></label>
                <textarea rows={4} {...register('message')} className={errors.message ? 'error' : ''} />
                {errors.message && <div className="form-error">{errors.message.message}</div>}
              </div>

              <button className="contactus-form-btn" type="submit">Send Message</button>
             {successMsg && <div className="form-success">{successMsg}</div>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsPage;
