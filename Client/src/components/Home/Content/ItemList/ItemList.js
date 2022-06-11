import { Link, useNavigate } from 'react-router-dom';
import './ItemList.css'

const ItemList = (props) => {
    const navigation = useNavigate();

    const handleClick = (id) =>{
        navigation(`/product/${id}`, {replace: true})
    }

    return(
        <div className="home-itemlist">
            <div className="home-itemlist-title"><p>{props.listName}</p></div>
            <ul>
                <li className="home-itemlist-item" onClick={() => handleClick(props.data[0].id)}>
                    <div>
                        <img src={props.data[0].thumbnail} alt="..."/>
                        <p className="home-itemlist-item-name">{props.data[0].title}</p>
                        <p><b>Giá: </b>{Number(props.data[0].price).toLocaleString("vi")} đồng</p>
                    </div>
                </li>
                <li className="home-itemlist-item" onClick={() => handleClick(props.data[1].id)}>
                    <div>
                        <img src={props.data[1].thumbnail} alt="..."/>
                        <p className="home-itemlist-item-name">{props.data[1].title}</p>
                        <p><b>Giá: </b>{Number(props.data[1].price).toLocaleString("vi")} đồng</p>
                    </div>
                </li>
                <li className="home-itemlist-item" onClick={() => handleClick(props.data[2].id)}>
                    <div>
                        <img src={props.data[2].thumbnail} alt="..."/>
                        <p className="home-itemlist-item-name">{props.data[2].title}</p>
                        <p><b>Giá: </b>{Number(props.data[2].price).toLocaleString("vi")} đồng</p>
                    </div>
                </li>
                <li className="home-itemlist-item home-itemlist-lastitem" onClick={() => handleClick(props.data[3].id)}>
                    <div>
                        <img src={props.data[3].thumbnail} alt="..."/>
                        <p className="home-itemlist-item-name">{props.data[3].title}</p>
                        <p><b>Giá: </b>{Number(props.data[3].price).toLocaleString("vi")} đồng</p>
                    </div>
                </li>
            </ul>
            <Link to="/product" className="home-itemlist-more"><p>Xem thêm</p></Link>
        </div>
    )
}

export default ItemList;