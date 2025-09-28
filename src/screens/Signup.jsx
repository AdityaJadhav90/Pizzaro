import React from 'react';
import { useNavigate } from 'react-router-dom';
function Signup() {
    const navigate = useNavigate();
  const [credentials, setCredentials] = React.useState({
    name: '',
    email: '',
    password: '',
    location: '',
  });

  const onchange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();


    try {
      const response = await fetch('http://localhost:5000/api/auth/CreateUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'Failed to create account');
      }
    navigate('/Login');
      
      console.log("Server Response:", data);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  return (
    
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Create an Account</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-1">Name</label>
            <input
              name="name"
              type="text"
              value={credentials.name}
              onChange={onchange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Email</label>
            <input
              name="email"
              type="email"
              value={credentials.email}
              onChange={onchange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
              placeholder="john@example.com"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Password</label>
            <input
              name="password"
              type="password"
              value={credentials.password}
              onChange={onchange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
              placeholder="••••••••"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Location</label>
            <input
              name="location"
              type="text"
              value={credentials.location}
              onChange={onchange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
              placeholder="City or Address"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg transition duration-300"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account? <a href="/login" className="text-red-500 hover:underline">Login</a>
        </p>
      </div>
    </div>
  );
}

export default Signup;
