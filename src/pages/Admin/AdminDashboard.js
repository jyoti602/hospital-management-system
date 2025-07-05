import { useNavigate } from "react-router-dom";
import "./AdminPanel.css"
import TableComponent from "../../components/Table/TableComponent";

const AdminDashboardPage = () => {
    const navigate = useNavigate();
  const appointments = [
    { time: "9:30 AM", date: "05/12/2022", name: "Elizabeth Polson", initials: "EP", age: 32, doctor: "Dr. John" },
    { time: "9:30 AM", date: "05/12/2022", name: "John David", initials: "JD", age: 28, doctor: "Dr. Joel" },
    { time: "10:30 AM", date: "05/12/2022", name: "Krishav Rajan", initials: "KR", age: 24, doctor: "Dr. Joel" },
    { time: "11:00 AM", date: "05/12/2022", name: "Sumarth Tinson", initials: "ST", age: 26, doctor: "Dr. John" },
    { time: "11:30 AM", date: "05/12/2022", name: "EG Subramani", initials: "EG", age: 77, doctor: "Dr. John" },
    { time: "12:00 PM", date: "05/12/2022", name: "Ranjan Maari", initials: "RM", age: 77, doctor: "Dr. John" },
      { time: "11:00 AM", date: "05/12/2022", name: "Phillipie Gopal", initials: "PG", age: 55, doctor: "Dr. John" },
     { time: "9:30 AM", date: "05/12/2022", name: "Elizabeth Polson", initials: "EP", age: 32, doctor: "Dr. John" },
    { time: "9:30 AM", date: "05/12/2022", name: "John David", initials: "JD", age: 28, doctor: "Dr. Joel" },
    { time: "10:30 AM", date: "05/12/2022", name: "Krishav Rajan", initials: "KR", age: 24, doctor: "Dr. Joel" },
    { time: "11:00 AM", date: "05/12/2022", name: "Sumarth Tinson", initials: "ST", age: 26, doctor: "Dr. John" },
    { time: "11:30 AM", date: "05/12/2022", name: "EG Subramani", initials: "EG", age: 77, doctor: "Dr. John" },
    { time: "12:00 PM", date: "05/12/2022", name: "Ranjan Maari", initials: "RM", age: 77, doctor: "Dr. John" },
    { time: "11:00 AM", date: "05/12/2022", name: "Phillipie Gopal", initials: "PG", age: 55, doctor: "Dr. John" },
  ];

  return (
        <div className="admin-appointment-section">
          <div className="appointment-header">
            <div className="tabs">
              <button className="tab active">NEW APPOINTMENTS</button>
              <button className="tab">COMPLETED APPOINTMENTS</button>
            </div>
            <button className="new-appointment-btn" onClick={() => navigate("/appointment")}>+ New Appointment</button>
          </div>
          <div className="filters">
            <div className="search-box">
              <input type="text" placeholder="Search" />
            </div>
          </div>

            <TableComponent
            columns={["Time", "Date", "Name", "Age", "Doctor"]}
            data={appointments}
            rowsPerPage={4}
            />
        </div>
  );
};

export default AdminDashboardPage;
