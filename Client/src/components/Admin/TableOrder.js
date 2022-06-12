import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import environment from "../Environment/Environment"

const TableOrder = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    await axios
      .get(`http://localhost/ltw-api/order/getall`, environment.headers)
      .then((res) => {
        setData(res.data.data);
      });
  };

  React.useEffect(() => {
    getData();
  }, []);
  


  return (
    <div className="container p-3">
        <h2 className="text-center my-4">Quản lý đơn hàng</h2>
      <Table responsive="sm">
        <thead>
          <tr>
            <th>ID đơn hàng</th>
            <th>ID khách hàng</th>
            <th>Ghi chú</th>
            <th>Ngày đặt hàng</th>
            <th>Trạng thái</th>
            <th>Tổng tiền</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
          <tr>
            <td>{data[index].id}</td>
            <td>{data[index].user_id}</td>
            <td>{data[index].note}</td>
            <td>{data[index].order_date}</td>
            <td>{data[index].status}</td>
            <td>{data[index].total_money} đồng</td>
          </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default TableOrder;
