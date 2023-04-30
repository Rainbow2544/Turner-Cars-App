import React from 'react';
import "./Home.css";
import SearchBar from '../components/SearchBar';
import Listing from '../components/Listing';

const Home = () => {
  return (
    <div>
        <div className='photoBgContainer'>
          <div id="photoBgContainer--gray"></div>
          <div id="photoBgContainer__header">
            <h1>1000's of Quality Cars for Sale</h1>
            <p>Turners Cars is the largest used car network in New Zealand 
              with 20 car dealer locations nationwide. With a huge range of 
              around 3,000 cars for sale there is truly something for everyone. We've been 
              helping Kiwis buy and sell used cars for over 50 years.</p>
          </div>
          
          <div id='photoBgContainer__searchBar'>
              <SearchBar />
          </div>
        </div>
        <Listing/>
    </div>
  )
}

export default Home;