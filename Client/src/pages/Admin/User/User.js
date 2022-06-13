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

  const deleteUser = async (id) => {
    //console.log("delete comment", id)
    await axios.delete(`http://localhost/ltw-api/user?id=${id}`, environment.headers)
    .then(response =>alert('Delete successful'))
  }
  const handleDelete = (id) => {
  var option = window.confirm(
    "Bạn có chắc chắn muốn xoá sản phẩm này không?"
  );
  if (option) {
    deleteUser(id);
  }
  }

  return (
    <div className="container py-5 mt-5">
      <Header/>
      <div className="row">
        <div className="col-12">
          <h4 className="text-center my-4">Danh sách thông tin người dùng</h4>
        </div>
        <div className="col-12">
         
            
  

        <div className="overflow-auto">
          <TableUser
            users={data}
          />
        </div>
      </div>
      </div>
    </div>
  );
}

export default User;
