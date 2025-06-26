import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRouteDashboard = ({ children }) => {
  const isAdmin = localStorage.getItem('isAdmin') === 'true';
  const isDoctor = localStorage.getItem('isDoctor') === 'true';
  const isPatient = localStorage.getItem('isPatient') === 'true';
  if (!isAdmin && !isDoctor && !isPatient) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default ProtectedRouteDashboard; 