import React, { useState, useContext } from 'react';  // Importation de useState et useContext
import { useParams } from 'react-router-dom';  // Importation de useParams
import { CartContext } from '../contexts/CartContext';  // Importation de CartContext


const products = [
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

  // Produits avec des couleurs et des pointures
  { id: 15, name: 'Chaussons Coton', price: 3500, imageUrl: 'https://i.pinimg.com/564x/83/91/e9/8391e9f8111f5d46fa3aef4a1022ccab.jpg', colors: ['Blanc', 'Rose'], sizes: ['17', '18', '19'] },
  { id: 16, name: 'Chaussure Blanc Bébé', price: 4700, imageUrl: 'https://i.pinimg.com/564x/5d/0b/60/5d0b605e9ca2bc6f10f2a5230c1b6c18.jpg', colors: ['Blanc', 'Bleu'], sizes: ['16', '17', '18'] },
  { id: 17, name: 'Sandales Douces', price: 3900, imageUrl: 'https://i.pinimg.com/564x/05/b5/f6/05b5f67578f7596f778156ed8aabf26c.jpg', colors: ['Jaune', 'Rose'], sizes: ['15', '16', '17'] },
  { id: 18, name: 'Chaussures Fille', price: 5200, imageUrl: 'https://i.pinimg.com/564x/e9/04/52/e90452d895cec43aeefcd70b6c99a46d.jpg', colors: ['Rouge', 'Blanc'], sizes: ['16', '17', '18'] },
  { id: 19, name: 'Baskets Bébé', price: 4600, imageUrl: 'https://i.pinimg.com/564x/9c/1f/69/9c1f692592f8f237df0300853d2893d3.jpg', colors: ['Bleu', 'Gris'], sizes: ['18', '19', '20'] },
  { id: 20, name: 'Baskets Nike Bébé', price: 4600, imageUrl: 'https://i.pinimg.com/564x/91/0d/a7/910da7dc4e9cf083fd05726e16039459.jpg', colors: ['Blanc', 'Noir'], sizes: ['19', '20', '21'] },
  { id: 21, name: 'Baskets Crocheted', price: 4600, imageUrl: 'https://i.pinimg.com/564x/88/5f/73/885f732f27985a561f80a97f93174ca1.jpg', colors: ['Bleu', 'Blanc'], sizes: ['17', '18', '19'] },
  { id: 22, name: 'Baskets Adidas', price: 4600, imageUrl: 'https://i.pinimg.com/564x/cf/01/21/cf01219dfffa16ccc3dfc856c38a731a.jpg', colors: ['Noir', 'Blanc'], sizes: ['19', '20', '21'] },
  { id: 23, name: 'Chaussure Off White', price: 4600, imageUrl: 'https://i.pinimg.com/564x/51/19/2b/51192b878d200b82613b48cfd88fc675.jpg', colors: ['Blanc', 'Rouge'], sizes: ['18', '19', '20'] },
  { id: 24, name: 'Baskets Mickey Bébé', price: 4600, imageUrl: 'https://i.pinimg.com/564x/b6/e6/de/b6e6dee9f6bdc129c90a83a6654d315c.jpg', colors: ['Bleu', 'Jaune'], sizes: ['17', '18', '19'] },
  { id: 25, name: 'Baskets Sapitinho Bébé', price: 4600, imageUrl: 'https://i.pinimg.com/564x/ac/a5/67/aca567d2deca3581b0d08f8beadd7a3c.jpg', colors: ['Gris', 'Noir'], sizes: ['19', '20', '21'] },
  { id: 26, name: 'Chaussure Black Bébé', price: 4600, imageUrl: 'https://i.pinimg.com/564x/2c/2e/aa/2c2eaa5f699e8c631093e17574182a79.jpg', colors: ['Noir', 'Blanc'], sizes: ['18', '19', '20'] },
  { id: 27, name: 'Adidas Bébé', price: 4600, imageUrl: 'https://i.pinimg.com/564x/e3/1e/ac/e31eac7a2c14e993aa26b15d361f476d.jpg', colors: ['Blanc', 'Rouge'], sizes: ['17', '18', '19'] },
  { id: 28, name: 'Bandana Air Force', price: 4600, imageUrl: 'https://i.pinimg.com/564x/9f/c1/62/9fc162b5039103b3b0a1548dfc20bff2.jpg', colors: ['Blanc', 'Bleu'], sizes: ['16', '17', '18'] },
  { id: 29, name: 'Baskets Multicolor', price: 4600, imageUrl: 'https://i.pinimg.com/564x/9c/1f/69/9c1f692592f8f237df0300853d2893d3.jpg', colors: ['Multicolor'], sizes: ['17', '18', '19'] },
  { id: 30, name: 'Toddler Shoes', price: 4600, imageUrl: 'https://i.pinimg.com/564x/7a/a1/f1/7aa1f117158c979c3610f56dd9551424.jpg', colors: ['Blanc', 'Noir'], sizes: ['18', '19', '20'] },
  { id: 31, name: 'Trainers Bébé', price: 4600, imageUrl: 'https://i.pinimg.com/564x/04/a5/f1/04a5f1caef51126dbc43de1d6090312d.jpg', colors: ['Gris', 'Noir'], sizes: ['19', '20', '21'] },
  { id: 32, name: 'Chinelo Bébé', price: 2600, imageUrl: 'https://i.pinimg.com/564x/69/eb/de/69ebde1209d65866030639645df6fb2c.jpg', colors: ['Rouge', 'Bleu'], sizes: ['15', '16', '17'] },
  { id: 33, name: 'Strap Bébé', price: 4600, imageUrl: 'https://i.pinimg.com/564x/e6/b3/ab/e6b3ab02d9949044034778e3fb45509d.jpg', colors: ['Blanc', 'Noir'], sizes: ['17', '18', '19'] },
  { id: 34, name: 'Comfy Sandales', price: 3600, imageUrl: 'https://i.pinimg.com/564x/5e/6b/fe/5e6bfe4a1785927741cae03934131019.jpg', colors: ['Rose', 'Bleu'], sizes: ['16', '17', '18'] },
  // Ajoutez d'autres produits ici...
];

