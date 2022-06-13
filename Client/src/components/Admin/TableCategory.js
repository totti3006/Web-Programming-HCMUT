import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import environment from "../Environment/Environment";
import CategoryItem from "./CategoryItem";


const TableCategory = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
  const getData = async () => {
  const res =  await axios
      .get(`http://localhost/ltw-api/category/getall`)
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
          <th>Tên</th>
          <th style={{ width: "80px" }}></th>
          <th style={{ width: "80px" }}></th>
        </tr>
      </thead>
        <tbody>
          {data.map((item, index) => (
            <CategoryItem data={data[index]}/>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default TableCategory;
