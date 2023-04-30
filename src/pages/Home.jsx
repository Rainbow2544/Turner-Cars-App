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
            <h1>The great getaway, your way</h1>
            <p>Save at least 15% on stays worldwide, 
              from relaxing retreats to off-the-grid adventures</p>
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