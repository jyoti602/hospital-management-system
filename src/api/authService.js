// src/api/authService.js

import axios from "axios";

const API_BASE_URL = "http://localhost:4000/api";

// Signup API call
export const signupUser = async (userData) => {
  const response = await axios.post(`${API_BASE_URL}/auth/signup`, userData);
  return response;
};

// Signup API call
export const loginUser = async (userData) => {
  const response = await axios.post(`${API_BASE_URL}/auth/login`, userData);
  return response;
};

//appointments api call
export const bookAppointments = async (data) => {
  const response = await axios.post(`${API_BASE_URL}/appointments`, data);
  return response;
}
