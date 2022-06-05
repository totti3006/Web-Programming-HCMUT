import React from "react";
import "./Footer.css";
import { Link } from 'react-router-dom'
import { AiFillFacebook } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import {AiFillLinkedin} from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";

const Footer  = () =>{
  return (
    <div class="mt pt-1 pb-1 footer">
    <div class="container">
      <div class="row">
        <div class="col-lg-5 col-xs-12 about-company">
          <h2>PINE@APPLE</h2>
          <p class="pr-5 text-white-50">Được thành lập từ 01-2022 với đội ngũ đến từ các lĩnh vực: Phần mềm, Dịch vụ CNTT. Từ những kinh nghiệm chuyên môn, kết hợp với sự trẻ trung, sáng tạo, đoàn kết, đam mê, nhiệt huyết trong công việc, Pineapple đã và đang phát triển không ngừng. </p>
          {/* <p><a href="#"><i class="fa fa-facebook-square mr-1"></i></a><a href="#"><i class="fa fa-linkedin-square"></i></a></p> */}
        </div>
        <div class="col-lg-3 col-xs-12 links">
          <h4 class="mt-lg-0 mt-sm-3">Links</h4>
            <Link to="">
                  <AiFillFacebook style={{color: 'black', fontSize: '30px'}}/>
                </Link> 
                <Link to="">
                  <AiFillInstagram style={{color: 'black', fontSize: '30px'}}/>
                </Link> 
                <Link to="">
                  <AiFillLinkedin style={{color: 'black', fontSize: '30px'}}/>
                </Link> 
                <Link to="">
                  <AiFillGithub style={{color: 'black', fontSize: '30px'}}/>
                </Link> 
        </div>
        <div class="col-lg-4 col-xs-12 location">
          <h4 class="mt-lg-0 mt-sm-4">Location</h4>
          <p>Địa chỉ: Hồ Chí Minh, Việt Nam</p>
          <p class="mb-0"><i class="fa fa-phone mr-3"></i>Điện thoại: (541) 754-3010</p>
          <p><i class="fa fa-envelope-o mr-3"></i>Email: info@hsdf.com</p>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col copyright">
          <p class=""><small class="text-white-50">© 2022. </small></p>
        </div>
      </div>
    </div>
    </div>
  );
}
export default Footer;