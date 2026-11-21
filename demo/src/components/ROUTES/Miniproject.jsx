import React, { useState } from 'react'
import Product from './Product.json'
import { useSearchParams } from 'react-router-dom'

const Question6 = () => {
  const [usercode, setusercode] = useSearchParams()
  const productcategory = usercode.get("category") || ""
  const productprice = usercode.get("price") || ""
  const productname = usercode.get("title") || ""

  const [productcat, setproductcat] = useState("")
  const [productmoney, setproductmoney] = useState("")
  const [productnamm, setproductnamm] = useState("")

  const [currentpage, setcurrentpage] = useState(1)
  const itemPerPage = 5

  const handlesubmit = () => {
    setcurrentpage(1)
    setusercode({
      category: productcat,
      price: productmoney,
      title: productnamm
    })
  }

  const productlist = Array.isArray(Product) ? Product : (Product && Array.isArray(Product.products) ? Product.products : [])

  const getValue = (val) => {
    if (typeof val === "string" || typeof val === "number") return String(val)
    if (val && typeof val === "object") return String(val.name || val.title || "")
    return ""
  }

  const categories = [...new Set(productlist.map((item) => getValue(item && item.category)).filter(Boolean))]

  const filterproducts = productlist.filter((item) => {
    const itemCategory = getValue(item && item.category).toLowerCase()
    const itemTitle = getValue((item && item.title) || (item && item.name)).toLowerCase()
    const itemPrice = Number(item && item.price)

    const matchCat = productcat === "" || itemCategory.includes(productcat.toLowerCase())
    const matchPrice = productmoney === "" || (!Number.isNaN(itemPrice) && itemPrice <= Number(productmoney))
    const matchName = productnamm === "" || itemTitle.includes(productnamm.toLowerCase())

    return matchCat && matchPrice && matchName
  })

  //? PAGENATION CONSECPT
  const totalpages = Math.max(1, Math.ceil(filterproducts.length / itemPerPage))
  const lastIndex = currentpage * itemPerPage
  const firstindex = lastIndex - itemPerPage
  const currentProducts = filterproducts.slice(firstindex, lastIndex)

  const pageItems = []
  if (totalpages <= 5) {
    for (let i = 1; i <= totalpages; i++) {
      pageItems.push(i)
    }
  } else {
    const start = Math.max(1, Math.min(currentpage - 1, totalpages - 3))
    const end = Math.min(totalpages - 1, start + 2)
    for (let i = start; i <= end; i++) {
      pageItems.push(i)
    }
    if (end < totalpages - 1) {
      pageItems.push("...")
    }
    pageItems.push(totalpages)
  }

  return (
    <div>
      <h1>PRODUCT CATEGORY : {productcategory}</h1>
      <h1>PRODUCT PRICE : {productprice}</h1>
      <h1>PRODUCT NAME : {productname}</h1>

      <select
        value={productcat}
        onChange={(e) => {
          setproductcat(e.target.value)
          setcurrentpage(1)
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
          setproductcat(e.target.value)
          setcurrentpage(1)
        }}
      />

      <input
        type="text"
        placeholder="CHECK MONEY"
        value={productmoney}
        onChange={(e) => {
          setproductmoney(e.target.value)
          setcurrentpage(1)
        }}
      />

      <input
        type="text"
        placeholder="CHECK NAME"
        value={productnamm}
        onChange={(e) => {
          setproductnamm(e.target.value)
          setcurrentpage(1)
        }}
      />

      <button onClick={handlesubmit}>SETTING THE ID VALUE</button>

      <ul>
        {currentProducts.map((p, index) => (
          <li key={getValue(p && p._id) || getValue(p && p.id) || index}>
            {getValue((p && p.title) || (p && p.name))} - {getValue(p && p.category)} - ${getValue(p && p.price)}
          </li>
        ))}
      </ul>

      <div>
        <button
          onClick={() => setcurrentpage((prev) => Math.max(prev - 1, 1))}
          disabled={currentpage === 1}
        >
          Previous
        </button>

        {pageItems.map((num, idx) =>
          num === "..." ? (
            <span key={"dots-" + idx}> ... </span>
          ) : (
            <button
              key={num}
              onClick={() => setcurrentpage(num)}
              aria-current={currentpage === num ? "page" : undefined}
            >
              {num}
            </button>
          )
        )}

        <button
          onClick={() => setcurrentpage((prev) => Math.min(prev + 1, totalpages))}
          disabled={currentpage === totalpages}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default Question6