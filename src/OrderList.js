import React from 'react';

function OrderList({ orderItems, increaseQuantity, decreaseQuantity }) {
  return (
    <div className="order-list">
      <h2>Order List</h2>
      <ul>
        {orderItems.map((item) => (
          <li key={item.id}>
            <span>{item.name}</span>
            <button onClick={() => increaseQuantity(item.id)}>+</button>
            <span>{item.quantity}</span>
            <button onClick={() => decreaseQuantity(item.id)}>-</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OrderList;
