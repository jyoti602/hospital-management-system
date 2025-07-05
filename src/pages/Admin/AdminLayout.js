// src/layouts/AdminLayout.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../../components/Sidebar/Sidebar';
import AdminNavbar from './AdminNavbar';

const AdminLayout = () => {
  return (
      <div className="admin-container">
          <Sidebar />
          <div className="main-panel">
              <AdminNavbar />
               <div className="admin-content">
        <Outlet /> {/* This will render the matched child route */}
      </div>
            </div>
          
     
    </div>
  );
};

export default AdminLayout;
