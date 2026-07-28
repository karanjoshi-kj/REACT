import React, { useState } from "react";
import Inputbar from "./Inputbar";

const Question = () => {
  const products = [
    {
      id: 1,
      name: "Shampoo",
      Price: 450,
      category: "BEAUTY",
    },
    {
      id: 2,
      name: "Monitor",
      Price: 15000,
      category: "ELECTRONICS",
    },
    {
      id: 3,
      name: "Keyboard",
      Price: 400,
      category: "ELECTRONICS",
    },
    {
      id: 4,
      name: "Mens-wear",
      Price: 45000,
      category: "CLOTHES",
    },
  ];

  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const filteredproduct = products.filter((product) => {
    if (minPrice === "" && maxPrice === "") {
      return true;
    }

    return (
      product.Price >= Number(minPrice) &&
      product.Price <= Number(maxPrice)
    );
  });

  return (
    <div>
      <h1>PRODUCTS BETWEEN PRICE</h1>

      <Inputbar
        minPrice={minPrice}
        setMinPrice={setMinPrice}
        maxPrice={maxPrice}
        setMaxPrice={setMaxPrice}
      />

      {filteredproduct.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>Price : ₹{product.Price}</p>
          <p>Category : {product.category}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Question;