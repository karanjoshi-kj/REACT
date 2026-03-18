import React from 'react'
import Details from './Details';

const Idcard = () => {

    const studentid = {
        "image":"https://res.cloudinary.com/dafwtuvrd/image/upload/v1766646173/d9e34983-e718-4f50-9fb4-398feb05a545_nu3mtd.jpg",
        "name":"charanjeet singh sidhu",
        "address":"haldwani",
        "profession":"teacher",
        "salary":"5 L"
    }
    const{image , name , address , profession , salary} = studentid ;
  return (
    <div>
      <Details img={image} stname={name} add={address} sal={salary} prof={profession} />
    </div>
  )
}

export default Idcard
