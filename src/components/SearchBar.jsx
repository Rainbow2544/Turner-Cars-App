import React, { useState } from "react";
import "./SearchBar.css";
import { AiOutlineSearch } from "react-icons/ai";
import { FcAddImage } from "react-icons/fc";
import UploadImgContainer from "./UploadImgContainer";


const SearchBar = () => {
  const [imgSearchIsOpen, setImgSearchIsOpen] = useState(false);
  const [hovered, setHovered] = useState(false);
  return (
    <form id="searchBarContainer">
      <input
        id="searchBarContainer--input"
        type="text"
        placeholder="Search your favorite cars here"
      />
      <FcAddImage 
      id="searchBarContainer--imgSearchLogo"
      onClick={() => {setImgSearchIsOpen(!imgSearchIsOpen)}}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      />
      {hovered && (
            <div className="searchBarContainer__imgLogoDesPopUpBox">
              Search by Image
            </div>
          )}

      <button className="searchBarContainer--button">
        <AiOutlineSearch id="searchBarContainer--button--searchLogo" />
      </button>
      {imgSearchIsOpen && <UploadImgContainer />}
    </form>
  );
};

export default SearchBar;
