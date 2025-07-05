// src/api/authService.js

import axios from "axios";

const API_BASE_URL = "http://localhost:4000/api/auth";

// Signup API call
export const signupUser = async (userData) => {
  const response = await axios.post(`${API_BASE_URL}/signup`, userData);
  return response;
};

// Signup API call
export const loginUser = async (userData) => {
  const response = await axios.post(`${API_BASE_URL}/login`, userData);
  return response;
};

