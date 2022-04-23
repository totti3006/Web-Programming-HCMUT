import { Routes, Route, useNavigate } from "react-router-dom";
// import React from "react";

import AdminHome from "./Home/Home";
import Category from "./Category/Category";
import User from "./User/User";
import { useEffect, useState } from "react";

function AdminRouter() {
  const navigation = useNavigate();

  const [auth, setAuth] = useState(false);

  const checkRole = () => {
    if (localStorage.getItem("role") !== "admin") {
      navigation("/");
      return false;
    }
    return true;
  };

  useEffect(() => {
    setAuth(checkRole());
  }, [auth]);

  return (
    <>
      {auth === true ? (
        <Routes>
          <Route path="/" element={<AdminHome />} />

          <Route path="/Category" element={<Category />} />

          <Route path="/User" element={<User />} />
        </Routes>
      ) : (
        "Loading..."
      )}
    </>
  );
}

export default AdminRouter;
