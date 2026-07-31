import React, { useState } from 'react';

const products = [
  { "id": 1, "name": "Wireless Bluetooth Earbuds", "category": "Electronics", "price": 1499, "rating": 4.5, "stock": 120 },
  { "id": 2, "name": "Smartwatch with Heart Rate Monitor", "category": "Electronics", "price": 2999, "rating": 4.3, "stock": 85 },
  { "id": 3, "name": "Gaming Mouse RGB", "category": "Electronics", "price": 899, "rating": 4.6, "stock": 200 },
  { "id": 4, "name": "Mechanical Keyboard", "category": "Electronics", "price": 2499, "rating": 4.7, "stock": 45 },
  { "id": 5, "name": "HD Webcam 1080p", "category": "Electronics", "price": 1899, "rating": 4.2, "stock": 60 },
  { "id": 6, "name": "Portable Bluetooth Speaker", "category": "Electronics", "price": 1299, "rating": 4.4, "stock": 150 },
  { "id": 7, "name": "Noise Cancelling Headphones", "category": "Electronics", "price": 4999, "rating": 4.8, "stock": 30 },
  { "id": 8, "name": "USB-C Fast Charger 65W", "category": "Electronics", "price": 1199, "rating": 4.5, "stock": 300 },
  { "id": 9, "name": "Power Bank 20000mAh", "category": "Electronics", "price": 1599, "rating": 4.3, "stock": 180 },
  { "id": 10, "name": "External Hard Drive 1TB", "category": "Electronics", "price": 4299, "rating": 4.6, "stock": 90 },
  { "id": 11, "name": "Smartphone Stand Holder", "category": "Electronics", "price": 299, "rating": 4.1, "stock": 500 },
  { "id": 12, "name": "Wireless Charging Pad", "category": "Electronics", "price": 899, "rating": 4.0, "stock": 110 },
  { "id": 13, "name": "4K Action Camera", "category": "Electronics", "price": 6999, "rating": 4.3, "stock": 25 },
  { "id": 14, "name": "Wi-Fi Router Dual Band", "category": "Electronics", "price": 2199, "rating": 4.5, "stock": 70 },
  { "id": 15, "name": "Ring Light with Tripod", "category": "Electronics", "price": 1299, "rating": 4.2, "stock": 140 },
  { "id": 16, "name": "Graphic Drawing Tablet", "category": "Electronics", "price": 3499, "rating": 4.6, "stock": 40 },
  { "id": 17, "name": "Laptop Cooling Pad", "category": "Electronics", "price": 999, "rating": 4.1, "stock": 160 },
  { "id": 18, "name": "Type-C Hub 6-in-1", "category": "Electronics", "price": 1799, "rating": 4.4, "stock": 95 },
  { "id": 19, "name": "VR Headset", "category": "Electronics", "price": 2999, "rating": 3.9, "stock": 20 },
  { "id": 20, "name": "Smart Fitness Band", "category": "Electronics", "price": 1999, "rating": 4.2, "stock": 210 },
  { "id": 21, "name": "Men Cotton Oversized T-Shirt", "category": "Clothing", "price": 699, "rating": 4.4, "stock": 250 },
  { "id": 22, "name": "Women High Waist Denim Jeans", "category": "Clothing", "price": 1299, "rating": 4.5, "stock": 180 },
  { "id": 23, "name": "Men Slim Fit Casual Shirt", "category": "Clothing", "price": 899, "rating": 4.3, "stock": 300 },
  { "id": 24, "name": "Women Floral Print Kurti", "category": "Clothing", "price": 799, "rating": 4.6, "stock": 220 },
  { "id": 25, "name": "Unisex Hooded Sweatshirt", "category": "Clothing", "price": 1499, "rating": 4.7, "stock": 130 },
  { "id": 26, "name": "Men Cargo Pants", "category": "Clothing", "price": 1199, "rating": 4.2, "stock": 160 },
  { "id": 27, "name": "Women Winter Cardigan", "category": "Clothing", "price": 1699, "rating": 4.4, "stock": 90 },
  { "id": 28, "name": "Men Denim Jacket", "category": "Clothing", "price": 1999, "rating": 4.5, "stock": 85 },
  { "id": 29, "name": "Women Cotton Ethnic Saree", "category": "Clothing", "price": 1899, "rating": 4.3, "stock": 105 },
  { "id": 30, "name": "Men Formal Trouser", "category": "Clothing", "price": 999, "rating": 4.1, "stock": 190 },
];

