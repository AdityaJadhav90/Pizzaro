import React from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    const [credentials, setCredentials] = React.useState({
        email: '',
        password: ''
    });

    const onchange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/api/auth/LoginUser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: credentials.email,
                    password: credentials.password,
                }),
            });
            const data = await response.json();
            if (response.ok) {
                localStorage.setItem('userEmail', credentials.email);
                localStorage.setItem('authToken', data.authToken);
                navigate('/');
            } else {
                alert(data.error);
            }
        } catch (error) {
            console.error("Fetch error:", error);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white shadow-md rounded-xl p-8 w-full max-w-md">
                <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Login</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
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
                    <button
                        type="submit"
                        className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg transition duration-300"
                    >
                        Login
                    </button>
                </form>
                <p className="mt-4 text-center text-sm text-gray-600">
                    Don't have an account? <a href="/Signup" className="text-red-500 hover:underline">Sign up</a>
                </p>
            </div>
        </div>
    );
}

export default Login;
