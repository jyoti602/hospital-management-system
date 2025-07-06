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

const AppRouter = () => {
const loginData = JSON.parse(localStorage.getItem('login') || '{}');
const isAdmin = loginData.success === true ;
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/nova-care" element={<NovaCare />} />
      <Route path="/contact" element={<ContactUsPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
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
