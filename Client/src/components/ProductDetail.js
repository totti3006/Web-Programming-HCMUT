import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import NumberFormat from "react-number-format";
import "./ProductDetail.css";
// import image from "../images/phone-1.jpg";
// import DummyProduct from "./DummyProduct";
import Comment from "./Comment";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  //const dataProduct = React.useState(DummyProduct[0]);
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const [comments, setComments] = useState([])
  const [cart, setCart] = useState([]);
  const [forceRerender, setForceRerender] = useState(false) 
  //data is all products
  useEffect(() => {
    const getComment = async () => {
      try {
        
      const res = await axios.get(
        `http://localhost/ltw-api/comment?product_id=${id}`
      );
      console.log(res.data.data)
      setComments(res.data.data);
      } catch (error) {
      console.log("looix",error)  
      }
    }

    getComment();
  }, [forceRerender]);

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(
        `http://localhost/ltw-api/product/getall/${id}`
      );
      const data = res.data.data;
      setProduct(data.find((item) => item.id == id));
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
    <div className="productdetail-page">
      <section className="section-content padding-y">
        <div className="container">
          <nav aria-label="breadcrumb" className="ms-3">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/product">Sản phẩm</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Chi tiết sản phẩm
              </li>
            </ol>
          </nav>
          <div className="row">
            <div className="col-md-8">
              <div className="row">
                <div className="col-md-4">
                  <img src={product.thumbnail} />
                </div>
                <div className="col-md-8">
                  <h2 className="">{product.name}</h2>
                  <h5 className="fw-bolder">Mô tả</h5>
                  <p className="lh-lg">{product.description}</p>
                  <span className="price">
                    <span>
                      <h4>Giá: </h4>
                      <NumberFormat
                        value={product.price}
                        displayType="text"
                        thousandSeparator={"."}
                        decimalSeparator={","}
                      />
                      VND
                    </span>
                  </span>
                  <div className="d-flex justify-content-center">
                    <button
                      style={{ marginBottom: "20px", marginTop: "20px" }}
                      className="btn btn-outline-primary"
                      onClick={() => handleClick(product)}
                    >
                      Thêm vào giỏ hàng
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <Comment comments={comments} product_id={id} setForceRerender={setForceRerender}/>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;