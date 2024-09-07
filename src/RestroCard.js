import React from 'react'


function RestroCard( {name,cuisines,cloudinaryImageId, lastmileTravelString ,deliveryTime})  {
    
  return (
    
    <div className='card'>
         <img
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
        alt={name}
      />
        <h2>{name}</h2>
        <h3>{cuisines}</h3>
        <h4>{deliveryTime} minutes</h4>
    </div>
    
  ) 
}

export default RestroCard