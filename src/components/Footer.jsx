import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-6">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-red-500 mb-2">🍕 Pizaroo</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Delivering delicious meals right to your doorstep. Experience the best of local cuisine with fast delivery and exceptional quality.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-red-400">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-red-400 transition duration-300">🏠 Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-red-400 transition duration-300">👥 About Us</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-red-400 transition duration-300">📞 Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-red-400">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <span className="text-red-400">📍</span>
                <span className="text-gray-300">123 Maharasatra, City</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-red-400">✉️</span>
                <span className="text-gray-300">hello@pizaroo.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Pizaroo. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-red-400 transition duration-300">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-red-400 transition duration-300">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-red-400 transition duration-300">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
