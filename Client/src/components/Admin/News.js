import React, { useState, useContext, useEffect } from "react";
import Header from "../Header";
import TableNews from "./TableNews";
import axios from "axios";
import environment from "../Environment/Environment"

const New = () => {

  const [data, setData] = useState([]);

  const getData = async () => {
    const res =  await axios
      .get(`http://localhost/ltw-api/news/getall`)
      setData(res.data.data);
  };

  const addNews = (news) => {
    axios
      .post('http://localhost/ltw-api/news/', news, environment.headers)
      .then((response) => getData())
      .catch((res) => alert(res));
  };


  const [status, setStatus] = useState({
    id: "",
    action: "Thêm",
  });
  const [news, setNews] = useState({ title: "", thumbnail: "", content: "" });

  const closeHandler = () => {
    setNews({ title: "", thumbnail: "", content: "" });
    setStatus({
      id: "",
      action: "Thêm",
    });
  };

  const submitHandler = () => {
    if (status.action === "Thêm") {
      addNews(news);
    } 
    setNews({news_id: "", title: "", content: "", thumbnail: ""});
    setStatus({
      id: "",
      action: "Thêm",
    });
  };
 
  const setContent = (e, content) => {
    setNews((prev) => ({ ...prev, content: content }));
  };
  

  return (
    <div className="container-fluid p-0">
      <Header/>
      <div className="container-fluid">
        <div className="container">
        <h2 className="text-center my-4">Quản lý tin tức</h2>
          <button
            type="button"
            className="btn btn-primary openmodal"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            Thêm tin tức mới
          </button>

          <div
            className="modal fade"
            id="staticBackdrop"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabIndex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog" style={{ minWidth: "70%" }}>
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="staticBackdropLabel">
                    {status.action} tin tức
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    onClick={closeHandler}
                  ></button>
                </div>
                <div className="modal-body">
                  <label htmlFor="title" className="form-label">
                    ID
                  </label>
                  <input
                    required
                    type="text"
                    className="form-control"
                    placeholder="ID"
                    name="title"
                    value={news.news_id}
                    onChange={(e) =>
                      setNews((prev) => ({ ...prev, news_id: e.target.value }))
                    }
                  />
                  <label htmlFor="title" className="form-label">
                    Tiêu đề
                  </label>
                  <input
                    required
                    type="text"
                    className="form-control"
                    placeholder="Tiêu đề"
                    name="title"
                    value={news.title}
                    onChange={(e) =>
                      setNews((prev) => ({ ...prev, title: e.target.value }))
                    }
                  />
                  
                  <label htmlFor="content" className="form-label">
                    Nội dung
                  </label>
                  <input
                    required
                    type="text"
                    className="form-control"
                    placeholder="Nội dung"
                    name="content"
                    value={news.content}
                    onChange={(e) =>
                      setNews((prev) => ({ ...prev, content: e.target.value }))
                    }
                  />
                  <label htmlFor="thumbnail" className="form-label">
                    Hình ảnh
                  </label>
                  <input
                    required
                    type="text"
                    className="form-control"
                    placeholder="Link hình ảnh"
                    name="thumbnail"
                    value={news.thumbnail}
                    onChange={(e) =>
                      setNews((prev) => ({
                        ...prev,
                        thumbnail: e.target.value,
                      }))
                    }
                  />
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                    onClick={closeHandler}
                  >
                    Close
                  </button>
                  <button
                    type="submit"
                    className={
                      news.name === ""
                        ? "btn btn-primary disabled"
                        : "btn btn-primary"
                    }
                    data-bs-dismiss="modal"
                    onClick={submitHandler}
                  >
                    Hoàn thành
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="overflow-auto">
            <TableNews/>
          </div>
          
          
        </div>
      </div>
    </div>
  );
};

export default New;
