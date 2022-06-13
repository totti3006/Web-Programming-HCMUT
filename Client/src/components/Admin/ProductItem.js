import { useEffect, useState } from "react";
import axios from "axios";
import environment from "../Environment/Environment";

const ProductItem = (props) => {
    const [data, setData] = useState({
        product_id: props.data.id,
        category_id: props.data.category_id,
        category_name: props.data.category_name,
        title: props.data.title,
        price: props.data.price,
        thumbnail: props.data.thumbnail,
        description: props.data.description,
    });

    const [changedData, setChangedData] = useState({
        ...data
    });

    const [hidden, setHidden] = useState(false);

    useEffect(() => {
        
    },[data])
    
    

    const handleSubmit = async () => {
        await axios.put("http://localhost/ltw-api/product/", changedData, environment.headers).then(() => {
            setData(changedData);
            setHidden(false)
            alert("Cập nhật thành công!")
        }).catch((err) => {
            console.log(err);
            alert("Đã xảy ra lỗi khi cập nhật sản phẩm. Vui lòng thử lại ...")
        })
    }

    const deleteProduct = async (id) => {
        //console.log("delete comment", id)
        await axios.delete(`http://localhost/ltw-api/product?id=${id}`, environment.headers)
        .then(response =>alert('Delete successful'))
      }
  const deleteHandler = (id) => {
    var option = window.confirm(
      "Bạn có chắc chắn muốn xoá sản phẩm này không?"
    );
    if (option) {
      deleteProduct(id);
    }
  };

    return(
        <tr>
            <td>1</td>
            <td>
            <input hidden={!hidden} type="text" defaultValue={data.title} onChange={(e) => {setChangedData((prev) => ({...prev, title: e.target.value}))}}/>
                <p hidden={hidden}>{data.title}</p>
            </td>
            <td>
                <p>{data.category_name}</p>
            </td>
            <td>
                <input hidden={!hidden} type="text" defaultValue={data.thumbnail} onChange={(e) => {setChangedData((prev) => ({...prev, thumbnail: e.target.value}))}}/>
                <img
                hidden={hidden}
                src={data.thumbnail}
                alt="imagea"
                style={{ width: "70px", height: "70px" }}
                />
            </td>
            <td>
                <input hidden={!hidden} type="text" defaultValue={data.price} onChange={(e) => {setChangedData((prev) => ({...prev, price: e.target.value}))}}/>
                <p hidden={hidden}>{data.price} đồng</p>
            </td>
            <td style={{width: "30%"}}>
                <textarea style={{width: "100%"}} hidden={!hidden} type="text" defaultValue={data.description} onChange={(e) => {setChangedData((prev) => ({...prev, description: e.target.value}))}} />
                <p hidden={hidden}>{data.description}</p>
            </td>
            <td>
                <button hidden={hidden} className="btn btn-warning" onClick={() => setHidden(true)}>
                Sửa
                </button>
                <button hidden={!hidden} className="btn btn-success" onClick={handleSubmit}>
                Cập nhật
                </button>
            </td>
            <td>

                <button className="btn btn-danger" onClick={() => deleteHandler(data.product_id)}>
                Xóa
                </button>
            </td>
        </tr>
    )
}

export default ProductItem;