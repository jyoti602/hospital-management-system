import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import "./AdminPanel.css";
import TableComponent from "../../components/Table/TableComponent";
import { getAppointments, getAppointmentsByStatus, updateAppointments } from '../../api/authService';
import { FaSearch, FaFilter, FaEdit, FaPlus, FaTimes } from "react-icons/fa";

const AppointmentDetails = () => {
  const navigate = useNavigate();
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [filterDate] = useState("");

  const [showStatusModal, setShowStatusModal] = useState(false);
  const [selectedAppointmentId, setSelectedAppointmentId] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState("Pending");

  useEffect(() => {
    fetchPatientsDetails();
  }, []);

  const fetchPatientsDetails = async () => {
    try {
      const res = await getAppointmentsByStatus();
      setAppointments(res.data);
    } catch (err) {
      console.error('Fetch error:', err);
      setError("Failed to load appointments.");
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (index) => {
    const appointment = filteredAppointments[index];
    setSelectedAppointmentId(appointment.id);
    setSelectedStatus(appointment.status || "Pending");
    setShowStatusModal(true);
  };

  const handleStatusUpdate = async () => {
    try {
      await updateAppointments({
        id: selectedAppointmentId,
        status: selectedStatus,
      });

      const updatedList = appointments.map(app =>
        app.id === selectedAppointmentId ? { ...app, status: selectedStatus } : app
      );

      setAppointments(updatedList);
      setShowStatusModal(false);
    } catch (err) {
      console.error("Status update failed:", err);
      alert("Failed to update status.");
    }
  };

  const filteredAppointments = appointments.filter(item => {
    const matchesSearch =
      item.patient_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.department_name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment =
      selectedDepartment === "" || item.department_name === selectedDepartment;
    const matchesDate =
      filterDate === "" || item.appointment_date === filterDate;
    return matchesSearch && matchesDepartment && matchesDate;
  });

  const columns = [
    { label: "Patient Name", key: "patient_name" },
    { label: "Contact", key: "contact_info" },
    { label: "Department", key: "department_name" },
    { label: "Date", key: "appointment_date" },
    { label: "Time", key: "appointment_time" },
    { label: "Reason", key: "reason_notes" },
    {
      label: "Status",
      key: "status",
      render: (row) => (
        <span className={`status-badge ${row.status?.toLowerCase() || 'pending'}`}>
          {row.status || 'Pending'}
        </span>
      )
    },
    { label: "Actions", key: "actions" }
  ];

  const dataWithActions = filteredAppointments.map((item, index) => ({
    ...item,
    status: item.status || "Pending",
    actions: (
      <div className="action-btns">
        <button className="edit-btn" onClick={() => handleEdit(index)}>
          <FaEdit />
        </button>
      </div>
    )
  }));

  return (
    <div className="admin-appointment-page">
        <div className="appointment-hero-content">
          <h1>Patient Details</h1>
          <button className="new-appointment-btn" onClick={() => navigate("/book-appointment")}>
            <FaPlus /> Book Appointment
          </button>
        </div>

      <div className="appointment-toolbar">
        <div className="search-box">
          <FaSearch className="icon" />
          <input
            type="text"
            placeholder="Search by patient name or department"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="filter-box">
          <FaFilter className="icon" />
          <select value={selectedDepartment} onChange={(e) => setSelectedDepartment(e.target.value)}>
            <option value="">All Departments</option>
            <option value="Radiologist">Radiologist</option>
            <option value="Neurology">Neurology</option>
            <option value="Orthopedics">Orthopedics</option>
            <option value="Dermatology">Dermatology</option>
            <option value="Pulmonary">Pulmonary</option>
          </select>
        </div>
      </div>

      {loading ? (
        <div>Loading appointments...</div>
      ) : error ? (
        <div className="error-message">{error}</div>
      ) : (
        <div className="table-responsive">
          <TableComponent
            columns={columns}
            data={dataWithActions}
            rowsPerPage={6}
          />
        </div>
      )}

      {/* Status Edit Modal */}
      {showStatusModal && (
        <div className="edit-modal-overlay">
          <div className="edit-modal small-modal">
            <button className="modal-close" onClick={() => setShowStatusModal(false)}>
              <FaTimes />
            </button>
            <h3>Update Appointment Status</h3>
            <div className="form-group">
              <label>Status</label>
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
              >
                <option value="Pending">Pending</option>
                <option value="Confirmed">Confirmed</option>
                <option value="Completed">Completed</option>
                <option value="Cancelled">Cancelled</option>
              </select>
            </div>
            <button className="submit-btn" onClick={handleStatusUpdate}>
              Update
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AppointmentDetails;
