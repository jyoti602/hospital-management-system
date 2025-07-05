import React from 'react';
import { BrowserRouter, useLocation } from 'react-router-dom';
import AppRouter from './services/AppRouter';
import Navbar from './components/Navbar/Navbar';
import Footer from './parts/Footer/Footer';

function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

function App() {
  const location = useLocation();

  // Check if the path starts with "/admin"
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <>
      {!isAdminRoute && <Navbar />}
      <AppRouter />
      {!isAdminRoute && <Footer />}
    </>
  );
}

export default AppWrapper;
