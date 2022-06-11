import React, { useState, useEffect } from "react";
import axios from "axios";
import DummyData from "./DummyData";
import Table from "react-bootstrap/Table";
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
            <th>Hình ảnh</th>
            <th>Giá</th>
            <th>Hãng</th>
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
            <td>{data[index].price} đồng</td>
            <td>{data[index].category_id}</td>
            <td>
              <button className="btn btn-warning" onClick={{}}>
                Sửa
              </button>
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

export default TableCategory;
