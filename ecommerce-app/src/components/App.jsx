import React, { useState } from 'react';
import ProductCard from './components/ProductCard';

const App = () => {
  const [cart, setCart] = useState([]);
  const products = [
    { id: 1, name: 'T-Shirt', price: 499 },
    { id: 2, name: 'Shoes', price: 1299 },
    { id: 3, name: 'Watch', price: 999 },
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div>
      <h1>E-Commerce Store</h1>
      <h2>Cart Items: {cart.length}</h2>
      <div style={{ display: 'flex' }}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default App;
