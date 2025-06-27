import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaTachometerAlt,
  FaUserInjured,
  FaCalendarAlt,
  FaUserMd,
  FaComments,
  FaBoxes,
  FaCog,
  FaSignOutAlt
} from "react-icons/fa";
import "./Sidebar.css";

const Sidebar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <aside className="sidebar">
      <h2>🏥 NovaCare</h2>
      <nav>
        <Link to="/dashboard" className={isActive("/dashboard") ? "active" : ""}>
          <FaTachometerAlt className="sidebar-icon" /> Dashboard
        </Link>
        <Link to="/patients" className={isActive("/patients") ? "active" : ""}>
          <FaUserInjured className="sidebar-icon" /> Patients
        </Link>
        <Link to="/appointments" className={isActive("/appointments") ? "active" : ""}>
          <FaCalendarAlt className="sidebar-icon" /> Appointments
        </Link>
        <Link to="/doctors" className={isActive("/doctors") ? "active" : ""}>
          <FaUserMd className="sidebar-icon" /> Doctors
        </Link>
        <Link to="/messages" className={isActive("/messages") ? "active" : ""}>
          <FaComments className="sidebar-icon" /> Messages
        </Link>
        <Link to="/inventory" className={isActive("/inventory") ? "active" : ""}>
          <FaBoxes className="sidebar-icon" /> Inventory
        </Link>
        <Link to="/settings" className={isActive("/settings") ? "active" : ""}>
          <FaCog className="sidebar-icon" /> Settings
        </Link>
      </nav>
      <button className="logout-btn">
        <FaSignOutAlt className="sidebar-icon" /> Logout
      </button>
    </aside>
  );
};

export default Sidebar;
