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
import Login from '../components/Login/Login';

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
      </Route>
    </Routes>
  );
};

export default AppRouter;
