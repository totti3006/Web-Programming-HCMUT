import './ItemList.css'

const ItemList = (props) => {

    return(
        <div className="home-itemlist">
            <div className="home-itemlist-title"><p>{props.listName}</p></div>
            <ul>
                <li className="home-itemlist-item">
                    <div>
                        <img src={props.data[0].url} alt="..."/>
                        <p className="home-itemlist-item-name">Item 1</p>
                        <p>Giá: XXXXX</p>
                    </div>
                </li>
                <li className="home-itemlist-item">
                    <div>
                        <img src={props.data[1].url} alt="..."/>
                        <p className="home-itemlist-item-name">Item 2</p>
                        <p>Giá: XXXXX</p>
                    </div>
                </li>
                <li className="home-itemlist-item">
                    <div>
                        <img src={props.data[2].url} alt="..."/>
                        <p className="home-itemlist-item-name">Item 3</p>
                        <p>Giá: XXXXX</p>
                    </div>
                </li>
                <li className="home-itemlist-item home-itemlist-lastitem">
                    <div>
                        <img src={props.data[3].url} alt="..."/>
                        <p className="home-itemlist-item-name">Item 4</p>
                        <p>Giá: XXXXX</p>
                    </div>
                </li>
            </ul>
            <div className="home-itemlist-more"><p>Xem thêm</p></div>
        </div>
    )
}

export default ItemList;