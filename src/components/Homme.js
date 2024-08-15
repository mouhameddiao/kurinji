// src/components/OutfitsHomme.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';



const sections = [
  {
    id: 'tshirts',
    title: 'T-Shirts',
    products: [
      { id: 1, name: ' décontracté', price: 8900, imageUrl: 'https://i.pinimg.com/564x/c9/64/71/c9647136488434573412f6ae49b1670d.jpg' },
      { id: 2, name: 'T-Shirt Dice', price: 7700, imageUrl: 'https://i.pinimg.com/564x/ce/92/e8/ce92e8db5ccf61fa3ca24e6899e52cd9.jpg' },
      { id: 3, name: 'T-Shirt funny', price: 9000, imageUrl: 'https://i.pinimg.com/564x/44/f9/ba/44f9ba234747848a259b825aa830c341.jpg' },
      { id: 4, name: 'T-Shirt smile', price: 5650, imageUrl: 'https://i.pinimg.com/564x/e0/48/ad/e048ad6bb4d80d9b6ffd915da952e70a.jpg' },
      { id: 5, name: 'T-Shirt Cartoon', price: 9690, imageUrl: 'https://i.pinimg.com/564x/55/df/0e/55df0e36bfa091942e73a373d9ff5d78.jpg' },
      { id: 6, name: 'Sleeve T-Shirt', price: 6700, imageUrl: 'https://i.pinimg.com/564x/f4/24/6d/f4246db6a5a650438efa5efeb6baaa79.jpg' },
      { id: 7, name: 'T-Shirt Graphique', price: 7400, imageUrl: 'https://i.pinimg.com/564x/09/72/50/097250e8fc05ac91ca218a4d6c7aad96.jpg' },
      { id: 8, name: 'T-Shirt manches', price: 4500, imageUrl: 'https://i.pinimg.com/564x/c6/f7/c1/c6f7c197ade195a9dbb9128550724d66.jpg' },
      { id: 9, name: 'T-Shirt rétro', price: 4990, imageUrl: 'https://i.pinimg.com/564x/55/df/0e/55df0e36bfa091942e73a373d9ff5d78.jpg' },
      { id: 10, name: 'T-Shirt japonais', price: 9940, imageUrl: 'https://i.pinimg.com/564x/46/45/90/464590b872ff67de47722bb187b95324.jpg' },
      { id: 11, name: 'T-Shirt squelette', price: 6740, imageUrl: 'https://i.pinimg.com/564x/24/b2/f0/24b2f066c4dde92d32c4f443fef4b51b.jpg' },
    ],
  },
  {
    id: 'pulls',
    title: 'Pulls',
    products: [
      { id: 12, name: 'Pull Chandail', price: 9900, imageUrl: 'https://i.pinimg.com/564x/d3/9b/99/d39b993f145edde508fed3b40257326c.jpg' },
      { id: 13, name: 'Pull Green', price: 4050, imageUrl: 'https://i.pinimg.com/564x/92/39/c2/9239c26686e65660eb489d0d04d9f2a2.jpg' },
      { id: 14, name: 'Pull christmas', price: 8800, imageUrl: 'https://i.pinimg.com/564x/49/f2/92/49f292a5ca0e9ab6cd55c98abdb8319e.jpg' },
      { id: 15, name: 'Pull Pattern', price: 6700, imageUrl: 'https://i.pinimg.com/564x/e8/66/25/e86625faf4d608f09d387c431f78f2a7.jpg' },
      { id: 16, name: 'Pull Pokemon', price: 9650, imageUrl: 'https://i.pinimg.com/564x/9c/82/18/9c8218ad8749616da224fb98608aca6f.jpg' },
      { id: 17, name: 'Pull Colorblock', price: 5690, imageUrl: 'https://i.pinimg.com/564x/d5/12/a1/d512a1c50baf545765dab36ee86e437a.jpg' },
      { id: 18, name: 'Pull Shoulder', price: 8400, imageUrl: 'https://i.pinimg.com/564x/ed/c1/2f/edc12f7a1c3a956232292f73bf301b4b.jpg' },
      { id: 19, name: 'Pull Vintage', price: 4440, imageUrl: 'https://i.pinimg.com/564x/8a/eb/1c/8aeb1c699d755af9c06910e93f98d2df.jpg' },
      { id: 20, name: 'Pull Squellette', price: 7500, imageUrl: 'https://i.pinimg.com/564x/21/fd/d2/21fdd285ac8790d9389d10b1a9811625.jpg' },
      { id: 21, name: 'Pull Patchwork', price: 5550, imageUrl: 'https://i.pinimg.com/564x/23/16/fa/2316fa83e0dc871b54274958580e687f.jpg' },
      // Ajoutez d'autres produits ici
    ],
  },
  {
    id: 'chemises',
    title: 'Chemises',
    products: [
      { id: 22, name: 'chemise Green', price: 9300, imageUrl: 'https://i.pinimg.com/564x/ed/eb/b4/edebb4866a135206f75591787d4ca6df.jpg' },
      { id: 23, name: 'chemise camisa', price: 6350, imageUrl: 'https://i.pinimg.com/564x/7f/4a/24/7f4a242475ec5f72feeaea95c6316931.jpg' },
      { id: 24, name: 'Chemise fashion', price: 7400, imageUrl: 'https://i.pinimg.com/564x/ed/eb/b4/edebb4866a135206f75591787d4ca6df.jpg' },
      { id: 25, name: 'chemise striped', price: 8800, imageUrl: 'https://i.pinimg.com/564x/18/64/8d/18648d45031c182a4966af5ef9a70588.jpg' },
      { id: 26, name: 'Chemise Veste', price: 7440, imageUrl: 'https://i.pinimg.com/736x/9a/b7/b6/9ab7b6607e441f0971c40a802fc512df.jpg' },
      { id: 27, name: 'Chemise Geometric', price: 8800, imageUrl: 'https://i.pinimg.com/736x/65/ea/78/65ea78cbd1e073dbf4c910f6251a4ef6.jpg' },
      { id: 28, name: 'Chemise Bangood', price: 5540, imageUrl: 'https://i.pinimg.com/564x/02/ef/7b/02ef7bc10911bd9b8a2c1f2825b7776c.jpg' },
      { id: 29, name: 'chemise incerun', price: 9450, imageUrl: 'https://i.pinimg.com/564x/37/0d/01/370d017d97597bbc475f59607a21bb15.jpg' },
      { id: 30, name: 'chemise breathable', price: 6400, imageUrl: 'https://i.pinimg.com/564x/0a/29/67/0a2967ebf2f77b35ce6511a19bbf2eb2.jpg' },
      { id: 31, name: 'chemise ethnic', price: 8040, imageUrl: 'https://i.pinimg.com/564x/00/33/41/0033415757564ee9db4c367829f7095f.jpg' },
      { id: 32, name: 'chemise jacket', price: 9400, imageUrl: 'https://i.pinimg.com/736x/38/2b/3d/382b3d9af0e37e387302a03ca8bec415.jpg' },
      { id: 33, name: 'chemise bolsillo', price: 7840, imageUrl: 'https://i.pinimg.com/564x/eb/57/9f/eb579fb13cc888b41ea25c2d989d6664.jpg' },
      { id: 34, name: 'Chemise colourful', price: 7500, imageUrl: 'https://i.pinimg.com/564x/d4/70/de/d470de5c0f6fd400ec2150ec27b24c69.jpg' },
      { id: 35, name: 'Chemise Up', price: 45, imageUrl: 'https://i.pinimg.com/564x/79/f3/db/79f3db565c468b3f24ca067ab723d53b.jpg' },
      // Ajoutez d'autres produits ici
    ],
  },
  {
    id: 'pantalons',
    title: 'Pantalons',
    products: [
      { id: 32, name: 'Pantalon de survêtement', price: 5000, imageUrl: 'https://i.pinimg.com/564x/8c/a2/2b/8ca22bf205bf7f0d40885249ac0432f0.jpg' },
      { id: 33, name: 'Jean de Pierna', price: 5500, imageUrl: 'https://i.pinimg.com/564x/d3/68/f3/d368f36c6ee162c255d8dae9510bbc8a.jpg' },
      { id: 34, name: 'Reel Baggy', price: 6600, imageUrl: 'https://i.pinimg.com/564x/8e/8d/19/8e8d19acba343386d4cc1f917bf80995.jpg' },
      { id: 35, name: 'Pantalon avec poches', price: 6500, imageUrl: 'https://i.pinimg.com/564x/4e/62/c3/4e62c3109697d804b6c5d40fe5e76183.jpg' },
      { id: 36, name: 'Pantalon décontracté', price:7500, imageUrl: 'https://i.pinimg.com/564x/8c/a2/2b/8ca22bf205bf7f0d40885249ac0432f0.jpg' },
      { id: 37, name: 'Jean moderne', price: 6555, imageUrl: 'https://i.pinimg.com/564x/d3/68/f3/d368f36c6ee162c255d8dae9510bbc8a.jpg' },
      { id: 38, name: 'Reel casual', price: 6700, imageUrl: 'https://i.pinimg.com/564x/8e/8d/19/8e8d19acba343386d4cc1f917bf80995.jpg' },
      { id: 39, name: 'Pantalon confortable', price: 8650, imageUrl: 'https://i.pinimg.com/564x/4e/62/c3/4e62c3109697d804b6c5d40fe5e76183.jpg' },
      { id: 40, name: 'Pantalon classique', price: 5900, imageUrl: 'https://i.pinimg.com/564x/8c/a2/2b/8ca22bf205bf7f0d40885249ac0432f0.jpg' },
      { id: 41, name: 'Jean vintage', price: 8550, imageUrl: 'https://i.pinimg.com/564x/d3/68/f3/d368f36c6ee162c255d8dae9510bbc8a.jpg' },
    ],
  },
  {
    id: 'jungles',
    title: 'Jungles',
    products: [
      { id: 42, name: 'Bermuda en jean', price: 7300, imageUrl: 'https://i.pinimg.com/564x/f9/06/f1/f906f199227f730add19162f23ea41d4.jpg' },
      { id: 43, name: 'Short sliver noir', price: 8350, imageUrl: 'https://i.pinimg.com/564x/10/ed/b4/10edb4f7bd49cc8ca47a024e58a3611b.jpg' },
      { id: 44, name: 'Short Oamc', price: 4790, imageUrl: 'https://i.pinimg.com/564x/06/42/f6/0642f638f9dac759f0f2ffe619ed8741.jpg' },
      { id: 45, name: 'Short Jean', price: 4550, imageUrl: 'https://i.pinimg.com/564x/37/09/43/3709434bf1d4dbdacfe4d492f1702f36.jpg' },
      { id: 46, name: 'Short casual', price: 6300, imageUrl: 'https://i.pinimg.com/564x/f9/06/f1/f906f199227f730add19162f23ea41d4.jpg' },
      { id: 47, name: 'Short classique', price: 8450, imageUrl: 'https://i.pinimg.com/564x/10/ed/b4/10edb4f7bd49cc8ca47a024e58a3611b.jpg' },
      { id: 48, name: 'Short moderne', price: 5900, imageUrl: 'https://i.pinimg.com/564x/06/42/f6/0642f638f9dac759f0f2ffe619ed8741.jpg' },
      { id: 49, name: 'Short vintage', price: 4590, imageUrl: 'https://i.pinimg.com/564x/37/09/43/3709434bf1d4dbdacfe4d492f1702f36.jpg' },
      { id: 50, name: 'Short confortable', price: 9300, imageUrl: 'https://i.pinimg.com/564x/f9/06/f1/f906f199227f730add19162f23ea41d4.jpg' },
      { id: 51, name: 'Short fashion', price: 6350, imageUrl: 'https://i.pinimg.com/564x/10/ed/b4/10edb4f7bd49cc8ca47a024e58a3611b.jpg' },
    ],
  },
  {
    id: 'combinaisons',
    title: 'Combinaisons',
    products: [
      { id: 52, name: 'Salopette en Denim', price: 6000, imageUrl: 'https://i.pinimg.com/564x/4b/90/64/4b90646fcab9f81713772efc95503664.jpg' },
      { id: 53, name: 'Look basico', price: 6500, imageUrl: 'https://i.pinimg.com/564x/bc/18/fd/bc18fd959cef5845e8214f7297c60db6.jpg' },
      { id: 54, name: 'Combinaison monochromatic', price: 7000, imageUrl: 'https://i.pinimg.com/564x/77/c0/5e/77c05eba2bbef4e74138e3c34ba993be.jpg' },
      { id: 55, name: 'Street Outfit', price: 7500, imageUrl: 'https://i.pinimg.com/736x/48/c1/a4/48c1a4077c336a8a2efd790f945ff075.jpg' },
      { id: 56, name: 'Combinaison décontractée', price: 7600, imageUrl: 'https://i.pinimg.com/564x/4b/90/64/4b90646fcab9f81713772efc95503664.jpg' },
      { id: 57, name: 'Look moderne', price: 6500, imageUrl: 'https://i.pinimg.com/564x/bc/18/fd/bc18fd959cef5845e8214f7297c60db6.jpg' },
      { id: 58, name: 'Combinaison fashion', price: 70, imageUrl: 'https://i.pinimg.com/564x/77/c0/5e/77c05eba2bbef4e74138e3c34ba993be.jpg' },
      { id: 59, name: 'Street style', price: 7575, imageUrl: 'https://i.pinimg.com/736x/48/c1/a4/48c1a4077c336a8a2efd790f945ff075.jpg' },
      { id: 60, name: 'Combinaison classique', price: 8600, imageUrl: 'https://i.pinimg.com/564x/4b/90/64/4b90646fcab9f81713772efc95503664.jpg' },
      { id: 61, name: 'Look vintage', price: 6500, imageUrl: 'https://i.pinimg.com/564x/bc/18/fd/bc18fd959cef5845e8214f7297c60db6.jpg' },
    ],
  },
  {
    id: 'chaussures',
    title: 'Chaussures',
    products: [
      { id: 62, name: 'Jordan 4 Retro', price: 6000, imageUrl: 'https://i.pinimg.com/564x/da/8b/c2/da8bc2632ed13b9cd9ffa20323964b66.jpg' },
      { id: 63, name: 'Custom Air Force 1', price: 6500, imageUrl: 'https://i.pinimg.com/564x/3b/78/c8/3b78c8dc45b6201559996ce15348b06f.jpg' },
      { id: 64, name: 'Fired Flamme', price: 7000, imageUrl: 'https://i.pinimg.com/564x/e9/ec/c7/e9ecc7a9b77e5146c9a011ee48cfc5f8.jpg' },
      { id: 65, name: 'Jordan 1', price: 7500, imageUrl: 'https://i.pinimg.com/564x/26/87/0c/26870c21427996dcf5d144bd18e5f7e6.jpg' },
      { id: 66, name: 'Timberlind', price: 7600, imageUrl: 'https://i.pinimg.com/564x/86/83/48/8683488007829dee389623932b7075db.jpg' },
      { id: 67, name: 'Custom Sunserise', price: 6500, imageUrl: 'https://i.pinimg.com/564x/76/d9/29/76d929334c139a47eb01f3370e666806.jpg' },
      { id: 68, name: 'DENGSS', price: 70, imageUrl: 'https://i.pinimg.com/564x/5e/7e/6f/5e7e6ff5f5140d9cfa29409ebffdf770.jpg' },
      { id: 69, name: 'Casual Sport', price: 7575, imageUrl: 'https://i.pinimg.com/564x/28/51/99/2851998ce9ae487f646a8b2305eb5459.jpg' },
      { id: 70, name: 'Chunky sneakers', price: 8600, imageUrl: 'https://i.pinimg.com/564x/e3/79/70/e379706b23702b8794325a14d124a658.jpg' },
      { id: 71, name: 'Zapatos', price: 6500, imageUrl: 'https://i.pinimg.com/564x/e2/29/b6/e229b6f55e8c308fe82b505c03965dfb.jpg' },
    ],
  },
  
];

