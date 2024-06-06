import React from 'react';

const Checkout = ({ cart, setPage, setCart }) => {
  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cart.reduce((acc, item) => acc + item.quantity * item.product.price, 0);

  const confirmOrder = () => {
    alert('Order confirmed!');
    setCart([]);
    setPage('products');
  };

  return (
    <div className="container">
      {cart.map(item => (
        <div key={item.product.id} className="checkout-item">
          <img src={item.product.image} alt={item.product.name} />
          <h3>{item.product.name}</h3>
          <p>Price: ${item.product.price.toFixed(2)}</p>
          <p>Quantity: {item.quantity}</p>
        </div>
      ))}
      <div className="summary">
        <h3>Total Quantity: {totalQuantity}</h3>
        <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
        <button onClick={confirmOrder}>Confirm Order</button>
      </div>
    </div>
  );
};

export default Checkout;
