 import Products from "./Products";
import Cart from "./Cart";

const ToggleSection = ({
  view,
  setView,
  products,
  cart,
  addToCart,
  removeFromCart,
  clearCart,
}) => {
  return (
    <section>
        <div className="toggle-btns">
  <button
    className={view === "products" ? "active" : ""}
    onClick={() => setView("products")}
  >
    Products
  </button>

  <button
    className={view === "cart" ? "active" : ""}
    onClick={() => setView("cart")}
  >
    Cart ({cart.length})
  </button>
</div>
     
      {view === "products" ? (
        <Products products={products} addToCart={addToCart} />
      ) : (
        <Cart
          cart={cart}
          removeFromCart={removeFromCart}
          clearCart={clearCart}
        />
      )}
    </section>
  );
};

export default ToggleSection;