import axios from "axios";
import React, { useState, useEffect } from "react";
import NumberFormat from "react-number-format";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import environment from "../../components/Environment/Environment";

function Checkout() {
  const [cart, setCart] = useState([]);
  const [userInfo, setUserInfo] = useState('');
  const [order, setOrder] = useState({
    note: "",
    status: 0,
    total_money: 0,
    products: []
  })

  const navigation = useNavigate();

  const totalProductMoney = cart.reduce(
    (a, b) => a + b.price * b.num,
    0
  );

  const getUserInfo = async () => {
    await axios.get("http://localhost/ltw-api/user", environment.headers).then((res) => {
        setUserInfo(res.data.data)
    }).catch((err) =>{
        alert("Vui lòng cập nhật thông tin cá nhân trước khi đặt hàng!!!");
        navigation("/user", {replace: true})
    })
  }

  const onClickHandle = async () => {
    const products = cart.map((p) => ({
      product_id: p.id,
      num: p.num,
      total_money: p.price
    }))

    const post_order = {
      ...order,
      products: products,
      total_money: totalProductMoney
    }
  
    await axios.post("http://localhost/ltw-api/order", post_order, environment.headers).then(() => {
      localStorage.removeItem("Cart");
    }).catch(err => {
      console.log(err);
    })
  }

  useEffect(() => {
    const data = localStorage.getItem("Cart")
      ? JSON.parse(localStorage.getItem("Cart"))
      : [];
    setCart(data);

    const products = cart.map((p) => ({
      product_id: p.id,
      num: p.num,
      total_money: p.price
    }))

    setOrder(prev => ({
      ...prev,
      products: products,
      total_money: totalProductMoney
    }))

    getUserInfo();
  }, []);
  
  return (
    <div className="checkout-page">
      <div className="container mb-4" style={{ position: "relative" }}>
        <Link
          to="/cart"
          style={{
            position: "absolute",
            top: "8px",
            left: "12px",
          }}
        >
          <button className="btn btn-outline-success btn-sm">
            <i class="bi bi-arrow-90deg-left"></i> Quay lại
          </button>
        </Link>
        <Header/>
        <h3 className="text-center mt-3">Thông tin đơn hàng</h3>
        <hr />
        <div className="row g-2">
          <div className="col-lg-5">
            <div className="card">
              <div className="card-header bg-info text-dark">
                <h5 className="card-title">Thông tin khách hàng</h5>
              </div>
              <div className="card-body">
                <form action="">
                    <div class="mb-3 row">
                        <label for="staticName" class="col-sm-4 col-form-label" style={{textAlign: 'left'}}>Họ tên</label>
                        <div class="col-sm-8">
                            <input type="text" class="form-control" id="staticName" value={userInfo ? userInfo.fullname : ""} disabled/>
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label for="staticEmail" class="col-sm-4 col-form-label" style={{textAlign: 'left'}}>Email</label>
                        <div class="col-sm-8">
                            <input type="text" class="form-control" id="staticEmail" value={userInfo ?  userInfo.email : ""} disabled/>
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label for="staticPhone" class="col-sm-4 col-form-label" style={{textAlign: 'left'}}>Số điện thoại</label>
                        <div class="col-sm-8">
                            <input type="text" class="form-control" id="staticPhone" value={userInfo ?  userInfo.phone_number : ""} disabled/>
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label for="staticAddress" class="col-sm-4 col-form-label" style={{textAlign: 'left'}}>Địa chỉ</label>
                        <div class="col-sm-8">
                            <input type="text" class="form-control" id="staticAddress" value={userInfo ?  userInfo.address : ""} disabled/>
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-sm-4 col-form-label" style={{textAlign: 'left'}}>Ghi chú</label>
                        <div class="col-sm-8">
                            <textarea type="text" class="form-control" onChange={(e) => setOrder(prev => ({...prev, note: e.target.value}))} />
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-sm-4 col-form-label">Hình thức thanh toán</label>
                        <div class="col-sm-8">
                            <select
                                name="payment"
                                id="payment"
                                className="form-select"
                                defaultValue="1"
                                style={{textAlign: 'center', fontWeight: 'bold'}}
                            >
                                <option value="1">Thanh toán khi nhận hàng</option>
                            </select>
                        </div>
                    </div>
                </form>
                <div className="text-center">
                  {
                    cart.length > 0 ? <button
                    className="btn btn-outline-success mt-3 w-100"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                    onClick={onClickHandle}
                  >
                    <i className="bi bi-check2-square"></i> Xác nhận đơn hàng
                  </button> : ""
                  }
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="card">
              <div className="card-header bg-warning bg-gradient">
                <h5 className="card-title">Giỏ hàng của bạn</h5>
              </div>

              <div className="card-body">
                <div className="table-responsive">
                  <table className="table-hover table-borderless">
                    <tbody>
                      {cart.map((item) => (
                        <tr key={item.id}>
                          <td
                            style={{ maxWidth: "300px" }}
                            className="fst-italic"
                          >
                            {item.title}
                          </td>
                          <td className="text-center" style={{ width: "30px" }}>
                            {item.num}
                          </td>
                          <td className="text-center" style={{ width: "30px" }}>
                            <i className="bi bi-x"></i>
                          </td>
                          <td className="text-end">
                            <NumberFormat
                              id="total"
                              value={item.price}
                              displayType={"text"}
                              thousandSeparator={true}
                              suffix={" ₫ "}
                            />
                          </td>
                          <td className="text-center" style={{ width: "40px" }}>
                            =
                          </td>
                          <td className="text-end text-danger">
                            <NumberFormat
                              id="total"
                              value={item.price * item.num}
                              displayType={"text"}
                              thousandSeparator={true}
                              suffix={" ₫ "}
                            />
                          </td>
                        </tr>
                      ))}
                      <tr>
                        <td colSpan="6">
                          <hr />
                        </td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr>
                        <td colSpan="4" className="text-end">
                          Phí vận chuyển
                        </td>
                        <td className="text-center">:</td>
                        <td className="text-end text-danger">
                          {" "}
                          <NumberFormat
                            id="total"
                            value={0}
                            displayType={"text"}
                            thousandSeparator={true}
                            suffix={" ₫ "}
                          />
                        </td>
                      </tr>
                      
                      <tr>
                        <td colSpan="5" className="text-end fw-bold fs-5"></td>

                        <td className="">
                          <hr />
                        </td>
                      </tr>
                      <tr>
                        <td colSpan="4" className="text-end fw-bold fs-5">
                          Tổng
                        </td>
                        <td className="text-center">:</td>
                        <td className="text-end text-danger fw-bold">
                          {" "}
                          <NumberFormat
                            id="total"
                            value={totalProductMoney}
                            displayType={"text"}
                            thousandSeparator={true}
                            suffix={" ₫ "}
                          />
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body fst-italic fw-bold">
              Cảm ơn quý khách đã tin tưởng và ủng hộ, chúng tôi sẽ nhanh chóng
              xử lý đơn hàng của quý khách!
            </div>
            <div className="text-end">
              <Link to="/product">
                <button
                  type="button"
                  className="btn btn-primary mb-2 me-2"
                  data-bs-dismiss="modal"
                  //onClick={resetCart}
                >
                  Tiếp tục mua sắm
                </button>
              </Link>
              <Link to="/">
                <button
                  type="button"
                  className="btn btn-primary mb-2 me-2"
                  data-bs-dismiss="modal"
                  //onClick={resetCart}
                >
                  Quay lại trang chủ <i className="bi bi-arrow-right"></i>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;