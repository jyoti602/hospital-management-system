import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import './Contact.css'; // NEW CSS file (separate from AppointmentForm.css)

// Yup validation schema
const schema = yup.object().shape({
  fullName: yup.string().required('Full name is required'),
  email: yup.string().email('Invalid email address').required('Email is required'),
  phone: yup.string().matches(/^[0-9]{10}$/, 'Enter 10-digit number'),
  subject: yup.string().required('Subject is required'),
  message: yup.string().required('Message is required'),
});

const Contact = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log('Contact Form Data:', data);
    alert('Message sent successfully!');
    reset();
  };

  return (
    <div className="form-container">
      <h2>Have Any Query? Please Contact Us!</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Full Name + Email */}
        <div className="form-row">
          <div className="form-group">
            <label>Full Name</label>
            <Controller
              name="fullName"
              control={control}
              render={({ field }) => (
                <input {...field} placeholder="Enter your full name" />
              )}
            />
            {errors.fullName && <p className="error">{errors.fullName.message}</p>}
          </div>

          <div className="form-group">
            <label>Email</label>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <input {...field} placeholder="Enter your email" />
              )}
            />
            {errors.email && <p className="error">{errors.email.message}</p>}
          </div>
        </div>

        {/* Phone + Subject */}
        <div className="form-row">
          <div className="form-group">
            <label>Phone Number</label>
            <Controller
              name="phone"
              control={control}
              render={({ field }) => (
                <input {...field} placeholder="Optional phone number" />
              )}
            />
            {errors.phone && <p className="error">{errors.phone.message}</p>}
          </div>

          <div className="form-group">
            <label>Subject</label>
            <Controller
              name="subject"
              control={control}
              render={({ field }) => (
                <input {...field} placeholder="Subject of your message" />
              )}
            />
            {errors.subject && <p className="error">{errors.subject.message}</p>}
          </div>
        </div>

        {/* Message */}
        <div className="form-group full">
          <label>Message</label>
          <Controller
            name="message"
            control={control}
            render={({ field }) => (
              <textarea {...field} placeholder="Write your message..." rows={4} />
            )}
          />
          {errors.message && <p className="error">{errors.message.message}</p>}
        </div>

        {/* Submit */}
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
