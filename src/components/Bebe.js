import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { CartContext } from '../contexts/CartContext';

const sections = [
  {
    id: 'vetements',
    title: 'Vêtements',
    products: [
      { id: 1, name: 'Ensemble Fun', price: 3200, imageUrl: 'https://i.pinimg.com/564x/80/0a/9c/800a9c2cc5a4aed6d056f48fc7f3700a.jpg' },
      { id: 2, name: 'Bebe Robe', price: 4200, imageUrl: 'https://i.pinimg.com/736x/c3/22/7e/c3227e666e695370c970e9f56e30c006.jpg' },
      { id: 3, name: 'ensemble bebe rose', price: 5200, imageUrl: 'https://i.pinimg.com/564x/1c/0d/2d/1c0d2d9cafeb3f8000f47ac93fea7463.jpg' },
      { id: 4, name: 'combinaison bebe', price: 6100, imageUrl: 'https://i.pinimg.com/564x/a0/20/bf/a020bf6da5e1ddbfb028453ce8b39870.jpg' },
      { id: 5, name: 'salopette Bébé', price: 5900, imageUrl: 'https://i.pinimg.com/564x/b0/aa/0f/b0aa0f1bc6a9b825171e7a5700435a4f.jpg' },
      { id: 6, name: 'combine orange Bébé', price: 7900, imageUrl: 'https://i.pinimg.com/564x/65/c3/63/65c3634e506e20c2d6c5860d3f28174b.jpg' },
      { id: 7, name: 'combine jaune Bébé', price: 3900, imageUrl: 'https://i.pinimg.com/564x/78/39/4e/78394e2e31155f3d653505d7b12e4e0e.jpg' },
      { id: 8, name: 'outfit baby girl', price: 5500, imageUrl: 'https://i.pinimg.com/564x/71/b9/a7/71b9a7bf598c24c4532a2adcc0312026.jpg' },
      { id: 9, name: 'outfit Bébé', price: 5500, imageUrl: 'https://i.pinimg.com/564x/eb/60/81/eb6081a2a5e4eb873afc217663d222da.jpg' },
      { id: 10, name: 'outfit Baby', price: 6600, imageUrl: 'https://i.pinimg.com/564x/c8/f9/90/c8f9909bbec00537ef3d2d804dadae11.jpg' },
      { id: 11, name: 'outfit Mickey', price: 3700, imageUrl: 'https://i.pinimg.com/564x/9e/f5/a5/9ef5a51d405d106b63ec3d23e4b71e5c.jpg' },
      { id: 12, name: 'outfit green Bébé', price: 4500, imageUrl: 'https://i.pinimg.com/564x/68/19/84/681984775c8bff404e4180990b880891.jpg' },
      { id: 13, name: 'Pyjama Bébé', price: 3900, imageUrl: 'https://i.pinimg.com/736x/fa/cb/1b/facb1bd7b4edb9a7f86ac010ba95c97d.jpg' },
      { id: 14, name: 'Outfit Marvel', price: 6500, imageUrl: 'https://i.pinimg.com/736x/50/aa/be/50aabeaabf03f766ffd6e595c1d95e0c.jpg' },
      // Ajoutez d'autres produits ici...
    ],
  },
  {
    id: 'chaussures',
    title: 'Chaussures',
    products: [
      { id: 15, name: 'Chaussons Coton', price: 3500, imageUrl: 'https://i.pinimg.com/564x/83/91/e9/8391e9f8111f5d46fa3aef4a1022ccab.jpg' },
      { id: 16, name: 'chaussure blanc Bébé', price: 4700, imageUrl: 'https://i.pinimg.com/564x/5d/0b/60/5d0b605e9ca2bc6f10f2a5230c1b6c18.jpg' },
      { id: 17, name: 'Sandales Douces', price: 3900, imageUrl: 'https://i.pinimg.com/564x/05/b5/f6/05b5f67578f7596f778156ed8aabf26c.jpg' },
      { id: 18, name: 'Chaussures Fille', price: 5200, imageUrl: 'https://i.pinimg.com/564x/e9/04/52/e90452d895cec43aeefcd70b6c99a46d.jpg' },
      { id: 19, name: 'Baskets Bébé', price: 4600, imageUrl: 'https://i.pinimg.com/564x/9c/1f/69/9c1f692592f8f237df0300853d2893d3.jpg' },
      { id: 20, name: 'Baskets Nike Bébé', price: 4600, imageUrl: 'https://i.pinimg.com/564x/91/0d/a7/910da7dc4e9cf083fd05726e16039459.jpg' },
      { id: 21, name: 'Baskets crocheted', price: 4600, imageUrl: 'https://i.pinimg.com/564x/88/5f/73/885f732f27985a561f80a97f93174ca1.jpg' },
      { id: 22, name: 'Baskets adidas', price: 4600, imageUrl: 'https://i.pinimg.com/564x/cf/01/21/cf01219dfffa16ccc3dfc856c38a731a.jpg' },
      { id: 23, name: 'Chaussure Off white', price: 4600, imageUrl: 'https://i.pinimg.com/564x/51/19/2b/51192b878d200b82613b48cfd88fc675.jpg' },
      { id: 24, name: 'Baskets mickey Bébé', price: 4600, imageUrl: 'https://i.pinimg.com/564x/b6/e6/de/b6e6dee9f6bdc129c90a83a6654d315c.jpg' },
      { id: 25, name: 'Baskets sapitinho Bébé', price: 4600, imageUrl: 'https://i.pinimg.com/564x/ac/a5/67/aca567d2deca3581b0d08f8beadd7a3c.jpg' },
      { id: 26, name: 'Chaussure black Bébé', price: 4600, imageUrl: 'https://i.pinimg.com/564x/2c/2e/aa/2c2eaa5f699e8c631093e17574182a79.jpg' },
      { id: 27, name: 'Adidas Bébé', price: 4600, imageUrl: 'https://i.pinimg.com/564x/e3/1e/ac/e31eac7a2c14e993aa26b15d361f476d.jpg' },
      { id: 28, name: 'Bandana air force', price: 4600, imageUrl: 'https://i.pinimg.com/564x/9f/c1/62/9fc162b5039103b3b0a1548dfc20bff2.jpg' },
      { id: 29, name: 'Baskets multicolor', price: 4600, imageUrl: 'https://i.pinimg.com/564x/9c/1f/69/9c1f692592f8f237df0300853d2893d3.jpg' },
      { id: 30, name: 'toldder shoes', price: 4600, imageUrl: 'https://i.pinimg.com/564x/7a/a1/f1/7aa1f117158c979c3610f56dd9551424.jpg' },
      { id: 31, name: 'Trainers Bébé', price: 4600, imageUrl: 'https://i.pinimg.com/564x/04/a5/f1/04a5f1caef51126dbc43de1d6090312d.jpg' },
      { id: 32, name: 'chinelo Bébé', price: 2600, imageUrl: 'https://i.pinimg.com/564x/69/eb/de/69ebde1209d65866030639645df6fb2c.jpg' },
      { id: 33, name: 'Strap Bébé', price: 4600, imageUrl: 'https://i.pinimg.com/564x/e6/b3/ab/e6b3ab02d9949044034778e3fb45509d.jpg' },
      { id: 34, name: 'Comfy sandales', price: 3600, imageUrl: 'https://i.pinimg.com/564x/5e/6b/fe/5e6bfe4a1785927741cae03934131019.jpg' },
      // Ajoutez d'autres produits ici...
    ],
  },
 
];

