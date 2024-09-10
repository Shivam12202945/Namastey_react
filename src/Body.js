import React, { useEffect, useState } from 'react';
import RestroCard from './RestroCard';
import { Shimmer } from './Shimmer'; // Import Shimmer component

function Body() {
  const [searchTxt, setSearchTxt] = useState("");
  const [filterrestaurants, setFilterRestaurants] = useState([]);
  const [allrest, setAllrest]=useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.61450&lng=77.30630&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    // Extract and format the response from the API
    const format = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setFilterRestaurants(format);
    setAllrest(format);
    setLoading(false); // Set loading to false after data is fetched
  }

  function filterData(searchTxt, restaurants) {
    return restaurants.filter((restaurant) => {
      const name = restaurant?.info?.name || ""; // Fallback to an empty string if undefined
      return name.toLowerCase().includes(searchTxt.toLowerCase());
    });
  }

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchTxt}
          onChange={(e) => setSearchTxt(e.target.value)}
        />
        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchTxt,  allrest);
            setFilterRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
    
   

      {/* Conditionally render Shimmer or restaurant cards */}
      <div className="Card-parent">
      
        {loading ||  setAllrest.length === 0 ? ( 
          // If loading or no restaurants, render Shimmer
          
          <Shimmer />
        ) : filterrestaurants.length===0 ?(
          <h1>NO restaurants Found</h1>
        ): (
          // Else, render the list of restaurants
          filterrestaurants.map((restaurant) => (
            <RestroCard {...restaurant?.info} key={restaurant?.info?.id} />
          ))
        )}
      </div>
    </>
  );
}

export default Body;
