import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import './Productdetail.css';

const products = [
  {
    id: 1,
    name: "Shirts - Khaki",
  description: "HAUTE QUALITE",
    price: 3600,
    imageUrl: "https://i.pinimg.com/564x/dc/e3/98/dce398be0bd25d0610049603d7675266.jpg"
  },
  {
    id: 2,
    name: "Chemise 2 tons",
    description: "HAUTE QUALITE",
    price: 4100,
    imageUrl: "https://i.pinimg.com/564x/1e/fd/4e/1efd4e9e7ff5d23060d008a119c6b59a.jpg"
  },
  {
    id: 3,
    name: "Chemise carreaux",
    description: "HAUTE QUALITE",
    price: 5400,
    imageUrl: "https://i.pinimg.com/564x/82/1c/fe/821cfee8bc923f5c3b330816c7bb9f16.jpg"
  },
  {
    id: 4,
    name: "Sleeve Shirt",
    description: "HAUTE QUALITE",
    price: 3500,
    imageUrl: "https://i.pinimg.com/564x/7f/50/72/7f5072fe509d1572fee89a662cb45139.jpg"
  },
  {
    id: 5,
    name: "Cotton T-shirt",
    description: "HAUTE QUALITE",
    price: 3550,
    imageUrl: "https://i.pinimg.com/564x/ee/60/08/ee60087f7043f9f21d031ef53541ef67.jpg"
  },
  {
    id: 6,
    name: "T-shirt Cartoon",
    description: "HAUTE QUALITE",
    price: 5200,
    imageUrl: "https://i.pinimg.com/564x/4e/ef/80/4eef80c15c2edf43190bbcbea91a343e.jpg"
  },
  {
    id: 7,
    name: "T-shirt Coffee",
    description: "HAUTE QUALITE",
    price: 4500,
    imageUrl: "https://i.pinimg.com/564x/ee/78/f9/ee78f961453a024d4179ad79fece770f.jpg"
  },
  {
    id: 8,
    name: "T-shirt Coffee",
    description: "HAUTE QUALITE",
    price: 3750,
    imageUrl: "https://i.pinimg.com/564x/a1/c0/89/a1c089f0d17fd4c2abc8ac8721300e46.jpg"
  },
  {
    id: 9,
    name: "Hombre Jean",
    description: "HAUTE QUALITE",
    price: 5000,
    imageUrl: "https://i.pinimg.com/564x/63/2f/d3/632fd339e82e95b42dd3851fe5493107.jpg"
  },
  {
    id: 10,
    name: "Jean Relaxed",
    description: "HAUTE QUALITE",
    price: 7500,
    imageUrl: "https://i.pinimg.com/564x/bd/54/08/bd54080290104fcacfdd356a5d4179ac.jpg"
  },
  {
    id: 11,
    name: "Jean light blue",
    description: "HAUTE QUALITE",
    price: 7000,
    imageUrl: "https://i.pinimg.com/564x/ca/64/4e/ca644e75b73581ca149f4ceb0adfbd4f.jpg"
  },
  // Ajoutez d'autres produits ici...
  {
    id: 12,
    name: "Short Sleeve",
    description: "HAUTE QUALITE",
    price: 5000,
    imageUrl: "https://i.pinimg.com/564x/99/6e/39/996e393fb9dd4e6b890b1b9c33634bee.jpg"
  },
  {
    id: 13,
    name: "Black T-shirt",
    description: "HAUTE QUALITE",
    price: 2500,
    imageUrl: "https://i.pinimg.com/564x/61/6d/e5/616de5de7ada43ab5202f085e850cb78.jpg"
  },
  {
    id: 14,
    name: "Olivia Mark",
    description: "HAUTE QUALITE",
    price: 3000,
    imageUrl: "https://i.pinimg.com/564x/46/bc/4b/46bc4b4be1b30b37322d60198d397733.jpg"
  },
  {
    id: 15,
    name: "Cute Daisy",
    description: "HAUTE QUALITE",
    price: 3750,
    imageUrl: "https://i.pinimg.com/564x/47/2a/94/472a94bd973cad190dda7233d32c729f.jpg"
  },
  {
    id: 16,
    name: "Jupe en Jean",
    description: "HAUTE QUALITE",
    price: 4750,
    imageUrl: "https://i.pinimg.com/564x/e3/c3/ea/e3c3ea319e677e6f28bc58b4d8630345.jpg"
  },
  {
    id: 17,
    name: "Floral",
    description: "HAUTE QUALITE",
    price: 6500,
    imageUrl: "https://i.pinimg.com/564x/05/48/f0/0548f0d809cd93589b5aa0c38a9f5714.jpg"
  },
  {
    id: 18,
    name: "Houndstooth ",
    description: "HAUTE QUALITE",
    price: 3500,
    imageUrl: "https://i.pinimg.com/564x/0d/ef/67/0def67c6c92ff85b9d88cdae9d4ba206.jpg"
  },
  {
    id: 19,
    name: "Robe Fine",
    description: "HAUTE QUALITE",
    price: 4500,
    imageUrl: "https://i.pinimg.com/564x/c1/06/7a/c1067ae87b11d05fa0ca8f4746b174b4.jpg"
  },
  {
    id: 6250,
    name: "Mini Jean",
    description: "HAUTE QUALITE",
    price: 5500 ,
    imageUrl: "https://i.pinimg.com/564x/f4/a2/d9/f4a2d9db32e7e5e7722b5eb548e90ae9.jpg"
  },
  {
    id: 21,
    name: "Jupe Jean",
    description: "HAUTE QUALITE",
    price: 6000,
    imageUrl: "https://i.pinimg.com/736x/26/08/98/260898ea2e4205768f0e188c967ad37a.jpg"
  },
  {
    id: 22,
    name: "Jean Fisdy",
    description: "HAUTE QUALITE",
    price: 5000,
    imageUrl: "https://i.pinimg.com/736x/43/02/5e/43025e310ce0d48f6f0b0ba50dab1f77.jpg"
  },
  {
    id: 23,
    name: "Olivia Mark",
    description: "HAUTE QUALITE",
    price: 5050,
    imageUrl: "https://i.pinimg.com/564x/56/be/47/56be474a579a122099fd820678f41b38.jpg"
  },
  {
    id: 24,
    name: "Jean jupe",
    description: "HAUTE QUALITE",
    price: 6500,
    imageUrl: "https://i.pinimg.com/736x/d8/f5/23/d8f523cc32739e76d3a068ccf81b335e.jpg"
  },
  {
    id: 25,
    name: "Pantalon",
    description: "HAUTE QUALITE",
    price: 7500,
    imageUrl: "https://i.pinimg.com/564x/4b/01/94/4b0194d2d6abefb60320047af8d6a486.jpg"
  },
  {
    id: 26,
    name: "Ensemble",
    description: "HAUTE QUALITE",
    price: 8500,
    imageUrl: "https://i.pinimg.com/564x/8a/2d/55/8a2d557c909c9a1b81e2c80eb74f5666.jpg"
  },
  {
    id: 27,
    name: "Pantalon",
    description: "HAUTE QUALITE",
    price: 9500,
    imageUrl: "https://i.pinimg.com/564x/cc/3d/b6/cc3db60c816fe1b120554f43307352a1.jpg"
  },
  // Liste des produits pour Home.js
];

