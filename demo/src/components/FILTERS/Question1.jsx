import React, { useState } from 'react'
import Input1 from "./Input1"

const Question1 = () => {
     const products = [
    {
      id: 1,
      name: "Shampoo",
      Price: 450,
      category: "BEAUTY",
    },
    {
      id: 4,
      name: "dove-Shampoo",
      Price: 450,
      category: "BEAUTY",
    },
    {
      id: 5,
      name: "head-Shampoo",
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

  const[search , setsearch] = useState("");

  const filteredproduct = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase()))
  return (
    <div>
      <h1>PRODUCTS</h1>

      <Input1 
      search={search}
      setsearch={setsearch}
      />
    {filteredproduct.map((product) =>(
        <div key={product.id}>
<h3>{product.name}</h3>
<h3>{product.Price}</h3>
<h3>{product.category}</h3>
        </div>
    ))}
    </div>
  )
}

export default Question1
