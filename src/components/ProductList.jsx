import React from 'react';
import download from '../assets/download.jpeg'
import images from '../assets/images.jpeg'
import images2 from '../assets/image2.jpeg'
import camera from '../assets/camera.jpeg'
import shirt from '../assets/shirt.jpg'

const products = [
  { id: 1, name: 'Laptop', price: 102131.0, image: download},
  { id: 2, name: 'Mobile', price: 20231.0, image: images },
  { id: 3, name: 'AC', price: 30000.0, image: images2 },
  { id: 4, name: 'Camera', price: 3000.0, image: camera },
  { id: 5, name: 'shirt', price: 1000.0, image: shirt },
];

const ProductListing = ({ addToCart }) => {
  const handleAddToCart = (product) => {
    const quantity = parseInt(document.getElementById(`quantity-${product.id}`).value);
    addToCart(product, quantity);
  };

  return (
    <div className="container">
      {products.map(product => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>Price: Rs.{product.price.toFixed(2)}</p>
          <input type="number" defaultValue="1" min="1" id={`quantity-${product.id}`} />
          <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductListing;
