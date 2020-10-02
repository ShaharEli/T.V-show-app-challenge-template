import React, { useState } from 'react';
import Show from './Show';
import './Home.css';
import bg from '../video/popcorn.mp4';

function Home() {
  const [shows, setShows] = useState([]);

  /*
      
    Insert your code here 
      
      
  */

  return (
    <div className='app'>
      <video src={bg} playsInline autoPlay muted loop id='bgvid' />
      {/* If you want to know how to implement video as your background 
      you can take a look here: https://www.w3schools.com/howto/howto_css_fullscreen_video.asp */}
      <h1>The Best T.V Shows</h1>
      {/*
      
        Insert your code here 
      
      
      */}
      {shows.map((show) => (
        <Show show={show} key={show.id} />
      ))}
    </div>
  );
}

export default Home;
