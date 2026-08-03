import React from "react";

const FilterSection = ({ 
  search, setSearch, 
  category, setCategory, 
  minPrice, setMinPrice, 
  maxPrice, setMaxPrice, 
  setCurrentPage 
}) => {
  return (
    <div className="filter-container">
      <input 
        type="text" 
        placeholder="Search product" 
        value={search} 
        onChange={(e) => {
          setSearch(e.target.value);
          setCurrentPage(1); 
        }} 
      />

      <input 
        type="text" 
        placeholder="Category" 
        value={category} 
        onChange={(e) => {
          setCategory(e.target.value);
          setCurrentPage(1); 
        }} 
      />

      <input 
        type="number" 
        placeholder="Min Price" 
        value={minPrice} 
        onChange={(e) => {
          setMinPrice(e.target.value);
          setCurrentPage(1); 
        }} 
      />

      <input 
        type="number" 
        placeholder="Max Price" 
        value={maxPrice} 
        onChange={(e) => {
          setMaxPrice(e.target.value);
          setCurrentPage(1); 
        }} 
      />
    </div>
  );
};

export default FilterSection;