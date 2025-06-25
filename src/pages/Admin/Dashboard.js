import React from 'react';
import './Dashboard.css';

const mockStats = {
  doctors: 12,
  staff: 25,
  departments: 6,
  patients: 120,
  appointments: 34,
};

const mockActivity = [
  { id: 1, message: 'Dr. Smith added to Cardiology', time: '2 hours ago' },
  { id: 2, message: 'New patient registered: John Doe', time: '3 hours ago' },
  { id: 3, message: 'Inventory updated: Paracetamol restocked', time: '5 hours ago' },
  { id: 4, message: 'Bill generated for patient Jane Roe', time: '6 hours ago' },
];

const AdminDashboard = () => (
  <div className="admin-dashboard-container">
    <h1 className="admin-dashboard-title">Admin Dashboard</h1>
    <div className="admin-dashboard-cards">
      <div className="admin-dashboard-card">
        <h2>{mockStats.doctors}</h2>
        <p>Doctors</p>
      </div>
      <div className="admin-dashboard-card">
        <h2>{mockStats.staff}</h2>
        <p>Staff</p>
      </div>
      <div className="admin-dashboard-card">
        <h2>{mockStats.departments}</h2>
        <p>Departments</p>
      </div>
      <div className="admin-dashboard-card">
        <h2>{mockStats.patients}</h2>
        <p>Patients</p>
      </div>
      <div className="admin-dashboard-card">
        <h2>{mockStats.appointments}</h2>
        <p>Appointments</p>
      </div>
    </div>
    <div className="admin-dashboard-activity">
      <h2>Recent Activity</h2>
      <ul>
        {mockActivity.map(act => (
          <li key={act.id}>
            <strong>{act.message}</strong> <span>({act.time})</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default AdminDashboard; 