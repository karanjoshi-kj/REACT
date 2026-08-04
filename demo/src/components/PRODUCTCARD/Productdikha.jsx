import React, { useState } from 'react'
import Pagedata from "./Productdata.json";
import FilterSection from "./FilterSection";
import ProductList from "./ProductList";
import Pagination from "./Pagenation";

const Productdikha = () => {
    const [currentPage , setCurrentPage] = useState(1);
    const itemPerPage = 5 ;

    const [filteredData , setFilteredData] = useState(Pagedata);
    const [currentItems , setCurrentItems] = useState([]);
  return (
    <div className="container">
    <h1>PRODUCTS CARD</h1>

    <FilterSection Pagedata={Pagedata} setFilteredData={setFilteredData} setCurrentPage={setCurrentPage}></FilterSection>
    <ProductList currentItems={currentItems} />
    <Pagination
    filteredData={filteredData}
    currentPage={currentPage}
    setCurrentPage={setCurrentPage}
    itemPerPage={itemPerPage}
    setCurrentItems={setCurrentItems}
    />
    </div>
  )
}

export default Productdikha
