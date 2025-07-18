import React, { useEffect, useState } from 'react';
import { getDashboardStats } from '../../api/authService';
import { FaCalendarAlt, FaUserPlus, FaUserMd, FaEnvelopeOpenText } from 'react-icons/fa';
import './Dashboard.css';

const AdminDashboard = () => {
  const [data, setData] = useState({
    appointments: 0,
    newPatients: 0,
    totalDoctors: 0,
    totalContacts: 0
  });

  useEffect(() => {
    getDashboardStats()
      .then(res => setData(res.data))
      .catch(err => console.error(err));
  }, []);

  const cards = [
    {
      title: 'Appointments',
      count: data.appointments,
      icon: <FaCalendarAlt />,
      color: 'blue'
    },
    {
      title: 'New Patients',
      count: data.newPatients,
      icon: <FaUserPlus />,
      color: 'green'
    },
    {
      title: 'Total Doctors',
      count: data.totalDoctors,
      icon: <FaUserMd />,
      color: 'yellow'
    },
    {
      title: 'Contact Queries',
      count: data.totalContacts,
      icon: <FaEnvelopeOpenText />,
      color: 'pink'
    }
  ];

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title"> Dashboard</h2>
      <div className="dashboard-grid">
        {cards.map((card, index) => (
          <div key={index} className={`dashboard-card ${card.color}`}>
            <div className="dashboard-icon">{card.icon}</div>
            <div className="dashboard-content">
              <h2>{card.count}</h2>
              <p>{card.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
