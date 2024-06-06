import React from 'react';

const Cart = ({ cart, setPage }) => {
  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cart.reduce((acc, item) => acc + item.quantity * item.product.price, 0);

  return (
    <div className="container">
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cart.map(item => (
          <div key={item.product.id} className="cart-item">
            <img src={item.product.image} alt={item.product.name} />
            <h3>{item.product.name}</h3>
            <p>Price: Rs{item.product.price.toFixed(2)}</p>
            <p>Quantity: {item.quantity}</p>
          </div>
        ))
      )}
      <div className="summary">
        <h3>Total Quantity: {totalQuantity}</h3>
        <h3>Total Price: Rs.{totalPrice.toFixed(2)}</h3>
        <button onClick={() => setPage('checkout')}>Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
