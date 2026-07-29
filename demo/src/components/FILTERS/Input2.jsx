import React from 'react'

const Input2 = ({category , setcategory}) => {
  return (
    <div>
      <select
      value={category}
      onChange={(e) => setcategory(e.target.value)}>
        <option value="">ALL CATEGORIES</option>
        <option value="electronics">ELECTRONICS</option>
        <option value="clothes">CLOTHES</option>
        <option value="beauty">BEAUTY</option>
      </select>
    </div>
  )
}

export default Input2
