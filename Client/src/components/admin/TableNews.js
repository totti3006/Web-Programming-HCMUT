import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import environment from "../Environment/Environment"

const TableNews = () => {
  const [data, setData] = useState([]);
  
  useEffect(() => {
  const getData = async () => {
  const res =  await axios
      .get(`http://localhost/ltw-api/news/getall`)
      setData(res.data.data);
  };
  getData();
  },[])

  const deleteNews = (id) => {
    axios
      .get('http://localhost/ltw-api/news/getall', { id: id })
      .then((response) =>
        setData((prev) => prev.filter((item) => item.id !== id))
      )
      .catch((res) => alert(res));
  };

  const [status, setStatus] = useState({
    id: "",
    action: "Thêm",
  });
  const [news, setNews] = useState({ title: "", thumbnail: "", content: "" });

  const editNews = (id, news) => {
    axios
      .put('http://localhost/ltw-api/news/', {
        news_id: id,
        ...news,
      }, environment.headers)
      .then((response) =>
        setData((prev) => {
          prev[prev.findIndex((item) => item.id === id)] = news;
          return [...prev];
        })
      ).catch(err => console.log(err));
  };

  const closeEdit = () => {
    setNews({ title: "", thumbnail: "", content: "" });
    setStatus({
      id: "",
      action: "Sửa",
    });
  };

  const submitEdit = () => {
    if (status.action === "Sửa") {  
      editNews(status.id, news);
    }
    setNews({news_id: "", title: "", content: "", thumbnail: ""});
    setStatus({
      id: "",
      action: "Sửa",
    });
  };
  
  const deleteHandler = (id) => {
    var option = window.confirm("Bạn có chắc chắn muốn xoá tin tức này không?");
    if (option) {
      deleteNews(id);
    }
  };

  const editHandler = (id, news) => {
    setStatus({
      id: id,
      action: "Sửa",
    });
    setNews(news);
    //document.querySelector(".openmodal").click();
  };
  
  return (
    <div className="container p-3">
      <Table responsive="sm">
        <thead>
          <tr>
            <th>STT</th>
            <th>Tiêu đề</th>
            <th style={{ width: "120px" }}>Hình ảnh</th>
            <th>Nội dung</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
          <tr>
            <td>1</td>
            <td>{data[index].title}</td>
            <td>
              <img
                src={data[index].thumbnail}
                alt="imagea"
                style={{ width: "70px", height: "70px" }}
              />
            </td>
            <td>{data[index].content}</td>
            <td>
            <button
            type="button"
            className="btn btn-primary openmodal"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
            >
            Sửa          
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
                    onClick={closeEdit}
                  ></button>
                </div>
                <div className="modal-body">
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
                    onClick={closeEdit}
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
                    onClick={submitEdit}
                  >
                    Hoàn thành
                  </button>
                </div>
              </div>
            </div>
          </div>
            </td>
            <td>
              <button className="btn btn-danger" onClick={() => deleteHandler(item.id)}>
                Xóa
              </button>
            </td>
          </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default TableNews;



//bên news :)))
