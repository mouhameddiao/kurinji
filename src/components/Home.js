// src/components/Home.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight, } from 'react-icons/fa';
import './Home.css';

import './Home.css';
const productsHomme = [
  {
    id: 1,
    name: "Shirts - Khaki",
    
    price: 3600,
    imageUrl: "https://i.pinimg.com/564x/dc/e3/98/dce398be0bd25d0610049603d7675266.jpg"
  },
  {
    id: 2,
    name: "Chemise 2 tons",
  
    price: 4100,
    imageUrl: "https://i.pinimg.com/564x/1e/fd/4e/1efd4e9e7ff5d23060d008a119c6b59a.jpg"
  },
  {
    id: 3,
    name: "Chemise carreaux",
    
    price: 5400,
    imageUrl: "https://i.pinimg.com/564x/82/1c/fe/821cfee8bc923f5c3b330816c7bb9f16.jpg"
  },
  {
    id: 4,
    name: "Sleeve Shirt",
    
    price: 3500,
    imageUrl: "https://i.pinimg.com/564x/7f/50/72/7f5072fe509d1572fee89a662cb45139.jpg"
  },
  {
    id: 5,
    name: "Cotton T-shirt",
    
    price: 3550,
    imageUrl: "https://i.pinimg.com/564x/ee/60/08/ee60087f7043f9f21d031ef53541ef67.jpg"
  },
  {
    id: 6,
    name: "T-shirt Cartoon",
    
    price: 5200,
    imageUrl: "https://i.pinimg.com/564x/4e/ef/80/4eef80c15c2edf43190bbcbea91a343e.jpg"
  },
  {
    id: 7,
    name: "T-shirt Coffee",
    
    price: 4500,
    imageUrl: "https://i.pinimg.com/564x/ee/78/f9/ee78f961453a024d4179ad79fece770f.jpg"
  },
  {
    id: 8,
    name: "T-shirt Coffee",
    
    price: 3750,
    imageUrl: "https://i.pinimg.com/564x/a1/c0/89/a1c089f0d17fd4c2abc8ac8721300e46.jpg"
  },
  {
    id: 9,
    name: "Hombre Jean",
    
    price: 5000,
    imageUrl: "https://i.pinimg.com/564x/63/2f/d3/632fd339e82e95b42dd3851fe5493107.jpg"
  },
  {
    id: 10,
    name: "Jean Relaxed",
    
    price: 7500,
    imageUrl: "https://i.pinimg.com/564x/bd/54/08/bd54080290104fcacfdd356a5d4179ac.jpg"
  },
  {
    id: 11,
    name: "Jean light blue",
    
    price: 7000,
    imageUrl: "https://i.pinimg.com/564x/ca/64/4e/ca644e75b73581ca149f4ceb0adfbd4f.jpg"
  },
  // Ajoutez d'autres produits ici...
];

