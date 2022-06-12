import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
  useNavigate,
} from "react-router-dom";
import { useEffect, useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import Contact from "./pages/Contact/Contact";
import User from "./pages/User/User";
import Price from "./pages/Price/Price";

import Header from "./components/Header";
import Footer from "./components/Footer";
import NotFoundPage from "./pages/NotFound/NotFound";

import Signup from "./pages/Signup/Signup";
import IntroPage from "./pages/Introduce/Introduce";
import News from "./pages/New/New";
import NewDetail from "./pages/New/NewDetail";

import Signin from "./pages/Signin/Signin";
import Home from "./pages/Home/Home";

import { Home as AdminHome } from "./pages/Admin/Home/Home";
import Product from "./pages/Product/Product";
import ProductDetail from "./pages/ProductDetail/ProductDetail";

import Checkout from "./pages/Checkout/Checkout";
// import Checkout from "./pages/Checkout";
// import NewDetail from "./pages/New/NewDetail";
import Cart from "./pages/Cart/Cart";
import AdminRouter from "./pages/Admin/AdminRouter";
import NewAdmin from "./components/Admin/News";


import ProductAdmin from "./components/Admin/Product";
import OrderAdmin from "./components/Admin/Order";
function App() {
  // const navigation = useNavigate();
  const [auth, setAuth] = useState(false);

  const checkRole = () => {
    if (localStorage.getItem("role") !== "admin") {
      // navigation("/");
      return false;
    }
    return true;
  };

  useEffect(() => {
    setAuth(checkRole());
  }, [auth]);

  return (
    <div className="App">
      <Router>
        <Routes path="/">
          {" "}
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="user" element={<User />} />
          <Route path="price" element={<Price />} />
          <Route path="signup" element={<Signup />} />
          <Route path="intro" element={<IntroPage />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="signin" element={<Signin />} />
          <Route path="product">
            <Route index element={<Product />} />
            <Route path=":id" element={<ProductDetail />} />
          </Route>
          <Route path="new">
            <Route index element={<News />} />
            <Route path=":id" element={<NewDetail />} />
          </Route>
          <Route path="cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/admin/*" element={<AdminRouter />} />
          <Route path="/admin/news" element={<NewAdmin />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
