
import React, { useState } from 'react';
import ProductListing from './components/ProductList';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import './App.css';
import { SignedIn, SignedOut, SignInButton, UserButton, RedirectToSignIn } from '@clerk/clerk-react';

function App() {
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState('products');

  const addToCart = (product, quantity) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.product.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prevCart, { product, quantity }];
      }
    });
  };

  return (
    <>
      <SignedIn>
        <div className="App">
          <header className="app-header">
            <h1>Shopify</h1>
            <div className="auth-buttons">
              <UserButton />
            </div>
          </header>
          {page === 'products' && <ProductListing addToCart={addToCart} />}
          {page === 'cart' && <Cart cart={cart} setPage={setPage} />}
          {page === 'checkout' && <Checkout cart={cart} setPage={setPage} setCart={setCart} />}
          <div className="navigation">
            <button onClick={() => setPage('products')}>Products</button>
            <button onClick={() => setPage('cart')}>Cart</button>
          </div>
        </div>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
}

export default App;
