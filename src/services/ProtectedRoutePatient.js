import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoutePatient = ({ children }) => {
  const isPatient = localStorage.getItem('isPatient') === 'true';
  if (!isPatient) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default ProtectedRoutePatient; 