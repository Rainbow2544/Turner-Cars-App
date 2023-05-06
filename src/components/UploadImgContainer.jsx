import React from 'react';
import "./UploadImgContainer.css";

const UploadImgContainer = () => {
  return (
    <div className='UploadImgContainer'>
        <form 
        className='UploadImgContainer__form'
        action="/upload" 
        method="POST" 
        enctype="multipart/form-data">
            <input type="file" name="carImage" accept="image/*" />
            <button type="submit">Upload your image here</button>
          </form>
    </div>
  )
};

export default UploadImgContainer;