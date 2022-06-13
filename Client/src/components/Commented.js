import React, { useState } from "react";
import image from "../images/phone-1.jpg";
const Commented = ({comment, user_id, handleDelete, handleUpdate}) => {
  const [editComment, setEditComment] = useState("")
  console.log(comment)
  return (
    <div className="commented mb-4">
      <div className="row">
        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
          <div className="avatar rounded-circle">
            <img
              src={comment.avatar||"https://vnn-imgs-a1.vgcloud.vn/image1.ictnews.vn/_Files/2020/03/17/trend-avatar-1.jpg"}
              alt="avatar"
              className="rounded-circle mx-auto d-block"
              style={{ width: "55px", height: "55px" }}
            />
          </div>
        </div>
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
          <h6 className="name mb-1">{comment.fullname||"Người dùng chưa đặt tên"}</h6>
          <p className="content mb-0 text-secondary fst-italic">
            {comment.content}
          </p>
        </div>
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 d-flex align-items-center justify-content-center">
          <div className="text-center ">
            <span>{comment.updated_at}</span>
          </div>
        </div>
{
  user_id === comment.user_id&&<div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 d-flex align-items-center justify-content-between flex-column">
  <button className="btn btn-warning rounded-circle btn-sm mb-1" onClick={()=>{setEditComment(comment.content)}} data-bs-toggle="modal" data-bs-target={"#staticBackdrop"+comment.id}>
  <i className="bi bi-pencil-fill "></i>
  </button>
  <button className="btn btn-danger rounded-circle btn-sm"   onClick={()=>handleDelete(comment.id)}>
  <i className="bi bi-trash-fill"></i>
  </button>
        </div>
}
      </div>
      <div class="modal fade" id={"staticBackdrop"+comment.id} data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Sửa bình luận</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
       <input type="text" class="form-control" placeholder="Bình luận" aria-label="comment" aria-describedby="basic-addon1" value={editComment} onChange={(e)=>setEditComment(e.target.value)}></input>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Huỷ bỏ</button>
        <button type="button" class="btn btn-primary" onClick={()=>handleUpdate(comment.id, editComment)} data-bs-dismiss="modal">Xác nhận</button>
      </div>
    </div>
  </div>
</div> 
    </div>
  );
};

export default Commented;