const productsFemme = [
  {
    id: 12,
    name: "Short Sleeve",
    
    price: 5000,
    imageUrl: "https://i.pinimg.com/564x/99/6e/39/996e393fb9dd4e6b890b1b9c33634bee.jpg"
  },
  {
    id: 13,
    name: "Black T-shirt",
    
    price: 2500,
    imageUrl: "https://i.pinimg.com/564x/61/6d/e5/616de5de7ada43ab5202f085e850cb78.jpg"
  },
  {
    id: 14,
    name: "Olivia Mark",
    
    price: 3000,
    imageUrl: "https://i.pinimg.com/564x/46/bc/4b/46bc4b4be1b30b37322d60198d397733.jpg"
  },
  {
    id: 15,
    name: "Cute Daisy",
    
    price: 3750,
    imageUrl: "https://i.pinimg.com/564x/47/2a/94/472a94bd973cad190dda7233d32c729f.jpg"
  },
  {
    id: 16,
    name: "Jupe en Jean",
    
    price: 4750,
    imageUrl: "https://i.pinimg.com/564x/e3/c3/ea/e3c3ea319e677e6f28bc58b4d8630345.jpg"
  },
  {
    id: 17,
    name: "Floral",
    
    price: 6500,
    imageUrl: "https://i.pinimg.com/564x/05/48/f0/0548f0d809cd93589b5aa0c38a9f5714.jpg"
  },
  {
    id: 18,
    name: "Houndstooth ",
    
    price: 3500,
    imageUrl: "https://i.pinimg.com/564x/0d/ef/67/0def67c6c92ff85b9d88cdae9d4ba206.jpg"
  },
  {
    id: 19,
    name: "Robe Fine",
    
    price: 4500,
    imageUrl: "https://i.pinimg.com/564x/c1/06/7a/c1067ae87b11d05fa0ca8f4746b174b4.jpg"
  },
  {
    id: 6250,
    name: "Mini Jean",
    
    price: 5500 ,
    imageUrl: "https://i.pinimg.com/564x/f4/a2/d9/f4a2d9db32e7e5e7722b5eb548e90ae9.jpg"
  },
  {
    id: 21,
    name: "Jupe Jean",
  
    price: 6000,
    imageUrl: "https://i.pinimg.com/736x/26/08/98/260898ea2e4205768f0e188c967ad37a.jpg"
  },
  {
    id: 22,
    name: "Jean Fisdy",
    
    price: 5000,
    imageUrl: "https://i.pinimg.com/736x/43/02/5e/43025e310ce0d48f6f0b0ba50dab1f77.jpg"
  },
  {
    id: 23,
    name: "Olivia Mark",
    
    price: 5050,
    imageUrl: "https://i.pinimg.com/564x/56/be/47/56be474a579a122099fd820678f41b38.jpg"
  },
  {
    id: 24,
    name: "Jean jupe",
    
    price: 6500,
    imageUrl: "https://i.pinimg.com/736x/d8/f5/23/d8f523cc32739e76d3a068ccf81b335e.jpg"
  },
  {
    id: 25,
    name: "Pantalon",
    
    price: 7500,
    imageUrl: "https://i.pinimg.com/564x/4b/01/94/4b0194d2d6abefb60320047af8d6a486.jpg"
  },
  {
    id: 26,
    name: "Ensemble",
    
    price: 8500,
    imageUrl: "https://i.pinimg.com/564x/8a/2d/55/8a2d557c909c9a1b81e2c80eb74f5666.jpg"
  },
  {
    id: 27,
    name: "Pantalon",
   
    price: 9500,
    imageUrl: "https://i.pinimg.com/564x/cc/3d/b6/cc3db60c816fe1b120554f43307352a1.jpg"
  },
  // Ajoutez d'autres produits ici...
];

