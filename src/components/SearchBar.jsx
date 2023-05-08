import React, { useState } from "react";
import "./SearchBar.css";
import { AiOutlineSearch } from "react-icons/ai";
import { FcAddImage } from "react-icons/fc";
//import UploadImgContainer from "./UploadImgContainer";
import { useNavigate } from "react-router-dom";
import { CustomSearchClient } from "@azure/cognitiveservices-customsearch";

//const subscriptionKey = process.env.REACT_APP_SUBKEY;
//const customConfigId = process.env.REACT_APP_CONFID;

// Create a new client instance
//const client = new CustomSearchClient(subscriptionKey, customConfigId);

const SearchBar = () => {
  const [imgSearchIsOpen, setImgSearchIsOpen] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleClick = async () => {
    //navigate(`/search-Results/${query}`);
    navigate(`/custom-search-Results`);
  };

  //{imgSearchIsOpen && <UploadImgContainer />}
  return (
    <form id="searchBarContainer">
      <input
        id="searchBarContainer--input"
        type="text"
        value={query}
        onChange={handleChange}
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

      <button 
        className="searchBarContainer--button"
        onClick={handleClick}
      >
        <AiOutlineSearch id="searchBarContainer--button--searchLogo" />
      </button>
      
      
    </form>
  );
};

export default SearchBar;
