import React, { Fragment } from "react";
import axios from "axios";
import Pagination from "./Pagination";


function Price() {
  const [currentPage, setCurrentPage] = React.useState(1);

  const [products, setProducts] = React.useState([]);

  const getData = async () => {
    await axios.get(`http://localhost/ltw-api/product/getall`).then((res) => {
      setProducts(res.data.data);
    });
  };

  React.useEffect(() => {
    getData();
  }, []);

  if (products.length === 0) return <span>Loading...</span>;
  else {
  const itemPerPage = 6;
  const numberPage = Math.ceil(products.length / itemPerPage);
  const currDisplay = products.slice(
    (currentPage - 1) * itemPerPage,
    currentPage * itemPerPage
  );

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
          {currDisplay.map((product) => (
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
      {numberPage > 1 ? (
                  <Pagination
                    numberPage={numberPage}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                  />
                ) : null}
    </div>
  );
}
}

export default Price;
