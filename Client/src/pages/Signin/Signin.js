import "./Signin.css";
import image from "./images/signin-img.png";
import axios from "axios";
import environment from "../../components/Environment/Environment";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Signin = () => {
  const location = useNavigate();

  const logged = () => {
    if (localStorage.getItem("role")) {
      location("/");
    }
  };

  useEffect(() => {
    logged();
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const loginData = new FormData(e.target);
    const data = {
      username: loginData.get("username"),
      password: loginData.get("password"),
    };
    await axios
      .post(`http://localhost/ltw-api/users/login`, data, {headers: {'Content-Type': 'application/json'}})
      .then((res) => {
        localStorage.setItem("id", JSON.stringify(res.data.data.id));
        localStorage.setItem("token", res.data.data.token);
        localStorage.setItem("role", res.data.data.role);
        environment.headers = {
          headers: {
            "x-access-token": localStorage.getItem("token"),
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Authorization": `Bearer ${localStorage.getItem("token")}`,
          },
        };
        logged();
      })
      .catch((err) => {
        alert("Sai Tên đăng nhập hoặc Mật khẩu!")
      });
  };

  return (
    <div id="signin-container">
      <div id="signin-box">
        <div id="signin-box-col1">
          <img src={image} alt="Signin" />
        </div>
        <form onSubmit={handleSubmit} id="signin-box-col2">
          <h2>Đăng nhập</h2>
          <div className="signin-box-col2-input">
            <input
              name="username"
              type="text"
              placeholder="Tên đăng nhập"
            ></input>
          </div>
          <div className="signin-box-col2-input">
            <input
              name="password"
              type="password"
              placeholder="Mật khẩu"
            ></input>
          </div>
          <div className="signin-box-col2-input">
            <button type="submit" className="btn btn-primary">
              Đăng nhập
            </button>
          </div>
          <div id="signin-box-col2-signup">
            <p>Bạn chưa có tài khoản?</p>
            <a href="/signup">Đăng kí ngay bây giờ</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signin;
