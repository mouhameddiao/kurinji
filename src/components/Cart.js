import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { FaTrash, FaMinus, FaPlus } from 'react-icons/fa';

function Cart() {
  const { cartItems, removeFromCart, clearCart, updateQuantity } = useContext(CartContext);

  const handleQuantityChange = (productId, size, color, shoeSize, newQuantity) => {
    updateQuantity(productId, size, color, shoeSize, newQuantity);
  };

  const handleRemove = (productId, size, color, shoeSize) => {
    removeFromCart(productId, size, color, shoeSize);
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);
  };

  return (
    <div className="cart bg-cover bg-center min-h-screen flex flex-col items-center justify-center text-black" style={{ backgroundImage: "url('https://example.com/background.jpg')" }}>
      <div className="bg-slate-300 bg-opacity-50 p-8 rounded-lg shadow-lg max-w-4xl w-full">
        <img src="https://i.pinimg.com/564x/94/a7/e5/94a7e5648cc374f57483762afd73a6b9.jpg" alt="Logo" className="w-24 h-24 mb-4 mx-auto rounded-full shadow-lg" />
        <h2 className="text-3xl font-bold mb-6 text-center">Votre Panier</h2>
        <table className="min-w-full bg-white rounded-lg">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Produit</th>
              <th className="py-2 px-4 border-b">Couleur</th>
              <th className="py-2 px-4 border-b">Taille</th>
              <th className="py-2 px-4 border-b">Pointure</th>
              <th className="py-2 px-4 border-b">Quantité</th>
              <th className="py-2 px-4 border-b">Prix</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map(item => (
              <tr key={`${item.product.id}-${item.size}-${item.color}-${item.shoeSize}`} className="text-center text-black">
                <td className="py-2 px-4 border-b">{item.product.name}</td>
                <td className="py-2 px-4 border-b">{item.color}</td>
                <td className="py-2 px-4 border-b">{item.size}</td>
                <td className="py-2 px-4 border-b">{item.shoeSize}</td>
                <td className="py-2 px-4 border-b">
                  <button
                    className="bg-red-950 text-white p-1 rounded disabled:opacity-50"
                    onClick={() => handleQuantityChange(item.product.id, item.size, item.color, item.shoeSize, item.quantity - 1)}
                    disabled={item.quantity <= 1}
                  >
                    <FaMinus />
                  </button>
                  <span className="mx-2">{item.quantity}</span>
                  <button
                    className="bg-red-950 text-white p-1 rounded"
                    onClick={() => handleQuantityChange(item.product.id, item.size, item.color, item.shoeSize, item.quantity + 1)}
                  >
                    <FaPlus />
                  </button>
                </td>
                <td className="py-2 px-4 border-b">{item.product.price * item.quantity} FCFA</td>
                <td className="py-2 px-4 border-b">
                  <button
                    className="bg-red-900 text-white p-2 rounded"
                    onClick={() => handleRemove(item.product.id, item.size, item.color, item.shoeSize)}
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
            <tr>
              <td colSpan="5" className="py-2 px-4 border-b text-right font-bold">Prix Total:</td>
              <td colSpan="2" className="py-2 px-4 border-b text-center font-bold">{calculateTotalPrice()} FCFA</td>
            </tr>
          </tbody>
        </table>
        <div className="cart-actions mt-6 flex justify-between">
          <button className="bg-red-950 text-white py-2 px-4 rounded hover:bg-red-900 transition duration-300" onClick={clearCart}>
            Vider le panier
          </button>
          <button className="bg-red-950 text-white py-2 px-4 rounded hover:bg-red-900 transition duration-300">
            Passer à la caisse
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
