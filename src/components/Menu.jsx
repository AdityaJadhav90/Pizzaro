import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import { Carousel } from './Carousel';
import Card from './Card';
import CartModal from '../screens/CartModal';

function Menu() {
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);
  const [search, setSearch] = useState("");
  const [showCart, setShowCart] = useState(false);

  const loadData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/DisplayData", {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setFoodItem(data.food_items);
      setFoodCat(data.food_category);
    } catch (error) {
      console.error("❌ Error loading data:", error);
      alert("Failed to load menu. Please check if the backend server is running.");
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <Carousel />

      <div className="flex justify-center items-center my-8 space-x-6">
        <div className="relative flex-1 max-w-2xl">
          <input
            type="text"
            placeholder="🔍 Search for delicious food..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full p-4 pl-12 border-2 border-red-200 rounded-2xl shadow-lg focus:outline-none focus:ring-4 focus:ring-red-100 focus:border-red-500 transition-all duration-300 bg-white text-lg"
          />
          <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-red-400 text-xl">
            🔍
          </span>
        </div>

        <button
          onClick={() => setShowCart(true)}
          className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center space-x-2 font-semibold text-lg"
        >
          <span>🛒</span>
          <span>View Cart</span>
        </button>
      </div>

      <div className="container mx-auto px-6 pb-12">
        {
          foodCat.length > 0 ? foodCat.map((cat) => {
            const matchedItems = foodItem
              .filter(item => item.CategoryName === cat.CategoryName)
              .filter(item => item.name.toLowerCase().includes(search.toLowerCase()));

            return (
              <div key={cat._id} className="mb-12">
                <div className="flex items-center mb-6">
                  <h2 className="text-3xl font-bold text-gray-800 mr-4">
                    {cat.CategoryName}
                  </h2>
                  <div className="flex-1 h-1 bg-gradient-to-r from-red-400 to-transparent rounded-full"></div>
                  <span className="ml-4 px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium">
                    {matchedItems.length} items
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {
                    matchedItems.length > 0 ? matchedItems.map((item) => (
                      <div key={item._id} className="transform hover:scale-105 transition-transform duration-300">
                        <Card foodItem={item} />
                      </div>
                    )) : (
                      <div className="col-span-full text-center py-12">
                        <div className="text-red-300 text-6xl mb-4">🍽️</div>
                        <p className="text-red-500 text-lg font-medium">
                          No items found in this category
                        </p>
                        <p className="text-red-400 text-sm mt-2">
                          Try adjusting your search terms
                        </p>
                      </div>
                    )
                  }
                </div>
              </div>
            );
          }) : (
            <div className="text-center py-20">
              <div className="text-red-300 text-8xl mb-6">🍕</div>
              <h3 className="text-2xl font-bold text-red-600 mb-4">
                Loading delicious food...
              </h3>
              <p className="text-red-500">
                Preparing your culinary experience
              </p>
            </div>
          )
        }
      </div>

      {showCart && <CartModal onClose={() => setShowCart(false)} />}
    </>
  );
} 

export default Menu;
