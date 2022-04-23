import "./ProductGrid.css";
import image from "../images/phone-1.jpg";
import DummyProduct from "./DummyProduct";
import React from "react";

const ProductGrid = () => {
  const dataProduct = React.useState(DummyProduct[0]);
  return (
    <div className="col-md-4">
      <figure className="card card-product-grid">
        <div className="img-wrap">
          <span className="badge badge-danger"> NEW </span>
          <img src={image} />
        </div>
        <figcaption className="info-wrap">
          <div className="fix-height">
            <a href="#" className="title">
              {dataProduct[0].name}
            </a>
            <div className="price-wrap mt-2">
              <span className="price">{dataProduct[0].price}</span>
            </div>
          </div>
          <a href="#" className="btn btn-block btn-primary">
            Thêm vào giỏ hàng
          </a>
        </figcaption>
      </figure>
    </div>
  );
};
export default ProductGrid;
