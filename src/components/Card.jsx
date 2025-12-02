import React, { useState } from 'react';
import { useCardState, useCardDispatch } from './ContextReducer';

function Card(props) {
  const [quantity, setQuantity] = useState(1);
  const [message, setMessage] = useState(""); // ✅ Added state for message

  let foodItem = props.foodItem;
  const dispatch = useCardDispatch();
  const cartState = useCardState(); 

  const handleAddToCart = () => {
    if (quantity < 1) {
      setMessage("Please select at least one item.");
      setTimeout(() => setMessage(""), 2000); // Clear after 2 seconds
      return;
    }

    dispatch({
      type: "ADD_ITEM",
      payload: { ...foodItem, quantity } 
    });

    setMessage(`${foodItem.name} added to cart! 🍕`);
    setTimeout(() => setMessage(""), 2000); // Clear message after 2 seconds
  };

  return (
    <div className="max-w-xs bg-white rounded-2xl shadow-md overflow-hidden p-4 m-10 border-spacing-1">
      <img 
        src={props.foodItem.image} 
        alt={foodItem.name} 
        className="w-full h-40 object-cover rounded-xl mb-4" 
        onError={(e) => {
          console.log('Image failed to load:', props.foodItem.image);
          e.target.style.display = 'none';
        }}
      />
      <h2 className="text-xl font-semibold mb-2">{props.foodItem.name}</h2>
      <p className="text-sm text-gray-600 mb-2">${props.foodItem.price}</p>

      <div className="flex items-center justify-between">
        <button
          onClick={() => setQuantity(q => Math.max(0, q - 1))}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
        >
          -
        </button>
        <span className="text-lg font-medium">{quantity}</span>
        <button
          onClick={() => setQuantity(q => q + 1)}
          className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
        >
          +
        </button>
      </div>

      <hr className="my-4" />

      <button 
        className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition" 
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>

      {/* Confirmation Message */}
      {message && (
        <p className="mt-2 text-green-500 font-medium">{message}</p>
      )}
    </div>
  );
}

export default Card;
