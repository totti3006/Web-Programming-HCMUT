import React from "react";

function TableUser({ users, handleEdit, handleDelete }) {
  return (
    <table className="table table-responsive table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Họ và tên</th>
          <th scope="col">Email</th>
          <th scope="col">Số điện thoại</th>
          <th scope="col">Địa chỉ</th>
          <th scope="col">Quyền</th>
          <th style={{ width: "80px" }}></th>
          <th style={{ width: "80px" }}></th>
        </tr>
      </thead>
      <tbody>{/* {users.map()} */}</tbody>
    </table>
  );
}

export default TableUser;
