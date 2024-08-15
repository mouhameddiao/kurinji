import React from 'react';
import { useLocation } from 'react-router-dom';
import { productsFemme, productsHomme, productsAccessoires, productsBebe } from './products';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function SearchResults() {
  const query = useQuery();
  const searchQuery = query.get('q')?.toLowerCase() || '';

  // Combiner tous les produits dans une seule liste
  const allProducts = [
    ...productsFemme.flatMap(section => section.products),
    ...productsHomme.flatMap(section => section.products),
    ...productsAccessoires.flatMap(section => section.products),
    ...productsBebe.flatMap(section => section.products),
  ];

  const filteredProducts = allProducts.filter(product =>
    product.name.toLowerCase().includes(searchQuery)
  );

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">Résultats de recherche pour "{searchQuery}":</h1>
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredProducts.map(product => (
            <div key={product.id} className="bg-white p-4 rounded-lg shadow">
              <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover rounded-lg mb-4" />
              <h2 className="text-lg font-bold">{product.name}</h2>
              <p className="text-blue-500 font-semibold">{product.price} FCFA</p>
            </div>
          ))}
        </div>
      ) : (
        <p>Aucun produit trouvé pour "{searchQuery}".</p>
      )}
    </div>
  );
}

export default SearchResults;
