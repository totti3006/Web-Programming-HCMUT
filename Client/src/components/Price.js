import React, { Fragment } from "react";
import axios from "axios";
import Data from "./DummyProduct";

function Price() {
  const [products, setProducts] = React.useState([]);

  const getData = async () => {
    await axios.get(`http://localhost/ltw-api/product/getall`).then((res) => {
      setProducts(res.data.data);
    });
  };

  React.useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container py-5 mt-3 table-responsive">
      <div className="text-center py-2 mt-3">
        <h3>Bảng giá sản phẩm</h3>
      </div>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Tên sản phẩm</th>
            <th scope="col">Hãng</th>
            <th scope="col">Giá</th>
            <th scope="col">Mô tả</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <Fragment>
              <tr>
                <th scope="row">{product.id}</th>
                <td>{product.title}</td>
                <td>{product.category_name}</td>
                <td>{product.price}</td>
                <td>{product.description}</td>
              </tr>
            </Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Price;
