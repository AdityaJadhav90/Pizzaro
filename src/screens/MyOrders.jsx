import React, { useEffect, useState } from "react";

export default function MyOrders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      const userEmail = localStorage.getItem("userEmail");

      try {
        const response = await fetch("http://localhost:5000/api/auth/myorders", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: userEmail }),
        });

        const data = await response.json();

        if (data.success) {
          setOrders(data.orders);
        } else {
          alert(data.message || "Failed to fetch orders");
        }
      } catch (error) {
        console.error("Error fetching orders:", error);
        alert("❌ Server error");
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) {
    return <p className="text-center py-10">⏳ Loading your orders...</p>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">📦 My Orders</h2>

      {orders.length === 0 ? (
        <p className="text-gray-600">You haven’t placed any orders yet.</p>
      ) : (
        <div className="space-y-6">
          {orders.map((order) => (
            <div
              key={order._id}
              className="border rounded-xl p-4 shadow-md bg-white"
            >
              <p className="text-sm text-gray-500">
                Order Date: {new Date(order.orderDate).toLocaleString()}
              </p>

              <ul className="mt-3 space-y-2">
                {order.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex justify-between text-sm text-gray-700"
                  >
                    <span>
                      {item.name} × {item.quantity}
                    </span>
                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-3 flex justify-between font-bold text-gray-800">
                <span>Total:</span>
                <span>${order.totalPrice.toFixed(2)}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
