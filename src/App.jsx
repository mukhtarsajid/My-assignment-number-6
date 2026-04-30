
import { useState } from "react";

import Navbar from "./components/Navbar";

import Hero from "./components/Hero";

import Stats from "./components/Stats";

import ToggleSection from "./components/ToggleSection";

import Steps from "./components/Steps";

import Pricing from "./components/Pricing";

import CTA from "./components/CTA";

import Footer from "./components/Footer";

import productsData from "./data/products.json";

function App() {
  const [products] = useState(productsData);
  const [cart, setCart] = useState([]);
  const [view, setView] = useState("products");

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <>
      <Navbar cartCount={cart.length} />

      <Hero />
      <Stats />

      <ToggleSection
        view={view}
        setView={setView}
        products={products}
        cart={cart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        clearCart={clearCart}
      />

      <Steps />
      <Pricing />
      <CTA />
      <Footer />
    </>
  );
}

export default App;

//   import React from 'react';
// import Navbar from './components/Navbar';
//   import Hero from './components/Hero';
// import Pricing from './components/Pricing';
// import Products from './components/Products';
// import Steps from './components/Steps';
// import PricingCard from './components/PricingCard';
// import Stats from './components/Stats';
// import CTA from './components/CTA';
// import Footer from './components/Footer';

// const App = () => {
//   return (
//     <div>
//       <Navbar />
//       <Hero />
//       <Pricing />
//       <Products />
//       <Steps />
//       <Stats />
//       <PricingCard />
//       <CTA />
//       <Footer />
//     </div>
//   );
// };

// export default App;
  