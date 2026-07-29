import React from 'react'

const Inputcombine = ({search , setsearch , category , setcategory , minPrice , setMinPrice , maxPrice , setMaxPrice}) => {
  return (
    <div>
      <input 
      type="text"
      placeholder="ENTER PRODUCT"
      value={search}
      onChange={(e) => setsearch(e.target.value)}
      />

<select
      value={category}
      onChange={(e) => setcategory(e.target.value)}>
        <option value="">ALL CATEGORIES</option>
        <option value="electronics">ELECTRONICS</option>
        <option value="clothes">CLOTHES</option>
        <option value="beauty">BEAUTY</option>
      </select>

      <input 
      type="number"
      placeholder="MINIMUMMM PRICE"
      value={minPrice}
      onChange={(e)=> setMinPrice(e.target.value)}
      />

      <input 
      type="number"
      placeholder="MAXIMUMMM PRICE"
      value={maxPrice}
      onChange={(e)=> setMaxPrice(e.target.value)}
      />
    </div>
  )
}

export default Inputcombine
