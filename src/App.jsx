import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './screens/Home';
import Signup from './screens/Signup';
import Login from './screens/Login';
import MyOrders from './screens/MyOrders';
import AboutUs from './components/About';
import Menu from './components/Menu';
import { ContextProvider } from './components/ContextReducer';
import Footer from './components/Footer'; // Import the Footer

function App() {
  const [count, setCount] = useState(0);

  return (
    <ContextProvider>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/myorders" element={<MyOrders />} />
            <Route path="/Aboutus" element={<AboutUs />} />
            <Route path="/Menu" element={<Menu />} />


          </Routes>
          <Footer /> {/* Add Footer here - it will show on all pages */}
        </div>
      </Router>
    </ContextProvider>
  );
}

export default App;