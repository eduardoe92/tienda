import React, { useState, createContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import Index from './components/Index';
import Footer from './components/Footer';
import ShoppingCart from './components/Cart';
import { ContactForm } from './components/Contact';
import CheckoutForm from './components/Checkout';
import CategoryPage from './components/CategoryPage';
import { CartProvider } from './components/CartContext';
import ScrollToTop from './components/Helpers';
import DetailsProduct from './components/DetailsProduct';

export const CartContext = createContext();

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const updatedCart = [...cart];
    updatedCart.push(product);
    setCart(updatedCart);
  };

  return (
    <div>
      <CartProvider>
        <CartContext.Provider value={{ cart, addToCart }}>
          <ScrollToTop />
          <Navbar />
          <Routes>
            <Route exact path={"/"} element={<Index cart={cart} addToCart={addToCart} />} />
            <Route path={"/contact"} element={<ContactForm />} />
            <Route path={"/shopping"} element={<ShoppingCart />} />
            <Route path={"/checkout"} element={<CheckoutForm />} />
            <Route path={"/categoria/:category"} element={<CategoryPage />} />
            <Route path={"/product/:id"} element={<DetailsProduct />} />
          </Routes>
          <Footer />
        </CartContext.Provider>
      </CartProvider>
    </div>
  );
}


export default App;