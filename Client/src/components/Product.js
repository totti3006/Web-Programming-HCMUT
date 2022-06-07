import "./Product.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import NumberFormat from "react-number-format";
import { Link } from "react-router-dom";
import Categories from "./Categories";
const ProductPage = () => {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(`http://localhost/ltw-api/product/getall`);
      setData(res.data.data);
    };
    getData();
  }, []);

  useEffect(() => {
    const data = localStorage.getItem("Cart")
      ? JSON.parse(localStorage.getItem("Cart"))
      : [];
    setCart(data);
  }, []);

  const handleClick = (item) => {
    const temp = [...cart];
    const itemtemp = temp.find((i) => i.id === item.id);
    if (itemtemp) {
      itemtemp.num += 1;
      localStorage.setItem("Cart", JSON.stringify(temp));
    } else {
      const result = [...cart, { ...item, num: 1 }];
      setCart(result);
      localStorage.setItem("Cart", JSON.stringify(result));
    }
  };
  return (
    <div className="container">
      <div className="row">
        <aside className="col-md-3">
          <div className="card1">
            <article className="filter-group">
              <header className="card-header">
                <i className="icon-control fa fa-chevron-down"></i>
                <h5 className="title">Hãng</h5>
              </header>
              <div className="filter-content collapse show" id="collapse_1">
                <Categories />
              </div>
            </article>
          </div>
        </aside>
        <main className="col-md-9">
          <div className="row">
            {data.map((item, index) => (
              <div className="product-grid col-md-4">
                <figure className="card card-product-grid">
                  <div
                    className="img-wrap"
                    style={{ marginBottom: "5px", marginTop: "10px" }}
                  >
                    <img src={data[index].thumbnail} />
                  </div>
                  <figcaption className="info-wrap">
                    <div
                      className="fix-height"
                      style={{
                        marginBottom: "5px",
                        marginTop: "5px",
                        marginLeft: "5px",
                        marginRight: "5px",
                      }}
                    >
                      {/* <a href="/ProductDetail" className="product-title">
                        {data[index].title}
                      </a> */}
                      <Link
                        to={"/productdetail/" + item.id}
                        className="product-title"
                      >
                        {data[index].title}
                      </Link>
                      <div
                        className="price-wrap mt-2"
                        style={{ marginBottom: "0px", marginTop: "5px" }}
                      >
                        <span className="price">
                          <NumberFormat
                            value={data[index].price}
                            displayType="text"
                            thousandSeparator={"."}
                            decimalSeparator={","}
                          />
                          <span> VND</span>
                        </span>
                      </div>
                    </div>
                    <button
                      style={{ marginBottom: "20px", marginTop: "20px" }}
                      className="btn btn-outline-primary"
                      onClick={() => handleClick(item)}
                    >
                      <i className="bi bi-cart-plus"></i> Thêm vào giỏ hàng
                    </button>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
          <nav className="navi mt-4" aria-label="Page navigation sample">
            <ul className="pagination">
              <li className="page-item disabled">
                <a className="page-link" href="#">
                  Previous
                </a>
              </li>
              <li className="page-item active">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </main>
      </div>
    </div>
  );
};
export default ProductPage;
