import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import { FaShoppingCart } from 'react-icons/fa';
import './Navbar.css';

function Navbar() {
  const { cartItems } = useContext(CartContext);
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/search?q=${searchQuery}`);
    }
  };

  return (
    <nav className="p-1 shadow-lg fixed w-full top-0 z-50 ">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img src="https://i.pinimg.com/564x/94/a7/e5/94a7e5648cc374f57483762afd73a6b9.jpg" alt="Logo" className="w-10 h-10 rounded-full shadow-lg transition-transform transform hover:scale-110" />
          <Link to="/" className="hover:text-white font-bold transition duration-300 hover:underline">Accueil</Link>
          <Link to="/about" className=" hover:text-white font-bold transition duration-300 hover:underline">À propos</Link>
          <Link to="/contact" className=" hover:text-white font-bold transition duration-300 hover:underline">Contact</Link>
        </div>

        {/* Input de recherche */}
        <div className="flex items-center">
          <input
            type="text"
            className="border rounded-l p-1 text-black font-semibold"
            placeholder="Rechercher un produit..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            onClick={handleSearch}
            className="bg-red-950 text-white px-4 font-bold rounded-r hover:bg-red-950 transition hover:underline duration-300"
          >
            Rechercher
          </button>
        </div>

        <div className="flex items-center space-x-4">
        <Link to="/cart" className="relative flex items-center hover:text-white transition duration-300">
            <FaShoppingCart size={24} />
            <span className="absolute top-0 right-0 bg-white text-black rounded-full w-3 h-3 flex items-center justify-center text-xs font-bold">{totalItems}</span>
          </Link>
          <Link to="/login" className=" hover:text-white font-bold transition duration-300 hover:underline">Se connecter</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
