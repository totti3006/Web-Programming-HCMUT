import React from "react";
import "./Footer.css";

const Footer  = () =>{
  return (
    <footer class="footer mt-auto py-3 bg" >
    <div class="container">
    <div className="row">
            <div className="col-lg-5">
              <h3><b>PINE@APPLE</b></h3>
            <p>
            Được thành lập từ 01-2022 với đội ngũ đến từ các lĩnh vực: Phần mềm, Dịch vụ CNTT. Từ những kinh nghiệm chuyên môn, kết hợp với sự trẻ trung, sáng tạo, đoàn kết, đam mê, nhiệt huyết trong công việc, Pineapple đã và đang phát triển không ngừng.
            </p>
            </div>
            <div className="col-lg-4">
            <h4><b>Contact</b></h4>
            <p> HCMC, Vietnam</p>
            <p> <strong>Email:</strong> info@gmail.com</p>
            <p> <strong>Phone:</strong>+ 01 234 567 88</p>
            </div>
            <div className="col-lg-3">
            <h4><b>Kết nối với chúng tôi</b></h4>
            <div class="social-links mt-3">
              <ul>
              <li><a href="#" class="twitter">Twitter</a></li>
              <li><a href="#" class="facebook">Facebook</a></li>
              <li><a href="#" class="instagram">Github</a></li>
              <li><a href="#" class="linkedin">Linkedin</a></li>
              </ul>
              
            </div>
            </div>
            </div>
    </div>
    </footer>
  );
}
export default Footer;