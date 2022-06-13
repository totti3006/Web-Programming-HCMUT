import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import environment from "../Environment/Environment"

function TableComment({setForceRerender}) {
  const [data, setData] = useState([]);

  const getData = async () => {
    await axios
      .get(`http://localhost/ltw-api/comment/getall`, environment.headers)
      .then((res) => {
        setData(res.data.data);
      });
  };

  React.useEffect(() => {
    getData();
  }, []);

  
//   const deleteCmt = async (id) => {
//     await axios.delete('http://localhost/ltw-api/comment?id=${id}', {id: id}, environment.headers)
//         .then(response => alert('Delete successful'))
//     };


// const deleteHandler = (id) => {
//   var option = window.confirm("Bạn có chắc chắn muốn xoá tin tức này không?");
//   if (option) {
//     deleteCmt(id);
//   }
// };

const handleDelete = async (id) => {
  //console.log("delete comment", id)
  await axios.delete(`http://localhost/ltw-api/comment?id=${id}`, environment.headers)
  .then(response =>alert('Delete successful'))
}

const deleteHandler = (id) => {
  var option = window.confirm(
    "Bạn có chắc chắn muốn xoá bình luận này không?"
  );
  if (option) {
    handleDelete(id);
  }
};


  return (
    <div className="container p-3">
        <h2 className="text-center my-4">Quản lý bình luận</h2>
      <Table responsive="sm">
      <thead>
        <tr>
          <th>STT</th>
          <th>Thành viên</th>
          <th>Sản phẩm</th>
          <th>Nội dung</th>
          <th>Ngày đăng</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr>
            <td>{index + 1}</td>
            <td>{item.user_id}</td>
            <td>{item.product_id}</td>
            <td>{item.content}</td>
            <td>{item.created_at}</td>
            <td>
              <button
                className="btn btn-danger"
                onClick={() => deleteHandler(item.id)}
              >
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

export default TableComment;