const Pagenation2 = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemPerPage = 5; 
  
  const lastIndex = currentPage * itemPerPage;
  const firstIndex = lastIndex - itemPerPage;
  const currentItems = products.slice(firstIndex, lastIndex);
  const totalpages = Math.ceil(products.length / itemPerPage);

  return (
    <div>
      {currentItems.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Pagenation2;


// import React, { useState } from 'react';

// const products=[
//   { "id": 1, "name": "Wireless Bluetooth Earbuds", "category": "Electronics", "price": 1499, "rating": 4.5, "stock": 120 },
//   { "id": 2, "name": "Smartwatch with Heart Rate Monitor", "category": "Electronics", "price": 2999, "rating": 4.3, "stock": 85 },
//   { "id": 3, "name": "Gaming Mouse RGB", "category": "Electronics", "price": 899, "rating": 4.6, "stock": 200 },
//   { "id": 4, "name": "Mechanical Keyboard", "category": "Electronics", "price": 2499, "rating": 4.7, "stock": 45 },
//   { "id": 5, "name": "HD Webcam 1080p", "category": "Electronics", "price": 1899, "rating": 4.2, "stock": 60 },
//   { "id": 6, "name": "Portable Bluetooth Speaker", "category": "Electronics", "price": 1299, "rating": 4.4, "stock": 150 },
//   { "id": 7, "name": "Noise Cancelling Headphones", "category": "Electronics", "price": 4999, "rating": 4.8, "stock": 30 },
//   { "id": 8, "name": "USB-C Fast Charger 65W", "category": "Electronics", "price": 1199, "rating": 4.5, "stock": 300 },
//   { "id": 9, "name": "Power Bank 20000mAh", "category": "Electronics", "price": 1599, "rating": 4.3, "stock": 180 },
//   { "id": 10, "name": "External Hard Drive 1TB", "category": "Electronics", "price": 4299, "rating": 4.6, "stock": 90 },
//   { "id": 11, "name": "Smartphone Stand Holder", "category": "Electronics", "price": 299, "rating": 4.1, "stock": 500 },
//   { "id": 12, "name": "Wireless Charging Pad", "category": "Electronics", "price": 899, "rating": 4.0, "stock": 110 },
//   { "id": 13, "name": "4K Action Camera", "category": "Electronics", "price": 6999, "rating": 4.3, "stock": 25 },
//   { "id": 14, "name": "Wi-Fi Router Dual Band", "category": "Electronics", "price": 2199, "rating": 4.5, "stock": 70 },
//   { "id": 15, "name": "Ring Light with Tripod", "category": "Electronics", "price": 1299, "rating": 4.2, "stock": 140 },
//   { "id": 16, "name": "Graphic Drawing Tablet", "category": "Electronics", "price": 3499, "rating": 4.6, "stock": 40 },
//   { "id": 17, "name": "Laptop Cooling Pad", "category": "Electronics", "price": 999, "rating": 4.1, "stock": 160 }]
// const Pagination = () => {
// const [currentPage,setCurrentPage]=useState(1);
// const itemPerPage=4;
// const lastIndex=currentPage*itemPerPage;
// const firstIndex=lastIndex-itemPerPage;
// const currentItems=products.slice(firstIndex,lastIndex);
// const totalpages=Math.ceil(products.length/itemPerPage);

//   return (
//     <div>
//       {currentItems.map((prod)=>(
        
//             <div key={prod.id}>
//                 <h1>{prod.name}</h1>
//                 <p>{prod.category}</p>
//                 <p>{prod.price}</p>
//                 <p>{prod.rating}</p>
//             </div>
//       ))}
//       <div>
//         {Array.from({length:totalpages},(_,pageNumber)=>(Yeh total pages (5) ke barabar ek temporary array banata hai taaki utne buttons generate kiye ja sakein
// Yeh 0 se shuru hota hai (0, 1, 2, 3, 4). Isliye button ke andar aur state update karte waqt pageNumber + 1 kiya gaya hai taaki buttons 1, 2, 3, 4, 5 naam se dikhein.
//           <button key={pageNumber} onClick={()=>setCurrentPage(pageNumber+1)}>{pageNumber+1}</button>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default Pagination;