import React, { useState } from "react";
import "./NavBar.css";
import { TfiMenu } from "react-icons/tfi";

const NavBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  function handleClick() {
    setIsNavOpen(!isNavOpen);
  }
  return (
    <div className="navbar">
      <div className="navbar__logoContainer">
        <a src="/">
          <img
            id="navbar__logoContainer--logoImg"
            alt="navbar__logo"
            src="https://www.turners.co.nz/contentassets/3e15c8546917474ca0a150b18e9fd64e/turnerscars_logo_1line_horz_true-rgb-desktop.png"
          />
        </a>
      </div>
      <div className="navbar__menu">
        <ul>
          <li>
            <a href="#" className="navbar__menu--links">
              How to Buy
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
          <li>
            <a href="#" className="navbar__menu--links">
              Services & Information
            </a>
          </li>
        </ul>
        <div className="navbar__btnContainer">
          <button className="navbar__btnContainer--btn">Register</button>
          <button className="navbar__btnContainer--btn">Sign in</button>
        </div>
      </div>

      <div className="navbar__dropdownMenu">
        <button id="navbar__dropdownMenu--btn" onClick={handleClick}>
          <TfiMenu />
        </button>
      </div>

      {isNavOpen && (
        <div className="dropdownContainer">
          <ul>
            <li>
              <a href="#" className="dropdownContainer--links">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="dropdownContainer--links">
                Stays
              </a>
            </li>
            <li>
              <a href="#" className="dropdownContainer--links">
                Flights
              </a>
            </li>
            <li>
              <a href="#" className="dropdownContainer--links">
                Car rentals
              </a>
            </li>
          </ul>
          <div className="dropdownContainer__btnContainer">
            <button className="navbar__btnContainer--btn">Register</button>
            <button className="navbar__btnContainer--btn">Sign in</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
