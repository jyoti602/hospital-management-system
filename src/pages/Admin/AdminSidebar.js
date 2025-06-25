import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './AdminSidebar.css';

const AdminSidebar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('isAdmin');
    navigate('/login');
  };

  return (
    <aside className="admin-sidebar">
      <div className="sidebar-logo">
        <img src="/images/company_logo.jpg" alt="Logo" />
        <span>MediCare Admin</span>
      </div>
      <div className="sidebar-menu">
        <ul>
          <li><NavLink to="/admin/dashboard" data-icon="🏠">Dashboard</NavLink></li>
          <li><NavLink to="/admin/departments" data-icon="🏥">Manage Departments</NavLink></li>
          <li><NavLink to="/admin/doctors" data-icon="👨‍⚕️">Manage Doctors</NavLink></li>
          <li><NavLink to="/admin/staff" data-icon="🧑‍💼">Manage Staff</NavLink></li>
          <li><NavLink to="/admin/inventory" data-icon="📦">Manage Inventory</NavLink></li>
          <li><NavLink to="/admin/billing" data-icon="💳">Manage Billing</NavLink></li>
          <li><NavLink to="/admin/reports" data-icon="📊">View Reports</NavLink></li>
        </ul>
      </div>
      <button className="admin-logout-btn" onClick={handleLogout}>
        <span role="img" aria-label="logout" style={{marginRight:'0.5rem'}}>🚪</span> Logout
      </button>
    </aside>
  );
};

export default AdminSidebar; 