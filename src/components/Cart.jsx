 const Cart = ({ cart, removeFromCart, clearCart }) => {
  return (
    <div className="cart">
      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <>
          {cart.map((item) => (
            <div className="cart-item" key={item.id}>
                <div>
                    <img src={item.img} alt="" />
              <h4>{item.name}</h4>
              <p>${item.price}</p>
              </div>
              <button className="button-Remove" onClick={() => removeFromCart(item.id)}>
                Remove
              </button>
            </div>
          ))}

          <button className="button-Checkout" onClick={clearCart}>
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;