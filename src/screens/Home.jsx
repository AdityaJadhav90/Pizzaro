import React from "react";
import { Carousel } from "../components/Carousel";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Menu from "../components/Menu";

export default function Home() {
  return (
    <div className="font-sans">


      {/* Hero Section */}
      <section className="bg-yellow-50 text-center py-16 px-6">
        <h1 className="text-4xl font-bold text-red-600 mb-4">
          Welcome to PIZZAROO 🍕
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-700">
          Delivering piping hot pizza anywhere in Pune, anytime — even at night!  
          Craving your favorite pizza? We’re just a click away.
        </p>
        <button className="mt-8 bg-red-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-red-700 transition">
          <Link to="/Menu" >Order Now
        </Link>
        </button>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <img
            src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=1600&q=80"
            alt="Pizza"
            className="rounded-lg shadow-lg"
          />
          <div>
            <h2 className="text-3xl font-bold mb-4 text-red-600">
              Fresh, Hot & Delicious
            </h2>
            <p className="text-gray-700 mb-4">
              At PIZZAROO, every pizza is crafted with the freshest ingredients,
              baked to perfection, and delivered straight to your doorstep.
            </p>
            <p className="text-gray-700">
              Whether it’s midnight cravings or weekend hangouts, we make sure
              you never go without your favorite slice.
            </p>
          </div>
        </div>
      </section>

      {/* Night Delivery Section */}
      <section className="bg-gray-600 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Night Owl? No Problem!</h2>
          <p className="mb-8 text-lg">
            We deliver delicious pizza all night long across Pune.  
            Midnight hunger pangs? PIZZAROO has your back!
          </p>
          <div className="flex justify-center gap-6 flex-wrap">
            <img
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80"
              alt="Cafe Night"
              className="w-64 h-40 object-cover rounded-lg shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1600&q=80"
              alt="Pizza Night"
              className="w-64 h-40 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
