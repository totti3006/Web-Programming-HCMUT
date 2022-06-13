import React from "react";
import NoUser from "../images/no_user.png";
import Phone from "../images/phone.png";
import Mail from "../images/email.png";
import Lock from "../images/lock.png";
import axios from "axios";
import environment from "./Environment/Environment";
// import "./Users.css";

function User() {
  const [infoData, setInfoData] = React.useState({});

  const [birth, setBirth] = React.useState("");

  const [phone, setPhone] = React.useState("");

  const [mail, setMail] = React.useState("");

  const [auth, setAuth] = React.useState(false);

  const checkRole = () => {
    if (localStorage.getItem("role")) {
      // navigation("/");
      return true;
    }
    return false;
  };

  React.useEffect(() => {
    setAuth(checkRole());
  }, [auth]);

  const getData = async () => {
    await axios
      .get(`http://localhost/ltw-api/user`, environment.headers)
      .then((res) => {
        setInfoData(res.data.data);
        setBirth(res.data.data.dateofbirth);
        setPhone(res.data.data.phone_number);
        setMail(res.data.data.email);
      })
      .catch((e) => {
        axios.post(
          "http://localhost/ltw-api/user",
          {
            fullname: "",
            phone_number: "",
            address: "",
            email: "",
            avatar: "",
            gender: "",
            dateofbirth: "2001-01-01",
          },
          environment.headers
        );
      });
  };

  React.useEffect(() => {
    getData();
  }, []);

  function handleChange(event) {
    const { name, value, type, checked, id } = event.target;
    setInfoData((prevInfoData) => {
      return {
        ...prevInfoData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
    if (name === "dateofbirth") {
      setBirth(value);
    }
  }

  function changePhone(event) {
    const { name, value } = event.target;
    setPhone(value);
  }

  function changeMail(event) {
    const { name, value } = event.target;
    setMail(value);
  }

  // function changeAvatar(event) {
  //   const { name, value } = event.target;
  //   setAvatar(value);
  // }

  // console.log(infoData);

  const saveChange = async () => {
    await axios
      .put(
        `http://localhost/ltw-api/user`,
        { ...infoData },
        environment.headers
      )
      .then((res) => {
        getData();
        alert("Cập nhật thành công");
      })
      .catch((res) => alert(res));
  };

  function closePhone() {
    setPhone(infoData.phone_number);
  }

  function closeMail() {
    setMail(infoData.email);
  }

  // function closeAvatar() {
  //   setAvatar(infoData.avatar);
  // }

  // function closePassword() {}

  function submitPhone() {
    setInfoData((prevInfoData) => {
      return {
        ...prevInfoData,
        phone_number: phone,
      };
    });
  }

  function submitMail() {
    setInfoData((prevInfoData) => {
      return {
        ...prevInfoData,
        email: mail,
      };
    });
  }

  // function submitAvatar() {
  //   setInfoData((prevInfoData) => {
  //     return {
  //       ...prevInfoData,
  //       avatar: avatar,
  //     };
  //   });
  // }

  // function submitPassword() {}

  return (
    <>
      {auth === true ? (
        <div className="container py-5 mt-5">
          <div className="row">
            <div className="col-12 mt-2">
              <div
                className="card card-body border-1 py-3 px-3 shadow rounded-3"
                style={{
                  // borderRadius: "10px",
                  // boxShadow: "0px 2.98256px 7.4564px rgba(0, 0, 0, 0.1)",
                  onPointerEnter: "none",
                }}
              >
                <div className="row">
                  <div className="col-lg-7 border-end px-4">
                    <h5 className="text-start">Thông tin cá nhân</h5>
                    <div className="row pt-2">
                      <div className="col-lg-3">
                        <div>
                          <button
                            className="btn btn-light rounded-circle"
                            type="submit"
                            data-bs-toggle="modal"
                            data-bs-target="#staticAvatar"
                          >
                            <img
                              src={infoData.avatar}
                              alt="Avatar"
                              className="img-fluid rounded-circle w-100"
                            />
                          </button>

                          <div
                            className="modal fade"
                            id="staticAvatar"
                            data-bs-backdrop="static"
                            data-bs-keyboard="false"
                            tabIndex="-1"
                            aria-labelledby="staticAvatarLabel"
                            aria-hidden="true"
                          >
                            <div className="modal-dialog modal-dialog-centered">
                              <div className="modal-content">
                                <div className="modal-header">
                                  <h5
                                    className="modal-title"
                                    id="staticAvatarLabel"
                                  >
                                    Ảnh đại diện
                                  </h5>
                                  <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                    // onClick={closeAvatar}
                                  ></button>
                                </div>
                                <div className="modal-body">
                                  <label htmlFor="phone" className="form-label">
                                    Link
                                  </label>
                                  <input
                                    required
                                    type="text"
                                    className="form-control"
                                    placeholder="Link"
                                    name="avatar"
                                    value={infoData.avatar}
                                    onChange={handleChange}
                                  />
                                </div>
                                <div className="modal-footer">
                                  <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                    // onClick={closeAvatar}
                                  >
                                    Hoàn thành
                                  </button>
                                  {/* <button
                                  type="button"
                                  className="btn btn-primary"
                                  // onClick={submitAvatar}
                                >
                                  Hoàn thành
                                </button> */}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-9">
                        <form>
                          <div
                            className="row align-items-center"
                            style={{ height: "163px" }}
                          >
                            <label
                              className="col-lg-3 col-form-label"
                              htmlFor="user-name"
                            >
                              Họ và tên
                            </label>
                            <div className="col-lg-9">
                              <input
                                type="text"
                                className="form-control"
                                id="user-name"
                                name="fullname"
                                value={infoData.fullname}
                                onChange={handleChange}
                              ></input>
                            </div>
                          </div>
                        </form>
                      </div>

                      <div className="col-lg-12 mt-4">
                        <div className="row">
                          <label className="col-lg-3 col-form-label">
                            Ngày sinh
                          </label>
                          <div className="col-lg-3">
                            <select
                              className="form-select"
                              aria-label="Default select example"
                              id="d"
                              value={birth}
                              onChange={handleChange}
                              name="dateofbirth"
                            >
                              <option value={birth.slice(0, 8) + "01"}>
                                1
                              </option>
                              <option value={birth.slice(0, 8) + "02"}>
                                2
                              </option>
                              <option value={birth.slice(0, 8) + "03"}>
                                3
                              </option>
                              <option value={birth.slice(0, 8) + "04"}>
                                4
                              </option>
                              <option value={birth.slice(0, 8) + "05"}>
                                5
                              </option>
                              <option value={birth.slice(0, 8) + "06"}>
                                6
                              </option>
                              <option value={birth.slice(0, 8) + "07"}>
                                7
                              </option>
                              <option value={birth.slice(0, 8) + "08"}>
                                8
                              </option>
                              <option value={birth.slice(0, 8) + "09"}>
                                9
                              </option>
                              <option value={birth.slice(0, 8) + "10"}>
                                10
                              </option>
                              <option value={birth.slice(0, 8) + "11"}>
                                11
                              </option>
                              <option value={birth.slice(0, 8) + "12"}>
                                12
                              </option>
                              <option value={birth.slice(0, 8) + "13"}>
                                13
                              </option>
                              <option value={birth.slice(0, 8) + "14"}>
                                14
                              </option>
                              <option value={birth.slice(0, 8) + "15"}>
                                15
                              </option>
                              <option value={birth.slice(0, 8) + "16"}>
                                16
                              </option>
                              <option value={birth.slice(0, 8) + "17"}>
                                17
                              </option>
                              <option value={birth.slice(0, 8) + "18"}>
                                18
                              </option>
                              <option value={birth.slice(0, 8) + "19"}>
                                19
                              </option>
                              <option value={birth.slice(0, 8) + "20"}>
                                20
                              </option>
                              <option value={birth.slice(0, 8) + "21"}>
                                21
                              </option>
                              <option value={birth.slice(0, 8) + "22"}>
                                22
                              </option>
                              <option value={birth.slice(0, 8) + "23"}>
                                23
                              </option>
                              <option value={birth.slice(0, 8) + "24"}>
                                24
                              </option>
                              <option value={birth.slice(0, 8) + "25"}>
                                25
                              </option>
                              <option value={birth.slice(0, 8) + "26"}>
                                26
                              </option>
                              <option value={birth.slice(0, 8) + "27"}>
                                27
                              </option>
                              <option value={birth.slice(0, 8) + "28"}>
                                28
                              </option>
                              <option value={birth.slice(0, 8) + "29"}>
                                29
                              </option>
                              <option value={birth.slice(0, 8) + "30"}>
                                30
                              </option>
                              <option value={birth.slice(0, 8) + "31"}>
                                31
                              </option>
                            </select>
                          </div>
                          <div className="col-lg-3">
                            <select
                              className="form-select"
                              aria-label="Default select example"
                              id="m"
                              value={birth}
                              onChange={handleChange}
                              name="dateofbirth"
                            >
                              <option
                                value={
                                  birth.slice(0, 5) + "01" + birth.slice(7)
                                }
                              >
                                1
                              </option>
                              <option
                                value={
                                  birth.slice(0, 5) + "02" + birth.slice(7)
                                }
                              >
                                2
                              </option>
                              <option
                                value={
                                  birth.slice(0, 5) + "03" + birth.slice(7)
                                }
                              >
                                3
                              </option>
                              <option
                                value={
                                  birth.slice(0, 5) + "04" + birth.slice(7)
                                }
                              >
                                4
                              </option>
                              <option
                                value={
                                  birth.slice(0, 5) + "05" + birth.slice(7)
                                }
                              >
                                5
                              </option>
                              <option
                                value={
                                  birth.slice(0, 5) + "06" + birth.slice(7)
                                }
                              >
                                6
                              </option>
                              <option
                                value={
                                  birth.slice(0, 5) + "07" + birth.slice(7)
                                }
                              >
                                7
                              </option>
                              <option
                                value={
                                  birth.slice(0, 5) + "08" + birth.slice(7)
                                }
                              >
                                8
                              </option>
                              <option
                                value={
                                  birth.slice(0, 5) + "09" + birth.slice(7)
                                }
                              >
                                9
                              </option>
                              <option
                                value={
                                  birth.slice(0, 5) + "10" + birth.slice(7)
                                }
                              >
                                10
                              </option>
                              <option
                                value={
                                  birth.slice(0, 5) + "11" + birth.slice(7)
                                }
                              >
                                11
                              </option>
                              <option
                                value={
                                  birth.slice(0, 5) + "12" + birth.slice(7)
                                }
                              >
                                12
                              </option>
                            </select>
                          </div>
                          <div className="col-lg-3">
                            <select
                              className="form-select"
                              aria-label="Default select example"
                              id="y"
                              value={birth}
                              onChange={handleChange}
                              name="dateofbirth"
                            >
                              <option value={"2000" + birth.slice(4)}>
                                2000
                              </option>
                              <option value={"2001" + birth.slice(4)}>
                                2001
                              </option>
                              <option value={"2002" + birth.slice(4)}>
                                2002
                              </option>
                              <option value={"2003" + birth.slice(4)}>
                                2003
                              </option>
                            </select>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-12 mt-4">
                        <div className="row">
                          <label className="col-lg-3 col-form-label">
                            Giới tính
                          </label>
                          <div className="col-lg-9 col-form-label">
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
                              <label
                                className="form-check-label"
                                htmlFor="male"
                              >
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
                              <label
                                className="form-check-label"
                                htmlFor="female"
                              >
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
                              <label
                                className="form-check-label"
                                htmlFor="none"
                              >
                                Khác
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-12 mt-4">
                        <form>
                          <div className="row ">
                            <label
                              className="col-3 col-form-label"
                              htmlFor="address"
                            >
                              Địa chỉ
                            </label>
                            <div className="col-lg-9">
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

                    <div className="d-grid col-lg-4 py-2 mx-auto mt-5">
                      <button
                        type="submit"
                        className="btn btn-primary"
                        onClick={saveChange}
                      >
                        Lưu thay đổi
                      </button>
                    </div>
                  </div>
                  <div className="col-lg-5 px-3">
                    <div className="row">
                      <h5 className="text-start">Số điện thoại và Email</h5>
                      <div className="col-lg-12">
                        <div className="row">
                          <div className="col-lg-2">
                            <img
                              src={Phone}
                              alt="phone"
                              className=".img-fluid"
                              style={{ width: "48px", height: "48px" }}
                            ></img>
                          </div>
                          <div className="col-lg-7">
                            <div
                              className="row align-items-center"
                              style={{ height: "48px" }}
                            >
                              <p className="col-12" style={{ margin: "0" }}>
                                {infoData.phone_number}
                              </p>
                            </div>
                          </div>
                          <div className="col-lg-3">
                            <div
                              className="row align-items-center"
                              style={{ height: "48px" }}
                            >
                              <div className="col-12">
                                <button
                                  type="submit"
                                  className="btn btn-outline-secondary"
                                  data-bs-toggle="modal"
                                  data-bs-target="#staticPhone"
                                  onClick={closePhone}
                                >
                                  Cập nhật
                                </button>

                                <div
                                  className="modal fade"
                                  id="staticPhone"
                                  data-bs-backdrop="static"
                                  data-bs-keyboard="false"
                                  tabIndex="-1"
                                  aria-labelledby="staticPhoneLabel"
                                  aria-hidden="true"
                                >
                                  <div className="modal-dialog modal-dialog-centered">
                                    <div className="modal-content">
                                      <div className="modal-header">
                                        <h5
                                          className="modal-title"
                                          id="staticPhoneLabel"
                                        >
                                          Cập nhật số điện thoại
                                        </h5>
                                        <button
                                          type="button"
                                          className="btn-close"
                                          data-bs-dismiss="modal"
                                          aria-label="Close"
                                          onClick={closePhone}
                                        ></button>
                                      </div>
                                      <div className="modal-body">
                                        <label
                                          htmlFor="phone"
                                          className="form-label"
                                        >
                                          Số điện thoại
                                        </label>
                                        <input
                                          required
                                          type="text"
                                          className="form-control"
                                          placeholder="Số điện thoại"
                                          name="phone_number"
                                          value={phone}
                                          onChange={changePhone}
                                        />
                                      </div>
                                      <div className="modal-footer">
                                        <button
                                          type="button"
                                          className="btn btn-secondary"
                                          data-bs-dismiss="modal"
                                          onClick={closePhone}
                                        >
                                          Đóng
                                        </button>
                                        <button
                                          type="button"
                                          className="btn btn-primary"
                                          onClick={submitPhone}
                                        >
                                          Hoàn thành
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-12 mt-3">
                        <div className="row">
                          <div className="col-lg-2">
                            <img
                              src={Mail}
                              alt="mail"
                              style={{ width: "48px", height: "48px" }}
                            ></img>
                          </div>
                          <div className="col-lg-7">
                            <div
                              className="row align-items-center"
                              style={{ height: "48px" }}
                            >
                              <p className="col-12" style={{ margin: "0" }}>
                                {infoData.email}
                              </p>
                            </div>
                          </div>
                          <div className="col-lg-3">
                            <div
                              className="row align-items-center"
                              style={{ height: "48px" }}
                            >
                              <div className="col-12">
                                <button
                                  type="submit"
                                  className="btn btn-outline-secondary"
                                  data-bs-toggle="modal"
                                  data-bs-target="#staticMail"
                                  onClick={closeMail}
                                >
                                  Cập nhật
                                </button>

                                <div
                                  className="modal fade"
                                  id="staticMail"
                                  data-bs-backdrop="static"
                                  data-bs-keyboard="false"
                                  tabIndex="-1"
                                  aria-labelledby="staticMailLabel"
                                  aria-hidden="true"
                                >
                                  <div className="modal-dialog modal-dialog-centered">
                                    <div className="modal-content">
                                      <div className="modal-header">
                                        <h5
                                          className="modal-title"
                                          id="staticMailLabel"
                                        >
                                          Cập nhật email
                                        </h5>
                                        <button
                                          type="button"
                                          className="btn-close"
                                          data-bs-dismiss="modal"
                                          aria-label="Close"
                                          onClick={closeMail}
                                        ></button>
                                      </div>
                                      <div className="modal-body">
                                        <label
                                          htmlFor="phone"
                                          className="form-label"
                                        >
                                          Email
                                        </label>
                                        <input
                                          required
                                          type="text"
                                          className="form-control"
                                          placeholder="Số điện thoại"
                                          name="email"
                                          value={mail}
                                          onChange={changeMail}
                                        />
                                      </div>
                                      <div className="modal-footer">
                                        <button
                                          type="button"
                                          className="btn btn-secondary"
                                          data-bs-dismiss="modal"
                                          onClick={closeMail}
                                        >
                                          Đóng
                                        </button>
                                        <button
                                          type="button"
                                          className="btn btn-primary"
                                          onClick={submitMail}
                                        >
                                          Hoàn thành
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* <h5 className="mt-3 text-start">Bảo mật</h5>
                      <div className="col-12">
                        <div className="row">
                          <div className="col-2">
                            <img
                              src={Lock}
                              alt="lock"
                              style={{ width: "48px", height: "48px" }}
                            ></img>
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
                                  data-bs-toggle="modal"
                                  data-bs-target="#staticPassword"
                                >
                                  Cập nhật
                                </button>
                                <div
                                  className="modal fade"
                                  id="staticPassword"
                                  data-bs-backdrop="static"
                                  data-bs-keyboard="false"
                                  tabIndex="-1"
                                  aria-labelledby="staticPasswordLabel"
                                  aria-hidden="true"
                                >
                                  <div className="modal-dialog modal-dialog-centered">
                                    <div className="modal-content">
                                      <div className="modal-header">
                                        <h5
                                          className="modal-title"
                                          id="staticPasswordLabel"
                                        >
                                          Đổi mật khẩu
                                        </h5>
                                        <button
                                          type="button"
                                          className="btn-close"
                                          data-bs-dismiss="modal"
                                          aria-label="Close"
                                        ></button>
                                      </div>
                                      <div className="modal-body">...</div>
                                      <div className="modal-footer">
                                        <button
                                          type="button"
                                          className="btn btn-secondary"
                                          data-bs-dismiss="modal"
                                        >
                                          Đóng
                                        </button>
                                        <button
                                          type="button"
                                          className="btn btn-primary"
                                        >
                                          Hoàn thành
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div> */}

                      {/* <h5 className="mt-3">Liên kết mạng xã hội</h5>
                    <div className="col-12"></div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="container py-5 mt-5">
          <div className="row">
            <div className="col-lg-3"></div>
            <div className="col-lg-6">
              <h4 className="text-center my-4">Bạn cần phải đăng nhập</h4>
              <div className="text-center">
                <a href="/">
                  <button type="button" className="btn btn-primary">
                    Về trang chủ
                  </button>
                </a>
              </div>
            </div>
            <div className="col-lg-3"></div>
          </div>
        </div>
      )}
    </>
  );
}

export default User;