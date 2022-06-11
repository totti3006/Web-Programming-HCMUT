import React, { Fragment } from "react";
import Table from "react-bootstrap/Table";

function TableUser({ users, handleEdit, handleDelete }) {
  return (
    <div className="container p-3">
    <Table responsive="sm">
      <thead>
        <tr>
          <th scope="col">#id</th>
          <th scope="col">Họ và tên</th>
          <th scope="col">Email</th>
          <th scope="col">Số điện thoại</th>
          <th scope="col">Địa chỉ</th>
          <th style={{ width: "80px" }}></th>
          <th style={{ width: "80px" }}></th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <Fragment>
            <tr key={user.user_id}>
              <th scope="row">{user.user_id}</th>
              <td>{user.fullname}</td>
              <td>{user.email}</td>
              <td>{user.phone_number}</td>
              <td>{user.address}</td>
              <td>
                <button
                  className="btn btn-warning"
                  onClick={() => handleEdit(user.id, user)}
                >
                  Sửa
                </button>
              </td>
              <td>
                <button
                  className={"btn btn-danger"}
                  onClick={() => handleDelete(user.id)}
                >
                  Xóa
                </button>
              </td>
            </tr>
          </Fragment>
        ))}
      </tbody>
    </Table>
    </div>
  );
}

export default TableUser;
