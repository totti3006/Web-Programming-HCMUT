import React from "react";
import "./Header.css";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineLogin, AiOutlineLogout } from "react-icons/ai";
import { Link } from "react-router-dom";
import axios from "axios";
import environment from "./Environment/Environment";
import image from "../pages/Signin/images/signin-img.png";

const Header = () => {
  const [infoData, setInfoData] = React.useState({});

  const checkRole = () => {
    if (localStorage.getItem("role") === "admin") {
      // navigation("/");
      return false;
    }
    return true;
  };

  const getData = async () => {
    await axios
      .get(`http://localhost/ltw-api/user`, environment.headers)
      .then((res) => {
        setInfoData(res.data.data);
      });
  };

  const renderAvatar = () => {
    if(!localStorage.getItem("role") || localStorage.getItem("role") === "admin"){
      return ""
    }
    else{
      if(infoData.avatar){
        return <img
          src={infoData.avatar}
          alt="avatar"
          className="img-responsive rounded-circle"
          style={{
            width: "38px",
            height: "38px",
            marginLeft: "10px",
            marginRight: "10px",
          }}
        />
      }
      else{
        return <AiOutlineUser
          style={{
            color: "black",
            marginLeft: "10px",
            marginRight: "10px",
            fontSize: "30px",
          }}
        />
      }
    }
  }

  React.useEffect(() => {
    getData();
  }, []);

  console.log(checkRole());

  return (
    <header className="fixed-top ">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand text-black md" href="/" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <img style={{height: "35px", width: "50px"}} src={image} alt="Home" />
            <span>PINE@APPLE</span>
          </a>

          <div className="navbar-toggler nav-item dropdown right" id="responsiveNav">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              ??i???u h?????ng
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link to="/" className="dropdown-item">
                Trang ch???
              </Link>

              <hr className="dropdown-divider"></hr>

              <Link to="/intro" className="dropdown-item">
                Gi???i thi???u
              </Link>

              <hr className="dropdown-divider"></hr>

              <Link to="/product" className="dropdown-item">
                S???n ph???m
              </Link>

              <hr className="dropdown-divider"></hr>

              <Link to="/price" className="dropdown-item">
                B???ng gi??
              </Link>

              <hr className="dropdown-divider"></hr>

              <Link to="/new" className="dropdown-item">
                Tin t???c
              </Link>

              <hr className="dropdown-divider"></hr>

              <Link to="/contact" className="dropdown-item">
                Li??n h???
              </Link>
              
              <hr className="dropdown-divider"></hr>

              <Link to="/user" className="dropdown-item">
                T??i kho???n
              </Link>

              <hr className="dropdown-divider"></hr>

              {localStorage.getItem("role") === null ? (
                <Link to="/signin" className="dropdown-item">
                  ????ng nh???p
                </Link>
              ) : (
                <Link
                  to="/signin"
                  onClick={() => {
                    localStorage.clear();
                  }}
                  className="dropdown-item"
                >
                  ????ng xu???t
                </Link>
              )}

              
            </div>
            
          </div>
          <div className="rightt">
            {checkRole() === false ? (
                  <div className="navbar-toggler nav-item dropdown " id="responsiveNav">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Qu???n tr???
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <Link to="/admin/user" className="dropdown-item">
                        Ng?????i d??ng
                      </Link>
                      <Link to="/admin/category" className="dropdown-item">
                        Danh m???c
                      </Link>
                      <Link to="/admin/product" className="dropdown-item">
                        S???n ph???m
                      </Link>
                      <Link to="/admin/order" className="dropdown-item">
                        ????n h??ng
                      </Link>
                      <Link to="/admin/news" className="dropdown-item">
                        Tin t???c
                      </Link>
                      <Link to="/admin/comment" className="dropdown-item">
                        B??nh lu???n
                      </Link>
                    </div>
                  </div>
                ) : (
                  ""
                )}
            </div>
          

          <div className="d-flex align-items-center">
            <div className="collapse navbar-collapse ">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                <li className="nav-item">
                  <a
                    className="nav-link text-black"
                    aria-current="page"
                    href="/"
                  >
                    Trang ch???
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link text-black"
                    aria-current="page"
                    href="/intro"
                  >
                    Gi???i thi???u
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link text-black"
                    aria-current="page"
                    href="/product"
                  >
                    S???n ph???m
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link text-black"
                    aria-current="page"
                    href="/price"
                  >
                    B???ng gi??
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link text-black"
                    aria-current="page"
                    href="/new"
                  >
                    Tin t???c
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link text-black"
                    aria-current="page"
                    href="/contact"
                  >
                    Li??n h???
                  </a>
                </li>
                {checkRole() === false ? (
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Qu???n tr???
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <Link to="/admin/user" className="dropdown-item">
                        Ng?????i d??ng
                      </Link>
                      <Link to="/admin/category" className="dropdown-item">
                        Danh m???c
                      </Link>
                      <Link to="/admin/product" className="dropdown-item">
                        S???n ph???m
                      </Link>
                      <Link to="/admin/order" className="dropdown-item">
                        ????n h??ng
                      </Link>
                      <Link to="/admin/news" className="dropdown-item">
                        Tin t???c
                      </Link>
                      <Link to="/admin/comment" className="dropdown-item">
                        B??nh lu???n
                      </Link>
                    </div>
                  </li>
                ) : (
                  ""
                )}
              </ul>

              {checkRole() === true ? (<a href="/cart">
                <button
                  className={"btn btn-outline-secondary position-relative ms-4"}
                  onClick={{}}
                  style={{ marginRight: "0.5rem" }}
                >
                  <i className="bi bi-cart"></i>
                </button>
              </a>
              ) : (
                ""
              )}
              <Link to="/user">
                {renderAvatar()}
              </Link>
              {localStorage.getItem("role") === null ? (
                <Link to="/signin">
                  <AiOutlineLogin
                    style={{ color: "black", fontSize: "30px" }}
                  />
                </Link>
              ) : (
                <Link to="/signin">
                  <AiOutlineLogout
                    onClick={() => {
                      localStorage.clear();
                    }}
                    style={{ color: "black", fontSize: "30px" }}
                  />
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Header;