function ProductDetailBebe() {
    const { id } = useParams();  // Récupère l'ID du produit depuis les paramètres de l'URL
    const { addToCart } = useContext(CartContext);  // Accède au contexte du panier
    const product = products.find(p => p.id === parseInt(id));  // Trouve le produit correspondant à l'ID

    const [selectedColor, setSelectedColor] = useState(product.colors ? product.colors[0] : '');  // Initialisation de la couleur sélectionnée
    const [selectedSize, setSelectedSize] = useState(product.sizes ? product.sizes[0] : '');  // Initialisation de la taille sélectionnée
    const [selectedShoeSize, setSelectedShoeSize] = useState('');  // Initialisation de la pointure sélectionnée

    const handleAddToCart = () => {
        // Ajout du produit au panier avec les options sélectionnées
        addToCart({ ...product, selectedColor, selectedSize, selectedShoeSize });
    };

    return (
        <div className="product-detail bg-pink-50 py-16 px-8">
            <div className="container mx-auto flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 flex justify-center">
                    <img src={product.imageUrl} alt={product.name} className="rounded-lg shadow-xl w-full md:w-4/5 lg:w-3/4" />
                </div>
                <div className="md:w-1/2 mt-8 md:mt-0">
                    <h1 className="text-4xl font-bold text-black mb-2">{product.name}</h1>
                    <p className="text-xl font-semibold text-gray-600 mb-4">HAUTE QUALITÉ</p>
                    <p className="text-2xl font-semibold text-blue-500 mb-4">{product.price} FCFA</p>

                    {product.colors && (
                        <div className="mb-4">
                            <label className="block text-lg font-semibold text-gray-700 mb-2">Couleur:</label>
                            <select value={selectedColor} onChange={(e) => setSelectedColor(e.target.value)} className="p-2 rounded-lg border border-gray-300 w-60">
                                {product.colors.map(color => (
                                    <option key={color} value={color}>{color}</option>
                                ))}
                            </select>
                        </div>
                    )}

                    {product.sizes && (
                        <div className="mb-4">
                            <label className="block text-lg font-semibold text-gray-700 mb-2">Pointure:</label>
                            <select value={selectedSize} onChange={(e) => setSelectedSize(e.target.value)} className="p-2 rounded-lg border border-gray-300 w-60">
                                {product.sizes.map(size => (
                                    <option key={size} value={size}>{size}</option>
                                ))}
                            </select>
                        </div>
                    )}

                    {product.sizes && (
                        <div className="mb-4">
                            <label className="block text-lg font-semibold text-gray-700 mb-2">Pointure:</label>
                            <select value={selectedShoeSize} onChange={(e) => setSelectedShoeSize(e.target.value)} className="p-2 rounded-lg border border-gray-300 w-60">
                                {product.sizes.map(size => (
                                    <option key={size} value={size}>{size}</option>
                                ))}
                            </select>
                        </div>
                    )}

                    <button
                        onClick={handleAddToCart}
                        className="bg-red-950 text-white py-2 px-6 rounded-lg hover:bg-red-900 transition duration-300"
                    >
                        Ajouter au panier
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductDetailBebe;
