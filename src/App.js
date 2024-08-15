// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Homme from './components/Homme';
import Femme from './components/Femme';
import ProductDetail from './components/ProductDetail';
import ProductDetailHomme from './components/ProductDetailHomme';
import ProductDetailFemme from './components/ProductDetailFemme';
import Cart from './components/Cart';
import Contact from './components/Contact';
import Login from './components/Login';
import Navbar from './components/Navbar';
import { CartProvider } from './contexts/CartContext';
import About from './components/About';
import ProductDetailBebe from './components/ProductDetailBebe';
import Bebe from './components/Bebe';
import Accessoires from './components/Accessoires';
import ProductDetailAccessoires from './components/ProductDetailAccessoires';
import SearchResults from './components/SearchResults';
import Footer from './components/footer';

function App() {
  return (
    <Router>
      <CartProvider>
      <div>
      
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/homme" element={<Homme />} />
          <Route path="/femme" element={<Femme />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/product-accessoire/:id" element={<ProductDetailAccessoires />} />
          <Route path="/accessoires" element={<Accessoires />} />
          <Route path="/Bebe" element={<Bebe />} />
          <Route path="/about" element={<About />} />
          
          <Route path="/product-bebe/:id" element={<ProductDetailBebe />} />
          <Route path="/search" element={<SearchResults/>} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
          <Route path="/product-homme/:productId" element={<ProductDetailHomme />} />
          <Route path="/product-femme/:productId" element={<ProductDetailFemme />} />
          
        </Routes>
      
     
         <Footer/> 
     </div>
     </CartProvider>
    </Router>
  );
}

export default App;
