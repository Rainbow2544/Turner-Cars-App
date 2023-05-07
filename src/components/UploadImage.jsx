import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./UploadImage.css";
import { analyzeImage } from "./AnalyzeImage";

const UploadImage = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [responseText, setResponseText] = useState("");
    const [imgurl, setImgurl] = useState("");
    const navigate = useNavigate();
  
    const handleImageChange = async (event) => {
      setSelectedImage(event.target.files[0]);
    };
  
    const handleFormSubmit = async (event) => {
      event.preventDefault();
  
    //   if (!selectedImage) {
    //     setResponseText("Please select an image");
    //     return;
    //   }
    const imageUrl = document.getElementById("carUrl").value;
    if (!imageUrl) {
        setResponseText("Please enter an image URL");
        return;
      }
      
      try {
        const analysisResult = await analyzeImage(imageUrl);
        setResponseText(JSON.stringify(analysisResult));
      } catch (error) {
        console.error(error);
        setResponseText("Error analyzing image");
      }
      //const formData = new FormData();
      //formData.append("carImage", selectedImage);
  
      
        // if (response.ok) {
        //   const responseData = await response.text();
        //   setResponseText(responseData);
          
          
        // } else {
        //   setResponseText("Failed to upload image");
        // }
    
    };
//     <input
//     type="file"
//     name="carImage"
//     accept="image/*"
//     onChange={handleImageChange}
//   />
    return (
      <div className="UploadImageContainer">
        <form className="UploadImageContainer__form" onSubmit={handleFormSubmit}>
          <input type="text" name="carUrl" id="carUrl" onChange={(e) => {setImgurl(e.target.value)}} />
          <button type="submit" className="UploadImageContainer__form--button">
            Upload your image
          </button>
          <p>{responseText}</p>
        </form>
      </div>
    );
};

export default UploadImage;