function ProductDetail() {
  const { productId } = useParams();
  const { addToCart } = useContext(CartContext);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedShoeSize, setSelectedShoeSize] = useState(''); // Add this if applicable

  const product = products.find(p => p.id === parseInt(productId));

  if (!product) {
    return <div>Produit non trouvé</div>;
  }

  const handleAddToCart = () => {
    addToCart(product, selectedSize, selectedColor, selectedShoeSize);
  };

  return (
    <div className="product-detail container mx-auto p-8">
      <div className="flex flex-col md:flex-row items-center">
        <img src={product.imageUrl} alt={product.name} className="w-100 h-100 object-cover mb-4 md:mb-0 md:mr-8 rounded-lg shadow-lg" />
        <div className="flex flex-col items-start">
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <p className="text-xl text-gray-500 mb-4">{product.description}</p>
          <p className="text-2xl text-blue-500 font-bold mb-4">{product.price} FCFA</p>
          <div className="mb-4">
            <label className="block text-lg font-medium mb-2">Taille:</label>
            <select value={selectedSize} onChange={(e) => setSelectedSize(e.target.value)} className="border rounded p-2">
              <option value="">Sélectionnez la taille</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-lg font-medium mb-2">Couleur:</label>
            <select value={selectedColor} onChange={(e) => setSelectedColor(e.target.value)} className="border rounded p-2">
              <option value="">Sélectionnez la couleur</option>
              <option value="Rouge">Rouge</option>
              <option value="Bleu">Bleu</option>
              <option value="Vert">Vert</option>
              <option value="Noir">Noir</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-lg font-medium mb-2">Pointure:</label>
            <select value={selectedShoeSize} onChange={(e) => setSelectedShoeSize(e.target.value)} className="border rounded p-2">
              <option value="">Sélectionnez la pointure</option>
              <option value="38">38</option>
              <option value="39">39</option>
              <option value="40">40</option>
              <option value="41">41</option>
            </select>
          </div>
          <button className="bg-red-900 text-white py-2 px-4 rounded hover:bg-red-700 transition duration-300" onClick={handleAddToCart}>
            Ajouter au panier
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
