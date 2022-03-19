// import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import Contac from "./components/Contac";
import User from "./components/Users";
import Price from "./components/Price";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/contact" element={<Contac />} />
        </Routes>
        <Routes>
          <Route exact path="/user" element={<User />} />
        </Routes>
        <Routes>
          <Route exact path="/price" element={<Price />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
