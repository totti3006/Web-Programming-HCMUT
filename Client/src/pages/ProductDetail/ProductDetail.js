import Header from "../../components/Header";
import Footer from "../../components/Footer";
import React from "react";
import ProductDetailPage from "../../components/ProductDetail";

const ProductDetail = () => {
  return (
    <div className="productdetail-page">
      <Header />
      <ProductDetailPage />
      <Footer />
    </div>
  );
};

export default ProductDetail;
