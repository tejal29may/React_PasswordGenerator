import React, { useState } from "react";
import "./MainPage.css";
import SimpleAlert from "./SimpleAlert";
import "animate.css";
import { FaCopy } from "react-icons/fa";
import { IoCopySharp } from "react-icons/io5";
import { colors } from "@mui/material";

function MainPage() {
  const [password, setpassword] = useState("");
  const [passlength, setpasslength] = useState(8);
  const [uppercase, setupperCase] = useState(true);
  const [lowercase, setlowercase] = useState(true);
  const [number, setnumber] = useState(true);
  const [symbol, setsymbol] = useState(true);
  const [copiedmsg, setcopiedmsg] = useState(false);
  const [mode, setmode] = useState(true);

  const generatePassword = () => {
    let charset = "";
    let newpassword = "";
    if (uppercase) {
      charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (lowercase) {
      charset += "abcdefghijklmnopqrstuvwxyz";
    }
    if (number) {
      charset += "0123456789";
    }
    if (symbol) {
      charset += "!@#$%^&*(){}[]";
    }

    for (let i = 0; i < passlength; i++) {
      newpassword += charset.charAt(Math.floor(Math.random() * charset.length));
      console.log(newpassword);
    }

    setpassword(newpassword);
    // console.log(lowercase);
  };

  const copyToClipboard = () => {
    if (password === "") {
      alert("Password Field is Empty Nothing to copy 😐");
    } else {
      const el = document.createElement("textarea");
      el.value = password;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      // alert("Copied Succesfully")
      setpassword("");
      setcopiedmsg(true);
      setTimeout(() => setcopiedmsg(""), 2000);
    }
  };

  return (
    <>
      {copiedmsg && <SimpleAlert msg={"Password copied to clipboard! "} />}

      {/* <p className="Copiedmsg"><span>{copiedmsg}</span></p> */}
      {mode ? (
        <div className="Main_Container animate__animated animate__fadeInDown">
          <h1 style={{ fontFamily: "cursive", color: "purple" }}>
            Random Password Generator🔑
          </h1>
          <div className="output">
            <input type="text" value={password} disabled />

            <button className="copy" onClick={copyToClipboard}>
              <FaCopy />
            </button>
          </div>
          <div className="passselect">
            <label htmlFor="">
              <span style={{ fontFamily: "cursive" }}>
                Select Pasword Length &nbsp;
              </span>
              <br></br>(**8 to 50 Characters**){" "}
            </label>
            <input
              type="number"
              min={8}
              max={50}
              value={passlength}
              onChange={(e) => setpasslength(e.target.value)}
            />
            {passlength > 50
              ? alert("Ayyooo password length is too much 😅")
              : ""}
          </div>
          {/* select options for password */}
          <div className="choices">
            <div className="upper">
              <div>
                <input
                  type="checkbox"
                  checked={uppercase}
                  onChange={() => {
                    setupperCase(!uppercase);
                  }}
                />
                <label htmlFor="">Include upper case</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  checked={lowercase}
                  onChange={() => {
                    setlowercase(!lowercase);
                  }}
                />
                <label htmlFor="">Include lower case</label>
              </div>
            </div>
            <div className="lower">
              <div>
                <input
                  type="checkbox"
                  checked={number}
                  onChange={() => {
                    setnumber(!number);
                  }}
                />
                <label htmlFor="">Include Numbers</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  checked={symbol}
                  onChange={() => {
                    setsymbol(!symbol);
                  }}
                />
                <label htmlFor="">Include Symbols</label>
              </div>
            </div>
          </div>
          <div className="buttons">
            <button className="pass" onClick={generatePassword}>
              Generate Password
            </button>
            <button
              className="darkMode"
              onClick={() => {
                setmode(false);
              }}
            >
              Dark Mode
            </button>
          </div>
        </div>
      ) : (
        <div className="dark animate__animated animate__fadeInDown">
          <h1 style={{ fontFamily: "cursive", color: "purple" }}>
            Random Password Generator🔑
          </h1>
          <div className="output">
            <input type="text" value={password} disabled />

            <button className="copy" onClick={copyToClipboard}>
              <IoCopySharp style={{ color: "#ffffff" }} />
            </button>
          </div>
          <div className="passselect">
            <label htmlFor="">
              <span style={{ fontFamily: "cursive", color: "green" }}>
                Select Pasword Length &nbsp;
              </span>
              <br></br>(**8 to 50 Characters**){" "}
            </label>
            <input
              type="number"
              min={8}
              max={50}
              value={passlength}
              onChange={(e) => setpasslength(e.target.value)}
            />
            {passlength > 50
              ? alert("Ayyooo password length is too much 😅")
              : ""}
          </div>
          {/* select options for password */}
          <div className="choices">
            <div className="upper">
              <div>
                <input
                  type="checkbox"
                  checked={uppercase}
                  onChange={() => {
                    setupperCase(!uppercase);
                  }}
                />
                <label htmlFor="">Include upper case</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  checked={lowercase}
                  onChange={() => {
                    setlowercase(!lowercase);
                  }}
                />
                <label htmlFor="">Include lower case</label>
              </div>
            </div>
            <div className="lower">
              <div>
                <input
                  type="checkbox"
                  checked={number}
                  onChange={() => {
                    setnumber(!number);
                  }}
                />
                <label htmlFor="">Include Numbers</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  checked={symbol}
                  onChange={() => {
                    setsymbol(!symbol);
                  }}
                />
                <label htmlFor="">Include Symbols</label>
              </div>
            </div>
          </div>
          <div className="buttons">
            <button className="pass" onClick={generatePassword}>
              Generate Password
            </button>
            <button
              className="light_mode"
              onClick={() => {
                setmode(true);
              }}
            >
              Light Mode
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default MainPage;
