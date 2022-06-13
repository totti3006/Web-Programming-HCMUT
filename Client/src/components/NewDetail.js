
import { Link, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./NewDetail.css";

const NewDetailPage = () => {
  const [news, setNews] = useState({});
  const { id } = useParams();
  //data is all products
  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(
        `http://localhost/ltw-api/news/getall/${id}`
      );
      const data = res.data.data;
      setNews(data.find((item) => item.id == id));
    };
    getData();
  }, []);
  return (
    <div className="productdetail-page">
      <section className="section-content padding-y">
        <div className="container">
          <nav aria-label="breadcrumb" className="ms-3">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/new">Tin tức</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Chi tiết tin tức
              </li>
            </ol>
          </nav>
          <div className="row">
            <div className="col-md-8">
              <div className="row">
                <div className="col-md-4">
                  <img src={news.thumbnail} />
                </div>
                <div className="col-md-8">
                  <h2 className="">{news.title}</h2>
                  <h5 className="fw-bolder">Mô tả</h5>
                  <p className="lh-lg">{news.content}</p>
                  
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewDetailPage;