import React, { useEffect } from "react";
import "./Pagination.css";

const Pagination = ({ filteredData, currentPage, setCurrentPage, itemPerPage, setCurrentItems }) => {
  const totalpages = Math.ceil(filteredData.length / itemPerPage);

  useEffect(() => {
    const lastIndex = currentPage * itemPerPage;
    const firstIndex = lastIndex - itemPerPage;
    const current = filteredData.slice(firstIndex, lastIndex);
    setCurrentItems(current);
  }, [filteredData, currentPage]);

  return (
    <div className="btn-parent">
      <button 
        disabled={currentPage === 1} 
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        Previous
      </button>

      {Array.from({ length: totalpages }, (_, pageNumber) => {
        const pageNum = pageNumber + 1;
        return (
          <button 
            key={pageNumber} 
            className={currentPage === pageNum ? "active-page" : ""}
            onClick={() => setCurrentPage(pageNum)}
          >
            {pageNum}
          </button>
        );
      })}

      <button 
        disabled={currentPage === totalpages || totalpages === 0} 
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;