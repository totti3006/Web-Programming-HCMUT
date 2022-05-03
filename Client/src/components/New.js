import React, { useState, useEffect } from "react";
import axios from "axios";

const New = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(`http://localhost/ltw-api/news/getall`);
      setData(res.data.data);
    };
    getData();
  }, []);

  return (
    <div style={{marginTop: '100px'}}>
      <h2 className="text-center">TIN TỨC NỔI BẬT</h2>
    <div  className="row" style={{marginLeft: '40px', marginRight: '40px'}}>
      
      {data.map((item, index) => (
        <div className="col-6 col-sm-4 col-md-3 p-2" >
          <figure className="card card-product-grid">
            <div className="img-wrap">
              <img src={data[index].thumbnail} />
            </div>
            <figcaption className="info-wrap">
              <div className="fix-height">
                <h5 className="card-title">
                  {data[index].title}
                </h5>
              </div>
              <form action="/NewDetail">
              <button style={{marginBottom: '20px', marginTop: '20px'}}
                className="btn btn-outline-primary"
                onclick="location.href='/NewDetail'"
              >
                Xem chi tiết
              </button>
              </form>
              
            </figcaption>
          </figure>
        </div>
      ))}
    </div>
    </div>
  );
};
export default New;
