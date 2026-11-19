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

    const productlist = Array.isArray(Product) ? Product : (Product.products || []);

    const filterproducts = productlist.filter((item) => {
        return(
            (productcat === "" || item.category.toLowerCase().includes(productcat.toLowerCase())) && 
            (productmoney === "" || Number(item.price) <= Number(productmoney)) && 
            (productnamm === "" || item.title.toLowerCase().includes(productnamm.toLowerCase()))  
        );
    });
    // console.log(filterproducts);
    
  return (
    <div>
        <h1>PRODUCT CATEGORY : {productcategory}</h1>        
        <h1>PRODUCT PRICE : {productprice}</h1>        
        <h1>PRODUCT NAME : {productname}</h1>   

        <select value={productcat} onChange={(e) => setproductcat(e.target.value)}>
              <option value="">SELECT CATEGORY</option>
              <option value="beauty">Beauty</option>
              <option value="electronics">Electronics</option>
              <option value="clothing">Clothing</option>
        </select>

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


        <ul>
            {filterproducts.map((p , index) => (
                <li key={index}>
                    {p.title} - {p.category} - ${p.price}
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Question6