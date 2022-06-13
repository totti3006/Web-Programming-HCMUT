import React, {useState} from "react";
import TableUser from "../../../components/Admin/TableUser";
import axios from "axios";
import Header from "../../../components/Header";
import environment from "../../../components/Environment/Environment";

function User() {
  const [users, setUsers] = React.useState({});

  const [data, setData] = React.useState([]);

  

  const getData = async () => {
    await axios
      .get(`http://localhost/ltw-api/user/getall`, environment.headers)
      .then((res) => {
        setData(res.data.data);
      });
  };

  React.useEffect(() => {
    getData();
  }, []);

  const addUser = (user) => {
    axios
      .post('http://localhost/ltw-api/user', user, environment.headers)
      .then((response) => getData())
      .catch((res) => alert(res));
  };

  const [status, setStatus] = useState({
    id: "",
    action: "Thêm",
  });

  const [user, setUser] = React.useState({
    fullname: "",
    phone_number: "",
    address: "",
    avatar: "",
  });

  const handleClose = () => {
    setUser({
    fullname: "",
    phone_number: "",
    address: "",
    avatar: "",
    });
    setStatus({
      id: "",
      action: "Thêm",
    });
  };

  const handleSubmit = () => {
    if (status.action === "Thêm") { 
      addUser(user);
    } 
    setUser({
      fullname: "",
      phone_number: "",
      address: "",
      avatar: "",
      });
    setStatus({
      id: "",
      action: "Thêm",
    });
  };

  

  function handleChange(event) {
    const { name, value } = event.target;

    setUser((prev) => ({ ...prev, [name]: value }));
  }

  

  return (
    <div className="container py-5 mt-5">
      <Header/>
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

                  <label className="form-label" htmlFor="ava">
                    Avatar
                  </label>
                  <input
                    required
                    type="text"
                    className="form-control"
                    name="avatar"
                    placeholder="Avatar"
                    value={user.avatar}
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
            users={data}
            //handleEdit={handleEdit}
            //handleDelete={handleDelete}
          />
        </div>
      </div>
    </div>
  );
}

export default User;
