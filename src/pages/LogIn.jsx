import React from "react";
import "./LogIn.css";
import { useState } from "react";

const LogIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
  };
  return (
    <div className="login">
      <div className="login__wrapper">
        <h1 id="login__wrapper--title">SIGN IN</h1>
        <form id="login__wrapper__form">
          <input
            className="login__wrapper__form--input"
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="login__wrapper__form--input"
            placeholder="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleClick} className="login__wrapper__form--button">
            Sign In
          </button>

          <a  className="login__wrapper__form--link">FORGOT PASSWORD?</a>
          <a href="/register" className="login__wrapper__form--link">CREATE A NEW ACCOUNT</a>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
