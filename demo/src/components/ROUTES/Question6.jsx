import React, { useState } from 'react'
import Product from './Product.json'
import { useSearchParams } from 'react-router-dom';

const Question6 = () => {
    const [usercode, setusercode] = useSearchParams();
    const productcategory = usercode.get("category")
    const productprice = usercode.get("price")
    const productname = usercode.get("title")

    const [productcat, setproductcat] = useState("")
    const [productmoney, setproductmoney] = useState("")
    const [productnamm, setproductnamm] = useState("")

    const handlesubmit = () => {
        setusercode({
            category: productcat,
            price: productmoney,
            title: productnamm
        });
    };

  return (
    <div>
        <h1>PRODUCT CATEGORY : {productcategory}</h1>        
        <h1>PRODUCT PRICE : {productprice}</h1>        
        <h1>PRODUCT NAME : {productname}</h1>   

        <input 
        type="text"
        placeholder="CHECK PRODUCT"
        value={productcat}
        onChange={(e) => setproductcat(e.target.value)}
        />
        <input 
        type="text"
        placeholder="CHECK MONEY"
        value={productmoney}
        onChange={(e) => setproductmoney(e.target.value)}
        />
        <input 
        type="text"
        placeholder="ENTER NAME"
        value={productnamm}
        onChange={(e) => setproductnamm(e.target.value)}
        />

        <button onClick={handlesubmit}>SETTING THE ID VALUE</button>     
    </div>
  )
}

export default Question6