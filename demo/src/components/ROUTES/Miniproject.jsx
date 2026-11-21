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

    const [currentpage , setcurrentpage] = useState(1);
    const itemPerPage = 5;

    const handlesubmit = () => {
        setcurrentpage(1);
        setusercode({
            category: productcat,
            price: productmoney,
            title: productnamm
        });
    };

    const productlist = Array.isArray(Product) ? Product : (Product?.products || []);

    const categories = [...new Set(productlist.map((item) => item?.category).filter(Boolean))];

    const filterproducts = productlist.filter((item) => {
        const itemCategory = (item?.category ?? "").toLowerCase();
        const itemTitle = (item?.title ?? item?.name ?? "").toLowerCase();
        return(
            (productcat === "" || itemCategory.includes(productcat.toLowerCase())) && 
            (productmoney === "" || Number(item?.price) <= Number(productmoney)) && 
            (productnamm === "" || itemTitle.includes(productnamm.toLowerCase()))  
        );
    });
    
    //? PAGENATION CONSECPT

    const totalpages = Math.ceil(filterproducts.length / itemPerPage) || 1;
    const lastIndex = currentpage * itemPerPage ;
    const firstindex = lastIndex - itemPerPage ;
    const currentProducts = filterproducts.slice(firstindex , lastIndex);

  return (
    <div>
        <h1>PRODUCT CATEGORY : {productcategory}</h1>        
        <h1>PRODUCT PRICE : {productprice}</h1>        
        <h1>PRODUCT NAME : {productname}</h1>   

        <select
            value={productcat}
            onChange={(e) => {
                setproductcat(e.target.value);
                setcurrentpage(1);
            }}
        >
              <option value="">SELECT CATEGORY</option>
              {categories.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
              ))}
        </select>

        <input 
        type="text"
        placeholder="CHECK PRODUCT"
        value={productcat}
        onChange={(e) => {
            setproductcat(e.target.value);
            setcurrentpage(1);
        }}/>
        <input 
        type="text"
        placeholder="CHECK MONEY"
        value={productmoney}
        onChange={(e) => {
            setproductmoney(e.target.value);
            setcurrentpage(1);
        }}/>
        <input 
        type="text"
        placeholder="CHECK NAME"
        value={productnamm}
        onChange={(e) => {
            setproductnamm(e.target.value);
            setcurrentpage(1);
        }}/>
        

        <button onClick={handlesubmit}>SETTING THE ID VALUE</button>  


        <ul>
            {currentProducts.map((p , index) => (
                <li key={p?._id || p?.id || index}>
                    {p?.title || p?.name} - {p?.category} - ${p?.price}
                </li>
            ))}
        </ul>

        <div>
             <button 
              onClick={() => setcurrentpage((prev) => Math.max(prev - 1 , 1))}
              disabled={currentpage === 1}
        >
          Previous
        </button>

<span> PAGE {currentpage} of {totalpages}</span>
        <button
        onClick={() => setcurrentpage((prev) => Math.min(prev+1 , totalpages))}
        disabled={currentpage === totalpages}
        >
            NEXT
        </button>
        </div>
    </div>
  )
}

export default Question6