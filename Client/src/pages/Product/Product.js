import React from "react";
import ProductPage from "../../components/Product";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./Product.css"

const Product = () => {
  return (
    <>
      <Header />
      <div className="product-page">
        <ProductPage />
        <Footer />
      </div>
    </>
  );
};

export default Product;
