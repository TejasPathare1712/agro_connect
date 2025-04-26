// src/App.js

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';

import FarmerRegistration from './pages/FarmerRegistration';
import ProductList from './pages/ProductList';
import ProductRegistration from './pages/ProductRegistration';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register-farmer" element={<FarmerRegistration />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/register-product" element={<ProductRegistration />} />
      </Routes>
    </Router>
  );
}

export default App;
