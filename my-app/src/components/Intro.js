import React from "react";
import image from '../images/hero-img.png'
import image1 from '../images/1.jpg'
import image2 from '../images/2.jpg'
import image3 from '../images/3.jpg'
import image4 from '../images/4.jpg'
import image5 from '../images/5.jpg'
import image6 from '../images/6.jpg'
import image7 from '../images/7.jpg'

import "./Intro.css";
const Intro  = () =>{
  return (
    <div>
      <header className=" masthead">
        <div className="container-fluid position-relative">
          <div className="row justify-content-center">
            <div id="head" className="col-xl-6">
              <div className="text-center text-white">
                <h1 className="mb-5">Công ty TNHH PINE@APPLE</h1>
                <h2 className="mb-5">Chúng tôi là công ty chuyên phân phối thiết bị công nghệ.</h2>
              </div>
            </div>
            <div className="col-xl-6 order-1 order-lg-2 hero-img aos-init aos-animate">
            <img src={image} class="img-fluid animated" alt=""/>
            </div>
          </div>
        </div>
      </header>
      <section
        className="testimonials text-center bg-light"
        style={{ paddingTop: "5rem", paddingBottom: "5rem" }}
      >
        <div className="container">
        <div class="section-title">
          <h2>Đội ngũ</h2>
        </div>
          <div className="row">
            <div className="col-lg-3">
              <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                <img
                  className="mb-3"
                  src={image4}
                  alt="..."
                />
                <div className="member">
                <h5>Nguyễn Diệu Ái</h5>
                <p className="font-weight-light mb-0">"Frontend"</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                <img
                  className="mb-3"
                  src={image1}
                  alt="..."
                />
                <h5>Nguyễn Kế Đạt</h5>
                <p className="font-weight-light mb-0">"Backend Director"</p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                <img
                  className="mb-3"
                  src={image2}
                  alt="..."
                />
                <h5>Nguyễn Hải Đăng</h5>
                <p className="font-weight-light mb-0">
                  "Half-Frontend Director"
                </p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                <img
                  className="mb-3"
                  src={image3}
                  alt="..."
                />
                <h5>Nguyễn Thanh Thịnh</h5>
                <p className="font-weight-light mb-0">
                  "Half-Frontend Director"
                </p>
              </div>
            </div> 
          </div>
         
        </div>
      </section>
      <section
        className="testimonials text-center bg-light"
        style={{ paddingTop: "5rem", paddingBottom: "5rem" }}
      >
        <div className="container">
        <div class="section-title">
          <h2>VỀ CHÚNG TÔI</h2>
        </div>
          <div className="row ">
            <div className="col-lg-6 order-lg-2 text-white  showcasebg1"></div>
            <div className="col-lg-6">
              <h4>LỊCH SỬ HÌNH THÀNH & PHÁT TRIỂN</h4>
              <p className="lead mb-0">
              Được thành lập từ 01-2022 với đội ngũ đến từ các lĩnh vực: Phần mềm, Dịch vụ CNTT. Từ những kinh nghiệm chuyên môn, kết hợp với sự trẻ trung, sáng tạo, đoàn kết, đam mê, nhiệt huyết trong công việc, Pineapple đã và đang phát triển không ngừng.
              </p>
            </div>
          </div>
          
          <div className="row">
            <div className="col-lg-6 "></div>
            <div className="col-lg-6 ">
              <h4>TẦM NHÌN VÀ SỨ MỆNH</h4>
              <p className="lead mb-0">
              Trở thành doanh nghiệp cung cấp sản phẩm uy tín hàng đầu tại Việt Nam và khu vực.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6 col-md-12 order-lg-2 text-white  showcasebg1"></div>
            <div className="col-lg-6 ">
              <h4>GIÁ TRỊ CỐT LỖI</h4>
              <p className="lead mb-0">
                Giá trị tạo ra cho khách hàng là niềm tự hào của chúng tôi.
                Hiệu quả của khách hàng là tiêu chí hàng đầu mà chúng tôi hướng đến.
                Bền vững trong phát triển bản thân của mỗi thành viên là thành tựu lớn lao mà Pineapple mang lại.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        className="testimonials text-center bg-light"
        style={{ paddingTop: "5rem", paddingBottom: "5rem" }}
      >
        <div className="container">
        <div class="section-title">
          <h2>HÌNH ẢNH CÔNG TY</h2>
        </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                <img
                  className="mb-3"
                  src={image5}
                  alt="..."
                />
                <div className="member">
                <h5>Tập thể</h5>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4">
              <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                <img
                  className="mb-3"
                  src={image6}
                  alt="..."
                />
                <h5>Party</h5>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="testimonial-item mx-auto mb-8 mb-lg-0">
                <img
                  className="mb-3"
                  src={image7}
                  alt="..."
                />
                <h5>Training</h5>
              </div>
            </div> 
          </div>
         
        </div>
      </section>
    </div>
  );
}
export default Intro;