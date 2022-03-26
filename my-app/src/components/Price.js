import React, { Fragment } from "react";
import Data from "./DummyProduct";

function Price() {
  const [products, setProducts] = React.useState(Data);
  return (
    <div className="container py-5">
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
                <td>{product.name}</td>
                <td>{product.brand}</td>
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
