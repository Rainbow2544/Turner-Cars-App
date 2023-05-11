import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./UploadImage.css";
import { analyzeImage } from "./AnalyzeImage";
import ListingItem from "../components/ListingItem";
import data from "../data.json";

const UploadImage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [responseText, setResponseText] = useState("");
  const [imgurl, setImgurl] = useState("");
  const [filteredListings, setFilteredListings] = useState([]); // Define filteredListings state

  const navigate = useNavigate();

  function filterListingsByTag(tagName, data) {
    const filteredListings = data.listingArr.filter(
      (listing) => listing.type === tagName
    );
    return filteredListings;
  }

  const handleImageChange = async (event) => {
    setSelectedImage(event.target.files[0]);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const imageUrl = document.getElementById("carUrl").value;
    if (!imageUrl) {
      setResponseText("Please enter an image URL");
      return;
    }

    try {
      const analysisResult = await analyzeImage(imageUrl);
      const filteredListings = filterListingsByTag(analysisResult, data);
      setFilteredListings(filteredListings);
      setResponseText(JSON.stringify(filteredListings));
    } catch (error) {
      console.error(error);
      setResponseText("Error analyzing image");
    }
  };

  return (
    <div className="UploadImageContainer">
      <form className="UploadImageContainer__form" onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="carUrl"
          id="carUrl"
          onChange={(e) => {
            setImgurl(e.target.value);
          }}
        />
        <button type="submit" className="UploadImageContainer__form--button">
          Enter your image Url
        </button>
        
      </form>
      <div className="UploadImageContainer__listing">
        {filteredListings.map((l) => {
          return <ListingItem listing={l} />;
        })}
      </div>
    </div>
  );
};

export default UploadImage;