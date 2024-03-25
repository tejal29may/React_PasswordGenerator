import React, { useEffect } from "react";
import "./Category.css";
import { useState } from "react";
// import { NavLink } from "react-router-dom";

import axios from "axios";
import { NavLink } from "react-router-dom";

function Category() {
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState([]);
  // const [loading, setLoading] = useState(false);
console.log("category",category);
  async function fetchData() {
    try {
      const response = await axios(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );
      console.log(response.data.categories);
      console.log(category);
      setCategory(response.data.categories);
      setLoading(false);
    } catch {
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div className="main">
        <p>Categories</p>
        <hr />

        <div className="cards">
          {loading ? (
            <p>Loading...</p>
          ) : category ? (
            category.map((ele, index, array) => {
              return (
                <div className="card" key={index}>
                  <NavLink to={`/SubCategory/${ele.strCategory}`} >
                  <h3>{ele.strCategory}</h3>
                  <img src={ele.strCategoryThumb} alt="" />
                  </NavLink>
                  
                </div>
              );
            })
          ) : null}
        </div>
      </div>
    </>
  );
}

export default Category;
