import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="contact bg-cover bg-center min-h-screen flex items-center justify-center text-black" style={{ backgroundImage: "url('https://example.com/background.jpg')" }}>
      <div className="bg-slate-100 bg-opacity-50 p-8 rounded-lg shadow-lg max-w-lg w-full">
        <img src="https://i.pinimg.com/564x/94/a7/e5/94a7e5648cc374f57483762afd73a6b9.jpg" alt="Logo" className="w-24 h-24 mb-4 mx-auto rounded-full shadow-lg" />
        <h2 className="text-3xl font-bold mb-6 text-center">Contactez-nous</h2>
        <form className="space-y-4">
          <input 
            type="text" 
            placeholder="Votre Prenom et nom" 
            className="w-full p-2 rounded bg-black bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-red-950 text-white"
          />
         
           <input 
            type="numero" 
            placeholder="Votre numero" 
            className="w-full p-2 rounded bg-black bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-red-950 text-white"
          />
          <input 
            type="email" 
            placeholder="Votre email" 
            className="w-full p-2 rounded bg-black bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-red-950 text-white"
          />

          <textarea 
            placeholder="Votre message" 
            className="w-full p-2 rounded bg-black bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-red-950 text-white h-32"
          ></textarea>
          <button 
            type="submit" 
            className="w-full bg-red-950 text-white py-2 px-4 rounded hover:bg-red-900 transition duration-300"
          >
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
