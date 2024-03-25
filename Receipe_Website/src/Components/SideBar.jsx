import React from "react";
import "./SideBar.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
function SideBar({setSidebarDisplay,sidebarDisplay}) {
  const [sideBar, setSidebar] = useState([]);


  async function fetchData() {
    try {
      const response = await axios(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );
      console.log("side bar data is ", response.data.categories);
      // console.log("side bar is ", response);
      setSidebar(response.data.categories);
    } catch {}
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div className="sidebar">
        <div className="delete">
          <p
            onClick={() => {
              setSidebarDisplay(!sidebarDisplay);
            }}
          >
            ❌
          </p>
          <hr className="pgr" />

          <ul className="uldata">
            {sideBar.map((ele, index, array) => {
              return (
                <>
                  <NavLink
                    to={`/SubCategory/${ele.strCategory}`}
                    style={{ textDecoration: "none", color: "black" }}
                    onClick={() => {
                      setSidebarDisplay(!sidebarDisplay);
                    }} >
                    <li>{ele.strCategory}</li>
                  </NavLink>
                  <hr className="pgrd" />
                </>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default SideBar;
