import './Content.css'
import ItemList from './ItemList/ItemList'
import axios from 'axios'
import { useEffect, useState } from 'react'
import banner1 from '../../../images/home-content/banner/banner-macbook-pro.jpg'
import banner2 from '../../../images/home-content/banner/banner-samsung-flip.jpg'
import banner3 from '../../../images/home-content/banner/banner-thinkpad.jpg'

const Content = (props) => {
    const [data, setData] = useState(props.data)

    const showItemList = () => {
        console.log(data)
        if(data){
            return(<>
                <ItemList data={data.filter(x => x.category_name === 'Apple')} listName="APPLE"/>
                <ItemList data={data.filter(x => x.category_name === 'Samsung')} listName="SAMSUNG"/>
                {/* <ItemList data={data.watch} listName="ĐỒNG HỒ"/> */}
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