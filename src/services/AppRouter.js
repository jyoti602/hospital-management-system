import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import ContactUsPage from '../pages/Contact/ContactUsPage';
import NovaCare from '../pages/Home/NovaCare';
import AdminDashboard from '../pages/Admin/AdminDashboard';
import Login from '../components/Login/Login';
import Signup from '../components/Signup/Signup';
import BookAppointmentPage from '../pages/BookAppointment/BookAppointmentPage';
import AdminLayout from '../pages/Admin/AdminLayout';
import ProtectedRoute from './ProtectedRoute';
import AppoinmentDetails from '../pages/Admin/AppoinmentDetails';
import DoctorDetails from '../pages/Admin/DoctorDetails';
import Testing from '../pages/Testing/Testing';
import AboutUsSection from '../pages/Home/AboutUsSection';
import ServiceCardsSection from '../pages/Home/ServiceCardsSection';
import TestimonialsSection from '../pages/Home/TestimonialsSection';
import PatientDetails from '../pages/Admin/PatientDetails';
import VisionAndTeamSection from '../pages/Home/VisionAndTeamSection';
import WhyChooseUsSection from '../pages/Home/WhyChooseUsSection';



const AppRouter = () => {
const loginData = JSON.parse(localStorage.getItem('login') || '{}');
const isAdmin = loginData.success === true ;
  return (
    <Routes>
      <Route path="testing" element={<Testing />} />
      
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about-Us-Section" element={<AboutUsSection />} />
      <Route path="/Service-Cards-Section" element={<ServiceCardsSection />} />
      <Route path="/novacare" element={<NovaCare />} />
      <Route path="/testimonials-Section" element={<TestimonialsSection />} />
      <Route path="/contact" element={<ContactUsPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/book-appointment" element={<BookAppointmentPage />} />   
     <Route element={<ProtectedRoute isAllowed={isAdmin} />}>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          {/* <Route path="doctor" element={<Doctor />} /> */}
          <Route path="appointments-details" element={<AppoinmentDetails />} />
          <Route path="doctor-details" element={<DoctorDetails />} />
          <Route path="patient-details" element={< PatientDetails />} />
          <Route path="visionAndTeam-Section" element={< VisionAndTeamSection />} />
          <Route path="whyChooseUs-Section" element={< WhyChooseUsSection/>} />
          {/* Add more protected admin routes here */}
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRouter;
