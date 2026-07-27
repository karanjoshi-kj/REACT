import React from 'react'

const Inputbar = ({pricefilter , setpricefilter}) => {
  return (
    <div>
      <input 
      type="number"
      placeholder="Enter The Price"
      value={pricefilter}
      onChange={(e) => setpricefilter(e.target.value)}
      
      />
    </div>
  )
}

export default Inputbar
