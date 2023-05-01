import React from "react";
import "./ListingItem.css";

const ListingItem = ({ listing }) => {
  return (
    <div key={listing.id} id={listing.id} className="listingItemContainer">
      <a href={listing.img}>
        <img className="listingItemContainer--Img" src={listing.img} alt={listing.id} />
      </a>
      
      <p className="listingItemContainer--title">
         {listing.title}
      </p>
      <p className="listingItemContainer--location">
        Location: {listing.location}
        </p>
      <div className="listingItemContainer__price">
        <p>BUY NOW ${listing.price}</p>
      </div>
      <div className="listingItemContainer__Odometer">
        <p className="listingItemContainer__Odometer--title">Odometer </p>
        <p>{listing.Odometer} KM</p>
      </div>
      <div className="listingItemContainer__buttonContainer">
        <button className="listingItemContainer__buttonContainer--bookbtn">Book a Test Drive</button>
        <button className="listingItemContainer__buttonContainer--viewkbtn">View Car</button>
      </div>
    </div>
  );
};

export default ListingItem;
