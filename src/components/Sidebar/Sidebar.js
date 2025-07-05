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

// Sidebar item configuration
const sidebarItems = [
  { path: "/admin", label: "Dashboard", icon: FaTachometerAlt },
  { path: "/admin/patients", label: "Patients", icon: FaUserInjured },
  { path: "/appointments", label: "Appointments", icon: FaCalendarAlt },
  { path: "/admin/doctor", label: "Doctors", icon: FaUserMd },
  { path: "/messages", label: "Messages", icon: FaComments },
  { path: "/inventory", label: "Inventory", icon: FaBoxes },
  { path: "/settings", label: "Settings", icon: FaCog },
];

const Sidebar = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <aside className="sidebar">
      <nav>
        {sidebarItems.map(({ path, label, icon: Icon }) => (
          <Link key={path} to={path} className={isActive(path) ? "active" : ""}>
            <Icon className="sidebar-icon" /> {label}
          </Link>
        ))}
      </nav>
      <button className="logout-btn">
        <FaSignOutAlt className="sidebar-icon" /> Logout
      </button>
    </aside>
  );
};

export default Sidebar;
