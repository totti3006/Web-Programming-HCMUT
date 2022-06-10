import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import TableCategory from "./TableCategory";
const Product = () => {
  return (
    <div className="product-admin">
      <Header />
      <div className="container-fluid p-5">
        <h2 className="text-center p-5">Quản lý sản phẩm</h2>
        <div className="container">
          <button type="button" class="btn btn-primary">
            Thêm sản phẩm mới
          </button>
          <TableCategory />
        </div>
      </div>
    </div>
  );
};

export default Product;
