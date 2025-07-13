import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import './BookAppointmentForm.css';
import { bookAppointments } from '../../api/authService';

const departments = [
  'Radiologist', 'Neurology', 'Orthopedics', 'Pulmonary',
  'Laboratory', 'General Medicine', 'Gynecology', 'Urology', 'Ophthalmology',
];

const schema = Yup.object().shape({
  patient: Yup.string().required('Patient name is required'),
  contact: Yup.string().required('Contact info is required'),
  department: Yup.string().required('Department is required'),
  date: Yup.string().required('Date is required'),
  time: Yup.string().required('Time is required'),
  reason: Yup.string(),
});

const BookAppointmentForm = () => {
  const [successMsg, setSuccessMsg] = useState(false);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      patient: '',
      contact: '',
      department: '',
      date: '',
      time: '',
      reason: '',
    },
  });

  const onSubmit = async (data) => {
    try {
      const response = await bookAppointments(data);
      if (response.status === 200 || response.status === 201) {
        reset();
        setSuccessMsg(response.data.message || 'Appointment booked successfully!');
      }
    } catch (error) {
      console.error('Appointment booking failed:', error);
    }
  };

  
  return (
    <div className="appointment-form-card">
      <h2 className="appointment-form-title">Book Appointment</h2>

      <form className="appointment-form" onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        {/* Patient Name */}
        <div className="appointment-form-group">
          <label>Patient Name <span>*</span></label>
          <Controller
            name="patient"
            control={control}
            render={({ field }) => (
              <input {...field} type="text" placeholder="Enter patient name" className={errors.patient ? 'error' : ''} />
            )}
          />
          {errors.patient && <div className="form-error">{errors.patient.message}</div>}
        </div>

        {/* Contact Info */}
        <div className="appointment-form-group">
          <label>Contact Info <span>*</span></label>
          <Controller
            name="contact"
            control={control}
            render={({ field }) => (
              <input {...field} type="text" placeholder="Email or phone number" className={errors.contact ? 'error' : ''} />
            )}
          />
          {errors.contact && <div className="form-error">{errors.contact.message}</div>}
        </div>

        {/* Department */}
        <div className="appointment-form-group">
          <label>Specialization <span>*</span></label>
          <Controller
            name="department"
            control={control}
            render={({ field }) => (
              <select {...field} className={errors.department ? 'error' : ''}>
                 <option value="">Select Specialization</option>
                      <option>Cardiologist</option>
                      <option>Dermatologist</option>
                      <option>Neurologist</option>
                      <option>Orthopedic</option>
                      <option>Pediatrician</option>
                      <option>Psychiatrist</option>
                      <option>Radiologist</option>
                      <option>ENT Specialist</option>
              </select>
            )}
          />
          {errors.department && <div className="form-error">{errors.department.message}</div>}
        </div>

        {/* Date and Time */}
        <div className="appointment-form-row">
          <div className="appointment-form-group">
            <label>Date <span>*</span></label>
            <Controller
              name="date"
              control={control}
              render={({ field }) => (
                <input {...field} type="date" className={errors.date ? 'error' : ''} />
              )}
            />
            {errors.date && <div className="form-error">{errors.date.message}</div>}
          </div>

          <div className="appointment-form-group">
            <label>Time <span>*</span></label>
            <Controller
              name="time"
              control={control}
              render={({ field }) => (
                <input {...field} type="time" className={errors.time ? 'error' : ''} />
              )}
            />
            {errors.time && <div className="form-error">{errors.time.message}</div>}
          </div>
        </div>

        {/* Reason */}
        <div className="appointment-form-group">
          <label>Reason / Notes</label>
          <Controller
            name="reason"
            control={control}
            render={({ field }) => (
              <textarea {...field} placeholder="Reason for appointment (optional)" rows={3} />
            )}
          />
        </div>

        {/* Submit Button */}
        <button className="appointment-form-btn" type="submit">Book Appointment</button>

        {/* Success Message */}
        {successMsg && <div className="form-success">{successMsg}</div>}
      </form>
    </div>
  );
};

export default BookAppointmentForm;
