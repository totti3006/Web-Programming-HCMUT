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