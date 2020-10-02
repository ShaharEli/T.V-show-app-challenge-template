import React from 'react';
import { Link } from 'react-router-dom';
import './Show.css';
function Show({ show }) {
  return (
    <Link className='link-to-one-show' to={`/show/${show.id}`}>
      {/*
      
        insert your code here 
      
      
      */}
    </Link>
  );
}

export default Show;
