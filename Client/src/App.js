import { Routes, Route } from "react-router-dom";
// import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import Contac from "./components/Contac";
import User from "./components/Users";
import Price from "./components/Price";

// import Header from "./components/Header";
// import Footer from "./components/Footer";

import Signup from "./pages/Signup/Signup";
import IntroPage from "./pages/Introduce/Introduce";
import News from "./pages/New/New";

import Signin from './pages/Signin/Signin'
import Home from './pages/Home/Home'

import Product from "./pages/Product/Product";
import ProductDetail from "./pages/ProductDetail/ProductDetail";

import AdminHome from "./pages/Admin/Home/Home"
import Category from "./pages/Admin/Category/Category";
import AdminRouter from "./pages/Admin/AdminRouter";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/contact" element={<Contac />} />
      
        <Route path="/user" element={<User />} />
      
        <Route path="/price" element={<Price />} />
      
        <Route path="/signup" element={<Signup />} />
      
        <Route path="/intro" element={<IntroPage />} />
      
        <Route path="/new" element={<News />} />
      
        <Route path="/signin" element={<Signin/>} />
     
        <Route path="/" element={<Home/>} />
      
        <Route path="/Product" element={<Product />} />
      
        <Route path="/ProductDetail" element={<ProductDetail />} />
      
        <Route path="/Admin/*" element={<AdminRouter />} />
      </Routes>
    </div>
  );
}

export default App;
