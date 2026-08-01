import React, { useState } from "react";
import Pagedata from "./Pagedata.json";
const Importpagenation = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemPerPage = 5;
  const lastIndex = currentPage * itemPerPage;
  const firstIndex = lastIndex - itemPerPage;
  const currentItems = Pagedata.slice(firstIndex, lastIndex);
  const totalpages = Math.ceil(Pagedata.length / itemPerPage);
  return (
    <div>
      {currentItems.map((prod) => (
        <div key={prod.id}>
          <h1>{prod.name}</h1>
          <p>{prod.category}</p>
          <p>{prod.price}</p>
          <p>{prod.rating}</p>
        </div>
      ))}
 <div className="btn-parent">
                <button 
                    disabled={currentPage === 1} 
                    onClick={() => setCurrentPage(currentPage - 1)}
                >
                    Previous
                </button>

                {Array.from({ length: totalpages }, (_, pageNumber) => (
                    <button 
                        key={pageNumber} 
                        onClick={() => setCurrentPage(pageNumber + 1)}
                    >
                        {pageNumber + 1}
                    </button>
                ))}

                <button 
                    disabled={currentPage === totalpages} 
                    onClick={() => setCurrentPage(currentPage + 1)}
                >
                    Next
                </button>
            </div>
    </div>
  );
};

export default Importpagenation;
