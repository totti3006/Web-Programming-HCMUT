import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Signup.css";
import image from "../Signin/images/signin-img.png";
import environment from "../../components/Environment/Environment";
import axios from "axios";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function regis() {
    // let item = { name, email, password };
    // console.warn(item);

    const data = {
      username: name,
      password: password,
    };

    await axios
      .post(`http://localhost/ltw-api/users/signup`, data, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
      .then((res) => {
        if (res.status === 200) {
          alert("Đăng kí thành công. Đang đăng nhập vào tài khoản của bạn ...");
          localStorage.setItem("id", JSON.stringify(res.data.data.id));
          localStorage.setItem("token", res.data.data.token);
          localStorage.setItem("role", res.data.data.role);
          environment.headers = {
            headers: {
              "x-access-token": localStorage.getItem("token"),
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          };
          navigate("/", { replace: true });
        }
      })
      .catch((err) => {
        alert("Tên đăng nhập đã tồn tại!");
      });
    //navigate("signin");
  }

  return (
    <div id="signin-container">
      <div id="signin-box">
        <div id="signin-box-col1">
          <img src={image} alt="Signin" />
        </div>
        <div id="signin-box-col2">
          <h2>Đăng Ký</h2>
          <div className="signin-box-col2-input">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Tên đăng nhập"
            ></input>
          </div>
          {/* <div className="signin-box-col2-input">
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            ></input>
          </div> */}

          <div className="signin-box-col2-input">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Nhập mật khẩu"
            ></input>
          </div>

          <div className="signin-box-col2-input">
            <button type="submit" onClick={regis} className="btn btn-primary">
              Đăng ký
            </button>
          </div>
          <div class="signin-box-col2-input linkk">
            <Link to="/signin">Tôi đã có tài khoản!</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
