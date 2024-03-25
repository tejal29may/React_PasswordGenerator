import React from "react";
import "./Nav.css";
import { BiSearch } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import SideBar from "./SideBar";
import axios from "axios";
import app from "../Screens/Firebase";
import { getAuth, signOut } from "firebase/auth";
const auth = getAuth();
function Nav() {
  const[sidebarDisplay,setSidebarDisplay]=useState(false)
  const [products, setProducts] = useState([]);
  const [input, setInput] = useState();
 const[onsignOut,setOnsignOut]=useState(false)

  async function logout() {
    try {
      const result = await signOut(auth);
      console.log(result);
     setOnsignOut(true)
      alert("User signed out");
    } catch (err) {
      console.log(err);
      alert(err.message);
    }
  }

  async function searchProducts() {
    const result = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`
    );
    setProducts(result.data.meals);
    console.log("food search is : ",input);
  }
  return (
    <>
      <div className="nav">
        <div className="upper">
          <div className="left">
            <svg
              stroke="currentColor"
              fill="white"
              stroke-width="0"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M12 3L4 9v12h16V9l-8-6zm.5 9.5c0 .83-.67 1.5-1.5 1.5v4h-1v-4c-.83 0-1.5-.67-1.5-1.5v-3h1v3h.5v-3h1v3h.5v-3h1v3zM15 18h-1v-3.5h-1v-3c0-1.1.9-2 2-2V18z"></path>
            </svg>
            <p>
              <NavLink to="/Home" style={{textDecoration:"none", color:"white"}}><span>FastEat.</span></NavLink>
            </p>
            <div className="circle">
              
              <NavLink to="/"><h6 onClick={logout}>Log Out</h6></NavLink>
           
            </div>
     
          </div>
          <div className="right" onClick={()=>{
            setSidebarDisplay(!sidebarDisplay)
          }}>
            <svg
              stroke="currentColor"
              fill="white"
              stroke-width="0"
              viewBox="0 0 512 512"
              height="37"
              width="27"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M64 384h384v-42.666H64V384zm0-106.666h384v-42.667H64v42.667zM64 128v42.665h384V128H64z"></path>
            </svg>
          </div>
        </div>
       
        <div style={{display:sidebarDisplay?"":"none"}}>
        <SideBar sidebarDisplay={sidebarDisplay} setSidebarDisplay={setSidebarDisplay}/>
        </div>
       
        <div className="lower">
            <div className="content">
                <div className="inputField">
                    <input type="text" placeholder="Search Recipes Here..." onChange={(e) => {
          setInput(e.target.value);
        }}/>
                    <button onClick={searchProducts}><BiSearch style={{color:"white", fontSize:"25px"}}/></button>
                </div>
                <h1>What are your favorite cuisines?</h1>
                <p>personalize your experience</p>
            </div>
        </div>
     
      </div>
     
      {
        input?<div className="cards">
        {
          products.map((ele, index, array) => {
            return (
              <div className="card" key={index}>
                <NavLink to={`/SubCategory/${ele.idMeal}`} >
                <h3>{ele.strMeal}</h3>
                <img src={ele.strMealThumb} alt="" />
                </NavLink>
                
              </div>
            );
            })
          }
        
      </div>:""
      }
      
        
    </>
  );
}

export default Nav;
