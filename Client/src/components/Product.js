import "./Product.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import NumberFormat from "react-number-format";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";
import Categories from "./Categories";
const ProductPage = () => {
  const [data, setData] = useState([]);
  const [displayData, setDisplayData] = useState([]);
  const [cart, setCart] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(`http://localhost/ltw-api/product/getall`);
      setData(res.data.data);
      console.log(data);
    };
    getData();
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
  const [typ, setTyp] = useState(-1);
  const filterProduct = (category) => {
    // const result = data.filter((item) => item.category_id === category);
    // setData(result);
    setTyp(category);
    category === -1 ? setDisplayData(data): setDisplayData(data.filter((item) => item.category_id === category))
  };


  
  if (data.length === 0) return <span>Loading...</span>;
  else {
  const itemPerPage = 12;
  const numberPage = Math.ceil(data.length / itemPerPage);
  const currDisplay = data.slice(
    (currentPage - 1) * itemPerPage,
    currentPage * itemPerPage
  );
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
                <Categories filterProduct={filterProduct} typ={typ}/>
              </div>
            </article>
          </div>
        </aside>
        <main className="col-md-9">
          <div className="row">
            {currDisplay.map((item, index) => (
              <div className="product-grid col-md-4">
                <figure className="card card-product-grid">
                  <div
                    className="img-wrap"
                    style={{ marginBottom: "5px", marginTop: "10px" }}
                  >
                    <img src={currDisplay[index].thumbnail} />
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
                      <Link to={`${item.id}`} className="product-title">
                        {currDisplay[index].title}
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
          {numberPage > 1 ? (
                  <Pagination
                    numberPage={numberPage}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                  />
                ) : null}
        </main>
      </div>
    </div>
  );
          }
};
export default ProductPage;