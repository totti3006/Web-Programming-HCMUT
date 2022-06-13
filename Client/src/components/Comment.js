import axios from "axios";
import React, {useEffect, useState} from "react";
import image from "../images/phone-1.jpg";
import Commented from "./Commented";
import environment from "./Environment/Environment"; 

const Comment = ({comments, product_id, setForceRerender}) => {
  const [content, setContent] = useState("");
  const [user_id, setUser_id] = useState();
  const [avatar, setAvatar] = useState();

  useEffect(() => {
    const getUserId = async () => {
      try {
      const res = await axios.get(`http://localhost/ltw-api/user`, environment.headers);
      console.log(res)
      setUser_id(res.data.data.user_id);
      setAvatar(res.data.data.avatar);
      } catch (error) {
      console.log(error)  
      }}
      getUserId()
  }, [])
  
  
  const changeHandler = (e) => {
    setContent(e.target.value);
  };

  const handleCreateComment = async () => {
    console.log("content of comment", content)
    try {
     const res =  await axios.post("http://localhost/ltw-api/comment", {product_id, content }, environment.headers)
     console.log(res)
     setForceRerender(prev=>!prev)
    } catch (error) {
     console.log(error.response) 
    }
  }


  const handleDelete = async (id) => {
    console.log("delete comment", id)
    try {
    const res = await axios.delete(`http://localhost/ltw-api/comment?id=${id}`, environment.headers)
    setForceRerender(prev=>!prev)
    } catch (error) {
    console.log(error)  
    }
  }

  const handleUpdate = async (id, content)=>{
    console.log("update comment", id, content)
    try {
      const res = await axios.put(`http://localhost/ltw-api/comment`, {comment_id: id, content}, environment.headers)
    setForceRerender(prev=>!prev)
    } catch (error) {
     console.log(error) 
    }
  }


  return (
    <div className="comment">
      <h3>Bình luận</h3>
      <div className="row">
        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
          <div className="avatar rounded-circle">
            <img
              src={avatar}
              alt="avatar"
              className="rounded-circle mx-auto d-block"
              style={{ width: "55px", height: "55px" }}
            />
          </div>
        </div>
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <div className="form-floating">
            <textarea
              className="form-control"
              placeholder="Leave a comment here"
              id="floatingTextarea"
              value={content}
              onChange={changeHandler}
            ></textarea>
            <label htmlFor="floatingTextarea">Bình luận</label>
          </div>
        </div>
        <div className="col-lg-3">
          <button className="btn btn-outline-primary" onClick={handleCreateComment}>
            Đăng
          </button>
        </div>
      </div>
      <hr />
      {
        comments.map((comment) => (<Commented comment={comment} user_id={user_id} key={comment.id}  handleDelete={handleDelete} handleUpdate={handleUpdate}/>))
      }
    </div>
  );
};

export default Comment;