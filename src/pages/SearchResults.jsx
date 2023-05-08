import React, { useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import { CustomSearchClient } from "@azure/cognitiveservices-customsearch";
import { CognitiveServicesCredentials } from "@azure/ms-rest-azure-js";

const subscriptionKey = process.env.REACT_APP_SUBKEY;
const customConfigId = process.env.REACT_APP_CONFID;

// Create a new credentials instance
const credentials = new CognitiveServicesCredentials(subscriptionKey);

// Create an optional options object
const options = {
  endpoint:"https://api.bing.microsoft.com/v7.0/custom/search?q=ford&customconfig=606f1c6e-3423-49d4-993f-61dd6aa97f85&mkt=en-US",
  //customConfigId: `${customConfigId}`
};

// Create a new client instance
const client = new CustomSearchClient(credentials, options);

const SearchResults = () => {
  const params = useParams();
  // Use state hooks to store the query and the results
  const [query, setQuery] = useState(params.query);
  const [results, setResults] = useState([]);
  

  // Handle the input change event
  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  // Handle the button click event
  const handleClick = async () => {
    console.log("here");
    // Call the customSearch method with the query
    const response = await client.customSearch(query);
    // Set the results state with the webPages value array
    console.log("where",response);
    setResults(response.webPages.value);
  };
  return (
    <div>
      <input type="text" value={query} onChange={handleChange} />
      <button onClick={handleClick}>Search</button>
      <ul>
        {/* Map through the results and display them as list items */}
        {results.map((result) => (
          <li key={result.id}>
            <a href={result.url}>{result.name}</a>
            <p>{result.snippet}</p>
          </li>
        ))}
      </ul>


      
    </div>
  );
}

export default SearchResults;