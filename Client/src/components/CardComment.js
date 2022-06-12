import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import environment from "./Environment/Environment"
import axios from "axios";


function CardComment({ deleteComment, setCommentEdit }) {
  const [data, setData] = useState([]);
  const { id } = useParams();

  const getData = async () => {
    const res = await axios.get(
      `http://localhost/ltw-api/comment/getall/${id}`,  environment.headers
    );
    const data = res.data.data;
    setData(data.find((item) => item.product_id == id));
    console.log(data);
  }
    useEffect(() => {
        getData();
    }, []);


    const [infoData, setInfoData] = useState({});

    const getinfoData = async () => {
        await axios
          .get(`http://localhost/ltw-api/user`, environment.headers)
          .then((res) => {
            setInfoData(res.data.data);
          })
          //console.log(infoData);
      };
    
    useEffect(() => {
        getinfoData();
    }, []);

  return (
    <div
      className="container bg-white rounded-3 py-2 w-75 mb-2"
      style={{ position: "relative" }}
    >
      <div className="row">
        <div className="col-lg-1">
          <div className="avata rounded-circle">
            <img
              src="https://www.w3schools.com/w3images/avatar2.png"
              alt="avata"
              className="rounded-circle mx-auto d-block"
              style={{ width: "60px" }}
            />
          </div>
        </div>
        <div className="col-lg-9">
          {/* <h5 className="name mb-1">{data.fullname}</h5> */}
          <p className="content mb-0 text-secondary fst-italic">
            {data.content}
          </p>
        </div>
        <div className="col-lg-2 d-flex align-items-center justify-content-center">
          <div className="text-center ">
            <span>{data.updated_at}</span>
          </div>
        </div>
      </div>
      {data.user_id === infoData.user_id ? (
        <>
          <div
            role="button"
            className=""
            style={{ position: "absolute", top: "2px", right: "2px" }}
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
            onClick={() =>
              setCommentEdit({ id: data.user_id, content: data.content })
            }
          >
            <i className="bi bi-pencil text-warning"></i>
          </div>
          <div
            role="button"
            className=""
            style={{ position: "absolute", bottom: "2px", right: "2px" }}
            onClick={() => deleteComment(data.user_id)}
          >
            <i className="bi bi-trash text-danger"></i>
          </div>
        </>
      ) : null}
    </div>
  );
}

export default CardComment;