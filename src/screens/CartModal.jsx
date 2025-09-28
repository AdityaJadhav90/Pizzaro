import React from "react";
import { useCardState } from "../components/ContextReducer";

export default function CartModal({ onClose }) {
  const cartItems = useCardState();

  // ✅ consistent name (camelCase)
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

const handleCheckOut = async () => {
  const userEmail = localStorage.getItem("userEmail");

  const response = await fetch("http://localhost:5000/api/auth/getOrderData", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: userEmail,
      orderItems: cartItems
    }),
  });

  const data = await response.json();
  if (data.success) alert("Order placed!");
};


  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-end z-50">
      <div className="bg-white w-96 h-full shadow-lg p-4 overflow-y-auto">
        <button
          className="text-red-500 font-bold mb-4"
          onClick={onClose}
        >
          ✖ Close
        </button>

        <h2 className="text-xl font-bold mb-4">Your Cart</h2>

        {cartItems.length === 0 ? (
          <p className="text-gray-500">🛒 Your cart is empty</p>
        ) : (
          <>
            <ul className="space-y-3">
              {cartItems.map((item) => (
                <li
                  key={item._id}
                  className="border rounded-lg p-3 shadow-sm flex justify-between items-center"
                >
                  <div>
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-sm text-gray-600">
                      Price: ${item.price}
                    </p>
                    <p className="text-sm text-gray-600">
                      Quantity: {item.quantity}
                    </p>
                  </div>
                  <span className="font-bold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </li>
              ))}
            </ul>

            {/* ✅ Total at bottom */}
            <div className="mt-6 border-t pt-4 flex justify-between font-bold text-lg">
              <span>Total:</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>

            <div>
              <button
                className="bg-red-500 hover:bg-red-600 text-white w-full py-2 rounded-lg transition duration-300"
                onClick={handleCheckOut} 
              >
                Check Out
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
