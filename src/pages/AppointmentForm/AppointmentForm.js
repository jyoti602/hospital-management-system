import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import 'react-datepicker/dist/react-datepicker.css';
import './AppointmentForm.css';

// Validation schema using Yup
const schema = yup.object().shape({
  fullName: yup.string().required('Full name is required'),
  phone: yup
    .string()
    .required('Phone is required')
    .matches(/^[0-9]{10}$/, 'Enter 10-digit number'),
  email: yup
    .string()
    .email('Invalid email address')
    .required('Email is required'),
  appointmentDateTime: yup
    .date()
    .typeError('Appointment date & time is required')
    .required('Appointment date & time is required'),
  department: yup.string().required('Please select a department'),
});

const AppointmentForm = () => {
const {
  handleSubmit,
  control,
  formState: { errors },
} = useForm({
  resolver: yupResolver(schema),
  defaultValues: {
    phone: '+91',
  },    
});

  const onSubmit = (data) => {
    const formattedDate = data.appointmentDateTime.toLocaleString('en-IN', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    });

    console.log('Appointment Data:', {
      ...data,
      appointmentDateTime: formattedDate,
    });

    alert('Appointment booked on: ' + formattedDate);
  };

  return (
    <div className="form-container">
      <h2>Book Appointment Now</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Full Name + Phone */}
        <div className="form-row">
          <div className="form-group">
            <label>Full Name</label>
            <Controller
              name="fullName"
              control={control}
              render={({ field }) => (
                <input {...field} placeholder="Enter your name" />
              )}
            />
            {errors.fullName && <p className="error">{errors.fullName.message}</p>}
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <Controller
              name="phone"
              control={control}
              render={({ field }) => (
                <input {...field} placeholder="Enter phone number" />
              )}
            />
            {errors.phone && <p className="error">{errors.phone.message}</p>}
          </div>
        </div>

        {/* Email + DateTime */}
        <div className="form-row">
          <div className="form-group">
            <label>Email</label>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <input {...field} type="email" placeholder="Enter your email" />
              )}
            />
            {errors.email && <p className="error">{errors.email.message}</p>}
          </div>

          <div className="form-group">
            <label>Appointment Date & Time</label>
            <Controller
              name="appointmentDateTime"
              control={control}
              render={({ field }) => (
                <DatePicker
                  {...field}
                  selected={field.value}
                  onChange={field.onChange}
                  showTimeSelect
                  timeFormat="h:mm aa"
                  timeIntervals={15}
                  dateFormat="dd-MM-yyyy h:mm aa"
                  placeholderText="Select date and time"
                  className="date-picker"
                  minDate={new Date()} // optional: only future dates
                />
              )}
            />
            {errors.appointmentDateTime && (
              <p className="error">{errors.appointmentDateTime.message}</p>
            )}
          </div>
        </div>

        {/* Department */}
        <div className="form-group">
          <label>Department</label>
          <Controller
            name="department"
            control={control}
            render={({ field }) => (
              <select {...field}>
                <option value="">Select Department</option>
                <option value="cardiology">Cardiology</option>
                <option value="neurology">Neurology</option>
                <option value="orthopedics">Orthopedics</option>
                <option value="general">General Medicine</option>
              </select>
            )}
          />
          {errors.department && (
            <p className="error">{errors.department.message}</p>
          )}
        </div>

        {/* Submit */}
        <button type="submit">Book Appointment</button>
      </form>
    </div>
  );
};

export default AppointmentForm;
