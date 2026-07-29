import React, { useState } from 'react'
import Inputcombine from "./Inputcombine"
const Combined = () => {
     const products = [
        {
        id :1,
        name : "shampoo",
        Price : 450 ,
        category : "beauty"
    },
        {
        id :2,
        name : "monitor",
        Price : 15000 ,
        category : "electronics"
    },
        {
        id :3,
        name : "keyboard",
        Price : 400 ,
        category : "electronics"
    },
        {
        id :5,
        name : "mens-wear",
        Price : 45000 ,
        category : "clothes"
    },
];

const [search , setsearch] = useState("");
const [category , setcategory] = useState("");
const [minPrice , setMinPrice] = useState("");
const [maxPrice , setMaxPrice] = useState("");

const filteredproduct = products.filter((product) => {
    const namematch = product.name.toLowerCase().includes(search.toLowerCase());

const categorymatch = category === "" || product.category === category ;

const minmatch = minPrice === "" || product.Price >= Number(minPrice);
const maxmatch = maxPrice === "" || product.Price <= Number(maxPrice);

return namematch && categorymatch && minmatch && maxmatch;
})
  return (
    <div>
      <h1>PRODUCTS FILTER</h1>

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
      {filteredproduct.map((product) => (
        <div key={product.id}>
            <h2>{product.name}</h2>
            <h2>{product.Price}</h2>
            <h2>{product.category}</h2>
        </div>
      ))}
    </div>
  )
}

export default Combined
