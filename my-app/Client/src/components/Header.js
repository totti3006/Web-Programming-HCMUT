import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header  = () =>{
  const [logged, setLogged] = useState(false);

  const isLogin = () => {
    if(localStorage.getItem("role")){
      return true;
    }
    return false;
  }

  useEffect(() => {
    setLogged(isLogin());
  },[logged]);

  return (
      <header className="fixed-top ">
    <nav className="navbar navbar-expand-lg navbar-light bgcolor">
    <div className="container-fluid">
        <a className="navbar-brand text-white md" href="#">PINE@APPLE</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="d-flex align-items-center">
        <div className="collapse navbar-collapse ">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
            <li className="nav-item">
            <a className="nav-link text-white" aria-current="page" href="">Trang chủ</a>
            </li>
            <li className="nav-item">
            <a className="nav-link text-white" aria-current="page" href="/intro">Giới thiệu</a>
            </li>
            <li className="nav-item">
            <a className="nav-link text-white" aria-current="page" href="/intro">Sản phẩm</a>
            </li>
            <li className="nav-item">
            <a className="nav-link text-white" aria-current="page" href="/intro">Bảng giá</a>
            </li>
            <li className="nav-item">
            <a className="nav-link text-white" aria-current="page" href="/new">Tin tức</a>
            </li>
            <li className="nav-item">
            <a className="nav-link text-white" aria-current="page" href="#">Liên hệ</a>
            </li>
        </ul>
        {
          !logged ? <Link to="/signin">
            <button type="button" className="button">
              Login
            </button>
          </Link> : <button onClick={() => {
            localStorage.clear()
            setLogged(false)
          }} type="button" className="button">
              Logout
            </button>
        }
        </div>
        
    </div>
    </div>
    </nav>
    </header>
  );
}
export default Header;