import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import './BookAppointmentForm.css';

const departments = [
  'Cardiology', 'Neurology', 'Orthopedics', 'Pulmonary',
  'Laboratory', 'General Medicine', 'Gynecology', 'Urology', 'Ophthalmology',
];

const doctors = [
  'Dr. John Smith', 'Dr. Emily Brown', 'Dr. Michael Lee',
  'Dr. Sarah Johnson', 'Dr. David Kim',
];

// ✅ Validation Schema
const schema = Yup.object().shape({
  patient: Yup.string().required('Patient name is required'),
  contact: Yup.string().required('Contact info is required'),
  department: Yup.string().required('Department is required'),
  doctor: Yup.string().required('Doctor is required'),
  date: Yup.string().required('Date is required'),
  time: Yup.string().required('Time is required'),
  reason: Yup.string(), // optional
});

const BookAppointmentForm = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      patient: '',
      contact: '',
      department: '',
      doctor: '',
      date: '',
      time: '',
      reason: '',
    },
  });

  const onSubmit = (data) => {
    console.log('Form Data:', data);
    reset(); // reset form
  };

  return (
    <div className="appointment-form-card">
      <h2 className="appointment-form-title">Book Appointment</h2>
      <form className="appointment-form" onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        {/* Patient Name */}
        <div className="appointment-form-group">
          <label>Patient Name<span>*</span></label>
          <Controller
            name="patient"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type="text"
                placeholder="Enter patient name"
                className={errors.patient ? 'error' : ''}
              />
            )}
          />
          {errors.patient && <div className="form-error">{errors.patient.message}</div>}
        </div>

        {/* Contact Info */}
        <div className="appointment-form-group">
          <label>Contact Info<span>*</span></label>
          <Controller
            name="contact"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type="text"
                placeholder="Email or phone number"
                className={errors.contact ? 'error' : ''}
              />
            )}
          />
          {errors.contact && <div className="form-error">{errors.contact.message}</div>}
        </div>

        {/* Department */}
        <div className="appointment-form-group">
          <label>Department<span>*</span></label>
          <Controller
            name="department"
            control={control}
            render={({ field }) => (
              <select {...field} className={errors.department ? 'error' : ''}>
                <option value="">Select department</option>
                {departments.map((dept) => (
                  <option key={dept} value={dept}>{dept}</option>
                ))}
              </select>
            )}
          />
          {errors.department && <div className="form-error">{errors.department.message}</div>}
        </div>

        {/* Doctor */}
        <div className="appointment-form-group">
          <label>Doctor<span>*</span></label>
          <Controller
            name="doctor"
            control={control}
            render={({ field }) => (
              <select {...field} className={errors.doctor ? 'error' : ''}>
                <option value="">Select doctor</option>
                {doctors.map((doc) => (
                  <option key={doc} value={doc}>{doc}</option>
                ))}
              </select>
            )}
          />
          {errors.doctor && <div className="form-error">{errors.doctor.message}</div>}
        </div>

        {/* Date & Time */}
        <div className="appointment-form-row">
          <div className="appointment-form-group">
            <label>Date<span>*</span></label>
            <Controller
              name="date"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="date"
                  className={errors.date ? 'error' : ''}
                />
              )}
            />
            {errors.date && <div className="form-error">{errors.date.message}</div>}
          </div>
          <div className="appointment-form-group">
            <label>Time<span>*</span></label>
            <Controller
              name="time"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="time"
                  className={errors.time ? 'error' : ''}
                />
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
              <textarea
                {...field}
                placeholder="Reason for appointment (optional)"
                rows={3}
              />
            )}
          />
        </div>

        {/* Submit */}
        <button className="appointment-form-btn" type="submit">Book Appointment</button>

        {/* Success message */}
        {isSubmitSuccessful && (
          <div className="form-success">Appointment booked successfully!</div>
        )}
      </form>
    </div>
  );
};

export default BookAppointmentForm;
