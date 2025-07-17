import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  FaTachometerAlt,
  FaUserInjured,
  FaCalendarAlt,
  FaUserMd,
  FaComments,
  FaBoxes,
  FaCog,
  FaSignOutAlt,
  FaBars,
  FaTimes
} from "react-icons/fa";
import "./Sidebar.css";

const sidebarItems = [
  { path: "/admin", label: "Dashboard", icon: FaTachometerAlt },
  { path: "/admin/patient-details", label: "Patients", icon: FaUserInjured },
  { path: "/admin/appointments-details", label: "Appointments", icon: FaCalendarAlt },
  { path: "/admin/doctor-details", label: "Doctors", icon: FaUserMd },
];

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const isActive = (path) => location.pathname === path;

  const handleLogout = () => {
    localStorage.removeItem('login');
    navigate('/login');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Mobile header */}
      <div className="mobile-header">
        <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Sidebar */}
      <aside className={`sidebar ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
        <nav>
          <div className="hero-logo-row">
            <a href="/">
              <img src="/images/company_logo.jpg" alt="Company Logo" height={60} width={200} />
            </a>
          </div>

          {sidebarItems.map(({ path, label, icon: Icon }) => (
            <Link 
              key={path} 
              to={path} 
              className={isActive(path) ? "active" : ""}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Icon className="sidebar-icon" /> <span className="menu-label">{label}</span>
            </Link>
          ))}
        </nav>
        <button className="logout-btn" onClick={handleLogout}>
          <FaSignOutAlt className="sidebar-icon" /> <span className="menu-label">Logout</span>
        </button>
      </aside>
    </>
  );
};

export default Sidebar;