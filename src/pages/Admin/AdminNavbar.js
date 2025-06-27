import React from "react";

const AdminNavbar = () => {
  return (
    <div className="admin-navbar">
      <h2>Admin Panel</h2>
      <div className="admin-info">
        <span className="notification-icon">🔔</span>
        <span className="admin-name">Jyoti Bisht</span>
        <img className="admin-avatar" src="https://via.placeholder.com/40" alt="Admin" />
      </div>
    </div>
  );
};

export default AdminNavbar;
