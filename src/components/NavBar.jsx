import React, { useState } from "react";
import "./NavBar.css";
import { TfiMenu } from "react-icons/tfi";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import LogIn from "../pages/LogIn";

const NavBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navigate = useNavigate();
  
  useEffect(() =>{
    try{
      
    }catch (err){
      
    }
  },[]);
  return (
    <div className="navbar">
      <div className="navbar__logoContainer">
        
          <img
            id="navbar__logoContainer--logoImg"
            alt="navbar__logo"
            onClick={() => {navigate("/");}}
            src="https://www.turners.co.nz/contentassets/3e15c8546917474ca0a150b18e9fd64e/turnerscars_logo_1line_horz_true-rgb-desktop.png"
          />
        
      </div>
      <div className="navbar__menu">
        <ul>
          <li>
            <a href="/custom-search-Results" className="navbar__menu--links">
              Explore about Turners
            </a>
          </li>
          <li>
            <a href="#" className="navbar__menu--links">
              Sell your Car
            </a>
          </li>
          <li>
            <a href="#" className="navbar__menu--links">
              Find a Car
            </a>
          </li>
          
        </ul>
        <div className="navbar__btnContainer">
          <button 
              className="navbar__btnContainer--btnRegister"
              onClick={() => {navigate("/register");}}
            >
              Register
            </button>
            <button 
              className="navbar__btnContainer--btnSignIn"
              onClick={() => {navigate("/login");}}
            >
              Sign In
            </button>
        </div>
      </div>

      <div className="navbar__dropdownMenu">
        <button id="navbar__dropdownMenu--btn" onClick={() => {setIsNavOpen(!isNavOpen);}}>
          <TfiMenu />
        </button>
      </div>

      {isNavOpen && (
        <div className="dropdownContainer">
          <ul>
            <li>
              <a href="#" className="navbar__menu--links">
              Explore about Turners
              </a>
            </li>
            <li>
              <a href="#" className="navbar__menu--links">
                Sell your Car
              </a>
            </li>
            <li>
              <a href="#" className="navbar__menu--links">
                Find a Car
              </a>
            </li>
            
          </ul>
          <div className="dropdownContainer__btnContainer">
            <button 
              className="navbar__btnContainer--btnRegister"
              onClick={() => {navigate("/register");}}
            >
              Register
            </button>
            <button 
              className="navbar__btnContainer--btnSignIn"
              onClick={() => {navigate("/login");}}
            >
              Sign In
            </button>
          </div>
        </div>
      )}

      
    </div>
  );
};

export default NavBar;
