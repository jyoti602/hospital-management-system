import React, { useEffect, useState } from 'react';
import { BrowserRouter, useLocation } from 'react-router-dom';
import AppRouter from './services/AppRouter';
import Navbar from './components/Navbar/Navbar';
import Footer from './parts/Footer/Footer';

const PUBLIC_ROUTES = [
  '/', '/home', '/about-us', '/services', '/contact', '/feature', '/appointment', '/login'
];

function AppContent() {
  const location = useLocation();
  const isPublic = PUBLIC_ROUTES.includes(location.pathname);

  return (
    <>
      {isPublic && <Navbar />}
      <AppRouter />
      {isPublic && <Footer/>}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
