import { useState } from "react";
import axios from "axios";
import environment from "../Environment/Environment";

const NewsItem = (props) =>{
    const [data, setData] = useState({
        news_id: props.data.id,
        title: props.data.title,
        content: props.data.content,
        thumbnail: props.data.thumbnail
    });
    const [changedData, setChangedData] = useState({
        ...data
    });
    const [hidden, setHidden] = useState(false);

    const handleSubmit = async () => {
        await axios.put("http://localhost/ltw-api/news/", changedData, environment.headers).then((res) => {
            if(res.status === 200){
                setData(changedData);
                setHidden(false);
                alert("Cập nhật thành công!")
            }
        }).catch(err => {
            console.log(err)
        })
    }

    
    
        const deleteNew = async (id) => {
            //console.log("delete comment", id)
            await axios.delete(`http://localhost/ltw-api/news?id=${id}`, environment.headers)
            .then(response =>alert('Delete successful'))
          }
      const deleteHandler = (id) => {
        var option = window.confirm(
          "Bạn có chắc chắn muốn xoá sản phẩm này không?"
        );
        if (option) {
          deleteNew(id);
        }
      };

    return(
        data ? 
        (<tr>
            <td>1</td>
            <td>
                <input name={`title-news-${data.id}`} hidden={!hidden} type="text" defaultValue={data.title} onChange={(e) => {setChangedData({...changedData, title: e.target.value});}}/>
                <p hidden={hidden}>{data.title}</p>
            </td>
            <td>
                <input name={`thumbnail-news-${data.id}`} hidden={!hidden} type="text" defaultValue={data.thumbnail} onChange={(e) => {setChangedData({...changedData, thumbnail: e.target.value});}}/>
                <img
                    hidden={hidden}
                    src={data.thumbnail}
                    alt="imagea"
                    style={{ width: "70px", height: "70px" }}
                />
            </td>
            <td>
                <input name={`content-news-${data.id}`} hidden={!hidden} type="text" defaultValue={data.content} onChange={(e) => {setChangedData({...changedData, content: e.target.value});}}/>
                <p hidden={hidden}>{data.content}</p>
            </td>
            <td>
            <button
                type="button"
                className="btn btn-warning"
                onClick={() => setHidden(true)}
                hidden={hidden}
            >
                Sửa          
            </button>
            <button
                type="button"
                className="btn btn-success"
                hidden={!hidden}
                onClick={handleSubmit}
            >
                Cập nhật          
            </button>
            </td>
            <td>
            <button className="btn btn-danger" onClick={() => deleteHandler(data.news_id)}>
                Xóa
            </button>
            </td>
        </tr>) : ""
    )
}

export default NewsItem;