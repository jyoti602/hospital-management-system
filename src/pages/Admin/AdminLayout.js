import React from 'react';
import { Outlet } from 'react-router-dom';

const AdminLayout = () => (
  <div style={{display:'flex'}}>
    <main style={{flex:1,padding:'2rem'}}>
      <Outlet />
    </main>
  </div>
);

export default AdminLayout; 