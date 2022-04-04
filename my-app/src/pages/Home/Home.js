import { useEffect, useState } from 'react';
import './Home.css';
import Slider from '../../components/Home/Slider/Slider';
import Content from '../../components/Home/Content/Content';
import axios from 'axios';


const Home = () => {

    const [className, setClassName] = useState("home-container")

    useEffect(() => {
        const login = async () =>{
            const data = {
                username: 'thinhnguyen',
                password: '123456'
            }
            await axios.post('http://localhost/ltw-api/users/login', data).then(res => {
                console.log(res);
            })
        }

        login();

        const handleScroll = () => {
            const sliderHeight = document.querySelector(".slider").clientHeight
            if(window.scrollY >= 0.6*sliderHeight) {
                setClassName("home-container home-slider-scrolled")
                document.querySelector(".slider").classList.add("slider-scrolled")
            }
            else if(window.scrollY < 0.5*sliderHeight){
                setClassName("home-container")
                document.querySelector(".slider").classList.remove("slider-scrolled")
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    },[])

    return(
        <div className={className}>
            <Slider />
            <Content />
        </div>
    )
}

export default Home;