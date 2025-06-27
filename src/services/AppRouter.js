import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import AppointmentForm from '../components/AppointmentForm/AppointmentForm';
import AboutUs from '../pages/AboutUs/AboutUs';
import Services from '../pages/Service/Services';
import Laboratory from '../pages/Service/Laboratory/Laboratory';
import DentalSurgery from '../pages/Service/DentalSurgery/DentalSurgery';
import Pulmonary from '../pages/Service/Pulmonary/Pulmonary';
import Contact from '../pages/Contact/Contact';
import Feature from '../pages/Feature/Feature';
import Doctor from '../pages/Doctor/Doctor';
import NovaCare from '../pages/NovaCare/NovaCare';
import Gynecologist from '../pages/Doctor/Gynecologist/Gynecologist';
import GeneralPhysician from '../pages/Doctor/GeneralPhysician/GeneralPhysician';
import Urologist from '../pages/Doctor/Urologist/Urologist';
import Ophthalmologist from '../pages/Doctor/Ophthalmologist/Ophthalmologist';
import AdminLayout from '../pages/Admin/AdminLayout';
import AdminDashboard from '../pages/Admin/AdminDashboard';
import Login from '../components/Login/Login';
import Cardiology from '../pages/Service/Cardiology/Cardiology';
import OrthopedicSurgery from '../pages/Service/OrthopedicSurgery/OrthopedicSurgery';




const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/appointment" element={<AppointmentForm />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/nova-care" element={<NovaCare />} />
      <Route path="/services" element={<Services />} />
      <Route path="/cardiology" element={<Cardiology />} />
      <Route path="/orthopedic-Surgery" element={<OrthopedicSurgery />} />
      <Route path="/pulmonary" element={<Pulmonary/>} />
      <Route path="/laboratory" element={<Laboratory />} />
      <Route path="/dentalSurgery" element={<DentalSurgery />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/feature" element={<Feature />} />
      <Route path="/doctor" element={<Doctor />} />
      <Route path="/gynecologist" element={<Gynecologist />} />
      <Route path="/ophthalmologist" element={<Ophthalmologist />} />
      <Route path="/generalphysician" element={<GeneralPhysician />} />
      <Route path="/urologist" element={<Urologist />} />
      <Route path="/login" element={<Login />} />
      {/* Admin Portal Nested Routes */}
      <Route path="/admin" element={<AdminDashboard />}>
      </Route>
    </Routes>
  );
};

export default AppRouter;
