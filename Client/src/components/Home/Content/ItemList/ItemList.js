import './ItemList.css'

const ItemList = (props) => {

    return(
        <div className="home-itemlist">
            <div className="home-itemlist-title"><p>{props.listName}</p></div>
            <ul>
                <li className="home-itemlist-item">
                    <div>
                        <img src={props.data[0].thumbnail} alt="..."/>
                        <p className="home-itemlist-item-name">{props.data[0].title}</p>
                        <p><b>Giá: </b>{Number(props.data[0].price).toLocaleString("vi")} đồng</p>
                    </div>
                </li>
                <li className="home-itemlist-item">
                    <div>
                        <img src={props.data[1].thumbnail} alt="..."/>
                        <p className="home-itemlist-item-name">{props.data[1].title}</p>
                        <p><b>Giá: </b>{Number(props.data[1].price).toLocaleString("vi")} đồng</p>
                    </div>
                </li>
                <li className="home-itemlist-item">
                    <div>
                        <img src={props.data[2].thumbnail} alt="..."/>
                        <p className="home-itemlist-item-name">{props.data[2].title}</p>
                        <p><b>Giá: </b>{Number(props.data[2].price).toLocaleString("vi")} đồng</p>
                    </div>
                </li>
                <li className="home-itemlist-item home-itemlist-lastitem">
                    <div>
                        <img src={props.data[3].thumbnail} alt="..."/>
                        <p className="home-itemlist-item-name">{props.data[3].title}</p>
                        <p><b>Giá: </b>{Number(props.data[3].price).toLocaleString("vi")} đồng</p>
                    </div>
                </li>
            </ul>
            <div className="home-itemlist-more"><p>Xem thêm</p></div>
        </div>
    )
}

export default ItemList;