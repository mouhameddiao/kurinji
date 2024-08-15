import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product, size, color, shoeSize) => {
    setCartItems(prevItems => [...prevItems, { product, size, color, shoeSize, quantity: 1 }]);
  };

  const removeFromCart = (productId, size, color, shoeSize) => {
    setCartItems(prevItems =>
      prevItems.filter(
        item => !(item.product.id === productId && item.size === size && item.color === color && item.shoeSize === shoeSize)
      )
    );
  };

  const updateQuantity = (productId, size, color, shoeSize, newQuantity) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.product.id === productId && item.size === size && item.color === color && item.shoeSize === shoeSize
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
