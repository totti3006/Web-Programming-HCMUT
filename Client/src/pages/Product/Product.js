import React from "react";
import image from ".././images/1.jpg";
import "./Product.css";

const Product = () => {
  return (
    <div>
      <header className="section-header">
        <section className="header-main border-bottom">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-2 col-4">
                <a href="#" className="brand-wrap">
                  PineApple
                </a>
              </div>
              <div className="col-lg-6 col-sm-12">
                <form action="#" className="search">
                  <div className="input-group w-100">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Tìm kiếm"
                    />
                    <div className="input-group-append">
                      <button className="btn btn-primary" type="submit">
                        <i className="fa fa-search"></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-lg-4 col-sm-6 col-12">
                <div className="widgets-wrap float-md-right">
                  <div className="widget-header icontext">
                    <div className="text">
                      <span className="text-muted">Chào mừng</span>
                      <div>
                        <a href="#">Đăng nhập</a> |<a href="#">Đăng ký</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </header>

      <section className="section-pagetop bg">
        <div className="container">
          <h2 className="title-page">Danh mục sản phẩm</h2>
        </div>
      </section>
      <section className="section-content padding-y">
        <div className="container">
          <div className="row">
            <aside className="col-md-3">
              <div className="card">
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
            <main className="col-md-9">
              <div className="row">
                <div className="col-md-4">
                  <figure className="card card-product-grid">
                    <div className="img-wrap">
                      <span className="badge badge-danger"> NEW </span>
                      <img src={image} />
                    </div>
                    <figcaption className="info-wrap">
                      <div className="fix-height">
                        <a href="#" className="title">
                          Điện thoại Oppo chính hãng
                        </a>
                        <div className="price-wrap mt-2">
                          <span className="price">$1280</span>
                        </div>
                      </div>
                      <a href="#" className="btn btn-block btn-primary">
                        Thêm vào giỏ hàng
                      </a>
                    </figcaption>
                  </figure>
                </div>
                <div className="col-md-4">
                  <figure className="card card-product-grid">
                    <div className="img-wrap">
                      <span className="badge badge-danger"> NEW </span>
                      <img src={image} />
                    </div>
                    <figcaption className="info-wrap">
                      <div className="fix-height">
                        <a href="#" className="title">
                          Điện thoại Oppo chính hãng
                        </a>
                        <div className="price-wrap mt-2">
                          <span className="price">$1280</span>
                        </div>
                      </div>
                      <a href="#" className="btn btn-block btn-primary">
                        Thêm vào giỏ hàng
                      </a>
                    </figcaption>
                  </figure>
                </div>
                <div className="col-md-4">
                  <figure className="card card-product-grid">
                    <div className="img-wrap">
                      <span className="badge badge-danger"> NEW </span>
                      <img src={image} />
                    </div>
                    <figcaption className="info-wrap">
                      <div className="fix-height">
                        <a href="#" className="title">
                          Điện thoại Oppo chính hãng
                        </a>
                        <div className="price-wrap mt-2">
                          <span className="price">$1280</span>
                        </div>
                      </div>
                      <a href="#" className="btn btn-block btn-primary">
                        Thêm vào giỏ hàng
                      </a>
                    </figcaption>
                  </figure>
                </div>
                <div className="col-md-4">
                  <figure className="card card-product-grid">
                    <div className="img-wrap">
                      <span className="badge badge-danger"> NEW </span>
                      <img src={image} />
                    </div>
                    <figcaption className="info-wrap">
                      <div className="fix-height">
                        <a href="#" className="title">
                          Điện thoại Oppo chính hãng
                        </a>
                        <div className="price-wrap mt-2">
                          <span className="price">$1280</span>
                        </div>
                      </div>
                      <a href="#" className="btn btn-block btn-primary">
                        Thêm vào giỏ hàng
                      </a>
                    </figcaption>
                  </figure>
                </div>
                <div className="col-md-4">
                  <figure className="card card-product-grid">
                    <div className="img-wrap">
                      <span className="badge badge-danger"> NEW </span>
                      <img src={image} />
                    </div>
                    <figcaption className="info-wrap">
                      <div className="fix-height">
                        <a href="#" className="title">
                          Điện thoại Oppo chính hãng
                        </a>
                        <div className="price-wrap mt-2">
                          <span className="price">$1280</span>
                        </div>
                      </div>
                      <a href="#" className="btn btn-block btn-primary">
                        Thêm vào giỏ hàng
                      </a>
                    </figcaption>
                  </figure>
                </div>
                <div className="col-md-4">
                  <figure className="card card-product-grid">
                    <div className="img-wrap">
                      <span className="badge badge-danger"> NEW </span>
                      <img src={image} />
                    </div>
                    <figcaption className="info-wrap">
                      <div className="fix-height">
                        <a href="#" className="title">
                          Điện thoại Oppo chính hãng
                        </a>
                        <div className="price-wrap mt-2">
                          <span className="price">$1280</span>
                        </div>
                      </div>
                      <a href="#" className="btn btn-block btn-primary">
                        Thêm vào giỏ hàng
                      </a>
                    </figcaption>
                  </figure>
                </div>
                <div className="col-md-4">
                  <figure className="card card-product-grid">
                    <div className="img-wrap">
                      <span className="badge badge-danger"> NEW </span>
                      <img src={image} />
                    </div>
                    <figcaption className="info-wrap">
                      <div className="fix-height">
                        <a href="#" className="title">
                          Điện thoại Oppo chính hãng
                        </a>
                        <div className="price-wrap mt-2">
                          <span className="price">$1280</span>
                        </div>
                      </div>
                      <a href="#" className="btn btn-block btn-primary">
                        Thêm vào giỏ hàng
                      </a>
                    </figcaption>
                  </figure>
                </div>
                <div className="col-md-4">
                  <figure className="card card-product-grid">
                    <div className="img-wrap">
                      <span className="badge badge-danger"> NEW </span>
                      <img src={image} />
                    </div>
                    <figcaption className="info-wrap">
                      <div className="fix-height">
                        <a href="#" className="title">
                          Điện thoại Oppo chính hãng
                        </a>
                        <div className="price-wrap mt-2">
                          <span className="price">$1280</span>
                        </div>
                      </div>
                      <a href="#" className="btn btn-block btn-primary">
                        Thêm vào giỏ hàng
                      </a>
                    </figcaption>
                  </figure>
                </div>
                <div className="col-md-4">
                  <figure className="card card-product-grid">
                    <div className="img-wrap">
                      <span className="badge badge-danger"> NEW </span>
                      <img src={image} />
                    </div>
                    <figcaption className="info-wrap">
                      <div className="fix-height">
                        <a href="#" className="title">
                          Điện thoại Oppo chính hãng
                        </a>
                        <div className="price-wrap mt-2">
                          <span className="price">$1280</span>
                        </div>
                      </div>
                      <a href="#" className="btn btn-block btn-primary">
                        Thêm vào giỏ hàng
                      </a>
                    </figcaption>
                  </figure>
                </div>
              </div>
              <nav className="mt-4" aria-label="Page navigation sample">
                <ul className="pagination">
                  <li className="page-item disabled">
                    <a className="page-link" href="#">
                      Previous
                    </a>
                  </li>
                  <li className="page-item active">
                    <a className="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      Next
                    </a>
                  </li>
                </ul>
              </nav>
            </main>
          </div>
        </div>
      </section>

      <footer className="section-footer border-top padding-y">
        <div className="container">
          <p className="float-md-right">Footer......</p>
        </div>
      </footer>
    </div>
  );
};

export default Product;
