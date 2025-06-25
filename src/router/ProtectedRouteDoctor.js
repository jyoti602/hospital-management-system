import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRouteDoctor = ({ children }) => {
  const isDoctor = localStorage.getItem('isDoctor') === 'true';
  if (!isDoctor) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default ProtectedRouteDoctor; 