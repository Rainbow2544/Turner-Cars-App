import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./UploadImgContainer.css";

const UploadImgContainer = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [responseText, setResponseText] = useState("");
    const navigate = useNavigate();
  
    const handleImageChange = (event) => {
      setSelectedImage(event.target.files[0]);
    };
  
    const handleFormSubmit = async (event) => {
      event.preventDefault();
  
      if (!selectedImage) {
        console.log("Please select an image");
        return;
      }
  
      const formData = new FormData();
      formData.append("carImage", selectedImage);
  
      try {
        const response = await fetch("/upload", {
          method: "POST",
          body: formData,
        });
  
        if (response.ok) {
          const responseData = await response.text();
          setResponseText(responseData);
          
          navigate("/search-imgResults");
        } else {
          setResponseText("Failed to upload image");
        }
      } catch (error) {
        console.error(error);
        setResponseText("Error uploading image");
      }
    };
  
    return (
      <div className="UploadImgContainer">
        <form className="UploadImgContainer__form" onSubmit={handleFormSubmit}>
          <input
            type="file"
            name="carImage"
            accept="image/*"
            onChange={handleImageChange}
          />
          <button type="submit" className="UploadImgContainer__form--button">
            Upload your image
          </button>
          <p>{responseText}</p>
        </form>
      </div>
    );
};

export default UploadImgContainer;
