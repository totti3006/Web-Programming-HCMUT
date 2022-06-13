import React from "react";
import "./Footer.css";
import { Link } from 'react-router-dom'
import { AiFillFacebook } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import {AiFillLinkedin} from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";

const Footer  = () =>{
  return (
    <div className="mt pt-1 pb-1 footer">
    <div className="container">
      <div className="row">
        <div className="col-lg-5 col-xs-12 about-company">
          <h2>PINE@APPLE</h2>
          <p className="pr-5 text-white-50">Được thành lập từ 01-2022 với đội ngũ đến từ các lĩnh vực: Phần mềm, Dịch vụ CNTT. Từ những kinh nghiệm chuyên môn, kết hợp với sự trẻ trung, sáng tạo, đoàn kết, đam mê, nhiệt huyết trong công việc, Pineapple đã và đang phát triển không ngừng. </p>
          {/* <p><a href="#"><i class="fa fa-facebook-square mr-1"></i></a><a href="#"><i class="fa fa-linkedin-square"></i></a></p> */}
        </div>
        <div className="col-lg-3 col-xs-12 links">
          <h4 className="mt-lg-0 mt-sm-3">Links</h4>
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
        <div className="col-lg-4 col-xs-12 location">
          <h4 className="mt-lg-0 mt-sm-4">Location</h4>
          <p>Địa chỉ: Hồ Chí Minh, Việt Nam</p>
          <p>Điện thoại: (541) 754-3010</p>
          <p>Email: info@hsdf.com</p>
        </div>
      </div>
      
    </div>
    </div>
  );
}
export default Footer;