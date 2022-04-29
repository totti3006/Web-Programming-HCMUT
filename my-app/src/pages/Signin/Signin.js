import './Signin.css'
import image from './images/signin-img.png'

const Signin  = () => {
    return(
        <div id="signin-container">
            <div id="signin-box">
                <div id="signin-box-col1">
                    <img src={image} alt="Signin"/>
                </div>
                <div id="signin-box-col2">
                    <h2>Đăng nhập</h2>
                    <div className="signin-box-col2-input">
                        <input type="text" placeholder="Tên đăng nhập"></input>
                    </div>
                    <div className="signin-box-col2-input">
                        <input type="password" placeholder="Mật khẩu"></input>
                    </div>
                    <div className="signin-box-col2-input">
                        <button type="submit" className="btn btn-primary">Đăng nhập</button>
                    </div>
                    <div id="signin-box-col2-signup">
                        <p>Bạn chưa có tài khoản?</p>  
                        <a href="/signup">Đăng kí ngay bây giờ</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signin;