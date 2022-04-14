import React from "react";
import ProductPage from "../../components/Product";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
const Product = () => {
  return (
    <div className="product-page">
      <Header />
      <ProductPage />
      <Footer />
    </div>
  );
};

export default Product;
