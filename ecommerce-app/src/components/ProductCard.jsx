import React from 'react';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div style={{ border: '1px solid gray', padding: '1rem', margin: '1rem' }}>
      <h3>{product.name}</h3>
      <p>Price: ₹{product.price}</p>
      <button data-testid={`add-btn-${product.id}`} onClick={() => onAddToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
