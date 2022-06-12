import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import environment from "../Environment/Environment";
import NewsItem from "./NewsItem";

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
            <NewsItem data={data[index]}/>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default TableNews;



//bên news :)))
