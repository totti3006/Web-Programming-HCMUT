import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import Contac from "./components/Contac";
import User from "./components/Users";
import Price from "./components/Price";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Signup from "./pages/Signup/Signup";
import IntroPage from "./pages/Introduce/Introduce";
import News from "./pages/New/New";

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
      </Router>
    </div>
  );
}

export default App;