function Homme() {
 
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
    <div className="outfits container mx-auto py-12">
      <h2 className="page-title text-4xl font-extrabold text-center mb-10 text-gray-800 ">Outfits Homme</h2>
      {sections.map(section => (
        <div key={section.id} className="section mb-16">
          <h3 className="section-title text-3xl font-bold text-gray-700 mb-6 text-center underline decoration-red-905">{section.title}</h3>
          <div className="relative">
            <button
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-red-950 text-white p-3 rounded-full  hover:bg-red-600  transition duration-300 shadow-md"
              onClick={() => handlePrev(section.id)}
            >
              <FaChevronLeft size={20} />
            </button>
            <div className="product-cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {section.products.slice(indices[section.id], indices[section.id] + 4).map(product => (
                <Link to={`/product-homme/${product.id}`} key={product.id} className="product-card-link">
                  <div className="product-card bg-white rounded-lg shadow-lg p-4 flex flex-col items-center h-80">
                    <img src={product.imageUrl} alt={product.name} className="w-32 h-32 object-cover mb-4 rounded-lg" />
                    <h3 className="font-bold text-lg mb-2 text-center">{product.name}</h3>
                    <p className="text-gray-500 text-center">{product.description}</p>
                    <p className="product-price text-blue-500 font-bold mb-2">{product.price} FCFA</p>
                    <Link to={`/product/${product.id}`} className="mt-auto bg-orange-700 hover:bg-red-600 text-white py-1 px-3 rounded transition duration-300 text-center">
            Voir les détails
          </Link>
                  </div>
                </Link>
              ))}
            </div>
            <button
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-red-950 text-white p-3 rounded-full  hover:bg-red-600  transition duration-300 shadow-md"
              onClick={() => handleNext(section.id, section.products.length)}
            >
              <FaChevronRight size={20} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Homme;
