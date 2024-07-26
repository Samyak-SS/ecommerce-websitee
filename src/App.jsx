import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AllProducts from './pages/AllProducts';
const App = () => {
  return (
    <Router>
      <div className="w-full h-full font-poppins">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/allproducts" element={<AllProducts />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
