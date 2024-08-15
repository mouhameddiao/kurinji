import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
function footer() {
    return ( 
        <footer className="bg-gray-800 text-white py-8 mt-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <img src="https://i.pinimg.com/564x/94/a7/e5/94a7e5648cc374f57483762afd73a6b9.jpg" alt="Logo" className="w-20 h-20 rounded-full shadow-lg border-2 border-black" />
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition duration-300">
                <FaFacebookF size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition duration-300">
                <FaTwitter size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition duration-300">
                <FaInstagram size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 transition duration-300">
                <FaLinkedinIn size={24} />
              </a>
            </div>
          </div>
          <p className="text-center font-bold text-xl mt-4">&copy; 2024 Marché en Ligne. Tous droits réservés.</p>
        </div>
      </footer> 
     );
}

 export default footer;