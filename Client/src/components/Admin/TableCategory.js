import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
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

  const deleteCategory = (id) => {
    axios
      .get('http://localhost/ltw-api/category/getall', { id: id })
      .then((response) =>
        setData((prev) => prev.filter((item) => item.id !== id))
      )
      .catch((res) => alert(res));
  };
  const deleteHandler = (id) => {
    var option = window.confirm(
      "Bạn có chắc chắn muốn xoá danh mục này không?"
    );
    if (option) {
      deleteCategory(id);
    }
  };
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
          <tr>
            <td>1</td>
            <td>{data[index].name}</td>
            
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
