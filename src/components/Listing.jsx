import React, { useEffect, useState } from "react";
import ListingItem from "../components/ListingItem";
import data from "../data.json";
import "./Listing.css";

const Listing = () => {
  const [listingArr, setListingArr] = useState(data["listingArr"]);
  const [count, setCount] = useState(8);
  const [loadMoreArr, setLoadMoreArr] = useState([]);
  
  useEffect(() => {
    setLoadMoreArr(listingArr.slice(8, count));
  }, [count, listingArr]);

  
  return (
    <div className="listing">
      <div className="listing__listingContainer">
        {listingArr.slice(0,8).map((l) => {
          return <ListingItem listing={l} />;
        })}
        {loadMoreArr.map((l) => {
            return <ListingItem listing={l} />;
          })}
      </div>

      <div id="listing__buttonContainer">
        <button 
          id="listing__buttonContainer--button"
          onClick={() => {
            setCount(count + 4);
          }}
        >
          Load more
        </button>
    </div>
    </div>
  );
};

export default Listing;
