import React, { useState } from 'react'

const Checkbox = () => {
    const [ischecked , setischecked] = useState(true);
  return (
    <div>
      <input type="checkbox" checked={ischecked} onChange={(e) => setischecked(e.target.checked)}/> TESTING BUTTON
      <h1>{ischecked ? "selected" : "unselected"}</h1>;
    </div>
  )
}

export default Checkbox
