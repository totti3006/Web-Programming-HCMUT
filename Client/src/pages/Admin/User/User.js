import React from "react";
import TableUser from "../../../components/Admin/TableUser";
import Data from "../../../components/DummyData";

function User() {
  const [users, setUsers] = React.useState(Data);

  const [user, setUser] = React.useState({
    fullname: "",
    role: "",
    email: "",
    phone_number: "",
    address: "",
    password: "",
  });

  function handleClose() {
    setUser({
      fullname: "",
      role: "",
      email: "",
      phone_number: "",
      address: "",
      password: "",
    });
  }

  function handleSubmit() {
    setUser({
      fullname: "",
      role: "",
      email: "",
      phone_number: "",
      address: "",
      password: "",
    });
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setUser((prev) => ({ ...prev, [name]: value }));
  }

  function handleEdit(id) {
    var option = window.confirm("Bạn có chắc muốn xóa thành viên này?");
    if (option) {
      //   deleteUser(id);
    }
  }

  function handleDelete(id, user) {
    setUser({ ...user, password: "" });
    document.querySelector(".openmodal").click();
  }

  return (
    <div className="container py-5 mt-5">
      <div className="row">
        <div className="col-12">
          <h4 className="text-center my-4">Quản lý thành viên</h4>
        </div>
        <div className="col-12">
          {/* Button trigger modal */}
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            Thêm thành viên
          </button>

          {/* This is modal */}
          <div
            className="modal fade"
            id="staticBackdrop"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabIndex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="staticBackdropLabel">
                    Thêm thành viên
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    onClick={handleClose}
                  ></button>
                </div>
                <div className="modal-body">
                  <label htmlFor="fullname" className="form-label">
                    Họ và Tên
                  </label>
                  <input
                    required
                    type="text"
                    className="form-control"
                    placeholder="Họ tên"
                    name="fullname"
                    value={user.fullname}
                    onChange={handleChange}
                  />

                  <label htmlFor="role" className="form-label">
                    Cấp quyền
                  </label>
                  <input
                    required
                    type="text"
                    className="form-control"
                    placeholder="Quyền"
                    name="role"
                    value={user.role}
                    onChange={handleChange}
                  />

                  <label className="form-label" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Email"
                    value={user.email}
                    onChange={handleChange}
                  />
                  <label htmlFor="phone_number" className="form-label">
                    Số điện thoại
                  </label>
                  <input
                    required
                    type="text"
                    className="form-control"
                    placeholder="Số điện thoại"
                    name="phone_number"
                    value={user.phone_number}
                    onChange={handleChange}
                  />

                  <label htmlFor="address" className="form-label">
                    Địa chỉ
                  </label>
                  <input
                    required
                    type="text"
                    className="form-control"
                    placeholder="Địa chỉ"
                    name="address"
                    value={user.address}
                    onChange={handleChange}
                  />

                  <label className="form-label" htmlFor="password">
                    Mật khẩu
                  </label>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Mật khẩu"
                    value={user.password}
                    onChange={handleChange}
                  />
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                    onClick={handleClose}
                  >
                    Đóng
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleSubmit}
                  >
                    Hoàn thành
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="overflow-auto">
          <TableUser
            users={users}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        </div>
      </div>
    </div>
  );
}

export default User;
