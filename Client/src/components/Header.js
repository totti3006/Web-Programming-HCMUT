import React from "react";
import "./Header.css";

const Header  = () =>{
  return (
      <header class="fixed-top ">
    <nav class="navbar navbar-expand-lg navbar-light bgcolor">
    <div class="container-fluid">
        <a class="navbar-brand text-white md" href="#">PINE@APPLE</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="d-flex align-items-center">
        <div class="collapse navbar-collapse ">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
            <li class="nav-item">
            <a class="nav-link text-white" aria-current="page" href="">Trang chủ</a>
            </li>
            <li class="nav-item">
            <a class="nav-link text-white" aria-current="page" href="/intro">Giới thiệu</a>
            </li>
            <li class="nav-item">
            <a class="nav-link text-white" aria-current="page" href="/intro">Sản phẩm</a>
            </li>
            <li class="nav-item">
            <a class="nav-link text-white" aria-current="page" href="/intro">Bảng giá</a>
            </li>
            <li class="nav-item">
            <a class="nav-link text-white" aria-current="page" href="/new">Tin tức</a>
            </li>
            <li class="nav-item">
            <a class="nav-link text-white" aria-current="page" href="#">Liên hệ</a>
            </li>
        </ul>
        <button type="button" class="button">
          Login
        </button>
        </div>
        
    </div>
    </div>
    </nav>
    </header>
  );
}
export default Header;