import React, { useState } from "react";
import Pagedata from "./Pagedata.json";
import FilterSection from "./FilterSection";

  const Importpagenation = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemPerPage = 5;

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const filteredproduct = Pagedata.filter((product) => {
    const namematch = product.name.toLowerCase().includes(search.toLowerCase());
    const categorymatch = category === "" || product.category.toLowerCase() === category.toLowerCase();
    const minmatch = minPrice === "" || product.price >= Number(minPrice);
    const maxmatch = maxPrice === "" || product.price <= Number(maxPrice);

    return namematch && categorymatch && minmatch && maxmatch;
  });

  const lastIndex = currentPage * itemPerPage;
  const firstIndex = lastIndex - itemPerPage;
  const currentItems = filteredproduct.slice(firstIndex, lastIndex);
  const totalpages = Math.ceil(filteredproduct.length / itemPerPage);

  return (
    <div className="container">
      <h1 className="heading">PRODUCTS FILTER & PAGINATION</h1>

      <FilterSection 
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
        minPrice={minPrice}
        setMinPrice={setMinPrice}
        maxPrice={maxPrice}
        setMaxPrice={setMaxPrice}
        setCurrentPage={setCurrentPage}
      />

      {currentItems.length > 0 ? (
        currentItems.map((prod) => (
          <div key={prod.id} className="product-card">
            <h3>{prod.name}</h3>
            <p>Category: {prod.category}</p>
            <p>Price: ₹{prod.price}</p>
            <p>Rating: {prod.rating}</p>
          </div>
        ))
      ) : (
        <p className="no-results">Koi product nahi mila!</p>
      )}

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
    </div>
  );
};

export default Importpagenation;

