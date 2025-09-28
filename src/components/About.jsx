import React from "react";
import Navbar from "./Navbar";
function AboutUs() {
  return (
    <div className="max-w-6xl mx-auto p-8">
      {/* Header */}
      <h1 className="text-4xl font-bold text-red-500 mb-6">About Pizaroo 🍕</h1>

      {/* Intro Section */}
      <p className="text-lg text-gray-700 mb-6 leading-relaxed">
        At <span className="font-semibold text-red-500">Pizaroo</span>, our mission is simple:  
        to deliver fresh, delicious pizzas and meals right to your doorstep — anywhere in Pune.  
        Whether you’re in Koregaon Park, Viman Nagar, Hinjewadi, or even Kothrud, we’ve got you covered.
      </p>

      {/* How It Works Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-red-400 mb-4">🚚 How We Deliver to All Pune Locations</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li><strong>Wide Network:</strong> We have multiple delivery hubs across Pune for faster service.</li>
          <li><strong>Real-Time Tracking:</strong> Our app shows you exactly where your order is and when it will arrive.</li>
          <li><strong>Flexible Delivery:</strong> We deliver to homes, offices, events, and even late-night cravings.</li>
          <li><strong>Dedicated Riders:</strong> Our trained delivery team knows Pune inside out, ensuring quick and safe delivery.</li>
        </ul>
      </div>

      {/* Why Choose Us Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-red-400 mb-4">❤️ Why Choose Pizaroo?</h2>
        <p className="text-gray-700 leading-relaxed">
          We’re not just a food delivery service — we’re a promise of quality, speed, and convenience.  
          From fresh ingredients to reliable delivery, Pizaroo is committed to making every meal unforgettable.  
          With our friendly riders, 24/7 service, and wide coverage in Pune, your cravings are just a click away.
        </p>
      </div>

      {/* Closing Statement */}
      <div className="bg-red-50 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-red-500 mb-2">Ready to taste the magic?</h3>
        <p className="text-gray-700">
          Order now and experience the joy of fast, reliable pizza delivery anywhere in Pune.
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
