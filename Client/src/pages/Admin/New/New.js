import React, { useState, useEffect } from "react";
import TableNews from "../../../components/Admin/TableNews";
import axios from "axios";

function New() {

  const [new, setNew] = useState('');
  const [data, setData] = useState('');

  const getData = async () => {
    await axios.get(`http://localhost/ltw-api/news/getall`).then(res =>{
      if(res.data.data){
        setData(res.data.data)
      }
    })
  }

  useEffect(() =>{
    getData()
  },[])

  const deleteHandler = (id) => {
    if (window.confirm(
        "Bạn có chắc chắn muốn xoá tin tức này không?"
    )) {
      //deleteCategory(id);
    }
  };

  const editHandler = (id, name, title, thumbnail, content) => {
    setNew({ name: name, title: title, thumbnail: thumbnail, content: content });
    document.querySelector(".openmodal").click();
  };

  return (
    <div className="container-fluid p-0">
      <div className="container-fluid">
        <h2 className="text-center my-4">Quản lý danh mục tin tức</h2>
        <div className="container">
          <button
            type="button"
            className="btn btn-primary openmodal"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            Thêm tin tức mới
          </button>
          
          {
            data ? <div className="overflow-auto">
              <TableCategory
                // categories={data}
                // editHandler={editHandler}
                // deleteHandler={deleteHandler}
              />
            </div> : ""
          }
        </div>
      </div>
    </div>
  );
}

export default New;
