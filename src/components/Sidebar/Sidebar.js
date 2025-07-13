import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import{
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
  { path: "/admin/patient-details", label: "Patients", icon: FaUserInjured },
  { path: "/admin/appointments-details", label: "Appointments", icon: FaCalendarAlt },
  { path: "/admin/doctor-details", label: "Doctors", icon: FaUserMd },
  // { path: "/admin/", label: "Messages", icon: FaComments },
  // { path: "/admin/", label: "Inventory", icon: FaBoxes },
  // { path: "/admin/", label: "Settings", icon: FaCog },
];

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path) => location.pathname === path;

  const handleLogout = () => {
    // Remove login info from localStorage
    localStorage.removeItem('login'); // or localStorage.clear() if needed
    // Redirect to login page
    navigate('/login');
  };

  return (
    <aside className="sidebar">
      <nav>
         <div className="hero-logo-row">
          <img src="../../images/company_logo.jpg" height={60} width={200} ></img>
        </div>
        {sidebarItems.map(({ path, label, icon: Icon }) => (
          <Link key={path} to={path} className={isActive(path) ? "active" : ""}>
            <Icon className="sidebar-icon" /> {label}
          </Link>
        ))}
      </nav>
      <button className="logout-btn" onClick={handleLogout}>
        <FaSignOutAlt className="sidebar-icon" /> Logout
      </button>
    </aside>
  );
};

export default Sidebar;
