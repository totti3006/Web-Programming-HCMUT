import React from "react";
import "./Product.css";
import ProductGrid from "./ProductGrid";
const ProductPage = () => {
  return (
    <div className="container">
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
            <ProductGrid />
            <ProductGrid />
            <ProductGrid />
            <ProductGrid />
            <ProductGrid />
          </div>
          <nav className="navi mt-4" aria-label="Page navigation sample">
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
  );
};
export default ProductPage;
