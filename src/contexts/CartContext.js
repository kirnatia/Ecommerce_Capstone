import React, { createContext, useState } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product, id) => {
    const newItem = { ...product, amount: 1 };

    // Check if the item with the same id is already in the cart
    const cartItem = cart.find((item) => item.id === id);

    if (cartItem) {
      // If item exists, update the amount
      const newCart = cart.map((item) =>
        item.id === id ? { ...item, amount: item.amount + 1 } : item
      );
      setCart(newCart);
    } else {
      // If item doesn't exist, add it to the cart
      setCart([...cart, newItem]);
    }
  };

   return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
