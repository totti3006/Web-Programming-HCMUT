import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Product.css";

function Categories() {
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
        {categories.map((item) => (
          <div className="category-list list-group">
            <Link
              to={`/product/${item.id}`}
              className="list-group-item list-group-item-action"
            >
              {item.name}
            </Link>
          </div>
        ))}
      </article>
    </div>
  );
}

export default Categories;
