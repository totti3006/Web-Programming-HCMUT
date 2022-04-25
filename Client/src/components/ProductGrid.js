import "./ProductGrid.css";
import image from "../images/phone-1.jpg";
import React, { useState, useEffect } from "react";
import axios from "axios";

const ProductGrid = () => {
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
    <div>
      {data.map((item, index) => (
        <div className="col-md-4">
          <figure className="card card-product-grid">
            <div className="img-wrap">
              <img src={data[index].thumbnail} />
            </div>
            <figcaption className="info-wrap">
              <div className="fix-height">
                <a href="#" className="title">
                  {data[index].title}
                </a>
                <div className="price-wrap mt-2">
                  <span className="price">{data[index].price} VND</span>
                </div>
              </div>
              <button
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
  );
};
export default ProductGrid;
