import React, { useState } from 'react';
import Inputcombine from "./Inputcombine";
import Data from "./Data.json"; 
import useDebounce from "./useDebounce"; // 1. Custom hook import kiya
import './Combined.css'; 

const Combined = () => {
  const [search, setsearch] = useState("");
  const [category, setcategory] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  // 2. Bas ek single line me reusable debounced value mil gayi!
  const debouncedSearch = useDebounce(search, 300);

  // 3. Filtering me debouncedSearch pass kar diya
  const filteredproduct = Data.filter((product) => {
    const namematch = product.name.toLowerCase().includes(debouncedSearch.toLowerCase());
    const categorymatch = category === "" || product.category.toLowerCase() === category.toLowerCase();
    const minmatch = minPrice === "" || product.price >= Number(minPrice);
    const maxmatch = maxPrice === "" || product.price <= Number(maxPrice);

    return namematch && categorymatch && minmatch && maxmatch;
  });

  return (
    <div className="container">
      <h1 className="heading">PRODUCTS FILTER</h1>

      <Inputcombine 
        search={search}
        setsearch={setsearch}
        category={category}
        setcategory={setcategory}
        minPrice={minPrice}
        setMinPrice={setMinPrice}
        maxPrice={maxPrice}
        setMaxPrice={setMaxPrice}
      />

      <div className="grid-container">
        {filteredproduct.length > 0 ? (
          filteredproduct.map((product) => (
            <div key={product.id} className="card">
              <span className="category-badge">{product.category}</span>
              <h3 className="product-name">{product.name}</h3>
              <p className="price">₹{product.price.toLocaleString('en-IN')}</p> 
              <p className="product-rating">Rating: {product.rating}</p>
              <p className="product-stock">Stock: {product.stock}</p>
            </div>
          ))
        ) : (
          <p className="no-results">Koi product nahi mila!</p>
        )}
      </div>
    </div>
  );
};

export default Combined;