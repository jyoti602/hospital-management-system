import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import ContactUsPage from '../pages/Contact/ContactUsPage';
import NovaCare from '../pages/Home/NovaCare';
import AdminDashboard from '../pages/Admin/AdminDashboard';
import LoginPage from '../pages/Login/LoginPage';
import SignupPage from '../pages/Signup/SignupPage';
import BookAppointmentPage from '../pages/BookAppointment/BookAppointmentPage';
import AdminLayout from '../pages/Admin/AdminLayout';
import ProtectedRoute from './ProtectedRoute';

const AppRouter = () => {
  const isAdmin = localStorage.getItem('isAdmin') === 'true'; // Or get from auth context
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/nova-care" element={<NovaCare />} />
      <Route path="/contact" element={<ContactUsPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/book-appointment" element={<BookAppointmentPage />} />   
     <Route element={<ProtectedRoute isAllowed={isAdmin} />}>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          {/* <Route path="doctor" element={<Doctor />} />
          <Route path="patients" element={<Patients />} /> */}
          {/* Add more protected admin routes here */}
        </Route>
      </Route>
      
    </Routes>
  );
};

export default AppRouter;
