// src/components/ProductDetailHomme.js
import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
const productsHomme = [
  {
    id: 'tshirts',
    title: 'T-Shirts',
    products: [
      { id: 1, name: 'décontracté', price: 8900, description: "HAUTE QUALITE", imageUrl: 'https://i.pinimg.com/564x/c9/64/71/c9647136488434573412f6ae49b1670d.jpg', colors: ['Blanc', 'Noir'], sizes: ['S', 'M', 'L', 'XL'] },
      { id: 2, name: 'T-Shirt Dice', price: 7700, description: "HAUTE QUALITE", imageUrl: 'https://i.pinimg.com/564x/ce/92/e8/ce92e8db5ccf61fa3ca24e6899e52cd9.jpg', colors: ['Rouge', 'Bleu'], sizes: ['S', 'M', 'L'] },
      { id: 3, name: 'T-Shirt funny', price: 9000, description: "HAUTE QUALITE", imageUrl: 'https://i.pinimg.com/564x/44/f9/ba/44f9ba234747848a259b825aa830c341.jpg', colors: ['Gris', 'Noir'], sizes: ['M', 'L', 'XL'] },
      { id: 4, name: 'T-Shirt smile', price: 5650, description: "HAUTE QUALITE", imageUrl: 'https://i.pinimg.com/564x/e0/48/ad/e048ad6bb4d80d9b6ffd915da952e70a.jpg', colors: ['Blanc', 'Vert'], sizes: ['S', 'M', 'L'] },
      { id: 5, name: 'T-Shirt Cartoon', price: 9690, description: "HAUTE QUALITE", imageUrl: 'https://i.pinimg.com/564x/55/df/0e/55df0e36bfa091942e73a373d9ff5d78.jpg', colors: ['Rouge', 'Noir'], sizes: ['M', 'L'] },
      { id: 6, name: 'Sleeve T-Shirt', price: 6700, description: "HAUTE QUALITE", imageUrl: 'https://i.pinimg.com/564x/f4/24/6d/f4246db6a5a650438efa5efeb6baaa79.jpg', colors: ['Bleu', 'Noir'], sizes: ['S', 'M', 'XL'] },
      { id: 7, name: 'T-Shirt Graphique', price: 7400, description: "HAUTE QUALITE", imageUrl: 'https://i.pinimg.com/564x/09/72/50/097250e8fc05ac91ca218a4d6c7aad96.jpg', colors: ['Noir', 'Blanc'], sizes: ['M', 'L', 'XL'] },
      { id: 8, name: 'T-Shirt manches', price: 4500, description: "HAUTE QUALITE", imageUrl: 'https://i.pinimg.com/564x/c6/f7/c1/c6f7c197ade195a9dbb9128550724d66.jpg', colors: ['Gris', 'Noir'], sizes: ['S', 'M', 'L'] },
    ],
  },
 
  {
    id: 'pulls',
    title: 'Pulls',
    products: [
      { id: 12, name: 'Pull Chandail', price: 9900, description: "HAUTE QUALITE", imageUrl: 'https://i.pinimg.com/564x/d3/9b/99/d39b993f145edde508fed3b40257326c.jpg', colors: ['Gris', 'Noir'], sizes: ['S', 'M', 'L'] },
      { id: 13, name: 'Pull Green', price: 4050, description: "HAUTE QUALITE", imageUrl: 'https://i.pinimg.com/564x/92/39/c2/9239c26686e65660eb489d0d04d9f2a2.jpg', colors: ['Vert', 'Blanc'], sizes: ['M', 'L', 'XL'] },
      { id: 14, name: 'Pull Christmas', price: 8800, description: "HAUTE QUALITE", imageUrl: 'https://i.pinimg.com/564x/49/f2/92/49f292a5ca0e9ab6cd55c98abdb8319e.jpg', colors: ['Rouge', 'Blanc'], sizes: ['M', 'L', 'XL'] },
      { id: 15, name: 'Pull Pattern', price: 6700, description: "HAUTE QUALITE", imageUrl: 'https://i.pinimg.com/564x/e8/66/25/e86625faf4d608f09d387c431f78f2a7.jpg', colors: ['Bleu', 'Gris'], sizes: ['M', 'L'] },
      { id: 16, name: 'Pull Pokemon', price: 9650, description: "HAUTE QUALITE", imageUrl: 'https://i.pinimg.com/564x/9c/82/18/9c8218ad8749616da224fb98608aca6f.jpg', colors: ['Jaune', 'Noir'], sizes: ['S', 'M', 'L', 'XL'] },
      { id: 17, name: 'Pull Colorblock', price: 5690, description: "HAUTE QUALITE", imageUrl: 'https://i.pinimg.com/564x/d5/12/a1/d512a1c50baf545765dab36ee86e437a.jpg', colors: ['Bleu', 'Noir'], sizes: ['S', 'M', 'L'] },
      { id: 18, name: 'Pull Shoulder', price: 8400, description: "HAUTE QUALITE", imageUrl: 'https://i.pinimg.com/564x/ed/c1/2f/edc12f7a1c3a956232292f73bf301b4b.jpg', colors: ['Noir', 'Gris'], sizes: ['M', 'L', 'XL'] },
      { id: 19, name: 'Pull Vintage', price: 4440, description: "HAUTE QUALITE", imageUrl: 'https://i.pinimg.com/564x/8a/eb/1c/8aeb1c699d755af9c06910e93f98d2df.jpg', colors: ['Rouge', 'Noir'], sizes: ['M', 'L'] },
    ],
  },
  {
    id: 'chemises',
    title: 'Chemises',
    products: [
      { id: 22, name: 'chemise Green', price: 9300, description: "HAUTE QUALITE", imageUrl: 'https://i.pinimg.com/564x/ed/eb/b4/edebb4866a135206f75591787d4ca6df.jpg', colors: ['Vert', 'Blanc'], sizes: ['M', 'L', 'XL'] },
      { id: 23, name: 'chemise Camisa', price: 6350, description: "HAUTE QUALITE", imageUrl: 'https://i.pinimg.com/564x/7f/4a/24/7f4a242475ec5f72feeaea95c6316931.jpg', colors: ['Bleu', 'Noir'], sizes: ['S', 'M', 'L'] },
      { id: 24, name: 'Chemise Fashion', price: 7400, description: "HAUTE QUALITE", imageUrl: 'https://i.pinimg.com/564x/ed/eb/b4/edebb4866a135206f75591787d4ca6df.jpg', colors: ['Blanc', 'Noir'], sizes: ['M', 'L', 'XL'] },
      { id: 25, name: 'chemise Striped', price: 8800, description: "HAUTE QUALITE", imageUrl: 'https://i.pinimg.com/564x/18/64/8d/18648d45031c182a4966af5ef9a70588.jpg', colors: ['Noir', 'Gris'], sizes: ['M', 'L', 'XL'] },
      { id: 26, name: 'Chemise Veste', price: 7440, description: "HAUTE QUALITE", imageUrl: 'https://i.pinimg.com/736x/9a/b7/b6/9ab7b6607e441f0971c40a802fc512df.jpg', colors: ['Marron', 'Noir'], sizes: ['M', 'L'] },
      { id: 27, name: 'Chemise Geometric', price: 8800, description: "HAUTE QUALITE", imageUrl: 'https://i.pinimg.com/736x/65/ea/78/65ea78cbd1e073dbf4c910f6251a4ef6.jpg', colors: ['Bleu', 'Blanc'], sizes: ['M', 'L', 'XL'] },
      { id: 28, name: 'Chemise Bangood', price: 5540, description: "HAUTE QUALITE", imageUrl: 'https://i.pinimg.com/564x/02/ef/7b/02ef7bc10911bd9b8a2c1f2825b7776c.jpg', colors: ['Blanc', 'Noir'], sizes: ['S', 'M', 'L'] },
      { id: 29, name: 'chemise Incerun', price: 9450, description: "HAUTE QUALITE", imageUrl: 'https://i.pinimg.com/564x/37/0d/01/370d017d97597bbc475f59607a21bb15.jpg', colors: ['Noir', 'Rouge'], sizes: ['M', 'L', 'XL'] },
    ],
  },
  {
    id: 'pantalons',
    title: 'Pantalons',
    products: [
      { id: 32, name: 'Pantalon de survêtement', price: 5000, description: "HAUTE QUALITE", imageUrl: 'https://i.pinimg.com/564x/8c/a2/2b/8ca22bf205bf7f0d40885249ac0432f0.jpg', colors: ['Noir', 'Gris'], sizes: ['S', 'M', 'L', 'XL'] },
      { id: 33, name: 'Jean de Pierna', price: 5500, description: "HAUTE QUALITE", imageUrl: 'https://i.pinimg.com/564x/d3/68/f3/d368f36c6ee162c255d8dae9510bbc8a.jpg', colors: ['Bleu', 'Noir'], sizes: ['M', 'L', 'XL'] },
      { id: 34, name: 'Reel Baggy', price: 6600, description: "HAUTE QUALITE", imageUrl: 'https://i.pinimg.com/564x/8e/8d/19/8e8d19acba343386d4cc1f917bf80995.jpg', colors: ['Noir', 'Blanc'], sizes: ['M', 'L'] },
      { id: 35, name: 'Pantalon avec poches', price: 6500, description: "HAUTE QUALITE", imageUrl: 'https://i.pinimg.com/564x/4e/62/c3/4e62c3109697d804b6c5d40fe5e76183.jpg', colors: ['Beige', 'Noir'], sizes: ['M', 'L', 'XL'] },
      { id: 36, name: 'Pantalon décontracté', price: 7500, description: "HAUTE QUALITE", imageUrl: 'https://i.pinimg.com/564x/8c/a2/2b/8ca22bf205bf7f0d40885249ac0432f0.jpg', colors: ['Noir', 'Gris'], sizes: ['S', 'M', 'L'] },
      { id: 37, name: 'Jean moderne', price: 6555, description: "HAUTE QUALITE", imageUrl: 'https://i.pinimg.com/564x/d3/68/f3/d368f36c6ee162c255d8dae9510bbc8a.jpg', colors: ['Bleu', 'Noir'], sizes: ['M', 'L', 'XL'] },
      { id: 38, name: 'Reel casual', price: 6700, description: "HAUTE QUALITE", imageUrl: 'https://i.pinimg.com/564x/8e/8d/19/8e8d19acba343386d4cc1f917bf80995.jpg', colors: ['Noir', 'Blanc'], sizes: ['M', 'L'] },
      { id: 39, name: 'Pantalon confortable', price: 8650, description: "HAUTE QUALITE", imageUrl: 'https://i.pinimg.com/564x/4e/62/c3/4e62c3109697d804b6c5d40fe5e76183.jpg', colors: ['Beige', 'Gris'], sizes: ['M', 'L', 'XL'] },
    ],
  },
  {
    id: 'chaussures',
    title: 'Chaussures',
    products: [
      { id: 62, name: 'Jordan 4 Retro', price: 6000, description: "HAUTE QUALITE", imageUrl: 'https://i.pinimg.com/564x/da/8b/c2/da8bc2632ed13b9cd9ffa20323964b66.jpg', colors: ['Noir', 'Blanc'], sizes: ['40', '41', '42', '43'] },
      { id: 63, name: 'Custom Air Force 1', price: 6500, description: "HAUTE QUALITE", imageUrl: 'https://i.pinimg.com/564x/3b/78/c8/3b78c8dc45b6201559996ce15348b06f.jpg', colors: ['Blanc', 'Bleu'], sizes: ['38', '39', '40', '41'] },
      { id: 64, name: 'Fired Flamme', price: 7000, description: "HAUTE QUALITE", imageUrl: 'https://i.pinimg.com/564x/e9/ec/c7/e9ecc7a9b77e5146c9a011ee48cfc5f8.jpg', colors: ['Rouge', 'Noir'], sizes: ['39', '40', '41', '42'] },
      { id: 65, name: 'Jordan 1', price: 7500, description: "HAUTE QUALITE", imageUrl: 'https://i.pinimg.com/564x/26/87/0c/26870c21427996dcf5d144bd18e5f7e6.jpg', colors: ['Noir', 'Blanc'], sizes: ['40', '41', '42'] },
      { id: 66, name: 'Timberlind', price: 7600, description: "HAUTE QUALITE", imageUrl: 'https://i.pinimg.com/564x/86/83/48/8683488007829dee389623932b7075db.jpg', colors: ['Marron', 'Noir'], sizes: ['41', '42', '43'] },
      { id: 67, name: 'Custom Sunrise', price: 6500, description: "HAUTE QUALITE", imageUrl: 'https://i.pinimg.com/564x/76/d9/29/76d929334c139a47eb01f3370e666806.jpg', colors: ['Jaune', 'Noir'], sizes: ['40', '41', '42', '43'] },
      { id: 68, name: 'DENGSS', price: 7000, description: "HAUTE QUALITE", imageUrl: 'https://i.pinimg.com/564x/5e/7e/6f/5e7e6ff5f5140d9cfa29409ebffdf770.jpg', colors: ['Noir', 'Bleu'], sizes: ['39', '40', '41'] },
      { id: 69, name: 'Casual Sport', price: 7575, description: "HAUTE QUALITE", imageUrl: 'https://i.pinimg.com/564x/28/51/99/2851998ce9ae487f646a8b2305eb5459.jpg', colors: ['Blanc', 'Noir'], sizes: ['40', '41', '42', '43'] },
    ],
  },

];





