import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import AppointmentForm from '../pages/AppointmentForm/AppointmentForm';
import AboutUs from '../pages/AboutUs/AboutUs';
import Services from '../pages/Service/Services';
import Contact from '../pages/Contact/Contact';
import Feature from '../pages/Feature/Feature';
import Doctor from '../pages/Doctor/Doctor';
import AdminLayout from '../pages/Admin/AdminLayout';
import AdminDashboard from '../pages/Admin/Dashboard';
import Departments from '../pages/Admin/Departments';
import Doctors from '../pages/Admin/Doctors';
import Staff from '../pages/Admin/Staff';
import Inventory from '../pages/Admin/Inventory';
import Billing from '../pages/Admin/Billing';
import Reports from '../pages/Admin/Reports';
import ProtectedRoute from './ProtectedRoute';
import ProtectedRoutePatient from './ProtectedRoutePatient';
import ProtectedRouteDoctor from './ProtectedRouteDoctor';
import Login from '../pages/Login/Login';
import Patient from '../pages/Patient/Patient';
import DoctorDashboard from '../pages/Doctor/DoctorDashboard';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/appointment" element={<AppointmentForm />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/feature" element={<Feature />} />
      <Route path="/doctor" element={<Doctor />} />
      <Route path="/login" element={<Login />} />
      {/* Admin Portal Nested Routes */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="departments" element={<Departments />} />
        <Route path="doctors" element={<Doctors />} />
        <Route path="staff" element={<Staff />} />
        <Route path="inventory" element={<Inventory />} />
        <Route path="billing" element={<Billing />} />
        <Route path="reports" element={<Reports />} />
      </Route>
      <Route path="/patient" element={
        <ProtectedRoutePatient>
          <Patient />
        </ProtectedRoutePatient>
      } />
      <Route path="/doctor" element={
        <ProtectedRouteDoctor>
          <DoctorDashboard />
        </ProtectedRouteDoctor>
      } />
    </Routes>
  );
};

export default AppRouter;
