import React, { useEffect, useState } from 'react';
import { BrowserRouter, useLocation } from 'react-router-dom';
import AppRouter from './services/AppRouter';
import Navbar from './components/Navbar/Navbar';
import Footer from './parts/Footer/Footer';


function App() {
  return (
    <BrowserRouter>
      <Navbar /> 
      <AppRouter />
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
