import React from "react";
import image from "../images/phone-1.jpg";
import Commented from "./Commented";
const Comment = () => {
  return (
    <div className="comment">
      <h3>Bình luận</h3>
      <div className="row">
        <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
          <div className="avatar rounded-circle">
            <img
              src={image}
              alt="avatar"
              className="rounded-circle mx-auto d-block"
              style={{ width: "55px", height: "55px" }}
            />
          </div>
        </div>
        <div class="col-xs-7 col-sm-7 col-md-7 col-lg-7">
          <div className="form-floating">
            <textarea
              className="form-control"
              placeholder="Leave a comment here"
              id="floatingTextarea"
              value={"FAKE DATA"}
              onChange={{}}
            ></textarea>
            <label htmlFor="floatingTextarea">Bình luận</label>
          </div>
        </div>
        <div className="col-lg-3">
          <button className="btn btn-outline-primary" onClick={{}}>
            Đăng
          </button>
        </div>
      </div>
      <hr/>
        <Commented/>
    </div>
  );
};

export default Comment;
