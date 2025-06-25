import React from 'react';
import CountUp from 'react-countup'; // <-- Import CountUp
import './Home.css';
import AppointmentForm from '../AppointmentForm/AppointmentForm';
import AboutUs from '../AboutUs/AboutUs';
import Services from '../Service/Services';
import Contact from '../Contact/Contact';
import Feature from '../Feature/Feature';
import Doctor from '../Doctor/Doctor';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="slider-section">
        <div className="left-container">
          <h1>Good Health Is The Root Of All Happiness</h1>

          {/* Counter Section */}
          <div className="count-section">
            <div className="child-section">
              <p><CountUp end={10} duration={10} /></p>
              <p>Expert Doctors</p>
            </div>
            <div className="child-section">
              <p><CountUp end={20} duration={10} /></p>
              <p>Medical Staff</p>
            </div>
            <div className="child-section">
              <p><CountUp end={100} duration={10} /></p>
              <p>Total Patients</p>
            </div>
          </div>
        </div>

        <div className="right-container">
          {/* Add image if needed */}
        </div>
      </div>

      {/* Other Sections */}
      <AboutUs />
      <Feature />
      <Services />
      <Doctor />
      <AppointmentForm />
      <Contact />
    </div>
  );
};

export default Home;

