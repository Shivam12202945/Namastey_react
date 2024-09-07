import React, { useState } from 'react'
import RestroCard from './RestroCard';
import {rest} from './config';


function Body () {
  const [searchTxt, setsearchTxt]= useState("Hello");
  return (
    <>
    <div className='search-container'>
      <input type="text" 
       className='search-input'
       placeholder="Search"
       value={searchTxt}
       onChange={(e)=>{
        setsearchTxt(e.target.value);
       }}
        />
        <button className='search-btn'>Search</button>
    </div>
    <div className='Card-parent'>
   { rest.map((restaurant) => {
      return (
        <RestroCard {...restaurant} key={restaurant.id}/>
      );

    })}
       
    </div>
    </>
  )
}

export default Body;