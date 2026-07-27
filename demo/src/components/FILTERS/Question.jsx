import React  , {useState} from 'react'
import Inputbar from "./Inputbar"; 
const Question = () => {
    const products = [
        {
        id : 1 ,
        name : "shampoo",
        Price : "450",
        category : "ELECTRONICS"
    },
    {
        id : 2 ,
        name : "Monitor",
        Price : "15000",
        category : "ELECTRONICS"
    },
    {
        id : 3 ,
        name : "Keyboard",
        Price : "400",
        category : "ELECTRONICS"
    },
    {
        id : 4 ,
        name : "Mens-wear",
        Price : "45000",
        category : "CLOTHES"
    },
];

const [pricefilter , setpricefilter] = useState("");
const filteredproduct = products.filter((product)=> {
    if (pricefilter === "") {
        return true ;
    }
    return product.Price <= Number(pricefilter) ;
}); 
  return (
    <div>
      <h1>PRODUCT UNDER 15K :</h1>

<Inputbar pricefilter = {pricefilter} setpricefilter={setpricefilter} />

      {filteredproduct.map((product)=>(
        <div key={product.id}>
            <h3>{product.name}</h3>
            <p>Price : {product.Price}</p>
            <p>category : {product.category}</p>

        </div>
      ))}
    </div>
  );
}

export default Question
