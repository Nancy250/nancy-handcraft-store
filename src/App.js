import React, { useState } from 'react';
import './index.css';

function App() {
  const [cart, setCart] = useState([]);
  const products = [
    { id: 1, name: 'Handmade Necklace', price: 499, image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Decorative Pot', price: 899, image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Clay Lamp', price: 299, image: 'https://via.placeholder.com/150' }
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="app">
      <header>
        <h1>Nancy Handcraft Store</h1>
        <p>Beautiful handmade crafts made with love ❤️</p>
      </header>
      <main>
        <div className="product-list">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>₹{product.price}</p>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </main>
      <footer>
        <h2>🛒 Cart: {cart.length} items</h2>
      </footer>
    </div>
  );
}

export default App;
