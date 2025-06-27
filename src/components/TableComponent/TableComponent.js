import React, { useState } from "react";
import './TableComponent.css';


const TableComponent = ({ columns = [], data = [], rowsPerPage = 5 }) => {
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate total pages and slice data for current page
  const totalPages = Math.ceil(data.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const currentData = data.slice(startIndex, startIndex + rowsPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div>
      <table className="custom-table">
        <thead>
          <tr>
            {columns.map((col, idx) => (
              <th key={idx}>{col}</th>
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
                {columns.map((col, colIndex) => (
                  <td key={colIndex}>{row[col.toLowerCase()] || "-"}</td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>

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
