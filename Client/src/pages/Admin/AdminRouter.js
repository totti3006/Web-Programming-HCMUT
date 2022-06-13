import { Routes, Route, useNavigate } from "react-router-dom";
// import React from "react";

import {Home as AdminHome} from "./Home/Home";
import Category from "./Category/Category";
import User from "./User/User";
import ProductAdmin from "../../components/Admin/Product"
import OrderAdmin from "../../components/Admin/Order";
import CommentAdmin from "../../components/Admin/Comment";
import NewAdmin from "../../components/Admin/News";
import NotFoundPage from "../NotFound/NotFound"
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

          <Route path="/category" element={<Category />} />

          <Route path="/user" element={<User />} />

          <Route path="/product" element={<ProductAdmin />} />

          <Route path="/order" element={<OrderAdmin />} />
          
          <Route path="/comment" element={<CommentAdmin />} />

          <Route path="/news" element={<NewAdmin />} />

          {/* <Route path="/*" element={<NotFoundPage />} /> */}


        </Routes>
      ) : (
        "Loading..."
      )}
    </>
  );
}

export default AdminRouter;
