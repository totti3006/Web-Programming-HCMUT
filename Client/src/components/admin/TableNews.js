import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
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
  console.log(data);
  return (
    <div className="container p-3">
      <Table responsive="sm">
        <thead>
          <tr>
            <th>STT</th>
            <th>Tiêu đề</th>
            <th>Hình ảnh</th>
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
              <button className="btn btn-warning" onClick={{}}>
                Sửa
              </button>
            </td>
            <td>
              <button className="btn btn-danger" onClick={{}}>
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