
import { useState} from "react";

const ProductCard = ({ product, addToCart }) => {

    const [added, setAdded] = useState(false);
  return (
    <>
    <div className="card">
        <div className="card-items">
        <img className="card-img" src={product.img} alt="" />
      <h3>{product.name}</h3>
      <p>{product.description}</p>

      <h4>${product.price} / {product.period}</h4>

      <ul>
        {product.features.map((f, i) => (
          <li key={i}> {f}</li>
        ))}
      </ul>

      <button
  className={added ? "added" : ""}
  onClick={() => {
    addToCart(product);
    setAdded(true);
  }}
>
  {added ? "✓ Added to Cart" : "Buy Now"}
</button>
{/* 
      <button onClick={() => addToCart(product)}>
        Buy Now
      </button> */}
      </div>
    </div>
    </>
  );
};

export default ProductCard;
//  import React from 'react';
 
//  const ProductCard = ({ item }) => {
//   return (
//     <div className="card">
//       <h3>{item.name}</h3>
//       <p>{item.price}</p>
//       <button className="btn-primary">Buy</button>
//     </div>
//   );
// };

// export default ProductCard;