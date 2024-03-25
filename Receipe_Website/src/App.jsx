import Home from "./Screens/Home";
import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import SubCategory from "./Components/SubCategory.jsx";
import SingleItem from "./Components/SingleItem";
import Auth from "./Screens/Auth";
import SignIn from "./Components/SignIn";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        
           <Route path="/" element={<SignIn />} />
           <Route path="/Home" element={<Home />} />
         
          <Route path="/SubCategory/:SubCategory" element={<SubCategory />} />
          <Route path="/SingleItem/:itemId" element={<SingleItem />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
