
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

const NewDetailPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(`http://localhost/ltw-api/news/getbyid`);
      setData(res.data.data);
    };
    getData();
  }, []);
  return (
    <div className="">
      <section className="section-content padding-y">
        <div className="container">
          <nav aria-label="breadcrumb" className="ms-3">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/new">Tin tức</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Thông tin chi tiết
              </li>
            </ol>
          </nav>
          
            <div className="col-md-5">
              <div className="col">
                <img src={data.thumbnail} />
              </div>
              <div className="col">
                <h2 className="">{data.title}</h2>
                <h5 className="fw-bolder">Mô tả</h5>
                <p className="lh-lg">{data.content}</p>
                
              </div>
            </div>
            
          </div>
      </section>
    </div>
  );
};

export default NewDetailPage;