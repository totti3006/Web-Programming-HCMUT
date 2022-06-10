import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NumberFormat from "react-number-format";
import "./Home.css";
import axios from "axios";
import environment from "../../../components/Environment/Environment";
import Header from "../../../components/Header";

function Home() {
  const navigate = useNavigate();

  const [adminInfo, setAdminInfo] = useState("");

  const getData = async () => {
    await axios
      .get(`http://localhost/ltw-api/user`, environment.headers)
      .then((res) => {
        setAdminInfo(res.data.data);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Header />
      <div
        className="container-fluid p-0 home-dashboard bg-light"
        style={{ minHeight: "100vh" }}
      >
        <div className="container pt-4">
          <div className="row">
            <div className="col-lg-6 mt-3">
              <div className="row g-2">
                <div className="col-lg-6">
                  <div className=" card card-body shadow">
                    <div className="row">
                      <div className="col-7">
                        <p className="card-text text-secondary mb-0">
                          Sản phẩm
                        </p>
                        <h4 className="card-title fw-bold">
                          {" "}
                          <NumberFormat
                            value={123}
                            displayType={"text"}
                            thousandSeparator={true}
                          />
                        </h4>
                      </div>
                      <div className="col-5 justify-content-center d-flex">
                        <i className="bi bi-box-seam fs-1 text-primary"></i>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className=" card card-body shadow">
                    <div className="row">
                      <div className="col-7">
                        <p className="card-text text-secondary mb-0">
                          Người dùng
                        </p>
                        <h4 className="card-title fw-bold">
                          {" "}
                          <NumberFormat
                            value={123}
                            displayType={"text"}
                            thousandSeparator={true}
                          />
                        </h4>
                      </div>
                      <div className="col-5 justify-content-center d-flex">
                        <i className="bi bi-person fs-1 text-primary"></i>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className=" card card-body shadow">
                    <div className="row">
                      <div className="col-7">
                        <p className="card-text text-secondary mb-0">Tin tức</p>
                        <h4 className="card-title fw-bold">
                          {" "}
                          <NumberFormat
                            value={123}
                            displayType={"text"}
                            thousandSeparator={true}
                          />
                        </h4>
                      </div>
                      <div className="col-5 justify-content-center d-flex">
                        <i className="bi bi-newspaper fs-1 text-primary"></i>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className=" card card-body shadow">
                    <div className="row">
                      <div className="col-7">
                        <p className="card-text text-secondary mb-0">
                          Phản hồi
                        </p>
                        <h4 className="card-title fw-bold">
                          {" "}
                          <NumberFormat
                            value={123}
                            displayType={"text"}
                            thousandSeparator={true}
                          />
                        </h4>
                      </div>
                      <div className="col-5 justify-content-center d-flex">
                        <i className="bi bi-chat-left-text fs-1 text-primary"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className=" card card-body shadow">
                    <h5 className="card-title text-secondary">Quản trị viên</h5>
                    <ul className="list-group list-group-flush">
                      {adminInfo ? (
                        <li className="list-group-item" key={adminInfo.id}>
                          <h6>{adminInfo.fullname}</h6>
                        </li>
                      ) : (
                        ""
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 d-flex align-items-center admin-home-img">
              <div>
                {adminInfo ? (
                  <img src={adminInfo.avatar} alt="dashboard" />
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export { Home };
