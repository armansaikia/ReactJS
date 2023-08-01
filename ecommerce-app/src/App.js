import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import UserInfo from './UserInfo';
import ProductComponents from './Product';
import ProductDetails from './ProductDetails';
import ItemsComponent from './Items';
import PageNotFound from './PageNotFound';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/userinfo" element={<UserInfo />} />
          <Route path="/product" element={<ProductComponents />} />
          <Route path="/product-details/:productId" element={<ProductDetails />} />
          <Route path="/" element={<ItemsComponent />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;


