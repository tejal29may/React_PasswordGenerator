import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import "./SubCategory.css";
import axios from "axios";
import { NavLink, useParams } from "react-router-dom";
function SubCategory({category,setCategory}) {
  const param = useParams();
  const [SubCategory, setSubCategory] = useState([]);
  console.log("params", param);
  async function fetchSubCategoryProduct() {
    const result = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${param.SubCategory}`
    );
    setSubCategory(result.data.meals);
  }
  useEffect(() => {
    fetchSubCategoryProduct();
    console.log(SubCategory);
    console.log("category",category);
  }, []);
  return (
    <>
      <Nav />
      <div className="details">
        <h2>{param.SubCategory}</h2>
        {/* <p>{category.strCategoryDescription}</p> */}
      </div>
      <div className="main">
        <p>Meals</p>
        <hr />

        <div className="cards">
          {SubCategory.map((ele, index, array) => {
            return(
              <div className="card" key={index}>
                <NavLink to={`/SingleItem/${ele.idMeal}`}>
              <h3>{ele.strMeal.slice(0,15)}</h3>
              <img
                src={ele.strMealThumb}
                alt=""
              />
              </NavLink>
            </div>
            )
          })}
        </div>
      </div>
    </>
  );
}

export default SubCategory;