function ProductDetailHomme() {
  const { productId } = useParams();
  const { addToCart } = useContext(CartContext);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');

  let product;
  for (let section of productsHomme) {
    product = section.products.find(p => p.id === parseInt(productId));
    if (product) break;
  }

  if (!product) {
    return <div>Produit non trouvé</div>;
  }

  return (
    <div className="product-detail container mx-auto p-8">
      <div className="flex flex-col md:flex-row items-center">
        <img src={product.imageUrl} alt={product.name} className="w-100 h-100 object-cover mb-4 md:mb-0 md:mr-8 rounded-lg shadow-lg" />
        <div className="flex flex-col items-start">
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <p className="text-xl text-gray-500 mb-4">{product.description}</p>
          <p className="text-2xl text-blue-500 font-bold mb-4">{product.price} FCFA</p>

          {/* Affichage de la sélection des couleurs */}
          {product.colors && (
            <div className="mb-4">
              <label className="block text-lg font-medium mb-2">Couleur:</label>
              <select value={selectedColor} onChange={(e) => setSelectedColor(e.target.value)} className="border rounded p-2">
                <option value="">Sélectionnez la couleur</option>
                {product.colors.map(color => (
                  <option key={color} value={color}>{color}</option>
                ))}
              </select>
            </div>
          )}

          {/* Affichage de la sélection des tailles pour les produits avec ID 1-61 */}
          {product.id <= 61 && product.sizes && (
            <div className="mb-4">
              <label className="block text-lg font-medium mb-2">Taille:</label>
              <select value={selectedSize} onChange={(e) => setSelectedSize(e.target.value)} className="border rounded p-2">
                <option value="">Sélectionnez la taille</option>
                {product.sizes.map(size => (
                  <option key={size} value={size}>{size}</option>
                ))}
              </select>
            </div>
          )}

          {/* Affichage de la sélection des pointures pour les chaussures à partir de l'ID 62 */}
          {product.id >= 62 && product.sizes && (
            <div className="mb-4">
              <label className="block text-lg font-medium mb-2">Pointure:</label>
              <select value={selectedSize} onChange={(e) => setSelectedSize(e.target.value)} className="border rounded p-2">
                <option value="">Sélectionnez la pointure</option>
                {product.sizes.map(size => (
                  <option key={size} value={size}>{size}</option>
                ))}
              </select>
            </div>
          )}

          <button className="text-white py-2 px-4 rounded bg-red-950 hover:bg-red-00 transition duration-300" onClick={() => addToCart({ ...product, selectedSize, selectedColor })}>
            Ajouter au panier
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailHomme;
