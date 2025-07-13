import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import './DoctorFormModal.css';
import { FaUser, FaVenusMars, FaPhoneAlt, FaEnvelope, FaRupeeSign } from 'react-icons/fa';

const DoctorFormModal = ({
  onClose,
  onSubmit,
  editIndex,
  defaultValues,
  doctorSchema,
  successMessage,
}) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(doctorSchema),
    defaultValues,
  });

  return (
    <div className="modal-overlay">
      <div className="modal">
     <div className="modal-header">
          <div className="modal-title">
            <div className="modal-icon-circle">
              <FaUser className="modal-title-icon" />
            </div>
            <h3>{editIndex !== null ? 'Edit Doctor' : 'Add New Doctor'}</h3>
          </div>
          <button className="close-btn" onClick={onClose}>&times;</button>
        </div>


        <form onSubmit={handleSubmit(onSubmit)} className="doctor-form">
          <div className="form-section">
            <h4>Personal Information</h4>
            <hr />
            <div className="form-grid">
              <div className="form-group">
                <label><FaUser /> Full Name *</label>
                <Controller
                  control={control}
                  name="name"
                  render={({ field }) => <input placeholder="Dr. John Smith" {...field} />}
                />
                <p className="error">{errors.name?.message}</p>
              </div>

              <div className="form-group">
                <label><FaVenusMars /> Gender *</label>
                <Controller
                  control={control}
                  name="gender"
                  render={({ field }) => (
                    <select {...field}>
                      <option value="">Select Gender</option>
                      <option>Male</option>
                      <option>Female</option>
                    </select>
                  )}
                />
                <p className="error">{errors.gender?.message}</p>
              </div>

              <div className="form-group">
                <label><FaPhoneAlt /> Phone Number *</label>
                <Controller
                  control={control}
                  name="phone"
                  render={({ field }) => <input placeholder="+91 98765 43210" {...field} />}
                />
                <p className="error">{errors.phone?.message}</p>
              </div>

              <div className="form-group">
                <label><FaEnvelope /> Email Address *</label>
                <Controller
                  control={control}
                  name="email"
                  render={({ field }) => <input placeholder="doctor@hospital.com" {...field} />}
                />
                <p className="error">{errors.email?.message}</p>
              </div>
            </div>
          </div>

          <div className="form-section">
            <h4>Professional Information</h4>
            <hr />
            <div className="form-grid">
              <div className="form-group">
                <label>Specialization *</label>
                <Controller
                  control={control}
                  name="specialization"
                  render={({ field }) => (
                    <select {...field}>
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
                <p className="error">{errors.specialization?.message}</p>
              </div>

              <div className="form-group">
                <label>Qualification *</label>
                <Controller
                  control={control}
                  name="qualification"
                  render={({ field }) => (
                    <select {...field}>
                      <option value="">Select Qualification</option>
                      <option>MBBS</option>
                      <option>MD</option>
                      <option>MS</option>
                      <option>DM</option>
                      <option>MCh</option>
                      <option>BAMS</option>
                      <option>BHMS</option>
                    </select>
                  )}
                />
                <p className="error">{errors.qualification?.message}</p>
              </div>

              <div className="form-group">
                <label>Experience *</label>
                <Controller
                  control={control}
                  name="experience"
                  render={({ field }) => (
                    <select {...field}>
                      <option value="">Select Experience</option>
                      <option>1 Year</option>
                      <option>2 Years</option>
                      <option>3 Years</option>
                      <option>5 Years</option>
                      <option>10+ Years</option>
                    </select>
                  )}
                />
                <p className="error">{errors.experience?.message}</p>
              </div>

              <div className="form-group">
                <label><FaRupeeSign /> Consultation Fee *</label>
                <Controller
                  control={control}
                  name="consultationFee"
                  render={({ field }) => <input placeholder="e.g. 500" {...field} />}
                />
                <p className="error">{errors.consultationFee?.message}</p>
              </div>
            </div>
          </div>

          <div className="form-group">
            <label>Address *</label>
            <Controller
              control={control}
              name="address"
              render={({ field }) => <textarea placeholder="Clinic/Chamber Address" {...field}></textarea>}
            />
            <p className="error">{errors.address?.message}</p>
          </div>

          <div className="modal-actions">
            <button type="button" className="cancel-btn" onClick={() => reset()}>Reset</button>
            <button type="submit" className="submit-btn">{editIndex !== null ? 'Update' : 'Add Doctor'}</button>
          </div>

          {successMessage && <div className="success-message-popup">{successMessage}</div>}
        </form>
      </div>
    </div>
    
  );
};

export default DoctorFormModal;