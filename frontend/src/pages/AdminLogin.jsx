import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Hardcoded credentials
    if (username === 'eshaaladmin' && password === 'Eshaal@2026') {

      localStorage.setItem('adminAuth', 'true');

      navigate('/admin/dashboard');

    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-50 px-4">

      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-md border border-pink-100">

        <div className="text-center mb-8">

          <p className="text-pink-500 uppercase tracking-[4px] text-xs font-semibold mb-2">
            Eshaal D'signs
          </p>

          <h1 className="text-3xl font-serif text-gray-800">
            Admin Login
          </h1>

          <p className="text-gray-500 mt-2 text-sm">
            Authorized access only
          </p>

        </div>

        <form onSubmit={handleLogin} className="space-y-5">

          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full border border-pink-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-300"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-pink-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-300"
          />

          {error && (
            <p className="text-red-500 text-sm">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="w-full bg-pink-700 hover:bg-pink-800 text-white py-3 rounded-xl font-semibold transition shadow-lg"
          >
            Login
          </button>

        </form>

      </div>

    </div>
  );
};

export default AdminLogin;