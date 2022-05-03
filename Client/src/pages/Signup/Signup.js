import React, {useState} from "react";
import { useNavigate, Link } from "react-router-dom";
import './Signup.css';
import image from '../../images/hero-img.png'


const Signup  = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate();

  async function regis() {
    let item={name, email, password}
     console.warn(item)

     let result= await fetch("http://localhost/ltw-api/users/signup",{
       method: 'POST',
       body:JSON.stringify(item),
       headers:{
         "Content-Type": 'application/json',
         "Accept": 'application/json'
       }
     })

     result = await result.json()
      localStorage.setItem("user-infors", JSON.stringify(result)) 
      navigate("signin");
    }

    return (
      <div id="signin-container">
        <div id="signin-box">
        <div id="signin-box-col1">
        <img src={image} alt="Signin"/>
        </div>
          <div id="signin-box-col2">
            <h2>Đăng Ký</h2>
            <div className="signin-box-col2-input">
              <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Tên đăng nhập"></input>
            </div>
            <div className="signin-box-col2-input">
                        <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email"></input>
                    </div>
                    
                    <div className="signin-box-col2-input">
                        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Nhập mật khẩu"></input>
                    </div>
                    
                    <div className="signin-box-col2-input">
                    <button type="submit" onClick = {regis} className="btn btn-primary">Đăng ký</button>
                    </div>
                    <div class="signin-box-col2-input linkk">
                    <Link to="/login">Tôi đã có tài khoản!</Link>
                    </div>
                </div>
            </div>
        </div>

           
    );
}

export default Signup;