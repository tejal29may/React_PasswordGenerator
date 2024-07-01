import Home from "./Screens/Home";
import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import SubCategory from "./Components/SubCategory.jsx";
import SingleItem from "./Components/SingleItem";
// import Auth from "./Screens/Auth";
import SignIn from "./Components/SignIn";

import { useState } from "react";
import userContext from "./Components/UserContext";
import { useContext } from "react";
import SavedItems from "./Components/SavedItems";

function App() {
  const [user, setUser] = useState({});
  const[categoryData,setcategorydata]=useState({});
  const[name,setName]=useState("");
  const [singleItem, setSingleItem] = useState([]);
  const [savedreceipe, setSavedreceipe] = useState([]);
  return (
    <>
    <userContext.Provider value={{user,setUser,categoryData,setcategorydata,name,setName,singleItem, setSingleItem,savedreceipe,setSavedreceipe}}>
      <BrowserRouter>
        <Routes>
        
           {/* <Route path="/" element={<SignIn />} /> */}
           <Route path="/" element={<Home />} />
         
          <Route path="/SubCategory/:SubCategory" element={<SubCategory />} />
          <Route path="/SingleItem/:itemId" element={<SingleItem />} />
          <Route path="/savedItems" element={<SavedItems />} />

        </Routes>
      </BrowserRouter>
      </userContext.Provider>
    </>
  );
}

export default App;
