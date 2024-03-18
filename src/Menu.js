import React from 'react';
import './Menu.css';

function Menu({ menuItems, addToOrder }) {
  return (
    <div className="menu">
      <h2>Fast Food Menu</h2>
      <div className="product-grid">
        {menuItems.map((item) => (
          <ProductCard key={item.id} item={item} addToOrder={addToOrder} />
        ))}
      </div>
    </div>
  );
}

function ProductCard({ item, addToOrder }) {
  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={item.image} alt={item.name} className="product-image" />
      </div>
      <h3>{item.name}</h3>
      <p>Price: {item.price} SEK</p>
      <button onClick={() => addToOrder(item)}>Add to Order</button>
    </div>
  );
}

export default Menu;
