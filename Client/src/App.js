import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import Contact from "./pages/Contact/Contact";
import User from "./pages/User/User";
import Price from "./pages/Price/Price";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Signup from "./pages/Signup/Signup";
import IntroPage from "./pages/Introduce/Introduce";
import News from "./pages/New/New";
import NewDetail from "./pages/New/NewDetail";

import Signin from "./pages/Signin/Signin";
import Home from "./pages/Home/Home";

import Product from "./pages/Product/Product";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Cart from "./pages/Cart/Cart";
import ProductAdmin from "./components/Admin/Product"
import OrderAdmin from "./components/Admin/Order";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/contact" element={<Contact />} />
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
          <Route path="/NewDetail" element={<NewDetail />} />
        </Routes>

        <Routes>
          <Route path="/signin" element={<Signin />} />
        </Routes>

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>

        <Routes>
          <Route path="/product" element={<Product />} />
        </Routes>

        <Routes>
          <Route path="/cart" element={<Cart />} />
        </Routes>

        <Routes>
          <Route path="/productdetail/:id" element={<ProductDetail />} />
        </Routes>
        <Routes>
          <Route path="/admin/productadmin" element={<ProductAdmin />} />
        </Routes>
        <Routes>
          <Route path="/admin/orderadmin" element={<OrderAdmin />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