function Home() {
  const [currentHommeIndex, setCurrentHommeIndex] = useState(0);
  const [currentFemmeIndex, setCurrentFemmeIndex] = useState(0);

  const renderProducts = (products) => {
    return products.map(product => (
      <Link to={`/product/${product.id}`} key={product.id} className="product-card-link">
        <div className="product-card bg-white rounded-lg shadow-lg p-4 m-4 flex flex-col items-center h-80">
          <img src={product.imageUrl} alt={product.name} className="w-32 h-32 object-cover mb-4 rounded-lg" />
          <h3 className="font-bold text-lg mb-2 text-center">{product.name}</h3>
          <p className="text-black text-center">{product.description}</p>
          <p className="product-price text-blue-500 font-bold mb-2">{product.price} FCFA</p>
          <Link to={`/product/${product.id}`} className="mt-auto bg-red-950 hover:bg-red-900 text-white py-1 px-3 rounded transition duration-300 text-center">
            Voir les détails
          </Link>
        </div>
      </Link>
    ));
  };


  const displayProductsHomme = productsHomme.slice(currentHommeIndex, currentHommeIndex + 4);
  const displayProductsFemme = productsFemme.slice(currentFemmeIndex, currentFemmeIndex + 4);

  const handlePrevHomme = () => {
    if (currentHommeIndex > 0) {
      setCurrentHommeIndex(currentHommeIndex - 4);
    }
  };

  const handleNextHomme = () => {
    if (currentHommeIndex + 4 < productsHomme.length) {
      setCurrentHommeIndex(currentHommeIndex + 4);
    }
  };

  const handlePrevFemme = () => {
    if (currentFemmeIndex > 0) {
      setCurrentFemmeIndex(currentFemmeIndex - 4);
    }
  };

  const handleNextFemme = () => {
    if (currentFemmeIndex + 4 < productsFemme.length) {
      setCurrentFemmeIndex(currentFemmeIndex + 4);
    }
  };

  return (
    <div className="home">
      <header className="home-header relative h-[700px] flex flex-col items-center justify-center text-white">
        <video className="absolute top-0 left-0 w-full h-full object-cover" autoPlay loop muted>
          <source src="https://cdn.pixabay.com/video/2015/10/16/1006-142621176_large.mp4" type="video/mp4" />
        </video>
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
        <div className="header-content relative text-center p-4 rounded-lg z-10 flex flex-col items-center">
          <img src="https://i.pinimg.com/564x/94/a7/e5/94a7e5648cc374f57483762afd73a6b9.jpg" alt="Logo" className="w-48 h-48 mb-4 rounded-full shadow-lg border-2 border-black" />
          <h1 className="text-5xl font-extrabold mb-2 text-center text-gray-100 ">Bienvenue sur notre marché en ligne</h1>
        
        </div>

        {/* Mini tableau stylisé pour "Boutique" */}
        <div className="absolute bottom-10 w-3/4 bg-red-950 bg-opacity-90 backdrop-blur-sm rounded-lg shadow-lg p-4 z-20">
          <h2 className="text-3xl font-extrabold text-center mb-4 text-white ">Boutique</h2>
          <div className="grid grid-cols-4 gap-6">
            <Link
              to="/Homme"
              className="text-xl font-semibold text-center bg-white text-black py-3 rounded-lg hover:bg-gray-300 transition duration-300 shadow-md"
            >
               HOMME
            </Link>
            <Link
              to="/bebe"
              className="text-xl font-semibold text-center bg-white text-black py-3 rounded-lg hover:bg-gray-300 transition duration-300 shadow-md"
            >
               BEBE
            </Link>
            <Link
              to="/accessoires"
              className="text-xl font-semibold text-center bg-white text-black py-3 rounded-lg hover:bg-gray-300 transition duration-300 shadow-md"
            >
               ACCESSOIRES
            </Link>
            <Link
              to="/Femme"
              className="text-xl font-semibold text-center bg-white text-black py-3 rounded-lg hover:bg-gray-300 transition duration-300 shadow-md"
            >
               FEMME
            </Link>
          </div>
        </div>
      </header>

      <section className="home-section p-12">
        <h2 className="text-4xl font-bold text-center mb-6 text-gray-800">Popular Outfits  Homme</h2>
        <div className="relative">
          <button className="absolute left-0 top-1/2 transform -translate-y-1/2  text-white p-2 rounded-full  hover:bg-red-900  transition duration-300 shadow-lg" onClick={handlePrevHomme}>
            <FaChevronLeft />
          </button>
          <div className="product-cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {renderProducts(displayProductsHomme)}
          </div>
          <button className="absolute right-0 top-1/2 transform -translate-y-1/2  text-white p-2 rounded-full  hover:bg-red-900  transition duration-300 shadow-lg" onClick={handleNextHomme}>
            <FaChevronRight />
          </button>
        </div>
      </section>

      <section className="home-section p-12 bg-gray-100">
        <h2 className="text-4xl font-bold text-center mb-6 text-gray-800 ">Popular Outfits Femme</h2>
        <div className="relative">
          <button className="absolute left-0 top-1/2 transform -translate-y-1/2  text-white p-2 rounded-full  hover:bg-red-900  transition duration-300 shadow-lg" onClick={handlePrevFemme}>
            <FaChevronLeft />
          </button>
          <div className="product-cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {renderProducts(displayProductsFemme)}
          </div>
          <button className="absolute right-0 top-1/2 transform -translate-y-1/2  text-white p-2 rounded-full  hover:bg-red-900  transition duration-300 shadow-lg" onClick={handleNextFemme}>
            <FaChevronRight />
          </button>
        </div>
      </section>

      
    </div>
  );
}

export default Home;
