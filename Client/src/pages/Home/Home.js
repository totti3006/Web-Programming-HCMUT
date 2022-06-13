import { useEffect, useState } from "react";

import "./Home.css";
import Slider from "../../components/Home/Slider/Slider";
import Content from "../../components/Home/Content/Content";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState("");

  const [className, setClassName] = useState("home-container");

  const getData = async () => {
    await axios
      .get(`http://localhost/ltw-api/product/getall`)
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    const handleScroll = () => {
      const sliderHeight = document.querySelector(".slider").clientHeight;
      if (window.scrollY >= 0.6 * sliderHeight) {
        setClassName("home-container home-slider-scrolled");
        document.querySelector(".slider").classList.add("slider-scrolled");
      } else if (window.scrollY < 0.5 * sliderHeight) {
        setClassName("home-container");
        document.querySelector(".slider").classList.remove("slider-scrolled");
      }
    };
    window.addEventListener("scroll", handleScroll);
    getData();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Header />
      <div className={className}>
        <Slider />
        {data ? <Content data={data} /> : ""}
        <Footer />
      </div>
    </>
  );
};

export default Home;