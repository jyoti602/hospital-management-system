import React from 'react';
import AdminSidebar from './AdminSidebar';
import { Outlet } from 'react-router-dom';

const AdminLayout = () => (
  <div style={{display:'flex'}}>
    <AdminSidebar />
    <main style={{flex:1,padding:'2rem'}}>
      <Outlet />
    </main>
  </div>
);

export default AdminLayout; 