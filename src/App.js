import React, { useState } from 'react';
import Menu from './Menu';
import Order from './Order';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [menuItems, setMenuItems] = useState([
    { id: 1, name: 'Burger', price: 79, image: 'burger.jpg' },
    { id: 2, name: 'Pizza', price: 99, image: 'pizza.jpg' },
    { id: 3, name: 'Fries', price: 59, image: 'fries.jpg' },
  ]);
  const [orderItems, setOrderItems] = useState([]);
  const [theme, setTheme] = useState('light');

  const addToOrder = (item) => {
    const existingItemIndex = orderItems.findIndex((orderItem) => orderItem.id === item.id);
    if (existingItemIndex !== -1) {
      const updatedOrderItems = [...orderItems];
      updatedOrderItems[existingItemIndex].quantity++;
      setOrderItems(updatedOrderItems);
    } else {
      setOrderItems([...orderItems, { ...item, quantity: 1 }]);
    }
  };

  const increaseQuantity = (itemId) => {
    const updatedOrderItems = orderItems.map((item) =>
      item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
    );
    setOrderItems(updatedOrderItems);
  };

  const decreaseQuantity = (itemId) => {
    const updatedOrderItems = orderItems.map((item) =>
      item.id === itemId && item.quantity >= 1 ? { ...item, quantity: item.quantity - 1 } : item
    );
    setOrderItems(updatedOrderItems);
  };

  const totalPrice = orderItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`App ${theme}`}>
      <h1>Fast Food Ordering App</h1>
      <div className="theme-toggle" onClick={toggleTheme}>
        {theme === 'light' ? <FontAwesomeIcon icon={faMoon} /> : <FontAwesomeIcon icon={faSun} />}
      </div>
      <br></br>
      <div className="content">
        <Menu menuItems={menuItems} addToOrder={addToOrder} />
        <Order
          orderItems={orderItems}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
          totalPrice={totalPrice}
        />
      </div>
    </div>
  );
}

export default App;
