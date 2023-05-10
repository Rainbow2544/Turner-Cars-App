import React from "react";
import "./Register.css";

const Register = () => {
  return (
    <div className="register">
      <div className="register__wrapper">
        <h1 id="register__wrapper--title">CREATE AN ACCOUNT</h1>
        <form id="register__wrapper__form">
          <input
            className="register__wrapper__form--input"
            placeholder="first name"
          />
          <input
            className="register__wrapper__form--input"
            placeholder="last name"
          />
          <input
            className="register__wrapper__form--input"
            placeholder="username"
          />
          <input
            className="register__wrapper__form--input"
            placeholder="email"
          />
          <input
            className="register__wrapper__form--input"
            placeholder="password"
          />
          <input
            className="register__wrapper__form--input"
            placeholder="confirm password"
          />
          <span className="register__wrapper__form--span">
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </span>
          <button id="register__wrapper__form--button">Create</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
