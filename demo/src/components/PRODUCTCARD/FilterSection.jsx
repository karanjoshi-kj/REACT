import React, { useState, useEffect } from "react";

const FilterSection = ({ Pagedata, setFilteredData, setCurrentPage }) => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");


  const filtered = Pagedata.filter((product) => {
    const namematch = product.name.toLowerCase().includes(search.toLowerCase());
    const categorymatch = category === "" || product.category.toLowerCase() === category.toLowerCase();
    const minmatch = minPrice === "" || product.price >= Number(minPrice);
    const maxmatch = maxPrice === "" || product.price <= Number(maxPrice);

    return namematch && categorymatch && minmatch && maxmatch;
  });

  useEffect(() => {
    setFilteredData(filtered);
    setCurrentPage(1);
  }, [search, category, minPrice, maxPrice]);

  return (
    <div className="filter-container">
      <input 
        type="text" 
        placeholder="Search product..." 
        value={search} 
        onChange={(e) => setSearch(e.target.value)} 
      />
      <input 
        type="text" 
        placeholder="Category..." 
        value={category} 
        onChange={(e) => setCategory(e.target.value)} 
      />
      <input 
        type="number" 
        placeholder="Min Price" 
        value={minPrice} 
        onChange={(e) => setMinPrice(e.target.value)} 
      />
      <input 
        type="number" 
        placeholder="Max Price" 
        value={maxPrice} 
        onChange={(e) => setMaxPrice(e.target.value)} 
      />
    </div>
  );
};

export default FilterSection;