import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AboutUs from './About'; // Import the AboutUs component from './About';'

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
    window.location.reload();
  };

  return (
    <nav className="bg-white text-gray-900 shadow-lg border-b-2 border-red-200 px-6 py-4 flex items-center justify-between">
      {/* Logo and Brand */}
      <div className="flex items-center space-x-3">
        <img 
          src="/download.png" 
          alt="Food Delivery Logo" 
          className="h-12 w-12 object-contain"
        />
        <h1 className="text-2xl font-bold text-red-600">
          PIZZAROO
        </h1>
      </div>

      {/* Navigation Links */}
      <div className="flex space-x-3">
        <Link to="/" className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition duration-300 shadow hover:shadow-lg font-medium">
          Home
        </Link>
        <Link to="/Aboutus" className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition duration-300 shadow hover:shadow-lg font-medium">
          About
        </Link>
        <Link to="/Menu" className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition duration-300 shadow hover:shadow-lg font-medium">
          Menu
        </Link>
        <Link to="/myorders" className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition duration-300 shadow hover:shadow-lg font-medium">
          My Orders
        </Link>
      </div>

      {/* Auth Buttons */}
      {localStorage.getItem("authToken") ? (
        <div className="flex space-x-3">
          <button onClick={handleLogout} className="bg-red-700 hover:bg-red-800 text-white px-4 py-2 rounded-lg transition duration-300 shadow hover:shadow-lg font-medium">
            Logout
          </button>
        </div>  
      ) : (
        <div className="flex space-x-3">
          <Link to="/login" className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition duration-300 shadow hover:shadow-lg font-medium">
            Login
          </Link>
          <Link to="/signup" className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition duration-300 shadow hover:shadow-lg font-medium">
            Sign Up
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;