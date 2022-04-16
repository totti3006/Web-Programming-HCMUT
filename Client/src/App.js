import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import Contac from "./components/Contac";
import User from "./pages/User/User";
import Price from "./components/Price";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Signup from "./pages/Signup/Signup";
import IntroPage from "./pages/Introduce/Introduce";
import News from "./pages/New/New";

import Signin from "./pages/Signin/Signin";
import Home from "./pages/Home/Home";

import Product from "./pages/Product/Product";
import ProductDetail from "./pages/ProductDetail/ProductDetail";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/contact" element={<Contac />} />
        </Routes>
        <Routes>
          <Route path="/user" element={<User />} />
        </Routes>
        <Routes>
          <Route path="/price" element={<Price />} />
        </Routes>
        <Routes>
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Routes>
          <Route path="/intro" element={<IntroPage />} />
        </Routes>
        <Routes>
          <Route path="/new" element={<News />} />
        </Routes>
        <Routes>
          <Route path="/signin" element={<Signin />} />
        </Routes>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/Product" element={<Product />} />
        </Routes>
        <Routes>
          <Route path="/ProductDetail" element={<ProductDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
