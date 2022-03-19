import React from "react";
import NoUser from "../images/no_user.png";
import Phone from "../images/phone.png";
import Mail from "../images/email.png";
import Lock from "../images/lock.png";
import Data from "./DummyData";
// import "./Users.css";

function User() {
  const [infoData, setInfoData] = React.useState(Data[0]);

  function handleChange(event) {
    const { name, value, type, checked, id } = event.target;
    setInfoData((prevInfoData) => {
      if (name !== "dateofbirth") {
        return {
          ...prevInfoData,
          [name]: type === "checkbox" ? checked : value,
        };
      }
      return {
        ...prevInfoData,
        [name]: { ...prevInfoData.dateofbirth, [id]: value },
      };
    });
  }

  console.log(infoData);

  function clickPhone() {}

  function clickMail() {}

  function clickPassword() {}

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-12">
          <h4>Thông tin tài khoản</h4>
        </div>
        <div className="col-12 mt-2">
          <div
            className="card card-body border-1 py-3 px-3 shadow rounded-3"
            // style={{
            //   borderRadius: "10px",
            //   boxShadow: "0px 2.98256px 7.4564px rgba(0, 0, 0, 0.1)",
            // }}
          >
            <div className="row">
              <div className="col-lg-7 border-end px-4">
                <h5>Thông tin cá nhân</h5>
                <div className="row pt-2">
                  <div className="col-3">
                    <img
                      src={NoUser}
                      alt={NoUser}
                      className="img-fluid rounded-circle border border-primary border-5"
                    ></img>
                  </div>
                  <div className="col-9">
                    <form>
                      <div
                        className="row align-items-center"
                        style={{ height: "163px" }}
                      >
                        <label
                          className="col-3 col-form-label"
                          htmlFor="user-name"
                        >
                          Họ và tên
                        </label>
                        <div className="col-9">
                          <input
                            type="text"
                            className="form-control"
                            id="user-name"
                            name="name"
                            value={infoData.name}
                            onChange={handleChange}
                          ></input>
                        </div>
                      </div>
                    </form>
                  </div>

                  <div className="col-12 mt-4">
                    <div className="row">
                      <label className="col-3 col-form-label">Ngày sinh</label>
                      <div className="col-3">
                        <select
                          className="form-select"
                          aria-label="Default select example"
                          id="d"
                          value={infoData.dateofbirth.d}
                          onChange={handleChange}
                          name="dateofbirth"
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="6">6</option>
                          <option value="7">7</option>
                          <option value="8">8</option>
                          <option value="9">9</option>
                          <option value="10">10</option>
                          <option value="11">11</option>
                          <option value="12">12</option>
                          <option value="13">13</option>
                          <option value="14">14</option>
                          <option value="15">15</option>
                          <option value="16">16</option>
                          <option value="17">17</option>
                          <option value="18">18</option>
                          <option value="19">19</option>
                          <option value="20">20</option>
                          <option value="21">21</option>
                          <option value="22">22</option>
                          <option value="23">23</option>
                          <option value="24">24</option>
                          <option value="25">25</option>
                          <option value="26">26</option>
                          <option value="27">27</option>
                          <option value="28">28</option>
                          <option value="29">29</option>
                          <option value="30">30</option>
                          <option value="31">31</option>
                        </select>
                      </div>
                      <div className="col-3">
                        <select
                          className="form-select"
                          aria-label="Default select example"
                          id="m"
                          value={infoData.dateofbirth.m}
                          onChange={handleChange}
                          name="dateofbirth"
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="6">6</option>
                          <option value="7">7</option>
                          <option value="8">8</option>
                          <option value="9">9</option>
                          <option value="10">10</option>
                          <option value="11">11</option>
                          <option value="12">12</option>
                        </select>
                      </div>
                      <div className="col-3">
                        <select
                          className="form-select"
                          aria-label="Default select example"
                          id="y"
                          value={infoData.dateofbirth.y}
                          onChange={handleChange}
                          name="dateofbirth"
                        >
                          <option value="2000">2000</option>
                          <option value="2001">2001</option>
                          <option value="2002">2002</option>
                          <option value="2003">2003</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 mt-4">
                    <div className="row">
                      <label className="col-3 col-form-label">Giới tính</label>
                      <div className="col-9 col-form-label">
                        <div className="form-check form-check-inline ">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="gender"
                            id="male"
                            value="Nam"
                            checked={infoData.gender === "Nam"}
                            onChange={handleChange}
                          />
                          <label className="form-check-label" htmlFor="male">
                            Nam
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="gender"
                            id="female"
                            value="Nữ"
                            checked={infoData.gender === "Nữ"}
                            onChange={handleChange}
                          />
                          <label className="form-check-label" htmlFor="female">
                            Nữ
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="gender"
                            id="none"
                            value="Khác"
                            checked={infoData.gender === "Khác"}
                            onChange={handleChange}
                          />
                          <label className="form-check-label" htmlFor="none">
                            Khác
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 mt-4">
                    <form>
                      <div className="row ">
                        <label
                          className="col-3 col-form-label"
                          htmlFor="address"
                        >
                          Địa chỉ
                        </label>
                        <div className="col-9">
                          <input
                            type="text"
                            className="form-control"
                            id="address"
                            name="address"
                            placeholder="phường, quận, thành phố"
                            value={infoData.address}
                            onChange={handleChange}
                          ></input>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>

                <div className="d-grid col-4 py-2 mx-auto mt-5">
                  <button type="submit" className="btn btn-primary">
                    Lưu thay đổi
                  </button>
                </div>
              </div>
              <div className="col-lg-5 px-3">
                <div className="row">
                  <h5>Số điện thoại và email</h5>
                  <div className="col-12">
                    <div className="row">
                      <div className="col-2">
                        <img src={Phone} alt="phone"></img>
                      </div>
                      <div className="col-7">
                        <div
                          className="row align-items-center"
                          style={{ height: "48px" }}
                        >
                          <p className="col-12" style={{ margin: "0" }}>
                            {infoData.phone}
                          </p>
                        </div>
                      </div>
                      <div className="col-3">
                        <div
                          className="row align-items-center"
                          style={{ height: "48px" }}
                        >
                          <div className="col-12">
                            <button
                              type="submit"
                              className="btn btn-outline-secondary"
                              onClick={clickPhone}
                            >
                              Cập nhật
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 mt-3">
                    <div className="row">
                      <div className="col-2">
                        <img src={Mail} alt="mail"></img>
                      </div>
                      <div className="col-7">
                        <div
                          className="row align-items-center"
                          style={{ height: "48px" }}
                        >
                          <p className="col-12" style={{ margin: "0" }}>
                            {infoData.email}
                          </p>
                        </div>
                      </div>
                      <div className="col-3">
                        <div
                          className="row align-items-center"
                          style={{ height: "48px" }}
                        >
                          <div className="col-12">
                            <button
                              type="submit"
                              className="btn btn-outline-secondary"
                              onClick={clickMail}
                            >
                              Cập nhật
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <h5 className="mt-3">Bảo mật</h5>
                  <div className="col-12">
                    <div className="row">
                      <div className="col-2">
                        <img src={Lock} alt="lock"></img>
                      </div>
                      <div className="col-7">
                        <div
                          className="row align-items-center"
                          style={{ height: "48px" }}
                        >
                          <p className="col-12" style={{ margin: "0" }}>
                            Đổi mật khẩu
                          </p>
                        </div>
                      </div>
                      <div className="col-3">
                        <div
                          className="row align-items-center"
                          style={{ height: "48px" }}
                        >
                          <div className="col-12">
                            <button
                              type="submit"
                              className="btn btn-outline-secondary"
                              onClick={clickPassword}
                            >
                              Cập nhật
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <h5 className="mt-3">Liên kết mạng xã hội</h5>
                  <div className="col-12"></div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;
