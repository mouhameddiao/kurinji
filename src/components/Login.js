import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/auth/login', { username, password });
      console.log(response.data);
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  return (
    <div className="login bg-cover bg-center min-h-screen flex items-center justify-center text-black" style={{ backgroundImage: "url('https://example.com/background.jpg')" }}>
      <div className="bg-slate-300 bg-opacity-50 p-8 rounded-lg shadow-lg max-w-lg w-full">
        <img src="https://i.pinimg.com/564x/94/a7/e5/94a7e5648cc374f57483762afd73a6b9.jpg" alt="Logo" className="w-24 h-24 mb-4 mx-auto rounded-full shadow-lg" />
        <h2 className="text-3xl font-bold mb-6 text-center">Se connecter</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Nom d'utilisateur"
            className="w-full p-2 rounded bg-black bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-red-950 text-black"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Mot de passe"
            className="w-full p-2 rounded bg-black bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-red-950 text-black"
          />
          <button
            type="submit"
            className="w-full bg-red-950 text-white py-2 px-4 rounded hover:bg-red-900 transition duration-300"
          >
            Connexion
          </button>
        </form>
      </div>
    </div>
    
  );
  
}

export default Login;
