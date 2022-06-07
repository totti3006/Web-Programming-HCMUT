import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Product.css";

function Categories({ filterProduct, typ }) {
  const [categories, setCategories] = useState([]);
  //useEffect
  useEffect(() => {
    const getData = async () => {
      const res = await axios.get("http://localhost/ltw-api/category/getall");
      setCategories(res.data.data);
    };
    getData();
  }, []);

  return (
    <div className="card1">
      <article className="filter-group">
        <div
          className="category-list list-group"
          onClick={() => filterProduct(-1)}
        >
          <a
            className={
              typ == -1
                ? "list-group-item list-group-item-action active"
                : "list-group-item list-group-item-action "
            }
          >
            Tất cả
          </a>
        </div>
        {categories.map((item) => (
          <div
            className="category-list list-group"
            onClick={() => filterProduct(item.id)}
          >
            <a
              className={
                typ == item.id
                  ? "list-group-item list-group-item-action active"
                  : "list-group-item list-group-item-action "
              }
            >
              {item.name}
            </a>
          </div>
        ))}
      </article>
    </div>
  );
}

export default Categories;
