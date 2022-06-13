import { useState } from "react";
import axios from "axios";
import environment from "../Environment/Environment";

const CategoryItem = (props) =>{
    const [data, setData] = useState({
        category_id: props.data.id,
        name: props.data.name,
        
    });
    const [changedData, setChangedData] = useState({
        ...data
    });
    const [hidden, setHidden] = useState(false);

    const handleSubmit = async () => {
        await axios.put("http://localhost/ltw-api/category/", changedData, environment.headers).then((res) => {
            if(res.status === 200){
                setData(changedData);
                setHidden(false);
                alert("Cập nhật thành công!")
            }
        }).catch(err => {
            console.log(err)
        })
    }

    
    const deleteCategory = async (id) => {
        //console.log("delete comment", id)
        await axios.delete(`http://localhost/ltw-api/category?id=${id}`, environment.headers)
        .then(response =>alert('Delete successful'))
      }
      const deleteHandler = (id) => {
      var option = window.confirm(
        "Bạn có chắc chắn muốn xoá sản phẩm này không?"
      );
      if (option) {
        deleteCategory(id);
      }
      };
    
    
       

    return(
        data ? 
        (<tr>
            <td>1</td>
            <td>
                <input name={`name-category-${data.category_id}`} hidden={!hidden} type="text" defaultValue={data.name} onChange={(e) => {setChangedData({...changedData, name: e.target.value});}}/>
                <p hidden={hidden}>{data.name}</p>
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
            <button className="btn btn-danger" onClick={() => deleteHandler(data.category_id)}>
                Xóa
            </button>
            </td>
        </tr>) : ""
    )
}

export default CategoryItem;