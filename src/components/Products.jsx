import ProductCard from "./ProductCard";

const Products = ({ products, addToCart }) => {
  return (
    <div className="products-grid">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default Products;

//  import React from 'react';
//  import ProductCard from "./ProductCard";
//  const data = [
//   { name: "AI Writing", price: "$29" },
//   { name: "Design Pack", price: "$49" },
//   { name: "Stock Assets", price: "$19" },
// ];

// const Products = () => {
//   return (
//     <div className="products">
//       <h2>Premium Tools</h2>

//       <div className="grid">
//         {data.map((item, i) => (
//           <ProductCard key={i} item={item} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Products;