function Bebe() {
  const { addToCart } = useContext(CartContext);
  const [indices, setIndices] = useState(
    sections.reduce((acc, section) => {
      acc[section.id] = 0;
      return acc;
    }, {})
  );

  const handlePrev = (sectionId) => {
    setIndices({
      ...indices,
      [sectionId]: Math.max(indices[sectionId] - 4, 0),
    });
  };

  const handleNext = (sectionId, productsLength) => {
    setIndices({
      ...indices,
      [sectionId]: Math.min(indices[sectionId] + 4, productsLength - 4),
    });
  };

  return (
    <div className=" text-black py-16 px-8">
      <h2 className="page-title text-center text-4xl font-extrabold mb-12 underline">Bébé</h2>
      {sections.map(section => (
        <div key={section.id} className="section mb-16">
          <h3 className="section-title text-center underline text-2xl font-bold mb-6">{section.title}</h3>
          <div className="relative">
            <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-red-950 text-white p-3 rounded-full  hover:bg-red-600  transition duration-300 shadow-md" onClick={() => handlePrev(section.id)}>
              <FaChevronLeft className="text-white" />
            </button>
            <div className="product-cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {section.products.slice(indices[section.id], indices[section.id] + 4).map(product => (
                <Link to={`/product-bebe/${product.id}`} key={product.id} className="product-card-link">
                  <div className="product-card bg-white text-black rounded-lg shadow-lg p-4 m-4 flex flex-col items-center h-80 transition-transform transform hover:scale-105">
                    <img src={product.imageUrl} alt={product.name} className="w-32 h-32 object-cover mb-4 rounded-lg" />
                    <h3 className="font-bold text-lg mb-2 text-center">{product.name}</h3>
                    <p className="text-gray-500 text-center">{product.description}</p>
                    <p className="product-price text-blue-500 font-bold mb-2">{product.price} FCFA</p>
                    <Link to={`/product/${product.id}`} className="mt-auto bg-red-950 hover:bg-red-900 text-white py-1 px-3 rounded transition duration-300 text-center">
            Voir les détails
          </Link>
                  </div>
                </Link>
              ))}
            </div>
            <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-red-950 text-white p-3 rounded-full  hover:bg-red-900  transition duration-300 shadow-md" onClick={() => handleNext(section.id, section.products.length)}>
              <FaChevronRight className="text-white" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Bebe;
