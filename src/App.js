import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import Index from './components/Index';
import { Footer } from './components/Footer';
import { ShoppingCart } from './components/Cart';
import { ContactForm } from './components/Contact';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path={"/"} element={<Index />} />
        <Route path={"/contact"} element={<ContactForm />} />
        <Route path={"/shopping"} element={<ShoppingCart />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
