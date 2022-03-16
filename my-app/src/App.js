import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Product from "./pages/Product/Product";
import ProductDetail from "./pages/ProductDetail/ProductDetail";

import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/Product" element={<Product />} />
          <Route path="/ProductDetail" element={<ProductDetail />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
