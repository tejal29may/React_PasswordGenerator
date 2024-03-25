import "./SignIn.css";
import React, { useState } from "react";
import app from "../Screens/Firebase";

import "./SignIn.css";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { NavLink } from "react-router-dom";
const auth = getAuth();
function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [isvalid, setIsvalid] = useState(false);
  const[user,setUser]=useState({})
  async function handle() {
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(result);

      alert("User created");
    } catch (err) {
      console.log(err);
      alert(err.message);
    }
  }

  async function signInFun() {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      console.log(result);
      setIsvalid(true);
    //   alert("User successfully sign in");
	  setUser({
		email:result.user.email,
		password:result.user.password
	  })
	  console.log(user);
    } catch (err) {
      console.log(err);
      alert("Not a valid credentials, Try again");
    }
  }
  return (
    <>
      <div class="main2">
        <input type="checkbox" id="chk" aria-hidden="true" />

        <div class="signup">
          <label for="chk" aria-hidden="true">
            Sign up
          </label>
          <input type="text" placeholder="User name" className="input3" />
          <input
            type="email"
            placeholder="Email"
            required=""
            className="input3"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder="Password"
            required=""
            className="input3"
            value={password}
            onChange={(e) => {
              setPass(e.target.value);
            }}
          />
          <button onClick={handle}>Sign up</button>
        </div>

        <div class="login">
          <label for="chk" aria-hidden="true">
            Login
          </label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            required=""
            className="input3"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="text"
            name="pswd"
            placeholder="Password"
            required=""
            className="input3"
            value={password}
            onChange={(e) => {
              setPass(e.target.value);
            }}
          />

          <button onClick={signInFun}>Login</button>
          {isvalid ? (
            <NavLink to="/Home">
              <button onClick={signInFun}>Next</button>
            </NavLink>
          ) : (
            ""
          )}
		  
        </div>
      </div>
    </>
  );
}

export default SignIn;
