import React, { useState } from 'react';
import Show from './Show';
import './Home.css';
import bg from "../video/popcorn.mp4"

function Home() {
  const [shows, setShows] = useState([]);
  {/*
      
      insert your code here 
      
      
  */}

  return (
    <div className='app'>
      <video src={bg} playsInline autoPlay muted loop id="bgvid"/>
      <h1>The Best T.V Shows</h1>
      {/*
      
      insert your code here 
      
      
      */}
      {shows.map((show) => (
        <Show show={show} key={show.id} />
      ))}
    </div>
  );
}

export default Home;
