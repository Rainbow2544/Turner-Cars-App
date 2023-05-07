import React, { useState } from "react";
import "./SearchBar.css";
import { AiOutlineSearch } from "react-icons/ai";
import { FcAddImage } from "react-icons/fc";
//import UploadImgContainer from "./UploadImgContainer";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [imgSearchIsOpen, setImgSearchIsOpen] = useState(false);
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();

  //{imgSearchIsOpen && <UploadImgContainer />}
  return (
    <form id="searchBarContainer">
      <input
        id="searchBarContainer--input"
        type="text"
        placeholder="Search your favorite cars here"
      />
      <FcAddImage 
      id="searchBarContainer--imgSearchLogo"
      onClick={() => {navigate("/search-imgResults");}}
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
      
      
    </form>
  );
};

export default SearchBar;
