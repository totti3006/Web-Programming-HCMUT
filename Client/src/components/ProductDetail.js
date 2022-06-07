import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import NumberFormat from "react-number-format";
import Categories from "./Categories";
import "./ProductDetail.css";
// import image from "../images/phone-1.jpg";
// import DummyProduct from "./DummyProduct";
import Comment from "./Comment";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  //const dataProduct = React.useState(DummyProduct[0]);
  const [product, setProduct] = useState({});
  const { id } = useParams();
  //data is all products
  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(
        `http://localhost/ltw-api/product/getall/${id}`
      );
      const data = res.data.data;
      setProduct(data.find((item) => item.id == id));
    };
    getData();
  }, []);
  console.log(product);

  return (
    <div className="productdetail-page">
      <section className="section-content padding-y">
        <div className="container">
          <nav aria-label="breadcrumb" className="ms-3">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/product">Sản phẩm</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Chi tiết sản phẩm
              </li>
            </ol>
          </nav>
          <div className="row">
            <aside className="col-md-3">
              <div className="card1">
                <article className="filter-group">
                  <header className="card-header">
                    <i className="icon-control fa fa-chevron-down"></i>
                    <h6 className="title">Hãng</h6>
                  </header>
                  <div className="filter-content collapse show" id="collapse_1">
                    <Categories />
                  </div>
                </article>
              </div>
            </aside>
            <div className="col-md-5">
              <div className="col">
                <img src={product.thumbnail} />
              </div>
              <div className="col">
                <h2 className="">{product.name}</h2>
                <h5 className="fw-bolder">Mô tả</h5>
                <p className="lh-lg">{product.description}</p>
                <h5 className="fw-bolder">Giá: {product.price}</h5>
                <div className="d-flex justify-content-center mt-md-3 mt-xl-5">
                  <a
                    href="#"
                    className="btn btn-primary px-5 py-2 rounded-pill"
                  >
                    Mua Ngay
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <Comment />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
