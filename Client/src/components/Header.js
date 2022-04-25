import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="fixed-top ">
      <nav className="navbar navbar-expand-lg navbar-light bgcolor">
        <div className="container-fluid">
          <a className="navbar-brand text-white md" href="#">
            PINE@APPLE
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="d-flex align-items-center">
            <div className="collapse navbar-collapse ">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                <li className="nav-item">
                  <a
                    className="nav-link text-white"
                    aria-current="page"
                    href="/"
                  >
                    Trang chủ
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link text-white"
                    aria-current="page"
                    href="/intro"
                  >
                    Giới thiệu
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link text-white"
                    aria-current="page"
                    href="/product"
                  >
                    Sản phẩm
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link text-white"
                    aria-current="page"
                    href="/price"
                  >
                    Bảng giá
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link text-white"
                    aria-current="page"
                    href="/new"
                  >
                    Tin tức
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link text-white"
                    aria-current="page"
                    href="/contact"
                  >
                    Liên hệ
                  </a>
                </li>
              </ul>
              <a href="/signin">
                <button type="button" className="button">
                  Login
                </button>
              </a>
              <a href="/cart">
                <button
                  className={"btn btn-outline-secondary position-relative ms-4"}
                  onClick={{}}
                >
                  <i className="bi bi-cart"></i>
                </button>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Header;
