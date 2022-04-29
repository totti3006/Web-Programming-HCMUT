import React from "react";
import "./Header.css";
import { AiOutlineLogin } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { Link } from 'react-router-dom'


const Header  = () =>{
  return (
    <header class="fixed-top ">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
        <a class="navbar-brand text-black md" href="/">PINE@APPLE</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="d-flex align-items-center">
        <div class="collapse navbar-collapse ">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
            <li class="nav-item">
            <a class="nav-link text-black" aria-current="page" href="/">Trang chủ</a>
            </li>
            <li class="nav-item">
            <a class="nav-link text-black" aria-current="page" href="/intro">Giới thiệu</a>
            </li>
            <li class="nav-item">
            <a class="nav-link text-black" aria-current="page" href="/product">Sản phẩm</a>
            </li>
            <li class="nav-item">
            <a class="nav-link text-black" aria-current="page" href="/price">Bảng giá</a>
            </li>
            <li class="nav-item">
            <a class="nav-link text-black" aria-current="page" href="/new">Tin tức</a>
            </li>
            <li class="nav-item">
            <a class="nav-link text-black" aria-current="page" href="/contact">Liên hệ</a>
            </li>
        </ul>
        <Link to="/user">
           <AiOutlineUser style={{color: 'black', marginLeft: '10px', marginRight: '10px', fontSize: '30px'}}/>
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
}
export default Header;