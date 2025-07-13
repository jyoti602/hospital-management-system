// src/api/authService.js
import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;


// ======================== AUTH ========================
export const signupUser = async (userData) => {
  return await axios.post(`${API_BASE_URL}/auth/signup`, userData);
};

export const loginUser = async (userData) => {
  return await axios.post(`${API_BASE_URL}/auth/login`, userData);
};

// ======================== APPOINTMENTS ========================
export const bookAppointments = async (data) => {
  return await axios.post(`${API_BASE_URL}/appointments`, data);
};

// Get appointments by status (Confirmed or Completed)
export const getAppointmentsByStatus = async (status) => {
  const response = await axios.get(`${API_BASE_URL}/appointments/patient-details`);
  return response;
};

export const getAppointments = async () => {
  return await axios.get(`${API_BASE_URL}/appointments/details`);
};

export const addAppointments = async (data) => {
  return await axios.post(`${API_BASE_URL}/appointments`, data);
};

export const updateAppointments = async (data) => {
  // expects: { id: 123, status: 'Confirmed' }
  return await axios.put(`${API_BASE_URL}/appointments/${data.id}`, {
    status: data.status
  });
};

export const deleteAppointments = async (id) => {
  return await axios.delete(`${API_BASE_URL}/appointments/${id}`);
};

// ======================== CONTACT ========================
export const submitContact = async (data) => {
  return await axios.post(`${API_BASE_URL}/contact`, data);
};

export const getTestimonials = async () => {
  return await axios.get(`${API_BASE_URL}/contact/testimonials`);
};

// ======================== DOCTOR ========================
export const getdoctor = async () => {
  return await axios.get(`${API_BASE_URL}/doctor/details`);
};

export const addDoctor = async (data) => {
  return await axios.post(`${API_BASE_URL}/doctor`, data);
};

export const updateDoctor = async (id, data) => {
  return await axios.put(`${API_BASE_URL}/doctor/${id}`, data);
};

export const deleteDoctor = async (id) => {
  return await axios.delete(`${API_BASE_URL}/doctor/${id}`);
};


