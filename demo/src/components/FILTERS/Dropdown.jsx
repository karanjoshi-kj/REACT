import React, { useState } from 'react'
import Input2 from "./Input2"
const Dropdown = () => {
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

const [category , setcategory] = useState("");

const filteredproduct = products.filter((product)=>{
    if (category==="") {
        return true ;
    }
    return product.category === category ;
})
  return (
    <div>

        <Input2 
        category={category}
        setcategory={setcategory}
        />
      {filteredproduct.map((product)=>(
        <div key={product.id}>
            <h2>{product.name}</h2>
            <h2>{product.Price}</h2>
            <h2>{product.category}</h2>
        </div>
      ))}
    </div>
  )
}

export default Dropdown
