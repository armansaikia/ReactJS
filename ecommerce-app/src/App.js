import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Footer from './Footer';
import UserInfo from './UserInfo';
import ProductComponents from './Product';
import ProductDetailsComponent from './ProductDetails';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/userinfo" element={<UserInfo />} />
          <Route path="/product" element={<ProductComponents />} />
          <Route path="/productdetails" element={<ProductDetailsComponent />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
