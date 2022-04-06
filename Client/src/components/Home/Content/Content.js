import './Content.css'
import ItemList from './ItemList/ItemList'
import axios from 'axios'
import { useEffect, useState } from 'react'
import banner1 from '../../../images/home-content/banner/banner-macbook-pro.jpg'
import banner2 from '../../../images/home-content/banner/banner-samsung-flip.jpg'
import banner3 from '../../../images/home-content/banner/banner-thinkpad.jpg'

const Content = () => {
    const [data, setData] = useState()

    useEffect(() => {
        const getData = async () =>{
            await axios("/data/home.json").then((data) => {setData(data.data);})
        }
        getData();
    },[])

    const showItemList = () => {
        if(data){
            return(<>
                <ItemList data={data.phone} listName="ĐIỆN THOẠI"/>
                <ItemList data={data.laptop} listName="LAPTOP"/>
                <ItemList data={data.watch} listName="ĐỒNG HỒ"/>
            </>)
        }
    }

    return(
        <div id="home-content">
            <h2 id="home-content-header">SẢN PHẨM NỔI BẬT</h2>
            {showItemList()}
            <div id="home-content-banner">
                <img id="home-content-banner-row1" src={banner1} alt="..."/>
                <div id="home-content-banner-row2">
                    <img src={banner2} alt="..."/>
                    <img src={banner3} alt="..."/>
                </div>
            </div>
            {/* <h2 id="home-content-header">{`TIN TỨC & SỰ KIỆN`}</h2> */}
        </div>
    )
}

export default Content;