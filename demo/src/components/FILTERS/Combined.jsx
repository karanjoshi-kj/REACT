import React, { useState } from 'react';
import Inputcombine from "./Inputcombine";
import './Combined.css'; 

const Combined = () => {
  const products = [
    { id: 1, name: "shampoo", Price: 450, category: "beauty" },
    { id: 2, name: "monitor", Price: 15000, category: "electronics" },
    { id: 3, name: "keyboard", Price: 400, category: "electronics" },
    { id: 5, name: "mens-wear", Price: 45000, category: "clothes" },
  ];

  const [search, setsearch] = useState("");
  const [category, setcategory] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const filteredproduct = products.filter((product) => {
    const namematch = product.name.toLowerCase().includes(search.toLowerCase());
    const categorymatch = category === "" || product.category === category;
    const minmatch = minPrice === "" || product.Price >= Number(minPrice);
    const maxmatch = maxPrice === "" || product.Price <= Number(maxPrice);

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
              <p className="price">₹{product.Price.toLocaleString('en-IN')}</p>
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