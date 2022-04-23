import React from "react";
import "./ProductDetail.css";
import image from "../images/phone-1.jpg";
import DummyProduct from "./DummyProduct";
import Comment from "./Comment";
import { Link } from "react-router-dom";

const ProductDetail = () => {
  const dataProduct = React.useState(DummyProduct[0]);

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
                    <a
                      href="#"
                      data-toggle="collapse"
                      data-target="#collapse_1"
                      aria-expanded="true"
                      className=""
                    >
                      <i className="icon-control fa fa-chevron-down"></i>
                      <h6 className="title">Hãng</h6>
                    </a>
                  </header>
                  <div className="filter-content collapse show" id="collapse_1">
                    <div className="category-list list-group">
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        Iphone
                      </a>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        Samsung
                      </a>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        Oppo
                      </a>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        Vivo
                      </a>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        Xiaomi
                      </a>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        Xiaomi
                      </a>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        Realme
                      </a>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        Nokia
                      </a>
                    </div>
                  </div>
                </article>
                <article className="filter-group">
                  <header className="card-header">
                    <a
                      href="#"
                      data-toggle="collapse"
                      data-target="#collapse_3"
                      aria-expanded="true"
                      className=""
                    >
                      <i className="icon-control fa fa-chevron-down"></i>
                      <h6 className="title">Giá</h6>
                    </a>
                  </header>
                  <div className="filter-content collapse show" id="collapse_3">
                    <div className="category-list list-group">
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        Dưới 2 triệu
                      </a>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        Từ 2 đến 4 triệu
                      </a>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        Từ 4 đến 10 triệu
                      </a>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        Từ 10 đến 20 triệu
                      </a>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        Trên 20 triệu
                      </a>
                    </div>
                  </div>
                </article>
              </div>
            </aside>
            <div className="col-md-5">
              <div className="col">
                <img src={image} />
              </div>
              <div className="col">
                <h2 className="">{dataProduct[0].name}</h2>
                <h5 className="fw-bolder">Mô tả</h5>
                <p className="lh-lg">{dataProduct[0].description}</p>
                <h5 className="fw-bolder">Giá: {dataProduct[0].price}</h5>
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
