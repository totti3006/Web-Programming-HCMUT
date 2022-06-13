import React, { useState, useEffect, createContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import NumberFormat from "react-number-format";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import TableOrder from "../../components/TableOrder";

function Cart() {
  const [cart, setCart] = useState([]);

  const [auth, setAuth] = React.useState(false);

  const checkRole = () => {
    if (localStorage.getItem("role")) {
      return true;
    }
    return false;
  };

  React.useEffect(() => {
    setAuth(checkRole());
  }, [auth]);

  useEffect(() => {
    const data = localStorage.getItem("Cart")
      ? JSON.parse(localStorage.getItem("Cart"))
      : [];
    setCart(data);
  }, []);
  const handleClick = (item) => {
    setCart((prev) => [...prev, item]);
    localStorage.setItem("Cart", JSON.stringify(cart));
  };
  const deleteItem = (index) => {
    const result = cart.filter((item, i) => i !== index);
    setCart(result);
    localStorage.setItem("Cart", JSON.stringify(result));
  };
  const changeNum = (index, num) => {
    const result = cart.map((item, i) => {
      if (i === index) {
        item.num = num;
      }
      return item;
    });
    setCart(result);
    localStorage.setItem("Cart", JSON.stringify(result));
  };
  const totalProductMoney = cart.reduce((a, b) => a + b.price * b.num, 0);

  console.log(cart);
  return (
    <>
      <Header />
      {auth === true ? (
        <div className="cart-page">
          <div className="container">
            <h3 className="text-center my-3">Giỏ hàng</h3>
            <hr />
            <div className="cart-container">
              <div className="cart-head">
                <div className="table-responsive">
                  <table className="table table-borderless">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col" style={{ width: "120px" }}>
                          Tùy chọn
                        </th>
                        <th scope="col" style={{ width: "120px" }}>
                          Hình ảnh
                        </th>
                        <th scope="col">Sản phẩm</th>
                        <th scope="col" style={{ width: "120px" }}>
                          Số lượng
                        </th>
                        <th scope="col">Giá</th>
                        <th scope="col" className="text-right">
                          Tổng tiền
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {cart.map((item, index) => (
                        <tr key={item.id}>
                          <th scope="row">{index + 1}</th>
                          <td>
                            <span className="text-danger">
                              <i
                                className="bi bi-trash"
                                role="button"
                                onClick={() => deleteItem(index)}
                              ></i>
                            </span>
                          </td>
                          <td>
                            <img
                              src={item.thumbnail}
                              className="img-fluid"
                              width="35"
                              alt="product"
                            />
                          </td>
                          <td>{item.title}</td>
                          <td>
                            <div className="form-group mb-0">
                              <input
                                type="number"
                                className="form-control cart-qty"
                                name="cartQty1"
                                id="cartQty1"
                                defaultValue={item.num}
                                onChange={(e) =>
                                  changeNum(index, e.target.value)
                                }
                                min="1"
                              />
                            </div>
                          </td>
                          <td>
                            <NumberFormat
                              value={item.price}
                              displayType={"text"}
                              thousandSeparator={true}
                              suffix={" ₫ "}
                            />
                          </td>
                          <td className="text-right">
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
                    </tbody>
                  </table>
                </div>
              </div>
              <hr />
              <div className="body">
                <div className="row">
                  <div className="col-md-12 col-lg-6 order-2 order-lg-1 col-lg-5 col-xl-6">
                    <div className="order-note">
                      <form>
                        <div className="form-group"></div>
                        <div className="form-group">
                          <label htmlFor="specialNotes" className="mt-2 mb-1">
                            Ghi chú:
                          </label>
                          <textarea
                            className="form-control"
                            name="specialNotes"
                            id="specialNotes"
                            rows="3"
                            placeholder="Ghi chú"
                          ></textarea>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-md-12 col-lg-6 order-1 order-lg-2 col-lg-7 col-xl-6">
                    <div className="order-total table-responsive ">
                      <table className="table table-borderless text-end">
                        <tbody>
                          <tr>
                            <td className="">
                              <h4>Tổng:</h4>
                            </td>
                            <td className="">
                              <h4>
                                {" "}
                                <NumberFormat
                                  id="total"
                                  value={totalProductMoney}
                                  displayType={"text"}
                                  thousandSeparator={true}
                                  suffix={" ₫ "}
                                />
                              </h4>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div className="cart-footer d-flex justify-content-end mb-3">
                <Link to="/checkout" className="btn btn-success my-1">
                  Thanh toán
                  <i className="bi bi-arrow-right ms-2"></i>
                </Link>
              </div>
            </div>
          </div>
          <TableOrder/>
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
      <Footer />
    </>
  );
}


export default Cart;
