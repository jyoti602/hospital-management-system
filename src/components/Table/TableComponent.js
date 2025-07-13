import React, { useState } from "react";
import './TableComponent.css';

const TableComponent = ({ columns = [], data = [], rowsPerPage = 5 }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const currentData = data.slice(startIndex, startIndex + rowsPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // ✅ Format date
  const formatDate = (dateStr) => {
    if (!dateStr) return "-";
    const date = new Date(dateStr);
    return date.toLocaleDateString(); // e.g. 7/6/2025
  };

  // ✅ Format time (HH:MM from "20:55:00")
  const formatTime = (timeStr) => {
    if (!timeStr) return "-";
    const [hour, minute] = timeStr.split(":");
    return `${hour}:${minute}`;
  };

  return (
    <div>
      <table className="custom-table">
        <thead>
          <tr>
            {columns.map((col, idx) => (
              <th key={idx}>{col.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentData.length === 0 ? (
            <tr>
              <td colSpan={columns.length}>No Data Available</td>
            </tr>
          ) : (
            currentData.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {columns.map((col, colIndex) => {
                  const value = row[col.key];
                  let displayValue = value;

                  // Handle special formatting
                  if (col.key === "appointment_date") {
                    displayValue = formatDate(value);
                  } else if (col.key === "appointment_time") {
                    displayValue = formatTime(value);
                  } else if (value === null || value === "") {
                    displayValue = "-";
                  }

                  return <td key={colIndex}>{displayValue}</td>;
                })}
              </tr>
            ))
          )}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="pagination">
        <button
          className="pagination-btn"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            className={`pagination-btn ${currentPage === i + 1 ? "active" : ""}`}
            onClick={() => handlePageChange(i + 1)}
          >
            {i + 1}
          </button>
        ))}

        <button
          className="pagination-btn"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default TableComponent;
