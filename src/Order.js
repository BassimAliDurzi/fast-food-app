// Order.js
import React from 'react';
import './Order.css';

function Order({ orderItems, increaseQuantity, decreaseQuantity, totalPrice }) {
  return (
    <div className="order">
      <h2>Your Order</h2>
      <div className="order-items">
        {orderItems.map((item) => (
          <div key={item.id} className="order-item">
            <div className="order-item-info">
              <span>{item.name}</span>
            </div>
            <div className="quantity-controls" >
              <button onClick={() => decreaseQuantity(item.id)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => increaseQuantity(item.id)}>+</button>
            </div>
            <span className="item-total">{item.price * item.quantity} SEK</span>
          </div>
        ))}
      </div>
      <div className="total">
        <span>Total:</span>
        <span>{totalPrice} SEK</span>
      </div>
    </div>
  );
}

export default Order;
