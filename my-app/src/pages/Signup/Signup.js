import React from "react";
import { Link } from "react-router-dom";
import './Signup.css';
import image from '../../images/hero-img.png'


const Signup  = () => {
    return (
      <div id="signin-container">
        <div id="signin-box">
        <div id="signin-box-col1">
                    <img src={image} alt="Signin"/>
        </div>
          <div id="signin-box-col2">
            <h2>Đăng Ký</h2>
            <div className="signin-box-col2-input">
              <input type="text" placeholder="Tên đăng nhập"></input>
            </div>
            <div className="signin-box-col2-input">
                        <input type="text" placeholder="Email"></input>
                    </div>
                    <div className="signin-box-col2-input">
                        <input type="text" placeholder="Mật khẩu"></input>
                    </div>
                    <div className="signin-box-col2-input">
                        <input type="password" placeholder="Nhập lại mật khẩu"></input>
                    </div>
                    <div className="form-check ms-5 mt-2 ">
                    <input
                      type="checkbox"
                      name="remember-me"
                      id="remember-me"
                      className="remember-me form-check-input"
                      required
                      value=""
                    />
                    <label
                      htmlFor="accept-term"
                      className="label-accept-term form-check-label"
                    >
                      Tôi đồng ý với các điều khoản và dịch vụ
                    </label>
                  </div>
                    <div className="signin-box-col2-input">
                        <button type="submit" className="btn btn-primary">Đăng ký</button>
                    </div>
                    <div class="signin-box-col2-input linkk">
                    <Link to="/login">Tôi đã có tài khoản!</Link>
                    </div>
                </div>
            </div>
        </div>

           
    );
}

export default Signup;