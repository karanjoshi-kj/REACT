import React, { useState } from "react";
import Pagedata from "./Pagedata.json";
import FilterSection from "./FilterSection";
import ProductList from "./ProductList";
import Pagination from "./Pagination";
import "./ProductDashboard.css";

const ProductDashboard = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemPerPage = 5;

  const [filteredData, setFilteredData] = useState(Pagedata);
  const [currentItems, setCurrentItems] = useState([]);

  return (
    <div className="container">
      <h1 className="heading">PRODUCT DASHBOARD</h1>

      <FilterSection 
        Pagedata={Pagedata} 
        setFilteredData={setFilteredData} 
        setCurrentPage={setCurrentPage} 
      />

      <ProductList currentItems={currentItems} />

      <Pagination 
        filteredData={filteredData}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        itemPerPage={itemPerPage}
        setCurrentItems={setCurrentItems}
      />
    </div>
  );
};

export default ProductDashboard;