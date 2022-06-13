import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";
import axios from "axios";
import "./New.css"

const New = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(`http://localhost/ltw-api/news/getall`);
      setData(res.data.data);
      console.log(data);
    };
    getData();
  }, []);

  if (data.length === 0) return <span>Loading...</span>;
  else {
  const itemPerPage = 8;
  const numberPage = Math.ceil(data.length / itemPerPage);
  const currDisplay = data.slice(
    (currentPage - 1) * itemPerPage,
    currentPage * itemPerPage
  );
  return (
    <div className="container" style={{minHeight: "calc(100vh - 55px - 248px)"}} >
            <div className="section-title">
              <h2>TIN TỨC NỔI BẬT</h2>
            </div>
      <div className="row">
        <main >
          <div className="row">
            {currDisplay.map((item, index) => (
              <div className="product-grid col-md-3">
                <figure style={{borderRadius: "15px", backgroundImage: "light"}} className="card card-product-grid">
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
                      <div className="fix-height">
                        <h5 className="card-title">
                          {currDisplay[index].title}
                        </h5>
                      </div>
                      <Link to={`${item.id}`} >
                        Xem chi tiết
                      </Link>
                      
                    </div>
                    
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
export default New;
