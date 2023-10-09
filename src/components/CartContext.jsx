import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => {
    return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState({});

    const addToCart = (product) => {
        const updatedCart = { ...cart };
        if (updatedCart[product.id]) {
            updatedCart[product.id].quantity += 1;
        } else {
            updatedCart[product.id] = { ...product, quantity: 1 };
        }
        setCart(updatedCart);
    };

    const removeFromCart = (productId) => {
        const updatedCart = cart.filter((product) => product.id !== productId);
        setCart(updatedCart);
    };

    const getTotalPrice = () => {
        return cart.reduce((total, product) => total + product.price, 0);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, getTotalPrice }}>
            {children}
        </CartContext.Provider>
    );
};
