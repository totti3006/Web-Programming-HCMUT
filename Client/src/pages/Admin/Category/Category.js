import React, { useState, useEffect } from "react";
import TableCategory from "../../../components/Admin/TableCategory";
import axios from "axios";
import Header from "../../../components/Header";
import "./Category.css";

function Category() {
  const [category, setCategory] = useState("");
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

  const deleteHandler = (id) => {
    if (window.confirm("Bạn có chắc chắn muốn xoá danh mục này không?")) {
      //deleteCategory(id);
    }
  };

  const editHandler = (id, name) => {
    setCategory({ name: name });
    document.querySelector(".openmodal").click();
  };

  return (
    <>
      <Header />
      <div id="category-container" className="container-fluid p-0">
        <div className="container-fluid">
          <h2 className="text-center my-4">Quản lý danh mục sản phẩm</h2>
          <div className="container">
            <button
              type="button"
              className="btn btn-primary openmodal"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
            >
              Thêm danh mục sản phẩm mới
            </button>

            {data ? (
              <div className="overflow-auto">
                <TableCategory
                  categories={data}
                  editHandler={editHandler}
                  deleteHandler={deleteHandler}
                />
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Category;
