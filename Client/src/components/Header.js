import React from "react";
import "./Header.css";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineLogin } from "react-icons/ai";
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="fixed-top ">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand text-black md" href="#">
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
                    className="nav-link text-black"
                    aria-current="page"
                    href="/"
                  >
                    Trang chủ
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link text-black"
                    aria-current="page"
                    href="/intro"
                  >
                    Giới thiệu
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link text-black"
                    aria-current="page"
                    href="/product"
                  >
                    Sản phẩm
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link text-black"
                    aria-current="page"
                    href="/price"
                  >
                    Bảng giá
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link text-black"
                    aria-current="page"
                    href="/new"
                  >
                    Tin tức
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link text-black"
                    aria-current="page"
                    href="/contact"
                  >
                    Liên hệ
                  </a>
                </li>
              </ul>
              
              <a href="/cart">
                <button
                  className={"btn btn-outline-secondary position-relative ms-4"}
                  onClick={{}}
                >
                  <i className="bi bi-cart"></i>
                </button>
              </a>
              <Link to="/user">
                <AiOutlineUser style={{color: 'black', marginLeft: '10px', marginRight: '10px',  fontSize: '30px'}}/>
              </Link> 
              <Link to="/signin">
                <AiOutlineLogin style={{color: 'black', fontSize: '30px'}}/>
              </Link> 
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Header;
