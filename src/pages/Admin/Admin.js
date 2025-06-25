import React, { useState } from 'react';
import './Admin.css';

const mockAppointments = [
  {
    id: 1,
    fullName: 'John Doe',
    phone: '9876543210',
    email: 'john@example.com',
    appointmentDateTime: '12-06-2024 10:30 AM',
    department: 'Cardiology',
  },
  {
    id: 2,
    fullName: 'Jane Smith',
    phone: '9123456780',
    email: 'jane@example.com',
    appointmentDateTime: '13-06-2024 02:00 PM',
    department: 'Neurology',
  },
];

const adminProfile = {
  name: 'Admin User',
  email: 'admin@example.com',
  role: 'Administrator',
  avatar: '/images/company_logo.jpg',
};

const Admin = () => {
  const [view, setView] = useState('dashboard');
  const totalPatients = mockAppointments.length;

  const handleLogout = () => {
    localStorage.removeItem('isAdmin');
    window.location.href = '/login';
  };

  return (
    <div className="admin-dashboard admin-theme">
      <aside className="admin-sidebar">
        <div className="admin-profile-mini">
          <img src={adminProfile.avatar} alt="Admin Avatar" className="admin-avatar-mini" />
          <div>
            <div className="admin-mini-name">{adminProfile.name}</div>
            <div className="admin-mini-role">{adminProfile.role}</div>
          </div>
        </div>
        <h2>Admin Panel</h2>
        <ul>
          <li className={view === 'dashboard' ? 'active' : ''} onClick={() => setView('dashboard')}>Dashboard</li>
          <li className={view === 'appointments' ? 'active' : ''} onClick={() => setView('appointments')}>Appointments</li>
          <li className={view === 'profile' ? 'active' : ''} onClick={() => setView('profile')}>Profile</li>
        </ul>
      </aside>
      <main className="admin-main">
        {view === 'dashboard' && (
          <div className="dashboard-summary">
            <h1>Welcome, Admin!</h1>
            <div className="summary-cards">
              <div className="summary-card gradient-card">
                <h2>Total Appointments</h2>
                <p>{mockAppointments.length}</p>
              </div>
              <div className="summary-card gradient-card">
                <h2>Total Patients</h2>
                <p>{totalPatients}</p>
              </div>
            </div>
          </div>
        )}
        {view === 'appointments' && (
          <div className="appointments-list">
            <h1>Appointment Details</h1>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Phone</th>
                  <th>Email</th>
                  <th>Date & Time</th>
                  <th>Department</th>
                </tr>
              </thead>
              <tbody>
                {mockAppointments.map((appt) => (
                  <tr key={appt.id}>
                    <td>{appt.id}</td>
                    <td>{appt.fullName}</td>
                    <td>{appt.phone}</td>
                    <td>{appt.email}</td>
                    <td>{appt.appointmentDateTime}</td>
                    <td>{appt.department}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        {view === 'profile' && (
          <div className="admin-profile-view">
            <div className="admin-profile-card">
              <img src={adminProfile.avatar} alt="Admin Avatar" className="admin-avatar" />
              <h2>{adminProfile.name}</h2>
              <p><strong>Email:</strong> {adminProfile.email}</p>
              <p><strong>Role:</strong> {adminProfile.role}</p>
              <button className="logout-btn" onClick={handleLogout}>Logout</button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Admin; 