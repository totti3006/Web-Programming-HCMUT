import React, { useState, useEffect } from "react";
import TableCategory from "../../../components/Admin/TableCategory";
import axios from "axios";
import Header from "../../../components/Header";
import "./Category.css";
import environment from "../../.././components/Environment/Environment"


function Category() {
  const [data, setData] = useState("");

  const getData = async () => {
    await axios.get(`http://localhost/ltw-api/category/getall`).then((res) => {
      if (res.data.data) {
        setData(res.data.data);
      }
    });
  };

  useEffect(() => {
    getData();
  }, []);

  const addCategory = (category) => {
    axios
      .post('http://localhost/ltw-api/category/', category, environment.headers)
      .then((response) => getData())
      .catch((res) => alert(res));
  };


  const [status, setStatus] = useState({
    id: "",
    action: "Thêm",
  });

  const [category, setCategory] = useState({ ID: "", name: ""});

  const closeHandler = () => {
    setCategory({ ID: "", name: ""});
    setStatus({
      id: "",
      action: "Thêm",
    });
  };

  const submitHandler = () => {
    if (status.action === "Thêm") {
      addCategory(category);
    } 
    setCategory({ ID: "", name: ""});
    setStatus({
      id: "",
      action: "Thêm",
    });
  };
 
  const setContent = (e, content) => {
    setCategory((prev) => ({ ...prev, content: content }));
  };

  
  return (
   
      <div id="category-container" className="container-fluid p-0">
              <Header />

        <div className="container-fluid">
          <h2 className="text-center my-4">Quản lý danh mục sản phẩm</h2>
          <div className="container">
            <button
              type="button"
              className="btn btn-primary openmodal"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
            >
              Thêm danh mục mới
            </button>
            <div
            className="modal fade"
            id="staticBackdrop"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabIndex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog" style={{ minWidth: "70%" }}>
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="staticBackdropLabel">
                    {status.action} danh mục
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    onClick={closeHandler}
                  ></button>
                </div>
                <div className="modal-body">
                  <label htmlFor="title" className="form-label">
                    ID
                  </label>
                  <input
                    required
                    type="text"
                    className="form-control"
                    placeholder="ID"
                    name="title"
                    value={category.id}
                    onChange={(e) =>
                      setCategory((prev) => ({ ...prev, id: e.target.value }))
                    }
                  />
                  <label htmlFor="title" className="form-label">
                    Tên
                  </label>
                  <input
                    required
                    type="text"
                    className="form-control"
                    placeholder="Tên"
                    name="name"
                    value={category.name}
                    onChange={(e) =>
                      setCategory((prev) => ({ ...prev, name: e.target.value }))
                    }
                  />
                  
                  
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                    onClick={closeHandler}
                  >
                    Close
                  </button>
                  <button
                    type="submit"
                    className={
                      category.name === ""
                        ? "btn btn-primary disabled"
                        : "btn btn-primary"
                    }
                    data-bs-dismiss="modal"
                    onClick={submitHandler}
                  >
                    Hoàn thành
                  </button>
                </div>
            </div>
          </div>
            </div>
            </div>
            

              <div className="overflow-auto">
                <TableCategory
                  categories={data}
                  //editHandler={editHandler}
                  //deleteHandler={deleteHandler}
                />
              </div>
          </div>
        </div>
      </div>
    
              
  
  );
}

export default Category;
