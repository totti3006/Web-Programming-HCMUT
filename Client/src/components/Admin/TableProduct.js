import React, { useState, useEffect } from "react";
import axios from "axios";
import DummyData from "./DummyData";
import Table from "react-bootstrap/Table";
import ProductItem from "./ProductItem";

const TableCategory = () => {
  const dataProduct = React.useState(DummyData[0]);
  const [data, setData] = useState([]);

  useEffect(() => {
  const getData = async () => {
  const res =  await axios
      .get(`http://localhost/ltw-api/product/getall`)
      setData(res.data.data);
  };
  getData();
  },[])

  const deleteProduct = (id) => {
    axios
      .get('http://localhost/ltw-api/product/getall', { id: id })
      .then((response) =>
        setData((prev) => prev.filter((item) => item.id !== id))
      )
      .catch((res) => alert(res));
  };
  const deleteHandler = (id) => {
    var option = window.confirm(
      "Bạn có chắc chắn muốn xoá sản phẩm này không?"
    );
    if (option) {
      deleteProduct(id);
    }
  };
  return (
    <div className="container p-3">
      <Table responsive="sm">
        <thead>
          <tr>
            <th>STT</th>
            <th>Tên</th>
            <th>Hãng</th>
            <th>Hình ảnh</th>
            <th>Giá</th>
            <th>Mô tả</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <ProductItem data={item}/>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default TableCategory;
