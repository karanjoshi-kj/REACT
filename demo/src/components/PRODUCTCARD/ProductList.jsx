import React from "react";

const ProductList = ({ currentItems }) => {
  return (
    <div>
      {currentItems.length > 0 ? (
        currentItems.map((prod) => (
          <div key={prod.id} className="product-card">
            <h3>{prod.name}</h3>
            <p>Category: {prod.category}</p>
            <p>Price: ₹{prod.price}</p>
            <p>Rating: {prod.rating}</p>
            <p>Stock: {prod.stock}</p>
          </div>
        ))
      ) : (
        <p className="no-results">Koi product nahi mila!</p>
      )}
    </div>
  );
};

export default ProductList;