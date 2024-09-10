
import Title from './Title'
import React, { useState } from 'react'
// const loggedInUser =()=>{
//   return false;
// }


function HeaderComponent() {
  const [log, setlog]= useState(true);
  return (
    <div className='header'>
        <Title/>
        <div className='nav-items'>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
        </div>
        {
          log ? <button onClick={()=>{setlog(false)}}>Login</button>:<button onClick={()=>{setlog(true)}}> Logout</button>
        }
    </div>
  )
}

export default HeaderComponent;