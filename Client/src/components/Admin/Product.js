import React, {useState} from "react";
import Header from "../../components/Header";
import TableCategory from "./TableProduct";
import axios from "axios";
import environment from "../Environment/Environment"


const Product = () => {

  const [products, setProducts] = useState([]);
  const [numProductInCart, setNumProductInCart] = useState();
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    await axios
      .get(`http://localhost/ltw-api/category/getall`, environment.headers)
      .then((res) => {
        setCategories(res.data.data);
      });
  };

  React.useEffect(() => {
    getCategories();
  }, []);

  const getProducts = async () => {
    await axios
      .get(`http://localhost/ltw-api/product/getall`, environment.headers)
      .then((res) => {
        setProducts(res.data.data);
      });
  };

  React.useEffect(() => {
    getProducts();
  }, []);

  const addProduct = (product) => {
    axios
      .post('http://localhost/ltw-api/product/', product, environment.headers)
      .then((response) => getProducts())
      .catch((res) => alert(res));
  };

  

const [currentPage, setCurrentPage] = useState(1);
  const [status, setStatus] = useState({
    id: "",
    action: "Thêm",
  });
  const [product, setProduct] = useState({
    id: "",
    category_id: "",
    category_name: "",
    title: "",
    price: "",
    discount: "",
    thumbnail: "",
    description: ""
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  const closeHandler = () => {
    setProduct({
      id: "",
      category_id: "",
      category_name: "",
      title: "",
      price: "",
      discount: "",
      thumbnail: "",
      description: "",
    });
    setStatus({
      id: "",
      action: "Thêm",
    });
  };

  const submitHandler = () => {
    if (status.action === "Thêm") {
      addProduct(product);
    }
    setProduct({
      id: "",
      category_id: "",
      category_name: "",
      title: "",
      price: "",
      discount: "",
      thumbnail: "",
      description: "",
    });
    setStatus({
      id: "",
      action: "Thêm",
    });
  };

  // const deleteHandler = (id) => {
  //   var option = window.confirm(
  //     "Bạn có chắc chắn muốn xoá sản phẩm này không?"
  //   );
  //   if (option) {
  //     deleteProduct(id);
  //   }
  // };

  const editHandler = (id, product) => {
    setStatus({
      id: id,
      action: "Sửa",
    });
    setProduct(product);
    document.querySelector(".openmodal").click();
  };

  const productPerPage = 5;
  const numberPage = Math.ceil(products.length / productPerPage);
  const currProducts = products.slice(
    (currentPage - 1) * productPerPage,
    currentPage * productPerPage
  );

  return (
    <div className="container-fluid p-0">
      <div className="container-fluid">
          <Header/>
        <div className="container">
        <h2 className="text-center my-4">Quản lý sản phẩm</h2>
          <button
            type="button"
            className="btn btn-primary openmodal"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            Thêm sản phẩm mới
          </button>

          <div
            className="modal fade"
            id="staticBackdrop"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabIndex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="staticBackdropLabel">
                    {status.action} sản phẩm
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    onClick={closeHandler}
                  ></button>
                </div>
                
                <div className="modal-body">
                <label htmlFor="title" className="form-label">
                    ID
                  </label>
                  <input
                    required
                    type="text"
                    className="form-control"
                    placeholder="ID"
                    name="title"
                    value={product.id}
                    onChange={(e) =>
                      setProduct((prev) => ({ ...prev, id: e.target.value }))
                    }
                  />
                  <label htmlFor="title" className="form-label">
                    ID danh mục
                  </label>
                  <input
                    required
                    type="text"
                    className="form-control"
                    placeholder="ID danh mục"
                    name="title"
                    value={product.category_id}
                    onChange={changeHandler}
                  />
                  <label htmlFor="name" className="form-label">
                    Tên danh mục
                  </label>
                  <input
                    required
                    type="text"
                    className="form-control"
                    placeholder="Tên sản phẩm"
                    name="title"
                    value={product.category_name}
                    onChange={changeHandler}
                  />
                  <label htmlFor="name" className="form-label">
                    Tên sản phẩm
                  </label>
                  <input
                    required
                    type="text"
                    className="form-control"
                    placeholder="Tên sản phẩm"
                    name="title"
                    value={product.title}
                    onChange={changeHandler}
                  />
                  <label htmlFor="price" className="form-label">
                    Giá
                  </label>
                  <input
                    required
                    type="text"
                    className="form-control"
                    placeholder="Giá sản phẩm"
                    name="price"
                    value={product.price}
                    onChange={changeHandler}
                  />
                  <label htmlFor="price" className="form-label">
                    Giảm giá
                  </label>
                  <input
                    required
                    type="text"
                    className="form-control"
                    placeholder="Giảm giá"
                    name="price"
                    value={product.discount}
                    onChange={changeHandler}
                  />
                  <label htmlFor="thmbnail" className="form-label">
                    Hình ảnh
                  </label>
                  <input
                    required
                    type="text"
                    className="form-control"
                    placeholder="Link hình ảnh"
                    name="thumbnail"
                    value={product.thumbnail}
                    onChange={changeHandler}
                  />
                  <label htmlFor="description" className="form-label">
                    Mô tả
                  </label>
                  <textarea
                    required
                    type="text"
                    className="form-control"
                    placeholder="Mô tả"
                    name="description"
                    value={product.description || ""}
                    onChange={changeHandler}
                  ></textarea>
                  
                 
                  
                </div>

                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                    onClick={closeHandler}
                  >
                    Close
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    data-bs-dismiss="modal"
                    onClick={submitHandler}
                  >
                    Hoàn thành
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="overflow-auto">
            <TableCategory
              products={currProducts}
              editHandler={editHandler}
              //deleteHandler={deleteHandler}
              offset={(currentPage - 1) * productPerPage}
            />
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default Product;